import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data: {
                ...data,
                userSetting: {
                    create: {
                        smsEnabled: true,
                        notificationsOn: false,
                    },
                },
            },
        });
    }

    getUsers() {
        return this.prisma.user.findMany({ include: { userSetting: true } });
    }

    getUserById(id: number) {
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
        if (!findUser) throw new HttpException('User not found', 404);
        return this.prisma.user.delete({ where: { id } });
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    async updateUserById(id: number, data: Prisma.UserUpdateInput) {
        const findUser = await this.getUserById(id);
        if (!findUser) throw new HttpException('User Not Found', 404);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (data.username) {
            const findUser = await this.prisma.user.findUnique({
                where: { username: data.username as string },
            });
            if (findUser) throw new HttpException('Username already taken', 400);
        }
        return this.prisma.user.update({ where: { id }, data });
    }

    async updateUserSettings(
        userId: number,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        data: Prisma.UserSettingUpdateInput,
    ) {
        const findUser = await this.getUserById(userId);
        if (!findUser) throw new HttpException('User Not Found', 404);
        if (!findUser.userSetting) throw new HttpException('No Settings', 400);
        return this.prisma.userSetting.update({ where: { userId }, data });
    }
}