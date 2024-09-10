# Guida alla migrazione

Alcune versioni di `albe-web-components` introducono dei **breaking changes** ad alcuni componenti.
Quando si passa da una versione **major** a un'altra, è bene fare attenzione a questi cambiamenti e implementare gli adattamenti necessari per evitare bug o problemi di UI.

Ogni volta che viene implementato un **breaking change** su un componente, la sua vecchia versione viene mantenuta attiva sotto la cartella `deprecated` per qualche mese (di solito 2) e il componente viene rinominato con il suffisso `-deprecated` (es. `z-button` --> `z-button-deprecated`). Quando invece un componente legacy viene deprecato, il suffisso viene omesso ma il componente viene comunque spostato nella cartella `deprecated` e rimosso dopo qualche mese.

## Breaking changes

Indice delle breaking changes divise per numero di versione in cui sono state introdotte.

- [v16.0.0](#v1600)

  - [Rimosso parametro buildEs5 dal config stencil.](#rimosso-parametro-buildes5-dal-config-stencil)

- [v15.0.0](#v1500)

  - [Modifica header modale](#modifica-header-modale)

- [v14.0.0](#v1400)

  - [Aggiornamento design-tokens](#aggiornamento-design-tokens)
    - [text01 diventa default-text](#text01-diventa-default-text)
    - [text04 diventa text-inverse](#text04-diventa-text-inverse)
    - [icon01 diventa primary01-icon](#icon01-diventa-primary01-icon)
    - [icon02 diventa default-icon](#icon02-diventa-default-icon)
    - [icon03 diventa inverse-icon](#icon03-diventa-inverse-icon)
    - [text02 cambia valore da gray800 a gray100](#text02-cambia-valore-da-gray800-a-gray100)
    - [disabled02 cambia valore da gray700 a gray100](#disabled02-cambia-valore-da-gray700-a-gray100)
  - [ZLink](#zlink)
    - [Rimozione del componente deprecato ZLink dalla libreria](#rimozione-componente-zlink-dalla-libreria)

- [v13.0.0](#v1300)

  - [ZTable](#ztable)
    - [Rimozione del componente deprecato ZTable e dei suoi componenti figli dalla libreria](#rimozione-componente-ztable-e-dei-suoi-componenti-figli-dalla-libreria)
  - [ZNavigationTab](#znavigationtab)
    - [Rimozione del componente deprecato ZNavigationTab dalla libreria](#rimozione-componente-znavigationtab-dalla-libreria)
  - [ZNavigationTabLink](#znavigationtablink)
    - [Rimozione del componente deprecato ZNavigationTabLink dalla libreria](#rimozione-componente-znavigationtablink-dalla-libreria)
  - [ZContextualMenu](#zcontextualmenu)
    - [Rimozione del componente deprecato ZContextualMenu dalla libreria](#rimozione-componente-zcontextualmenu-dalla-libreria)
  - [ZlistElement](#zlistelement)
    - [Rimozione della prop inutilizzata isContextualMenu](#rimozione-della-prop-inutilzzata-iscontextualmenu)
  - [Stencil config](#stencil)
    - [Fix: aggiunto testPathIgnorePatterns a stencil.config perchè ignori le cartelle /dist e /storybook dai test](#rimozione-cartelle-dist-e-storybook-dai-test)

- [v12.0.0](#v1200)
  - [Aggiornamento design-tokens senza token legacy](#aggiornamento-design-tokens-senza-token-legacy)
- [v11.0.0](#v1100)
  - [ZNavigationTab - ZNavigationTabLink (deprecati)](#znavigationtab-znavigationtablink-deprecati)
- [v10.0.0](#v1000)

  - [ZTypography](#ztypography)
    - [Rimozione del componente ´ZTypography´ dalla libreria](#rimozione-del-componente-ztypography-dalla-libreria)
  - [ZBody](#zbody)
    - [Rimozione del componente ´ZBody´ dalla libreria](#rimozione-del-componente-zbody-dalla-libreria)
  - [ZHeading](#zheading)
    - [Rimozione del componente ´ZHeading´ dalla libreria](#rimozione-del-componente-zheading-dalla-libreria)

- [v9.0.0](#v900)

  - [ZTable](#ztable)
    - [Rimozione del valore `none` dell'enum `SortDirection`](#rimozione-del-valore-none-dellenum-sortdirection)
    - [Rimozione dell'enum `Size`](#rimozione-dellenum-size)

- [v8.0.0](#v800)
  - [ZCard](#zcard)
    - [Rimozione gestione click tramite property `clickable`](#rimozione-gestione-click-tramite-property-clickable)
    - [Uso dello slot title come slot principale](#uso-dello-slot-title-come-slot-principale)
    - [Rename della prop `showshadow` in `showShadow`](#rename-della-prop-showshadow-in-showShadow)
- [v7.0.0](#v700)
  - [ZCoverHero](#zcoverhero)
    - [Rimozione della prop CSS `--cover-hero-height`](#rimozione-della-prop-css---cover-hero-height)
    - [Rimozione della prop CSS `--cover-hero-min-height`](#rimozione-della-prop-css---cover-hero-min-height)
- [v6.0.0](#v600)
  - [Enum e Types](#enum-e-types)
  - [ZPanelElem](#zpanelelem)
    - [Rename della prop `descr_slot_name`](#rename-della-prop-descrslotname)
  - [Classi CSS](#classi-css)
- [v5.0.0](#v500)
  - [ZPopover](#zpopover)
  - [ZTooltip](#ztooltip)
- [v4.0.0](#v400)
  - [ZInput](#zinput)
    - [Rimozione della prop `hasmessage`](#rimozione-della-prop-hasmessage)
    - [Rimozione del type "select"](#rimozione-del-type-select)
    - [Rimozione della prop `typingtimeout`](#rimozione-della-prop-typingtimeout)
    - [Rimozione della prop `labelafter`](#rimozione-della-prop-labelafter)
  - [ZSelect](#zselect)
    - [Rimozione della prop `hasmessage`](#rimozione-della-prop-hasmessage-1)
    - [Rimozione della prop `multiple`](#rimozione-della-prop-multiple)
    - [Metodo `getSelectedItems()` diventa `getSelectedItem()`](#metodo-getselecteditems-diventa-getselecteditem)
- [v3.0.0](#v300)
  - [ZButton](#zbutton)
    - [Rimozione della prop `square`](#rimozione-della-prop-square)
    - [Rimozione dello slot "element"](#rimozione-dello-slot-element)
    - [Rimozione della variante `dark-bg`](#rimozione-della-variante-dark-bg)
    - [Rimozione della prop deprecata `issmall`](#rimozione-della-prop-deprecata-issmall)
- [v2.48.0](#v2480)
  - [ZPaginationBar (deprecato)](#zpaginationbar-deprecato)
- [v2.47.0](#v2470)
  - [ZStatusTag (deprecato)](#zstatustag-deprecato)
  - [ZButtonFilter (deprecato)](#zbuttonfilter-deprecato)
  - [ZChip (rifattorizzato)](#zchip-rifattorizzato)

## v16.0.0

### Rimosso parametro buildEs5 dal config stencil.

L'aggiornamento di `Stencil` alla versione `4` nella libreria rimuove i polyfills (`v2.10.0`) pertanto è necessario aggiornare le applicazioni che ne fanno uso.

**Il metodo in precedenza usato in questo modo:**

`applyPolyfills().then(() => {
    defineCustomElements(window);
});`

**dovrà essere usato così:**

`  defineCustomElements(window);`

## v15.0.0

### Modifica header modale

Questa versione non introduce problemi a livello di compilazione del codice, ma a livello di layout.
Il padding laterale dell'header della modale è stato infatti fissato a `16px` indipendentemente dal breakpoint. Prima della modifica invece era `32px/24px/8px`. Questo influirà sui layout dei prodotti che usano il componente, in quanto il contenuto è uno slot e le spaziature vengono impostate dal prodotto; dovranno quindi essere eventualmente rivisti gli allineamenti laterali del contenuto.

## v14.0.0

### Aggiornamento design-tokens

La versione `1.0.0` del pacchetto `@zanichelli/albe-design-tokens` ha cambiato la denominazione e il valore di alcuni token, di conseguenza le applicazioni che usano la versione `>= 14` di questo repo, devono sostituire i vecchi token con i nuovi equivalenti.

Di seguito la lista dei tokens da modificare:

- `text01` da modificare in `default-text`
- `text02` ha cambiato valore da gray800 a gray100, verificare se in alcuni punti `text02` è da sostituire con `text01`
- `text04` da modificare in `text-inverse`
- `disabled02` ha cambiato valore da gray700 a gray100, verificare se in alcuni punti `disabled02` è da sostituire con `disabled03`
- `icon01` da modificare in `primary01-icon`
- `icon02` da modificare in `default-icon`
- `icon03` da modificare in `inverse-icon`

### ZLink

#### Rimozione componente `zLink` dalla libreria

Il componente deprecato è stato eliminato definitivamente dalla libreria

## v13.0.0

### ZTable

#### Rimozione componente `zTable` e dei suoi componenti figli dalla libreria

Rimosso i componenti deprecati ZTable e i suoi componenti figli.
Nel dettaglio sono stati rimossi:

- z-table
- z-table-body
- z-table-cell
- z-table-empty-box
- z-table-expanded-row
- z-table-footer
- z-table-head
- z-table-header
- z-table-header-row
- z-table-row
- z-table-sticky-footer

### ZNavigationTab

### Rimozione componente `ZNavigationTab` dalla libreria

Il componente deprecato è stato eliminato definitivamente dalla libreria

### ZNavigationTabLink

### Rimozione componente `ZNavigationTabLink` dalla libreria

Il componente deprecato è stato eliminato definitivamente dalla libreria

### ZContextualMenu

### Rimozione componente `ZContextualMenu` dalla libreria

Il componente deprecato è stato eliminato definitivamente dalla libreria

### ZListElement

### Rimozione della prop inutilzzata `isContextualMenu`

A seguito della rimozione del componente ZContextualMenu la prop `isContextualMenu` (optional) e tutte le logiche legate a essa sono state rimosse perchè non più necessarie

### Stencil

### Rimozione cartelle `dist` e `storybook` dai test

Aggiunto `testPathIgnorePatterns` al file `stencil.config.ts` perchè ignori le cartelle `/dist` e `/storybook` dai test

## v12.0.0

### Aggiornamento design-tokens senza token legacy

La versione `0.2.29` del pacchetto `@zanichelli/albe-design-tokens` non ha più i token (classi e custom prop CSS) classificati come `legacy`, di conseguenza le applicazioni che usano la versione `>= 12` di questo repo, devono sostituire i vecchi token con i nuovi equivalenti.

Per trovare facilmente i vecchi token nel codice di un applicativo, è possibile fare una ricerca con regex dall'IDE di sviluppo (es. VSCode) usando la seguente regex:

```
t-weight-lt|t-weight-rg|t-weight-sb|t-align-center|t-color-light|caption-01|helper-text-01|body-short-01|body-short-02|body-long-01|body-long-02|heading-01|heading-02|heading-03|heading-04|heading-05|expressive-heading-04|expressive-heading-05|expressive-paragraph-01|quotation-01|quotation-02|display-01|display-02|display-03|display-04|--dashboard-font|--basex1|--basex2|--basex3|--basex4|--basex5|--basex6|--basex7|--basex8|--half-x1|--half-x3|--half-x5|--half-x7|--half-x9|--half-x11|--half-x13|--half-x14|--myz-blue|--myz-blue-dark|--myz-blue-light|--myz-blue-lighter|--myz-red|--myz-red-dark|--myz-red-light|--accent|--accent-dark|--accent-light|--accent-lighter|--bg-grey-050|--bg-grey-200|--bg-grey-700|--bg-grey-800|--bg-grey-900|--bg-white|--bg-neutral-100|--bg-neutral-150|--bg-neutral-200|--bg-neutral-300|--bg-neutral-400|--bg-neutral-500|--bg-neutral-600|--bg-neutral-700|--bg-neutral-800|--status-error-red|--status-error-red-dark|--status-error-red-light|--status-error-red-lighter|--status-warning-yellow|--status-warning-yellow-dark|--status-warning-yellow-light|--status-warning-yellow-lighter|--status-success-green|--status-success-green-dark|--status-success-green-light|--status-success-green-lighter|--text-grey-800|--text-grey-700|--text-grey-200|--text-grey-050|--text-white|--border-base|--radius-base|--border-radius-base|--border-radius-min|--border-radius-max
```

## v11.0.0

### ZNavigationTab-ZNavigationTabLink (deprecati)

L'uso dei sottocomponenti di `ZNavigationTabs` creava dei problemi di accessibilità a causa della struttura HTML generata. I componenti in questione wrappano dei tag `<button>` e `<a>`, con `role=tab`, aggiungendo stili e qualche comportamento. La corretta implementazione del [Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) richiede che le tab siano elementi posizionati direttamente dentro quello con il `role=tablist` e quel wrapping lo impediva.
Il comportamento implementato nei sottocomponenti è ora gestito dal componente principale.
Sostituire tutti gli `z-navigation-tab` con dei `<button>` e i `z-navigation-tab-link` con degli `<a>`. Ricordarsi di aggiungere l'attributo `aria-controls` quando necessario.

## v10.0.0

### ZTypography

#### Rimozione del componente `ZTypography` dalla libreria

Il componente deprecato è stato eliminato a favore delle relative classi css su `design-tokens`

### ZBody

#### Rimozione del componente `ZBody` dalla libreria

Il componente deprecato è stato eliminato a favore delle relative classi css `.body-*` su `design-tokens`

### ZHeading

#### Rimozione del componente `ZHeading` dalla libreria

Il componente deprecato è stato eliminato a favore delle relative classi css `.heading-*` su `design-tokens`

## v9.0.0

### ZTable

Il componente `z-table` è stato rifattorizzato per migliorarne l'accessibilità e la flessibilità dopo il passaggio da snowflake a componente ufficiale della libreria.
Tutti i sottocomponenti sono stati deprecati in favore di un numero ridotto di sottocomponenti e nomi più in linea con gli elementi nativi (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`, `z-th`, `z-td`).
Fare riferimento alla documentazione su Storybook per capire come utilizzarli e vedere gli esempi con tutte le funzionalità.

Per continuare a usare la vecchia tabella, modificare `z-table` in `z-table-deprecated` e implementare le modifiche descritte nei paragrafi relativi a [Rimozione del valore `none` dell'enum `SortDirection`](#rimozione-del-valore-none-dellenum-sortdirection) e [Rimozione dell'enum `Size`](#rimozione-dellenum-size).

#### Rimozione del valore `none` dell'enum `SortDirection`

Il valore `none` è stato rimosso dall'enum `SortDirection` in quanto non più necessario. Per continuare a usare i vecchi componenti che usavano questo enum, sostituire l'uso dell'enum passando il valore come stringa `"none"` alla prop `sortDirection`.

#### Rimozione dell'enum `Size`

L'enum `Size` è stato rimosso poiché usato solo da componenti deprecati. Per continuare a usare i vecchi componenti che usavano questo enum, sostituire l'uso dell'enum passando i valori come stringa alla prop `padding`.

## v8.0.0

### ZCard

Il componente è stato rifattorizzato per migliorare l'accessibilità, mantenendo gli stili pregressi e l'intera area della card come cliccabile.

#### Rimozione gestione click tramite property clickable

La property permane soltanto per gestire gli stili della card.

#### Uso dello slot title come slot principale

Lo slot `title` va usato come slot principale al quale passare un tag interattivo come un'àncora o un bottone, in caso di necessità di avere una card cliccabile.

#### Rename della prop `showshadow` in `showShadow`

La prop `showshadow` è stata rinominata in `showShadow` per essere in linea con il code style del DS. Le app dovranno usare quindi `showShadow` o `show-shadow` come attributo HTML.

## v7.0.0

### ZCoverHero

Il componente è stato rifattorizzato per gestire l'aspect ratio dell'immagine slottata. Questa può essere configurata tramite la prop CSS `--cover-hero-aspect-ratio`. Di default la prop non ha nessun valore e se non viene impostata, il componente usa l'aspect ratio intrinseco dell'immagine.

#### Rimozione della prop CSS `--cover-hero-height`

Con l'introduzione della gestione dell'aspect ratio, questa prop è diventata inutile

#### Rimozione della prop CSS `--cover-hero-min-height`

Con l'introduzione della gestione dell'aspect ratio, questa prop è diventata inutile

## v6.0.0

### Enum e Types

Le regole di coding style configurate impongono l'uso dell'UPPER_CASE per i membri degli enum e il camelCase per le property dei types, quindi l'applicazione di queste regole di naming convention risultano breaking per chi usa gli enum e i types importandoli da questo repository.

Lista degli Enum e tipi interessati:

- `LicenseType`
- `Card`
- `CardVariant`
- `NavigationTabsOrientation`
- `NavigationTabsSize`
- `ButtonVariant`
- `ButtonType`
- `ButtonSize`
- `InputType`
- `InputStatus`
- `PopoverPosition`
- `ThemeVariant`
- `DividerSize`
- `DividerOrientation`
- `SortDirection`
- `AvatarSize`
- `ListSize`
- `Size`
- `ExpandableListStyle`
- `ExpandableListButtonAlign`
- `LabelPosition`
- `ListDividerType`
- `NotificationType`
- `AlertType`
- `Device`
- `ToastNotification`
- `ToastNotificationTransition`
- `ToastNotificationPosition`
- `ZTableRowExpandedType`
- `ZAriaAlertMode`
- `TransitionDirection`
- `OffCanvasVariant`
- `ZFileUploadType`
- `ZChipType`
- `ZSectionTitleDividerPosition`
- `ZDatePickerMode`
- `ZDatePickerPosition`
- `ZRangePickerMode`
- `InfoRevealPosition`

### ZPanelElem

#### Rename della prop `descr_slot_name`

Per via delle regole di coding style, la prop `descr_slot_name` diventa `descrSlotName`.

### Classi CSS

Per via delle regole di Stylelint, alcune classi CSS hanno cambiato nome (da _camelCase_ a _kebab-case_). Non dovrebbe avere un impatto nei prodotti MA se, per via di situazioni molto particolari, è stato necessario intervenire sullo stile dei componenti, usando dei selettori per classi, allora sarà neccessario andarli a modificare.

Di seguito l'elenco dei componenti interessati e delle classi modificate:

| Component                         | Classes                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `z-input`                         | `.hasClearIcon` `.hasIcon` `.iconButton` `.iconsWrapper` `.inputIcon` `.inputLabel` `.resetIcon` `.showHidePasswordIcon` `.textareaWrapper` `.textWrapper` |
| `z-input-deprecated`              | `.hasClearIcon` `.hasIcon` `.iconsWrapper` `.input_error` `.input_success` `.input_warning` `.resetIcon` `.showHidePasswordIcon` `.textareaWrapper`        |
| `z-input` / `z-input-deprecated`  | La classe `.showHidePasswordIcon` è stata modificata in `.toggle-password-icon` per chiarezza                                                              |
| `z-input-deprecated` _(checkbox)_ | `.checkboxLabel` `.checkboxWrapper` `.radioLabel` `.radioWrapper`                                                                                          |
| `z-select`                        | `.noResults` `.selectWrapper` `.ulScrollWrapper`                                                                                                           |
| `z-chip`                          | `.iconSx`                                                                                                                                                  |
| `z-file-upload`                   | `.modalWrapper`                                                                                                                                            |
| `z-table-empty-box`               | `.has2Cta`                                                                                                                                                 |
| `z-button`                        | -                                                                                                                                                          |
| `z-toggle-switch`                 | -                                                                                                                                                          |
| `z-date-picker`                   | -                                                                                                                                                          |
| `z-range-picker`                  | -                                                                                                                                                          |
| `z-footer`                        | -                                                                                                                                                          |
| `z-combobox`                      | -                                                                                                                                                          |
| `z-input-message`                 | -                                                                                                                                                          |
| `z-list-element`                  | -                                                                                                                                                          |
| `z-toast-notification-list`       | -                                                                                                                                                          |
| `z-modal-login`                   | -                                                                                                                                                          |
| `z-navigation-tab-link`           | -                                                                                                                                                          |
| `z-navigation-tab`                | -                                                                                                                                                          |
| `z-navigation-tabs`               | -                                                                                                                                                          |
| `z-menu-dropdown`                 | -                                                                                                                                                          |
| `z-cookiebar`                     | -                                                                                                                                                          |
| `z-toast-notification`            | -                                                                                                                                                          |
| `z-card`                          | -                                                                                                                                                          |
| `z-offcanvas`                     | -                                                                                                                                                          |
| `z-pagination`                    | -                                                                                                                                                          |
| `z-popover`                       | -                                                                                                                                                          |
| `z-section-title`                 | -                                                                                                                                                          |
| `z-table`                         | -                                                                                                                                                          |
| `z-table-cell`                    | -                                                                                                                                                          |
| `z-table-header`                  | -                                                                                                                                                          |
| `z-button-deprecated`             | -                                                                                                                                                          |
| `z-popover-deprecated`            | -                                                                                                                                                          |
| `z-myz-card-alert`                | -                                                                                                                                                          |
| `z-myz-card-dictionary`           | -                                                                                                                                                          |
| `z-myz-card-footer`               | -                                                                                                                                                          |
| `z-myz-card-header`               | -                                                                                                                                                          |
| `z-myz-card-list`                 | -                                                                                                                                                          |
| `z-myz-card`                      | -                                                                                                                                                          |
| `z-myz-card-alert`                | -                                                                                                                                                          |
| `z-myz-list`                      | -                                                                                                                                                          |
| `topbar`                          | -                                                                                                                                                          |
| `z-alert`                         | -                                                                                                                                                          |
| `z-otp`                           | -                                                                                                                                                          |
| `z-slideshow`                     | -                                                                                                                                                          |
| `utils`                           | -                                                                                                                                                          |

> Sono state cambiate classi CSS anche in altri componenti che non sono inclusi nell'elenco: quei componenti hanno l'opzione `shadow: true`, quindi di sicuro non è stato possibile usare le classi CSS per modificarne lo stile dai prodotti.

## v5.0.0

### ZPopover

Lo `ZPopover` è strutturalmente cambiato: il contenuto è completamente slottato, l'elemento che funge da "trigger" per l'apertura va aggiunto _fuori_ dal componente. La proprietà "bindTo" permette di specificare l'elemento (con referenza o stringa selettore) rispetto a cui il popover deve essere posizionato, e generalmente rappresenta l'elemento "trigger" stesso.
Le nuove "posizioni" utilizzabili sono cambiate e sono disponibili nell'enum "PopoverPosition".
Le proprietà legate allo stile (`backgroundColor`, `borderRadius`, ecc.) sono scomparse in favore di variabili CSS.
Anche le shadow sono settate tramite variabile CSS `--z-popover-shadow-filter`, di tipo "filter".

## ZTooltip

La proprietà `type` ora si chiama `position`. Per avere il tooltip in versione "dark" c'è una nuova proprietà `dark` da settare a `true`.

## v4.0.0

### ZInput

#### Rimozione della prop `hasmessage`

Lo `ZInputMessage` adesso è gestito solo dalla prop `message`. Per rimuovere l'ingombro del messaggio basta settare un valore _falsy_. Il comportamento di default rimane invariato (ingombro visibile).

#### Rimozione del type "select"

Il type "select" esisteva solo per una questione di retrocompatibilità, adesso se si vuole una select basta usare il componente `ZSelect`. Di conseguenza sono state rimosse le prop `items` e `multiple` che servivano solo per la select.

#### Rimozione della prop `typingtimeout`

Il timeout prima che venga fatto un emit dell'evento `inputChange` non è più configurabile e rimane fisso a 300ms. Per adattare basta semplicemente non passare più il valore a `typingtimeout`.

#### Rimozione della prop `labelafter`

La prop `labelafter` è stata rimossa e sostituita da `labelPosition`. Quest'ultima non è di tipo `boolean` ma di tipo `LabelPosition` e accetta uno dei due valori dell'enum `LabelPosition` (`LabelPosition.right`, `LabelPosition.left` o una stringa tra "right" e "left").

#### Rimozione metodi `setValue()` e `getValue()`

I metodi pubblici `setValue()` e `getValue()` sono stati rimossi. Per leggere o scrivere programmaticamente il valore della input, usare la prop `value`.

Esempi:

```js
zInput.value = "testo della input";
```

```js
const inputValue = zInput.value;
```

```html
<z-input value="valore di default"></z-input>
```

### ZSelect

#### Rimozione della prop `hasmessage`

La situazione è analoga a quella della [ZInput](#rimozione-della-prop-hasmessage).

#### Rimozione della prop `multiple`

Rimossa la prop `multiple` e tutta la gestione con le chip. È possibile utilizzare il componente `ZCombobox` per ottenere lo stesso risultato.

#### Metodo `getSelectedItems()` diventa `getSelectedItem()`

Come conseguenza della [rimozione della prop `multiple`](#rimozione-della-prop-multiple), adesso con la `ZSelect` è possibile selezionare un solo elemento, quindi non ci sono più _items_ ma un solo _item_.

## v3.0.0

### ZButton

#### Rimozione della prop `square`

La prop `square` è stata rimossa e la forma quadrata del button, quando contiene solo l'icona, viene gestita automaticamente tramite CSS.

#### Rimozione dello slot "element"

Questo slot veniva usato in casi rari in cui serviva sostituire il `button`, interno allo `ZButton` con un altro elemento ma facendolo comunque apparire esteticamente come uno `ZButton`. Dato che il principale utilizzo era una sostituzione con un `a`, la mancanza dello slot "element" viene sopperita dalla nuova prop `href`, che, quando valorizzata con un url, crea un `<a>` anziché un `<button>`.

#### Rimozione della variante `dark-bg`

Il valore `dark-bg` assegnabile alla prop `variant` è stato rimosso. Per cambiare i colori dello ZButton quando si trova su un background scuro/colorato, è possibile fare un ovveride da CSS dei token colore usati internamente.

Es.

```css
.container-dark z-button {
  --color-primary01: var(--gray600);
  --color-hover-primary: var(--gray700);
  --color-pressed-primary: var(--gray500);
  --color-disabled01: var(--gray700);
  --color-disabled02: var(--gray500);
}
```

#### Rimozione della prop deprecata `issmall`

Usare la prop `size` con valore `small`

## v2.48.0

### ZPaginationBar (deprecato)

Il componente `ZPaginationBar` è stato deprecato in favore del nuovo componente `ZPagination`. Di conseguenza anche il relativo componente interno `ZPaginationPage` è stato deprecato.

## v2.47.0

### ZStatusTag (deprecato)

Il componente `ZStatusTag` è stato deprecato in favore del nuovo componente generico `ZTag`. Per evidenziare graficamente uno "status", settare da prodotto i colori di testo e sfondo, usando le apposite CSS custom prop `--z-tag-text-color` e `--z-tag-bg`.

### ZButtonFilter (deprecato)

Il componente `ZButtonFilter` è stato deprecato. Al suo posto usare il componente `ZChip` in versione "interactive"; quest'ultima si ottiene valorizzando la prop `interactiveIcon` con il `name` di una `z-icon`.

### ZChip (rifattorizzato)

Il componente `ZChip` è stato completamente rifattorizzato. La vecchia versione è stata trasferita nella cartella dei `deprecated` e rinominata a `ZChipDeprecated`. Per passare dalla vecchia alla nuova versione, consultare la documentazione del componente.
