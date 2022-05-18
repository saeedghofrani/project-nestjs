import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

export enum Roles {
    user,
    admin,
    company
}

@Schema({ timestamps: true })
export class Users {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    @Exclude({ toPlainOnly: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop()
    phone: string;

    @Prop({ default: Roles.user, enum: Roles })
    role: Roles;

    @Prop({ default: true })
    status: boolean;

}

export const UsersSchema = SchemaFactory.createForClass(Users);