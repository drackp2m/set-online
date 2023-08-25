import { NamingStrategy, UnderscoreNamingStrategy } from '@mikro-orm/core';

export class MikroOrmNamingStrategy extends UnderscoreNamingStrategy implements NamingStrategy {
	classToTableName(entityName: string): string {
		return super.classToTableName(entityName).replace(/_entity$/, 's');
	}

	joinTableName(sourceEntity: string, _targetEntity: string, propertyName: string): string {
		return [sourceEntity, propertyName].join('_');
	}
}
