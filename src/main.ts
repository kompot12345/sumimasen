import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setDescription('API для работы с досками, задачами и пользователями')
    .setVersion('1.0')
    .addTag('Boards', 'Эндпоинты для работы с досками')
    .addTag('Tasks', 'Эндпоинты для работы с задачами')
    .addTag('Users', 'Эндпоинты для работы с пользователями')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();