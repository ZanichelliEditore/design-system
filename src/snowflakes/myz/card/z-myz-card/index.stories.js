import {html} from "lit";

export default {
  title: "Snowflakes/MyzCard/ZMyzCard",
  component: "z-myz-card",

  args: {
    cardtype: "virtuale",
    faded: false,
    ishighlighted: false,
    ispressed: true,
    titolo: "Card Header",
  },
};

export const ZMyzCard = {
  render: (args) =>
    html`<z-myz-card
      cardtype="${args.cardtype}"
      faded="${args.faded}"
      ishighlighted="${args.ishighlighted}"
      ispressed="${args.ispressed}"
    >
      <z-myz-card-header
        cardtype="${args.cardtype}"
        faded="${args.faded}"
        titolo="${args.titolo}"
      >
        <z-myz-card-icon
          icon="book-minus"
          slot="icon"
        />
      </z-myz-card-header>
      <z-myz-card-body>
        <z-myz-card-alert
          slot="alert"
          iconName="checkmark-circle"
          contenttext="Aggiunto"
          actiontext="Annulla"
          type="add"
        ></z-myz-card-alert>
        <z-myz-card-cover
          slot="cover"
          titolo="titolo"
          img="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808720740.jpg"
        />
      </z-myz-card-body>
      <z-myz-card-footer
        titolo="title"
        autori="Authors"
        isbn="97-88-80-8620-710"
      >
        <z-toggle-button
          label="risorse"
          slot="toggle"
        ></z-toggle-button>
        <z-myz-card-list
          listdata='[{"isLink":true,"value":"Leggi sul browser","url":"https://booktab.it/"},{"isLink":true,"value":"Sito e risorse del libro","url":"http://online.scuola.zanichelli.it/curtisinvitoblu/"},{"isLink":false,"value":"Programmazione"},{"isLink":false,"value":"Prove di verifica"},{"isLink":true,"value":"ZTE","url":"https://zte.zanichelli.it/"}]'
          slot="list"
        />
      </z-myz-card-footer>
    </z-myz-card>`,

  name: "ZMyzCard",
};
