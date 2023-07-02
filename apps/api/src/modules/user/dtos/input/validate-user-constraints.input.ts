import { InputType, PartialType, PickType } from '@nestjs/graphql';

import { RegisterRequestDto } from '../../../auth/dtos/register-request.dto';

@InputType()
export class ValidateUserConstraintsInput extends PartialType(
	PickType(RegisterRequestDto, ['username', 'email'] as const),
) {}
