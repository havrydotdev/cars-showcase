const url = "https://github.com/gavrylenkoIvan";

export const getURL = (file: string): string => {
  return `${url}/images/blob/master/${file}?raw=true`;
};
