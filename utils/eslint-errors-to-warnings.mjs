export default function eslintErrorsToWarnings(rules) {
	return Object.fromEntries(
		Object.entries(rules).map(([ruleName, ruleValue]) => {
			ruleValue =
				typeof ruleValue === 'string'
					? ruleValue?.replace('error', 'warn')
					: ruleValue[0]?.replace('error', 'warn');

			return [ruleName, ruleValue];
		}),
	);
}
