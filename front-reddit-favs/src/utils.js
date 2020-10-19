const SECONDS_IN_YEAR = 31536000;
const SECONDS_IN_MONTH = 2592000;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export function timeSince(timeInSeconds) {
  const timeElapsedInSeconds = Date.now() / 1000 - timeInSeconds;

  let interval = timeElapsedInSeconds / SECONDS_IN_YEAR;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }

  interval = timeElapsedInSeconds / SECONDS_IN_MONTH;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }

  interval = timeElapsedInSeconds / SECONDS_IN_DAY;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = timeElapsedInSeconds / SECONDS_IN_HOUR;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  interval = timeElapsedInSeconds / SECONDS_IN_MINUTE;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  return Math.floor(timeElapsedInSeconds) + " seconds ago";
}
