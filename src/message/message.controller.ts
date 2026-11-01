import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';

@Controller('messages')
export class MessageController {
    @Get()
    getAll(){

    }

    @Post()
    store(@Body() body: CreateMessageDto){
        return body.content;
    }

    @Get("/:id")
    findMessage(@Param('id') id: number){
        console.log(id);
    }
}
