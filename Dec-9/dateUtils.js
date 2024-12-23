function formatDate(date, format) {
    if (!(date instanceof Date)) {
        throw new Error("invalid date")
    }
   
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2,"0")
    const day = String(date.getDate()).padStart(2,"0")

    if (format == "YYYY-MM-DD") {
        return `${year}-${month}-${day}`
    }
    throw new Error("unsupported format")
}

function isWeekend(date) {
    if (!(date instanceof Date)) {
        throw new Error("invalid date")
    }
    const day = date.getDay();
    return day == 0 || day == 6
}

function daysBetween(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        throw new Error("invalid date")
    }
    const diff = Math.abs(date1 -date2);
    return Math.ceil(diff/ (1000 * 60 *60 * 24))

}

module.exports = { formatDate, isWeekend,daysBetween }

