export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short", // abbreviated month name
    day: "numeric", // numeric day
    year: dateYear === currentYear ? undefined : "numeric", // year only if not current year
  });

  return formatter.format(date);
}
