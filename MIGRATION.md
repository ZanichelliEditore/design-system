# Guida alla migrazione

Alcune versioni di `albe-web-components` introducono dei **breaking changes** ad alcuni componenti.
Quando si passa da una versione **major** a un'altra, è bene fare attenzione a questi cambiamenti e implementare gli adattamenti necessari per evitare bug o problemi di UI.

Ogni volta che viene implementato un **breaking change** su un componente, la sua vecchia versione viene mantenuta attiva sotto la cartella `deprecated` per qualche mese (di solito 2) e il componente viene rinominato con il suffisso `-deprecated` (es. `z-button` --> `z-button-deprecated`). Quando invece un componente legacy viene deprecato, il suffisso viene omesso ma il componente viene comunque spostato nella cartella `deprecated` e rimosso dopo qualche mese.

## Breaking changes

- [Dalla versione 3.x alla 4.x](#dalla-versione-2x-alla-3x)
  - [ZInput](#zinput)
    - [Rimozione della prop `hasmessage`](#rimozione-della-prop-hasmessage)
    - [Rimozione del type "select"](#rimozione-del-type-select)
    - [Rimozione della prop `typingtimeout`](#rimozione-della-prop-typingtimeout)
    - [Rimozione della prop `labelafter`](#rimozione-della-prop-labelafter)
  - [ZSelect](#zselect)
    - [Rimozione della prop `hasmessage`](#rimozione-della-prop-hasmessage-1)
    - [Rimozione della prop `multiple`](#rimozione-della-prop-multiple)
    - [Metodo `getSelectedItems()` diventa `getSelectedItem()`](#metodo-getselecteditems-diventa-getselecteditem)
- [Dalla versione 2.x alla 3.x](#dalla-versione-2x-alla-3x)
  - [ZButton](#ZButton)
    - [Rimozione della prop `square`](#rimozione-della-prop-square)
    - [Rimozione dello slot "element"](#rimozione-dello-slot-element)
    - [Rimozione della variante `dark-bg`](#rimozione-della-variante-dark-bg)
    - [Rimozione della prop deprecata `issmall`](#rimozione-della-prop-deprecata-issmall)

## Dalla versione 3.x alla 4.x
### ZInput
#### Rimozione della prop `hasmessage`
Lo `ZInputMessage` adesso è gestito solo dalla prop `message`. Per rimuovere l'ingombro del messaggio basta settare un valore *falsy*. Il comportamento di default rimane invariato (ingombro visibile).

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
zInput.value = 'testo della input';
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
Come conseguenza della [rimozione della prop `multiple`](#rimozione-della-prop-multiple), adesso con la `ZSelect` è possibile selezionare un solo elemento, quindi non ci sono più *items* ma un solo *item*.

## Dalla versione 2.x alla 3.x
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
