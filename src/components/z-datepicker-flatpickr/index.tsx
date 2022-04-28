import { Component, Element, h, EventEmitter, Event } from "@stencil/core";

import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Italian } from "flatpickr/dist/l10n/it.js";

@Component({
  tag: "z-datepicker-flatpickr",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZDatepickerFlatpickr {
    private flatpickrInstance;

    @Element() element: HTMLElement;

    @Event() dateSelect: EventEmitter;
      emitDateSelect() {
      this.dateSelect.emit(this.flatpickrInstance.selectedDates);
    }


  componentDidRender() {
    this.flatpickrInstance = flatpickr(".flatpickr", {
      appendTo: this.element,
      enableTime: false,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      wrap: true,
      onChange: this.emitDateSelect.bind(this)
    });

    flatpickr(".flatpickr-range", {
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      plugins: [rangePlugin({ input: ".second-input" })],
    });
  }

    componentDidLoad() {
        this.getDays();
        this.parseMonths();
    }

    getDays() {
        const days = this.element.querySelectorAll('.flatpickr-weekday');
        const realdays = ["L", "M", "M", "G", "V", "S", "D"];

        for (let i = 0; i < days.length; i++) {
            days[i].innerHTML = realdays[i];
        }
    }

    parseMonths() {
        let currentMonth = this.flatpickrInstance.currentMonth;

        const monthBox = this.element.querySelector('.flatpickr-monthDropdown-months');

        const DivContainer = document.createElement("div");
        DivContainer.setAttribute("style", "display: flex!important; width: 150px;");

        const ZSelectElement = document.createElement("z-select");
        ZSelectElement.setAttribute("placeholder", "Aprile");
        ZSelectElement.setAttribute("label", "");
        ZSelectElement.setAttribute("items", `[
            {"id":"0","name":"Gennaio","selected":false},
            {"id":"1","name":"Febbraio","selected":false},
            {"id":"2","name":"Marzo","selected":false},
            {"id":"3","name":"Aprile","selected":true},
            {"id":"4","name":"Maggio","selected":false},
            {"id":"5","name":"Giugno","selected":false},
            {"id":"6","name":"Luglio","selected":false},
            {"id":"7","name":"Agosto","selected":false},
            {"id":"8","name":"Settembre","selected":false},
            {"id":"9","name":"Ottobre","selected":false},
            {"id":"10","name":"Novembre","selected":false},
            {"id":"11","name":"Dicembre","selected":false}
        ]`);
        ZSelectElement.addEventListener("optionSelect", (e: any) => {
            console.log('currentMonth', currentMonth);
            this.flatpickrInstance.changeMonth(e.detail.selected - currentMonth);
            currentMonth = this.flatpickrInstance.currentMonth;
        });

        DivContainer.appendChild(ZSelectElement);

        monthBox.replaceWith(DivContainer);
    }

    parseHours() {
        const timeBox = this.element.querySelectorAll('.numInputWrapper');

        const hour = timeBox[1];
        const minutes = timeBox[2];
        const separator = this.element.querySelector('.flatpickr-time-separator');

        minutes.remove();
        separator.remove();

        const DivContainer = document.createElement("div");
        DivContainer.setAttribute("style", "display: flex!important; margin-left: 14px!important");

        const ZSelectWrapper = document.createElement("div");
        ZSelectWrapper.setAttribute("style", "margin-right: 12px!important; width: 87px!important");

        const ZSelectElement = document.createElement("z-select");
        ZSelectElement.setAttribute("placeholder", "H");
        ZSelectElement.setAttribute("label", "");
        ZSelectElement.setAttribute("items", `[{"id":"00","name":"00","selected":false},{"id":"01","name":"01","selected":false},{"id":"02","name":"02","selected":false}]`);
        ZSelectElement.addEventListener("optionSelect", (e: any) => console.log(e.detail.selected));


        ZSelectWrapper.appendChild(ZSelectElement);
        DivContainer.appendChild(ZSelectWrapper);

        hour.replaceWith(DivContainer);
        console.log('hour', hour);
    }

  render() {
    return (
      <div>
        <div class="flatpickr">
          <z-input
            type="text"
            name="datepicker"
            data-input
          ></z-input>
          <slot
            name="trigger"
            data-toggle
            ></slot>
        </div>
        <div>
          <z-input
            class="flatpickr-range"
            type="text"
            name="datepicker"
            icon="event"
            label="Da data"
          ></z-input>
          <z-input
            class="flatpickr-range second-input"
            type="text"
            name="datepicker"
            icon="event"
            label="A data"
          ></z-input>
        </div>
      </div>
    );
  }
}
