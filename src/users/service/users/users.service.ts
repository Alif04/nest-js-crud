import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/typeorm/entities/user';
import { createUsersParams, updateUsersParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(user) private userRepository: Repository<user>,
    ){}
    
    findUsers(){
        return this.userRepository.find()
    }

    createUsers(userDetails: createUsersParams){
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date()
        })
        this.userRepository.save(newUser)
    }

    updateUser(id: number ,updateUserDetails: updateUsersParams){
        return this.userRepository.update({ id }, { ...updateUserDetails})
    }

    deleteUser(id: number){
        return this.userRepository.delete(id)
    }
}
