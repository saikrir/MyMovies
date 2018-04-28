export const formatDate = dateStr => {
    let date = new Date(dateStr);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
}
