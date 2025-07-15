export function formatToDottedDate(
  dateInput: string | number | Date
): string | null {
  let date: Date;

  if (dateInput instanceof Date) {
    date = dateInput;
  } else if (typeof dateInput === "number") {
    date = new Date(dateInput);
  } else if (typeof dateInput === "string") {
    const parsed = Date.parse(dateInput);
    if (isNaN(parsed)) {
      console.warn("Invalid date string:", dateInput);
      return null;
    }
    date = new Date(parsed);
  } else {
    console.warn("Unsupported date input:", dateInput);
    return null;
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months start at 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function formatDayAndTimeSlovenian(
  timestamp: number | null | undefined
): { dayName: string; time: string } {
  if (timestamp == null || isNaN(Number(timestamp))) {
    return { dayName: "", time: "" };
  }
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    return { dayName: "", time: "" };
  }
  const dayName = date.toLocaleDateString("sl-SI", { weekday: "long" });
  const time = date.toLocaleTimeString("sl-SI", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { dayName, time };
}
