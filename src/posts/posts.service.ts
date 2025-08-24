// posts.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dtos/CreatePost.dto';
import { CreateGroupPostDto } from './dtos/CreateGroupPost.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    async createPost(data: CreatePostDto) {
        return this.prisma.post.create({
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
    }

    async createGroupPost(data: CreateGroupPostDto) {
        return this.prisma.groupPost.create({
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
        return this.prisma.post.delete({
            where: { id },
        });
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