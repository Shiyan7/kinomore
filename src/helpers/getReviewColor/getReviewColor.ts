export function getReviewColor(type: string | undefined) {
	switch (type) {
		case 'Позитивный':
			return '#d9f0e1';
		case 'Нейтральный':
			return '#f2f2f2';
		case 'Негативный':
			return '#ffe8d9';
		default:
			return '#d9f0e1';
	}
}
