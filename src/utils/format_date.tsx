export function convertToLocalDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const formattedDate = (month < 10 ? '0' : '') + month + '.' + (day < 10 ? '0' : '') + day + '.' + date.getFullYear();

    return formattedDate;
}

export function countDays(dateStart: Date, dateEnd: Date) {
    const start = dateStart.getDate();
    const end = dateEnd.getDate();
    const differenceInTime = end - start;

    return differenceInTime;
}