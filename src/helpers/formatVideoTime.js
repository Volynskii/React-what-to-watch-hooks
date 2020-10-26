export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return [minutes, seconds]
    .map((value) => String(value).padStart(2, `0`))
    .join(`:`);
};

export const formatRunTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  return `${hours}h ${minutes}m`;
};

export const formatVideoTime = (currentTime, durantion) => {
  return `${formatTime(currentTime)}/${formatTime(durantion)}`;
};
