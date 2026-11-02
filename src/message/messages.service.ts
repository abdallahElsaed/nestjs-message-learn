import { MessagesRepository } from "./messages.repository.js";

export class MessagesService {
    private messagesRepository: MessagesRepository;
    constructor(messagesRepository: MessagesRepository){
        // i will use DI to enhance it later
        this.messagesRepository = messagesRepository;
    }

    findOne(id: string){
        return this.messagesRepository.findOne(id);
    }

    findAll(){
        return this.messagesRepository.findAll();
    }

    create(content: string){
        return this.messagesRepository.create(content);
    }
}