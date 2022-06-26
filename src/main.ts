import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Productos')
    .setDescription('Descripcion del producto')
    .setVersion('1.0.0')
    .addTag('Productos')
    .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  await app.listen(8080, ()=> {
    console.log('App ejecutando en http://localhost:8080/')
  });

}
bootstrap();
