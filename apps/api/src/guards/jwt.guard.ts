import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

import { Request } from 'express'

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  public getRequest(context: ExecutionContext): Request {
    const gqlContext = GqlExecutionContext.create(context)
    return gqlContext.getContext<{ req: Request }>().req
  }

  public handleRequest<User>(error: Error, user: User): User {
    // if (error || !user) {
    //   throw new UnauthorizedException({ key: 'exceptions.UNAUTHORIZED' })
    // }

    // return user
		return user;
  }
}
