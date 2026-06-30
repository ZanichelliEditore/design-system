# Note sull'aggiornamento Storybook (v8 - v10)

- È stato sostituito il plugin custom di integrazione tra Storybook e Stencil (`storybook-addon-stencil`) con quello ufficiale di Stencil (comunque ancora sperimentale, essendo a una versione 0.x)
- Adesso le stories sono dei file `.tsx` e non più `.ts`
- `Lit` non serve più e i componenti nei file `.stories.tsx` possono essere usati come nelle app Stencil (web components / custom element)
- Tutti i componenti sono disponibili in tutte le stories, quindi non serve importarli per poterli usare
- Le funzioni `render` devono ritornare un singolo element, quindi quelle con più elementi senza un parent, vanno wrappate con un `<Fragment>` di Stencil (importarlo da `@stencil/core/internal` e non da `@stencil/core` come potrebbe suggerire VSCode)
- Nei file `.tsx` delle storie si possono definire delle funzioni utili alle interazioni nelle demo, come ad esempio `onBtnClick` da usare nei listener direttamente sugli elementi, senza bisogno di fare degli `<script>` dentro i `render` come facevamo prima:

```tsx
const onBtnClick = (event) => {...};
export const Default = {
  render: () => (<button onClick={onBtnClick}>label</button>)
}
```

- Se serve eseguire del codice accessorio per le storie, si può usare `beforeEach` (di Storybook) che esegue il codice prima del render:

```tsx
export const Default = {
  beforeEach: () => {...}
}
```

Si può definire sia per la singola storia (come nell’esempio sopra) che per tutte le storie del file (mettendolo negli `StoryMeta`)

- Si possono usare i `ref` di Stencil quindi non serve più usare i `querySelector` che usavamo prima per aggiungere dei listener e modificare le prop programmaticamente:

```tsx
let btnRef: HTMLZButtonElement;
export const Default = {
  render: () => <z-button ref={(elem) => (btnRef = elem)}>label</z-button>,
};
```

- Il plugin di Stencil capisce da solo le `prop` e le variabili CSS da mettere nella tabella dei `controls` ma a volte fa fatica a capirne il tipo se non sono inizializzate o se hanno un tipo "misto" (ad esempio `string | boolean`). In quel caso va definito manualmente negli `argTypes` degli `StoryMeta`

- Adesso la tabella dei controls include tutte le prop a prescindere dagli `args` definiti nella storia

- Quando si usa `parameters.controls.include/exclude`, usare sempre il nome della prop in kebab-case e non quello in camelCase alla Stencil

- Sembra che il plugin di Stencil non comunichi bene a Storybook le modifiche fatte ai componenti, quindi per vederle bisogna stoppare il server e rilanciare `yarn start-storybook`. Sembra lo stiano sistemando ma ad oggi (16/6/2026) non c'è ancora una versione col fix.

- Adesso per permettere l’aggiunta delle CSS custom properties nella documentazione JSON auto-generata durante la build, non serve più usare `@cssprop —my-property` nella doc del componente ma si deve mettere un commento JSDocs direttamente nel file CSS usando il tag `@prop`. È importante la sintassi “@prop —my-property: description” con i due punti prima della descrizione (al posto del trattino come facevamo prima). Esempio:

```css
:host {
  /**
   * @prop --background: The background color of the component. Default: `red`.
   */
  --background: red;
}
```

- Le `CSSParts` e gli slot vanno ancora documentati nella JSDoc del componente (`@part nome - descrizione`)
