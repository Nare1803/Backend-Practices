const dateUtils = require('./dateUtils')

try {
    const date = new Date("2024-12-07")
    console.log('formatDate:', dateUtils.formatDate(date,"YYYY-MM-DD"));
    try {
        dateUtils.formatDate("invalid Date","YYYY-MM-DD")
    } catch (error) {
        console.log("formatDate Error: ",error.message) 
    }
    const weekendDate = new Date("2024-12-07")
    const weekdayDate = new Date("2024-12-06")
    console.log( dateUtils.isWeekend(weekendDate))
    console.log(dateUtils.isWeekend(weekdayDate))
    try {
        dateUtils.isWeekend("invalid date")
    } catch (error) {
        console.log("isWeekend Error:", error.message) 
    }
    const date1 = new Date("2024-12-04")
    const date2 = new Date("2024-12-01")
    console.log("daysBetween:", dateUtils.daysBetween(date1, date2)) 
    try {
        dateUtils.daysBetween("invalid Date", date2)
    } catch (error) {
        console.log("daysBetween Error:", error.message)
    }
} catch (error) {
    console.error("Error:", error.message)
}
