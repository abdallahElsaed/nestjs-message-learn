import { Module } from '@nestjs/common';
import { MessageController } from './message.controller.js';
import { MessagesService } from './messages.service.js';
import { MessagesRepository } from './messages.repository.js';

@Module({
    controllers: [MessageController],
    providers: [MessagesService, MessagesRepository]
})
export class MessageModule { }
