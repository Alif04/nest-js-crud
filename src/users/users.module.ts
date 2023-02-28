import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/typeorm/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([user])],  
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
