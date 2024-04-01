import { IsOptional } from 'class-validator';

export class PingRequestdto {
	@IsOptional()
	previousPing?: number;
}
