export const secret = process.env.NEXT_PUBLIC_NASA_API_KEY;

const date = new Date();
export const today = date.toISOString().split('T')[0];

const startDate = new Date(date);
startDate.setDate(startDate.getDate() - 15);
export const formattedStartDate = startDate.toISOString().split('T')[0];
