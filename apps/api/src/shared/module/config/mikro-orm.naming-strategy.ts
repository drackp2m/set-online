import { NamingStrategy, UnderscoreNamingStrategy } from '@mikro-orm/core';

export class MikroOrmNamingStrategy extends UnderscoreNamingStrategy implements NamingStrategy {
	// aliasName(entityName: string, index: number): string {
	// 	const originalResult = super.aliasName(entityName, index);
	// 	console.log('Method: aliasName');
	// 	console.log({ args: { entityName, index }, originalResult });
	// 	return originalResult;
	// }
	// columnNameToProperty(columnName: string): string {
	// 	const originalResult = super.columnNameToProperty(columnName);
	// 	console.log('Method: columnNameToProperty');
	// 	console.log({ args: { columnName }, originalResult });
	// 	return originalResult;
	// }
	// classToMigrationName(timestamp: string, customMigrationName?: string): string {
	// 	const originalResult = super.classToMigrationName(timestamp, customMigrationName);
	// 	console.log('Method: classToMigrationName');
	// 	console.log({ args: { timestamp, customMigrationName }, originalResult });
	// 	return originalResult;
	// }
	// classToTableName(entityName: string): string {
	// 	const originalResult = super.classToTableName(entityName);
	// 	console.log('Method: classToTableName');
	// 	console.log({ args: { entityName }, originalResult });
	// 	return `${originalResult}s`;
	// }
	// getClassName(file: string, separator?: string): string {
	// 	const originalResult = super.getClassName(file, separator);
	// 	console.log('Method: getClassName');
	// 	console.log({ args: { file, separator }, originalResult });
	// 	return originalResult;
	// }
	// indexName(
	// 	tableName: string,
	// 	columns: string[],
	// 	type: 'primary' | 'foreign' | 'unique' | 'index' | 'sequence' | 'check',
	// ): string {
	// 	const originalResult = super.indexName(tableName, columns, type);
	// 	console.log('Method: indexName');
	// 	console.log({ args: { tableName, columns, type }, originalResult });
	// 	return originalResult;
	// }
	// joinColumnName(propertyName: string): string {
	// 	const originalResult = super.joinColumnName(propertyName);
	// 	console.log('Method: joinColumnName');
	// 	console.log({ args: { propertyName }, originalResult });
	// 	return originalResult.replace(/s_uuid$/, '_uuid');
	// }
	// joinKeyColumnName(entityName: string, referencedColumnName?: string): string {
	// 	const originalResult = super.joinKeyColumnName(entityName, referencedColumnName);
	// 	console.log('Method: joinKeyColumnName');
	// 	console.log({ args: { entityName, referencedColumnName }, originalResult });
	// 	return originalResult.replace(/s_uuid$/, '_uuid');
	// }
	// joinTableName(sourceEntity: string, _targetEntity: string, propertyName: string): string {
	// 	const originalResult = super.joinTableName(sourceEntity, _targetEntity, propertyName);
	// 	console.log('Method: joinTableName');
	// 	console.log({ args: { sourceEntity, _targetEntity, propertyName }, originalResult });
	// 	return [sourceEntity, propertyName].join('_');
	// }
	// propertyToColumnName(propertyName: string): string {
	// 	const originalResult = super.propertyToColumnName(propertyName);
	// 	console.log('Method: propertyToColumnName');
	// 	console.log({ args: { propertyName }, originalResult });
	// 	return originalResult;
	// }
	// referenceColumnName(): string {
	// 	const originalResult = super.referenceColumnName();
	// 	console.log('Method: referenceColumnName');
	// 	console.log({ originalResult });
	// 	return originalResult;
	// }
}
