export function getFormattedDate(date) {
    return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function getRandomLast6DaysData() {
    const randomNumber = Number(Math.floor(Math.random() * 10));
    const randomDay = randomNumber > 6 ? 6 : randomNumber;
    const currentDate = new Date(Date.now());
    return new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - randomDay
    );
}
