export const convertToReadableDate = (unixTimeStamp: number) => {
  const currentDate = new Date(unixTimeStamp * 1000);
  const now = new Date();

  const isToday =
    currentDate.getDate() === now.getDate() &&
    currentDate.getMonth() === now.getMonth() &&
    currentDate.getFullYear() === now.getFullYear();

  if (isToday) {
    return currentDate.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  } else {    
    return currentDate.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
    });
  }
};
