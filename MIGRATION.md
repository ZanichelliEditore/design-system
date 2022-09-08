# Guida alla migrazione

Alcune versioni di `albe-web-components` introducono dei **breaking changes** ad alcuni componenti.
Quando si passa da una versione **major** a un'altra, è bene fare attenzione a questi cambiamenti e implementare gli adattamenti necessari per evitare bug o problemi di UI.

Ogni volta che viene implementato un **breaking change** su un componente, la sua vecchia versione viene mantenuta attiva sotto la cartella `deprecated` per qualche mese (di solito 2) e il componente viene rinominato con il suffisso `-deprecated` (es. `z-button` --> `z-button-deprecated`). Quando invece un componente legacy viene deprecato, il suffisso viene omesso ma il componente viene comunque spostato nella cartella `deprecated` e rimosso dopo qualche mese.

## Breaking changes

Indice delle breaking changes divise per numero di versione in cui sono state introdotte.

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

## v5.0.0

### ZPopover

Lo `ZPopover` è strutturalmente cambiato: il contenuto è completamente slottato, l'elemento che funge da "trigger" per l'apertura va aggiunto _fuori_ al componente. La proprietà "bindTo" permette di specificare l'elemento (con referenza o stringa selettore) rispetto a cui il popover deve essere posizionato, e generalmente rappresenta l'elemento "trigger" stesso.
Le nuove "posizioni" utilizzabili sono cambiate e sono disponibili nell'enum "PopoverPositions".
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

La prop `labelafter` è stata rimossa e sostituita da `labelPosition`. Quest'ultima non è di tipo `boolean` ma di tipo `LabelPosition` e accetta uno dei due valori dell'enum `LabelPositions` (`LabelPositions.right`, `LabelPositions.left` o una stringa tra "right" e "left").

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
