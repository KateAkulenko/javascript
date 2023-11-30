let isShowNextDay = true;
let dayCount = 1;
while (isShowNextDay) {
	let message = 'Сьогодні Понеділок. Хочеш побачити наступний день?';
	switch(dayCount) {
		case 2: {
			message = 'Сьогодні Вівторок. Хочеш побачити наступний день?';
			break;
		}
		case 3: {
			message = 'Сьогодні Середа. Хочеш побачити наступний день?';
			break;
		}
		case 4: {
			message = 'Сьогодні Четвер. Хочеш побачити наступний день?';
			break;
		}
		case 5: {
			message = 'Сьогодні Пятниця. Хочеш побачити наступний день?';
			break;
		}
		case 6: {
			message = 'Сьогодні Субота. Хочеш побачити наступний день?';
			break;
		}
		case 7: {
			message = 'Сьогодні Неділя. Хочеш побачити наступний день?';
			break;
		}
	}
  isShowNextDay = confirm(message);
	if (dayCount === 7) {
		dayCount = 1; 
	} else {
		dayCount += 1; 
	}
} 
