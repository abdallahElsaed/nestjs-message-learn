import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message/message.module.js';


async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
