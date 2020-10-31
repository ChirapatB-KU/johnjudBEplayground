import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
