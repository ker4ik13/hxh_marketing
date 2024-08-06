import { Injectable } from '@nestjs/common';
import type { BotUser } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly database: DatabaseService) {}

  async create(dto: CreateUserDto): Promise<BotUser> {
    return await this.database.botUser.create({ data: dto });
  }

  async findAll(): Promise<BotUser[] | null> {
    return await this.database.botUser.findMany();
  }

  async findById(id: number): Promise<BotUser | null> {
    if (!id) return null;

    const user = await this.database.botUser.findUnique({ where: { id } });

    if (!user) {
      return null;
    }

    return user;
  }

  async updateById(id: number, dto: UpdateUserDto): Promise<BotUser> {
    return await this.database.botUser.update({ where: { id }, data: dto });
  }

  async removeById(id: number): Promise<BotUser> {
    return await this.database.botUser.delete({ where: { id } });
  }
}
