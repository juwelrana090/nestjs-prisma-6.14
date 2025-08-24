import { ClientsModule } from '@nestjs/microservices';
import { KafkaProducerService } from './kafka-producer.service';
import { KafkaConsumerService } from './kafka-consumer.service';
import { getKafkaConfig } from './kafka.config';
import { Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'KAFKA_SERVICE',
                transport: Transport.KAFKA, // Use the correct enum value
                options: getKafkaConfig().options,
            },
        ]),
    ],
    providers: [KafkaProducerService, KafkaConsumerService],
    exports: [KafkaProducerService, KafkaConsumerService],
})
export class KafkaModule { }