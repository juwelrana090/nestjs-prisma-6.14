// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    PrismaModule,
    KafkaModule,
    UsersModule,
    PostsModule,
  ],
})
export class AppModule { }