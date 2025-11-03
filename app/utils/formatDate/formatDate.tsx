

export const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
        month: '2-digit',
        day: '2-digit',
        year: "numeric",
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }
    return date.toLocaleString(undefined, options);
}