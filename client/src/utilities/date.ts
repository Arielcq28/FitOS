const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

/** Parses a timestamp (seconds or ms), "YYYY-MM-DD", or any other date string. */
function parseDate(input: string | number): Date {
  let date: Date;

  if (typeof input === "number" || /^-?\d+(\.\d+)?$/.test(input.trim())) {
    // Numeric: under 1e11 is seconds, otherwise milliseconds.
    const n = Number(input);
    date = new Date(Math.abs(n) < 1e11 ? n * 1000 : n);
  } else {
    // Date-only strings are parsed as local to avoid timezone day shifts.
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input.trim());
    date = m
      ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
      : new Date(input);
  }

  if (isNaN(date.getTime())) throw new Error(`Invalid date: "${input}"`);
  return date;
}

/**
 * Formats a date using tokens: YYYY YY MMMM MMM MM M DD D dddd ddd
 * HH H hh h mm ss A a. Wrap literal text in [brackets].
 */
export function formatDate(input: string | number, format: string): string {
  const d = parseDate(input);

  const hours = d.getHours();
  const hours12 = hours % 12 || 12;

  const tokens: Record<string, string> = {
    YYYY: String(d.getFullYear()),
    YY: String(d.getFullYear()).slice(-2),
    MMMM: MONTHS[d.getMonth()],
    MMM: MONTHS[d.getMonth()].slice(0, 3),
    MM: pad(d.getMonth() + 1),
    M: String(d.getMonth() + 1),
    DD: pad(d.getDate()),
    D: String(d.getDate()),
    dddd: DAYS[d.getDay()],
    ddd: DAYS[d.getDay()].slice(0, 3),
    HH: pad(hours),
    H: String(hours),
    hh: pad(hours12),
    h: String(hours12),
    mm: pad(d.getMinutes()),
    ss: pad(d.getSeconds()),
    A: hours < 12 ? "AM" : "PM",
    a: hours < 12 ? "am" : "pm",
  };

  return format.replace(
    /\[([^\]]*)\]|YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|ss|A|a/g,
    (match, literal) => (literal !== undefined ? literal : tokens[match]),
  );
}

/** Whole years between two dates (like an age calculation). Order doesn't matter. */
export function yearsBetween(
  a: string | number,
  b: string | number = Date.now(),
): number {
  let [start, end] = [parseDate(a), parseDate(b)];
  if (start > end) [start, end] = [end, start];

  let years = end.getFullYear() - start.getFullYear();

  // If the anniversary hasn't happened yet this year, subtract one.
  const beforeAnniversary =
    end.getMonth() < start.getMonth() ||
    (end.getMonth() === start.getMonth() && end.getDate() < start.getDate());

  return beforeAnniversary ? years - 1 : years;
}

// weeks.ts
const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Calendar day number (ignores time of day and DST)
const toDayNumber = (d: Date): number =>
  Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / MS_PER_DAY);

/** 1. Full weeks that have passed since `date` (negative if the date is in the future). */
export function weeksSince(date: string, now: Date = new Date()): number {
  const dateFormatted = parseDate(date);
  return Math.trunc((toDayNumber(now) - toDayNumber(dateFormatted)) / 7);
}

/** 2. Full weeks between two dates, regardless of their order. */
export function weeksBetween(a: string, b: string): number {
  return Math.trunc(
    Math.abs(toDayNumber(parseDate(b)) - toDayNumber(parseDate(a))) / 7,
  );
}
