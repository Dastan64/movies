export const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
    console.log(date)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const month = date.getMonth();
    console.log(month)
    const year = date.getFullYear();
    return `${months[month]} ${day}, ${year}`
}
