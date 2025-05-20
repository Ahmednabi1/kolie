import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/ormconfig';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import in every module
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    WelcomeModule,
    // Add your feature modules here
  ],
})
export class AppModule {}
