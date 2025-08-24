// src/kafka/kafka-consumer.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService {
    private readonly logger = new Logger(KafkaConsumerService.name);

    @EventPattern('user.created')
    async handleUserCreated(@Payload() data: any) {
        this.logger.log('Received user.created event', data);

        // Handle user created event
        // For example: send welcome email, create user analytics record, etc.
        try {
            await this.processUserCreated(data.value);
        } catch (error) {
            this.logger.error('Error processing user.created event', error);
        }
    }

    @EventPattern('user.updated')
    async handleUserUpdated(@Payload() data: any) {
        this.logger.log('Received user.updated event', data);

        try {
            await this.processUserUpdated(data.value);
        } catch (error) {
            this.logger.error('Error processing user.updated event', error);
        }
    }

    @EventPattern('user.deleted')
    async handleUserDeleted(@Payload() data: any) {
        this.logger.log('Received user.deleted event', data);

        try {
            await this.processUserDeleted(data.value);
        } catch (error) {
            this.logger.error('Error processing user.deleted event', error);
        }
    }

    @EventPattern('post.created')
    async handlePostCreated(@Payload() data: any) {
        this.logger.log('Received post.created event', data);

        try {
            await this.processPostCreated(data.value);
        } catch (error) {
            this.logger.error('Error processing post.created event', error);
        }
    }

    @EventPattern('post.updated')
    async handlePostUpdated(@Payload() data: any) {
        this.logger.log('Received post.updated event', data);

        try {
            await this.processPostUpdated(data.value);
        } catch (error) {
            this.logger.error('Error processing post.updated event', error);
        }
    }

    @EventPattern('group-post.created')
    async handleGroupPostCreated(@Payload() data: any) {
        this.logger.log('Received group-post.created event', data);

        try {
            await this.processGroupPostCreated(data.value);
        } catch (error) {
            this.logger.error('Error processing group-post.created event', error);
        }
    }

    // Business logic methods
    private async processUserCreated(userData: any) {
        // Implement your business logic here
        // Examples:
        // - Send welcome email
        // - Create user profile in analytics service
        // - Initialize user preferences
        this.logger.log('Processing user created', { userId: userData.userId });
    }

    private async processUserUpdated(userData: any) {
        // Implement your business logic here
        // Examples:
        // - Update search index
        // - Sync with external services
        // - Update caches
        this.logger.log('Processing user updated', { userId: userData.userId });
    }

    private async processUserDeleted(userData: any) {
        // Implement your business logic here
        // Examples:
        // - Clean up user data
        // - Archive user content
        // - Update analytics
        this.logger.log('Processing user deleted', { userId: userData.userId });
    }

    private async processPostCreated(postData: any) {
        // Implement your business logic here
        // Examples:
        // - Update search index
        // - Send notifications to followers
        // - Generate recommendations
        this.logger.log('Processing post created', { postId: postData.postId });
    }

    private async processPostUpdated(postData: any) {
        // Implement your business logic here
        this.logger.log('Processing post updated', { postId: postData.postId });
    }

    private async processGroupPostCreated(groupPostData: any) {
        // Implement your business logic here
        // Examples:
        // - Notify all group members
        // - Update group activity metrics
        // - Generate push notifications
        this.logger.log('Processing group post created', { groupPostId: groupPostData.groupPostId });
    }
}