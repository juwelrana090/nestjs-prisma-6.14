// src/kafka/kafka.config.ts
import { Transport } from '@nestjs/microservices';

export const kafkaConfig = {
    transport: Transport.KAFKA,
    options: {
        client: {
            clientId: 'posts-service',
            brokers: ['localhost:9092'], // Update with your Kafka broker addresses
        },
        consumer: {
            groupId: 'posts-consumer',
        },
        producer: {
            maxInFlightRequests: 1,
            idempotent: true,
        },
    },
};

// Environment-based configuration
export const getKafkaConfig = () => ({
    transport: Transport.KAFKA,
    options: {
        client: {
            clientId: process.env.KAFKA_CLIENT_ID || 'posts-service',
            brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
        },
        consumer: {
            groupId: process.env.KAFKA_CONSUMER_GROUP || 'posts-consumer',
        },
        producer: {
            maxInFlightRequests: 1,
            idempotent: true,
            retry: {
                initialRetryTime: 300,
                retries: 10,
            },
        },
    },
});