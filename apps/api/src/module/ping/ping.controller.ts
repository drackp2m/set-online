import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

import { NodeCacheService } from '../../shared/service/node-cache.service';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { User } from '../user/user.entity';

import { PingRequestdto } from './dto/request/ping-request.dto';

@Controller('ping')
export class PingController {
	constructor(private readonly nodeCacheService: NodeCacheService) {}

	@Get()
	@HttpCode(HttpStatus.NO_CONTENT)
	getData(@Query() request: PingRequestdto, @CurrentUser() user: User): void {
		console.log({ request, user });

		return;
	}
}
