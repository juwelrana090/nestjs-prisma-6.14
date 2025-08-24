import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { KafkaProducerService } from 'src/kafka/kafka-producer.service';

// Import your DTOs
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';

interface UpdateUserSettingsData {
    smsEnabled?: boolean;
    notificationsOn?: boolean;
}

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private kafkaProducer: KafkaProducerService,
    ) { }

    async createUser(data: CreateUserDto) {
        const user = await this.prisma.user.create({
            data: {
                ...data,
                userSetting: {
                    create: {
                        smsEnabled: true,
                        notificationsOn: false,
                    },
                },
            },
            include: {
                userSetting: true,
            },
        });

        // Publish Kafka event
        await this.kafkaProducer.publishUserCreated({
            userId: user.id,
            username: user.username,
            displayName: user.displayName,
            createdAt: user.createdAt,
        });

        return user;
    }

    async getUsers() {
        return this.prisma.user.findMany({
            include: {
                userSetting: true,
                posts: true,
            }
        });
    }

    async getUserById(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                userSetting: {
                    select: {
                        smsEnabled: true,
                        notificationsOn: true,
                    },
                },
                posts: true,
            },
        });
    }

    async deleteUserById(id: number) {
        const findUser = await this.getUserById(id);
        if (!findUser) {
            throw new HttpException('User not found', 404);
        }

        const deletedUser = await this.prisma.user.delete({ where: { id } });

        // Publish Kafka event
        await this.kafkaProducer.publishUserDeleted(id);

        return deletedUser;
    }

    async updateUserById(id: number, data: UpdateUserDto) {
        const findUser = await this.getUserById(id);
        if (!findUser) {
            throw new HttpException('User Not Found', 404);
        }

        // Check if username is being updated and if it's already taken
        if (data.username && typeof data.username === 'string') {
            const existingUser = await this.prisma.user.findUnique({
                where: { username: data.username },
            });
            if (existingUser && existingUser.id !== id) {
                throw new HttpException('Username already taken', 400);
            }
        }

        const updatedUser = await this.prisma.user.update({
            where: { id },
            data,
            include: {
                userSetting: true,
                posts: true,
            },
        });

        // Publish Kafka event
        await this.kafkaProducer.publishUserUpdated({
            userId: updatedUser.id,
            username: updatedUser.username,
            displayName: updatedUser.displayName,
            updatedAt: updatedUser.updatedAt,
        });

        return updatedUser;
    }

    async updateUserSettings(
        userId: number,
        data: UpdateUserSettingsData,
    ) {
        const findUser = await this.getUserById(userId);
        if (!findUser) {
            throw new HttpException('User Not Found', 404);
        }
        if (!findUser.userSetting) {
            throw new HttpException('No Settings', 400);
        }

        return this.prisma.userSetting.update({
            where: { userId },
            data,
        });
    }
}