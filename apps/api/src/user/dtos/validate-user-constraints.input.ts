import { InputType, PartialType, PickType } from '@nestjs/graphql';

import { CreateUserInput } from './create-user.input';

@InputType()
export class ValidateUserConstraintsInput extends PartialType(
	PickType(CreateUserInput, ['username', 'email'] as const),
) {}
