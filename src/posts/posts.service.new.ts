// posts.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { KafkaProducerService } from 'src/kafka/kafka-producer.service';

import { CreatePostDto } from './dtos/CreatePost.dto';
import { CreateGroupPostDto } from './dtos/CreateGroupPost.dto';

@Injectable()
export class PostsService {
    constructor(
        private prisma: PrismaService,
        private kafkaProducer: KafkaProducerService,
    ) { }

    async createPost(data: CreatePostDto) {
        const post = await this.prisma.post.create({
            data: {
                title: data.title,
                description: data.description,
                userId: data.userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        displayName: true,
                    },
                },
            },
        });

        // Publish Kafka event
        await this.kafkaProducer.publishPostCreated({
            postId: post.id,
            title: post.title,
            description: post.description,
            userId: post.userId,
            createdAt: post.createdAt,
        });

        return post;
    }

    async createGroupPost(data: CreateGroupPostDto) {
        const groupPost = await this.prisma.groupPost.create({
            data: {
                title: data.title,
                description: data.description,
                users: {
                    create: data.userIds.map((userId) => ({
                        userId,
                    })),
                },
            },
            include: {
                users: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                displayName: true,
                            },
                        },
                    },
                },
            },
        });

        // Publish Kafka event
        await this.kafkaProducer.publishGroupPostCreated({
            groupPostId: groupPost.id,
            title: groupPost.title,
            description: groupPost.description,
            userIds: data.userIds,
            createdAt: groupPost.createdAt,
        });

        return groupPost;
    }

    async getGroupPosts() {
        return this.prisma.groupPost.findMany({
            include: {
                users: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                displayName: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async getPosts() {
        return this.prisma.post.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        displayName: true,
                    },
                },
            },
        });
    }

    async getPostById(id: number) {
        return this.prisma.post.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        displayName: true,
                    },
                },
            },
        });
    }

    async getGroupPostById(id: number) {
        return this.prisma.groupPost.findUnique({
            where: { id },
            include: {
                users: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                displayName: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async deletePost(id: number) {
        const deletedPost = await this.prisma.post.delete({
            where: { id },
        });

        // Publish Kafka event
        await this.kafkaProducer.publishPostDeleted(id);

        return deletedPost;
    }

    async deleteGroupPost(id: number) {
        return this.prisma.groupPost.delete({
            where: { id },
        });
    }

    async updatePost(id: number, data: Partial<CreatePostDto>) {
        return this.prisma.post.update({
            where: { id },
            data: {
                ...(data.title && { title: data.title }),
                ...(data.description && { description: data.description }),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        displayName: true,
                    },
                },
            },
        });
    }
}