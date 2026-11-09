import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';
import { MessagesService } from './messages.service.js';
import { MessagesRepository } from './messages.repository.js';

@Controller('messages')
export class MessageController {
    private messagesService: MessagesService;
    constructor(){
        this.messagesService = new MessagesService(new MessagesRepository());
    }
    @Get()
    getAllMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get("/:id")
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id);
    }
}
