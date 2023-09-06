import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { User } from 'src/typings';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async create(data: User) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
  }

  async showAll() {
    return await this.usersRepository.find();
  }

  async show(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<User>) {
    return await this.usersRepository.update({ id }, data);
  }

  async delete(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
}
