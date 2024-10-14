import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { UserResponse } from '../interface/User';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  responseBody: { message: string; data: any } = { message: '', data: {} };
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: UserResponse) => {
        this.responseBody.data = this.responseModeler(data);
        this.responseBody.message = 'Success';
        return this.responseBody;
      }),
    );
  }

  responseModeler({ count, users }: UserResponse) {
    return {
      users,
      totalUsers: count,
    };
  }
}
