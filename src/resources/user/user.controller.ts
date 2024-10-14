import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { QueryUser } from './dto/query-user.dto';
import { UserInterceptor } from './interceptors/user.interceptor';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(UserInterceptor)
  findAll(@Query() queryParam: QueryUser) {
    return this.userService.findAll(queryParam);
  }
}
