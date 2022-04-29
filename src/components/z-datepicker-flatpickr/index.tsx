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
    private sampleFlatpickrInstance;

    @Element() element: HTMLElement;

    @Event() dateSelect: EventEmitter;
      emitDateSelect() {
      this.dateSelect.emit(this.sampleFlatpickrInstance.selectedDates);
    }


  componentDidRender() {
    this.sampleFlatpickrInstance = flatpickr(".flatpickr", {
      appendTo: this.element,
      enableTime: false,
      locale: Italian,
      dateFormat: "d-m-Y",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      onChange: this.emitDateSelect.bind(this)
    });

    flatpickr(".flatpickr-hour", {
      appendTo: this.element,
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      onChange: this.emitDateSelect.bind(this)
    });

    flatpickr(".flatpickr-range-time", {
      appendTo: this.element,
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      plugins: [rangePlugin({ input: ".second-input" })],
    });

    flatpickr(".flatpickr-trigger", {
      appendTo: this.element,
      enableTime: false,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      wrap: true,
      onChange: this.emitDateSelect.bind(this)
    });
  }

    componentDidLoad() {
        this.getDays();
        //this.parseMonths();
    }

    componentWillLoad() {
          let element = this.element.querySelector('[slot="trigger"]');
          element.setAttribute("data-toggle", "data-toggle");
    };

    getDays() {
      const days = this.element.querySelectorAll('.flatpickr-weekday');
      console.log('days', days);
        const realdays = ["L", "M", "M", "G", "V", "S", "D"];

      for (let j = 0; j < days.length/8; j++) {
        for (let i = 0; i < 7; i++) {
            days[i+(7*j)].innerHTML = realdays[i];
        }
      }
    }

    parseMonths() {
        let currentMonth = this.sampleFlatpickrInstance.currentMonth;

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
            this.sampleFlatpickrInstance.changeMonth(e.detail.selected - currentMonth);
            currentMonth = this.sampleFlatpickrInstance.currentMonth;
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
        <div style={{ "margin": "40px 0px" }}><z-heading level={2}>Sample DatePicker</z-heading></div>
          <z-input
            class="flatpickr"
            type="text"
            name="datepicker"
            icon="event"
          ></z-input>
        <z-divider></z-divider>
        <div style={{ "margin": "40px 0px" }}><z-heading level={2}>DatePicker with time</z-heading></div>
          <z-input
            class="flatpickr-hour"
            type="text"
            name="datepicker"
            icon="event"
          ></z-input>
        <z-divider></z-divider>
        <div style={{ "margin": "40px 0px" }}><z-heading level={2}>Range DatePicker</z-heading></div>
        <div>
          <z-input
            class="flatpickr-range-time"
            type="text"
            name="datepicker"
            icon="event"
            label="Da data"
          ></z-input>
          <z-input
            class="flatpickr-range-time second-input"
            type="text"
            name="datepicker"
            icon="event"
            label="A data"
          ></z-input>
        </div>
        <z-divider></z-divider>
        <div style={{ "margin": "40px 0px"  }}><z-heading level={2}>DatePicker with custom trigger</z-heading></div>
        <div class="flatpickr-trigger">
          <div style={{visibility: 'hidden', width: "0px", height: "0px"}}>
            <z-input
              type="text"
              name="datepicker"
              data-input
            ></z-input>
          </div>
            <slot
              name="trigger"
            ></slot>
        </div>
      </div>
    );
  }
}
