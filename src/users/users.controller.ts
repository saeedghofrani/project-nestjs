import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateUsersDto } from './users.dto';
import { Users } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUsers(@Res() response, @Body() users: CreateUsersDto) {
        const newUsers = await this.usersService.createUser(users);
        return response.status(HttpStatus.CREATED).json({
            newUsers
        });
    }

    @Get()
    async findAll(@Res() response) {
        const users = await this.usersService.findAll();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id: number) {
        const user = await this.usersService.findById(id);
        return response.status(HttpStatus.OK).json({
            user
        })
    }

    @Delete('/:id')
    async deletUsers(@Res() response, @Param('id') id: number) {
        const deletedUser = await this.usersService.deleteById(id);
        return response.status(HttpStatus.OK).json({
            deletedUser
        })
    }

}
