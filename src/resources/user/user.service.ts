import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { QueryUser } from './dto/query-user.dto';
import { UserResponse } from './interface/User';

@Injectable()
export class UserService {
  constructor(private readonly userEntity: User) {}

  findAll({ count }: QueryUser): UserResponse {
    const usersQuantity: number = 500;
    const userRequested = Number(count) <= usersQuantity ? Number(count) : 10;

    const users = this.userEntity.getFakeUsers(userRequested);

    return {
      users,
      count: usersQuantity,
    };
  }
}
