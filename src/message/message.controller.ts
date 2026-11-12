import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';
import { MessagesService } from './messages.service.js';
import { MessagesRepository } from './messages.repository.js';

@Controller('messages')
export class MessageController {
    
    constructor(private messagesService: MessagesService){}
    @Get()
    getAllMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get("/:id")
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException(`Message with id ${id} not found`);
        }
        return message;
    }
}
