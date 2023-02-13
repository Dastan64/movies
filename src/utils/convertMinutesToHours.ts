export const convertMinutesToHours = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
}
