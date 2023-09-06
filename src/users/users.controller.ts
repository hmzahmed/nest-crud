import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from 'src/typings';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async showAllUsers() {
    const users = await this.usersService.showAll();
    return {
      status: HttpStatus.OK,
      users,
    };
  }

  @Post()
  async createUser(@Body() data: User) {
    const user = await this.usersService.create(data);
    return {
      status: HttpStatus.OK,
      user,
    };
  }

  @Get(':id')
  async showUser(@Param('id') id: number) {
    const data = await this.usersService.show(id);
    return {
      status: HttpStatus.OK,
      data,
    };
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() data: Partial<User>) {
    await this.usersService.update(id, data);
    return {
      status: HttpStatus.OK,
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.delete(id);
    return {
      status: HttpStatus.OK,
    };
  }
}
