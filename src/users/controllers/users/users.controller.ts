import { Body, Controller, Get, Post, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { createUsersDto } from 'src/users/dtos/createUsers.dto';
import { updateUsersDto } from 'src/users/dtos/updateUsers.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    getUsers(){
        return this.userService.findUsers()
    }

    @Post()
    createUser(@Body() createUsersDto: createUsersDto){
        this.userService.createUsers(createUsersDto)
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: updateUsersDto){
        await this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: updateUsersDto){
        await this.userService.deleteUser(id)
    }

}
