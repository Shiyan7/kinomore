export function calcPercent(value: number | undefined, total: number | undefined) {
	return ((Number(value) * 100) / Number(total)).toFixed(2);
}
