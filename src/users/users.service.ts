import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './users.schema';
import { CreateUsersDto } from './users.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(Users.name) private UsersModel: Model<UsersDocument>) {}

    async createUser(body: CreateUsersDto): Promise<Users> {
        const createdCat = new this.UsersModel(body);
        return createdCat.save();
    }

    async findAll(): Promise<Users[]> {
        return await this.UsersModel.find().exec();
    }

    async findById(id): Promise<Users> {
        return await this.UsersModel.findById(id).exec();
    }

    async deleteById(id): Promise<any> {
        return await this.UsersModel.findByIdAndDelete(id);
    }
    
}
