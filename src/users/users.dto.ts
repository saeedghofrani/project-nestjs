import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CreateUsersDto {

    @IsString()
    @Length(6, 20)
    @IsNotEmpty()
    username: string;

    @IsString()
    @Length(8, 20)
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    phone: string;

}