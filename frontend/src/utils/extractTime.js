export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours() % 12 || 12);
	const minutes = padZero(date.getMinutes());
	const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
	return `${hours}:${minutes} ${ampm}`;
  }
  
  function padZero(number) {
	return number.toString().padStart(2, "0");
  }
  
