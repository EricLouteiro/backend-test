import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userEntity: User) {}
  findAll() {
    return `This action returns all user`;
  }
}
