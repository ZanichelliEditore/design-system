import {html} from "lit";
import {NotificationType} from "../../../beans";

import "./index.stories.css";

export default {
  title: "ZNotification",
  component: "z-notification",

  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(NotificationType),
    },
  },

  args: {
    contenticonname: "checkmark-circle-filled",
    actiontext: "Annulla",
    showclose: false,
    sticky: false,
    type: NotificationType.SUCCESS,
  },
};

export const ZNotification = {
  render: (args) => html`
    <z-notification
      .contenticonname=${args.contenticonname}
      .actiontext=${args.actiontext}
      .type=${args.type}
      .showclose=${args.showclose}
      .sticky=${args.sticky}
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  `,

  name: "ZNotification",
};

export const WithLongText = {
  render: (args) => html`
    <z-notification
      .contenticonname=${args.contenticonname}
      .actiontext=${args.actiontext}
      .type=${args.type}
      .showclose=${args.showclose}
      .sticky=${args.sticky}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
      Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
      justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue
      turpis, eu consectetur purus consectetur vitae.
    </z-notification>
  `,

  name: "With long text",
};

export const BannerVariant = {
  render: (args) => html`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=${args.contenticonname}
        .actiontext=${args.actiontext}
        .type=${args.type}
        .showclose=${args.showclose}
        sticky="true"
      >
        ${args.notificationText}
      </z-notification>
      <h2 class="heading-1-sb">Titolo della pagina</h2>
      <div class="body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae. Sed bibendum nisl diam, eget egestas enim elementum eget.
        Donec quis magna lobortis, tristique nunc in, fringilla lacus. Duis ac porta turpis. Aenean aliquam tortor sed
        felis interdum aliquet dignissim vel ligula. Donec auctor risus vitae nisi finibus, sed suscipit tellus
        fringilla. Sed malesuada gravida tincidunt. Duis tincidunt orci at magna egestas fermentum. Nulla laoreet ante
        felis, non molestie mi venenatis sit amet. Nullam sollicitudin tempus lacus ac maximus. Suspendisse erat magna,
        pellentesque ut lectus sit amet, aliquet scelerisque augue. In at felis facilisis, sodales tortor euismod,
        tincidunt tellus. Quisque vulputate dolor vitae nibh pharetra, a auctor turpis mattis. Nulla facilisi. Vivamus a
        facilisis ex. Vestibulum ultricies scelerisque sapien eu pharetra. Etiam ut porttitor lorem, id ullamcorper
        risus. Donec sed sollicitudin metus. Sed sapien lectus, bibendum quis lorem efficitur, pellentesque maximus
        lectus. Quisque quis lectus quis dolor ultrices facilisis placerat finibus nulla. Donec laoreet urna id varius
        facilisis. Nulla facilisi. Pellentesque dignissim aliquam interdum. Fusce ante mauris, blandit nec imperdiet
        mattis, dictum non sapien. Donec aliquet feugiat quam quis cursus. Curabitur et rutrum nunc. Phasellus ut lorem
        posuere, eleifend felis sed, lobortis arcu. Nam efficitur purus non dolor tincidunt, nec euismod lectus
        hendrerit. Sed eget rutrum odio, ac maximus lacus. Etiam rutrum purus diam, eu pellentesque elit vulputate eget.
        Donec nulla augue, euismod non mollis congue, laoreet vel orci. Cras eget suscipit felis. Phasellus eget erat eu
        nisl suscipit pulvinar. Nunc ullamcorper orci sit amet dui placerat, at vulputate libero finibus. Quisque
        dignissim risus dolor, a porta erat cursus vel. Sed cursus pellentesque magna fringilla varius. Proin sit amet
        posuere massa. Proin nisl massa, hendrerit non congue mattis, tincidunt in turpis. Etiam pharetra posuere est,
        non mollis sapien malesuada non. Quisque metus lectus, hendrerit vel accumsan et, ornare a eros. Donec tempor,
        elit ut pulvinar auctor, sapien velit consectetur justo, interdum lobortis risus ligula vitae nunc. Praesent
        quam felis, posuere et consequat consectetur, tempus non sem. Phasellus in ligula enim. Donec gravida, felis
        vitae elementum mattis, velit ipsum aliquam ipsum, a cursus nisi nisl nec sapien. Ut et orci nulla. Donec
        fringilla magna non risus imperdiet euismod. Sed viverra eget turpis et faucibus. Sed ante orci, interdum in
        ligula in, tincidunt feugiat arcu. In viverra efficitur urna laoreet tristique. Phasellus hendrerit, urna et
        condimentum aliquet, ex urna condimentum dui, vitae vestibulum mauris risus sit amet nunc. Quisque egestas est
        vel lorem commodo, eget vestibulum enim cursus. Cras lectus velit, fermentum eget mauris id, interdum cursus
        massa. Maecenas quis dui vehicula mauris condimentum finibus. Sed et magna velit. Duis eleifend dolor at
        sagittis ornare. Aenean commodo massa enim, ac varius augue varius quis.
      </div>
    </div>
  `,

  name: "Banner variant",

  args: {
    notificationText: "Questo è il testo della notifica",
  },

  parameters: {
    controls: {
      exclude: ["sticky"],
    },
  },
};

export const InlineVariant = {
  render: (args) => html`
    <div class="inline-notification-demo">
      <z-notification
        contenticonname=${args.contenticonname}
        actiontext=${args.actiontext}
        type=${args.type}
        showclose=${args.showclose}
        sticky="false"
      >
        ${args.notificationText}
      </z-notification>
      <div class="content">
        <h2 class="heading-1">Titolo della scheda</h2>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  `,

  name: "Inline variant",

  args: {
    notificationText: "Questo è il testo della notifica",
  },

  parameters: {
    controls: {
      exclude: ["sticky"],
    },
  },
};
