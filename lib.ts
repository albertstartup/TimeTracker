export const getMinutesRoundedDown5 = (date: Date): number => {
  const minutes = date.getMinutes();
  return Math.floor(minutes / 5) * 5;
};

const padNumber = (num: number) => num.toString().padStart(2, "0");

export const parseJSONDate = (str: string) => new Date(JSON.parse(str));

export const displayStartDate = (startDate: string) => {
  const date = parseJSONDate(startDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const displayHours = hours % 12 ? hours % 12 : 12; // if hour is 0, display 12 instead
  return displayHours + ":" + padNumber(minutes);
};

export const generateStartDate = () => {
  const now = new Date();
  const startTime = now.setMinutes(getMinutesRoundedDown5(now), 0);
  return new Date(startTime);
};