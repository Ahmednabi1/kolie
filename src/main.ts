import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.static(join(process.cwd(), 'src', 'public', 'welcome_view')));
  app.use(express.static(join(process.cwd(), 'src', 'public', 'home_view')));


  const config = new DocumentBuilder()
    .setTitle('Accessories Shop API')
    .setDescription('API documentation for the accessories shop')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api


  await app.listen(process.env.PORT ?? 3000);
}

function sayHello() {
  console.log("Let's explore some awesome accessories!");
}

sayHello();
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
