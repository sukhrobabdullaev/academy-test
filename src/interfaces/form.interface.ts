export interface IOptions extends Intl.DateTimeFormatOptions {
  // Adjusting the type of the weekday property
  weekday: "long" | "short" | "narrow" | undefined;
}
