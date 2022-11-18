import { InputType, PartialType, PickType } from '@nestjs/graphql';

import { CreateUserInput } from '.';

@InputType()
export class ValidateUserConstraintsInput extends PartialType(
	PickType(CreateUserInput, ['username', 'email'] as const),
) {}
