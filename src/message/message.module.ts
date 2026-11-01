import { Module } from '@nestjs/common';
import { MessageController } from './message.controller.js';

@Module({
    controllers: [MessageController]
})
export class MessageModule { }
