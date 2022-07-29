# Guida alla migrazione

Alcune versioni di `albe-web-components` introducono dei **breaking changes** ad alcuni componenti.
Quando si passa da una versione **major** a un'altra, è bene fare attenzione a questi cambiamenti e implementare gli adattamenti necessari per evitare bug o problemi di UI.

Ogni volta che viene implementato un **breaking change** su un componente, la sua vecchia versione viene mantenuta attiva sotto la cartella `deprecated` per qualche mese (di solito 2) e il componente viene rinominato con il suffisso `-deprecated` (es. `z-button` --> `z-button-deprecated`). Quando invece un componente legacy viene deprecato, il suffisso viene omesso ma il componente viene comunque spostato nella cartella `deprecated` e rimosso dopo qualche mese.

## Breaking changes

- [Dalla versione 3.x alla 4.x](#dalla-versione-2x-alla-3x)
  - [ZInput](#ZInput)
- [Dalla versione 2.x alla 3.x](#dalla-versione-2x-alla-3x)
  - [ZButton](#ZButton)
    - [Rimozione della prop `square`](#rimozione-della-prop-square)
    - [Rimozione dello slot "element"](#rimozione-dello-slot-element)
    - [Rimozione della variante `dark-bg`](#rimozione-della-variante-dark-bg)
    - [Rimozione della prop deprecata `issmall`](#rimozione-della-prop-deprecata-issmall)

## Dalla versione 3.x alla 4.x
### ZInput

## Dalla versione 2.x alla 3.x
### ZButton
#### Rimozione della prop `square`
La prop `square` è stata rimossa e la forma quadrata del button, quando contiene solo l'icona, viene gestita automaticamente tramite CSS.

#### Rimozione dello slot "element"
Questo slot veniva usato in casi rari in cui serviva sostituire il `button`, interno allo `z-button` con un altro elemento ma facendolo comunque apparire esteticamente come uno `z-button`. Dato che il principale utilizzo era una sostituzione con un `a`, la mancanza dello slot "element" viene sopperita dalla nuova prop `href`, che, quando valorizzata con un url, crea un `<a>` anziché un `<button>`.

#### Rimozione della variante `dark-bg`
Il valore `dark-bg` assegnabile alla prop `variant` è stato rimosso. Per cambiare i colori dello z-button quando si trova su un background scuro/colorato, è possibile fare un ovveride da CSS dei token colore usati internamente.

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
