import { ZDatePickerMode } from "../../beans";

export function setAriaOptions(element: HTMLElement, mode: ZDatePickerMode) {
  let calendar = element.getElementsByClassName("flatpickr-calendar");
  console.log("calencar", calendar);

  Array.from(calendar).forEach((element) => {
    element.setAttribute("tabindex", "0");
    let prevMonthArrow = element.getElementsByClassName(
      "flatpickr-prev-month"
    )[0];
    let nextMonthArrow = element.getElementsByClassName(
      "flatpickr-next-month"
    )[0];

    let tabindexElements = element.querySelectorAll('[tabindex = "-1"]');
    tabindexElements.forEach((element) =>
      element.setAttribute("tabindex", "0")
    );

    prevMonthArrow.setAttribute("tabindex", "0");
    nextMonthArrow.setAttribute("tabindex", "0");

    prevMonthArrow.setAttribute("role", "button");
    nextMonthArrow.setAttribute("role", "button");

    element
      .getElementsByClassName("cur-year")[0]
      .setAttribute("aria-label", "Anno");

    if (mode === ZDatePickerMode.date) {
      setDateAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
    if (mode === ZDatePickerMode.dateTime) {
      setDateTimeAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
  });
}

function setDateAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
  Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach(
    (element: HTMLElement) => element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
    (element: HTMLElement) => element.setAttribute("role", "button")
  );

  calendar
    .getElementsByClassName("flatpickr-monthDropdown-months")[0]
    .setAttribute("aria-label", "Mese");

  prevMonthArrow.setAttribute("aria-label", "Mese precedente");
  nextMonthArrow.setAttribute("aria-label", "Mese successivo");
}

function setDateTimeAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
  Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach(
    (element: HTMLElement) => element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
    (element: HTMLElement) => element.setAttribute("role", "button")
  );

  calendar
    .getElementsByClassName("flatpickr-monthDropdown-months")[0]
    .setAttribute("aria-label", "Mese");

  prevMonthArrow.setAttribute("aria-label", "Mese precedente");
  nextMonthArrow.setAttribute("aria-label", "Mese successivo");

  Array.from(calendar.getElementsByClassName("time24hr")).forEach(
    (element: HTMLElement) => element.setAttribute("tabindex", "-1")
  );

  calendar
    .getElementsByClassName("flatpickr-hour")[0]
    .setAttribute("aria-label", "Ora");
  calendar
    .getElementsByClassName("flatpickr-minute")[0]
    .setAttribute("aria-label", "Minuti");
}
