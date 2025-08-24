// src/kafka/kafka-producer.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { getKafkaConfig } from './kafka.config';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
    private readonly logger = new Logger(KafkaProducerService.name);
    private kafkaClient: ClientKafka;

    constructor() {
        this.kafkaClient = ClientProxyFactory.create(getKafkaConfig()) as ClientKafka;
    }

    async onModuleInit() {
        try {
            await this.kafkaClient.connect();
            this.logger.log('Kafka producer connected successfully');
        } catch (error) {
            this.logger.error('Failed to connect to Kafka', error);
        }
    }

    async publishEvent(topic: string, message: any, key?: string) {
        try {
            const result = await this.kafkaClient.emit(topic, {
                key,
                value: JSON.stringify(message),
                timestamp: Date.now(),
            }).toPromise();

            this.logger.log(`Message published to topic: ${topic}`, { key, message });
            return result;
        } catch (error) {
            this.logger.error(`Failed to publish message to topic: ${topic}`, error);
            throw error;
        }
    }

    // Specific event publishers
    async publishUserCreated(user: any) {
        return this.publishEvent('user.created', user, user.id?.toString());
    }

    async publishUserUpdated(user: any) {
        return this.publishEvent('user.updated', user, user.id?.toString());
    }

    async publishUserDeleted(userId: number) {
        return this.publishEvent('user.deleted', { userId }, userId.toString());
    }

    async publishPostCreated(post: any) {
        return this.publishEvent('post.created', post, post.id?.toString());
    }

    async publishPostUpdated(post: any) {
        return this.publishEvent('post.updated', post, post.id?.toString());
    }

    async publishPostDeleted(postId: number) {
        return this.publishEvent('post.deleted', { postId }, postId.toString());
    }

    async publishGroupPostCreated(groupPost: any) {
        return this.publishEvent('group-post.created', groupPost, groupPost.id?.toString());
    }

    async onModuleDestroy() {
        await this.kafkaClient.close();
        this.logger.log('Kafka producer connection closed');
    }
}