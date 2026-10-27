import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { P as PopoverPosition, g as KeyboardCode } from './index-DdetsoIY.js';
import { a as containsElement } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `:host,*{box-sizing:border-box}.z-tool{--z-tool-size:calc(var(--space-unit) * 5.5);--z-tool-icon-size:calc(var(--space-unit) * 2.5);position:relative;display:inline-flex;width:var(--z-tool-size);height:var(--z-tool-size);align-items:center;justify-content:center;padding:0;border:none;margin:0;background-color:var(--color-surface01);border-radius:var(--border-radius);cursor:pointer}:host(:is([active],[open])) .z-tool{box-shadow:inset 0 0 0 2px var(--color-primary01)}:host([open]) .z-tool{background:var(--color-primary03)}@media (hover: hover){:host(:hover),:host(.z-tool-tooltip-open){z-index:1}:host(:not([disabled])) .z-tool:hover{background-color:var(--color-primary03)}}.z-tool:focus:focus-visible{background-color:var(--color-primary03);outline:none}z-icon{--z-icon-width:var(--z-tool-icon-size);--z-icon-height:var(--z-tool-icon-size);display:block;fill:var(--color-default-icon)}:host([disabled]) .z-tool{color:var(--color-disabled01-icon);cursor:not-allowed}:host([disabled]) z-icon{fill:var(--color-disabled01-icon)}.z-tool-tooltip{--z-tooltip-padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);--z-tooltip-shadow-filter:drop-shadow(0 4px 8px var(--shadow-color-base));position:relative;z-index:2;font-family:var(--font-family-sans);white-space:nowrap}.z-tool-submenu{z-index:3;border-radius:calc(var(--border-radius) + var(--border-size-small))}.z-tool-submenu ::slotted(z-color-picker){border:var(--border-size-small) solid var(--color-surface03);border-radius:var(--border-radius)}@media (max-width: 767px) and (hover: none){.z-tool-tooltip{display:none !important}}`;

const typographyCss = () => `:root{--font-family-sans:"IBM Plex Sans", sans-serif;--font-family-serif:"IBM Plex Serif", serif;--font-lt:300;--font-rg:400;--font-sb:600;--font-bd:700;--font-size-1:0.75rem;--font-size-2:0.875rem;--font-size-3:1rem;--font-size-4:1.125rem;--font-size-5:1.25rem;--font-size-6:1.5rem;--font-size-7:1.75rem;--font-size-8:2rem;--font-size-9:2.25rem;--font-size-10:2.625rem;--font-size-11:3rem;--font-size-12:3.375rem;--font-size-13:3.75rem;--font-size-14:4.25rem;--font-size-15:4.75rem;--font-size-16:5.25rem;--font-size-17:5.75rem;--section-title-1:var(--font-sb) var(--font-size-11) / 1.083 var(--font-family-serif);--section-title-2:var(--font-sb) var(--font-size-10) / 1.142 var(--font-family-serif);--section-title-3:var(--font-sb) var(--font-size-9) / 1.222 var(--font-family-serif);--section-title-4:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);--section-title-5:var(--font-sb) var(--font-size-7) / 1.2857 var(--font-family-serif);--section-title-6:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-1:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-serif:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-1-sb:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-sb-serif:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-1-lt:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-lt-serif:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-serif:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-2-sb:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-sb-serif:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-2-lt:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-lt-serif:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-serif:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3-sb:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-sb-serif:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3-lt:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-lt-serif:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-4:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-serif:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);--heading-4-sb:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-sb-serif:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);--heading-4-lt:var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-lt-serif:var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-serif);--body-1:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);--body-1-serif:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);--body-1-sb:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);--body-1-sb-serif:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);--body-2:var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-sans);--body-2-serif:var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-serif);--body-2-sb:var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-sans);--body-2-sb-serif:var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-serif);--body-3:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);--body-3-serif:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);--body-3-sb:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);--body-3-sb-serif:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);--body-4:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);--body-4-serif:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);--body-4-sb:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);--body-4-sb-serif:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);--body-5:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--body-5-serif:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--body-5-sb:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--body-5-sb-serif:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);--interactive-1:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);--interactive-1-serif:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);--interactive-1-sb:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);--interactive-1-sb-serif:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);--interactive-2:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);--interactive-2-serif:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);--interactive-2-sb:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);--interactive-2-sb-serif:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);--interactive-3:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--interactive-3-serif:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--interactive-3-sb:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--interactive-3-sb-serif:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);--helper:italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--helper-serif:italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--helper-sb:italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--helper-sb-serif:italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif)}@media (min-width: 1152px){:root{--heading-1:var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-serif:var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-1-sb:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-sb-serif:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-1-lt:var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-lt-serif:var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-2:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-serif:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2-sb:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-sb-serif:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2-lt:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-lt-serif:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif)}}.heading-1,.heading-1-sb,.heading-1-lt,.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.heading-2,.heading-2-sb,.heading-2-lt,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-3,.heading-3-sb,.heading-3-lt,.heading-3-serif,.heading-3-sb-serif,.heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-4,.heading-4-sb,.heading-4-lt,.heading-4-serif,.heading-4-sb-serif,.heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-1,.body-1-sb,.body-1-serif,.body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-2,.body-2-sb,.body-2-serif,.body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.body-3,.body-3-sb,.body-3-serif,.body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.body-4,.body-4-sb,.body-4-serif,.body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.body-5,.body-5-sb,.body-5-serif,.body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.interactive-1,.interactive-1-sb,.interactive-1-serif,.interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.interactive-2,.interactive-2-sb,.interactive-2-serif,.interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.interactive-3,.interactive-3-sb,.interactive-3-serif,.interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.helper,.helper-sb,.helper-serif,.helper-sb-serif{font-size:var(--font-size-1);font-style:italic;font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.section-title-1{font:var(--section-title-1)}.section-title-2{font:var(--section-title-2)}.section-title-3{font:var(--section-title-3)}.section-title-4{font:var(--section-title-4)}.section-title-5{font:var(--section-title-5)}.section-title-6{font:var(--section-title-6)}@media (min-width: 1152px){.heading-1,.heading-1-sb,.heading-1-lt,.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.heading-2,.heading-2-sb,.heading-2-lt,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}}@media (max-width: 767px){.mobile-heading-1,.mobile-heading-1-sb,.mobile-heading-1-lt,.mobile-heading-1-serif,.mobile-heading-1-sb-serif,.mobile-heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.mobile-heading-2,.mobile-heading-2-sb,.mobile-heading-2-lt,.mobile-heading-2-serif,.mobile-heading-2-sb-serif,.mobile-heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-3,.mobile-heading-3-sb,.mobile-heading-3-lt,.mobile-heading-3-serif,.mobile-heading-3-sb-serif,.mobile-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-4,.mobile-heading-4-sb,.mobile-heading-4-lt,.mobile-heading-4-serif,.mobile-heading-4-sb-serif,.mobile-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-1,.mobile-body-1-sb,.mobile-body-1-serif,.mobile-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-2,.mobile-body-2-sb,.mobile-body-2-serif,.mobile-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.mobile-body-3,.mobile-body-3-sb,.mobile-body-3-serif,.mobile-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-body-4,.mobile-body-4-sb,.mobile-body-4-serif,.mobile-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-body-5,.mobile-body-5-sb,.mobile-body-5-serif,.mobile-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-interactive-1,.mobile-interactive-1-sb,.mobile-interactive-1-serif,.mobile-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-interactive-2,.mobile-interactive-2-sb,.mobile-interactive-2-serif,.mobile-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-interactive-3,.mobile-interactive-3-sb,.mobile-interactive-3-serif,.mobile-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-section-title-1{font:var(--section-title-1)}.mobile-section-title-2{font:var(--section-title-2)}.mobile-section-title-3{font:var(--section-title-3)}.mobile-section-title-4{font:var(--section-title-4)}.mobile-section-title-5{font:var(--section-title-5)}.mobile-section-title-6{font:var(--section-title-6)}.mobile-heading-1-lt,.mobile-heading-2-lt,.mobile-heading-3-lt,.mobile-heading-4-lt,.mobile-heading-1-lt-serif,.mobile-heading-2-lt-serif,.mobile-heading-3-lt-serif,.mobile-heading-4-lt-serif{font-weight:var(--font-lt)}.mobile-heading-1-sb,.mobile-heading-2-sb,.mobile-heading-3-sb,.mobile-heading-4-sb,.mobile-body-1-sb,.mobile-body-2-sb,.mobile-body-3-sb,.mobile-body-4-sb,.mobile-body-5-sb,.mobile-interactive-1-sb,.mobile-interactive-2-sb,.mobile-interactive-3-sb,.mobile-heading-1-sb-serif,.mobile-heading-2-sb-serif,.mobile-heading-3-sb-serif,.mobile-heading-4-sb-serif,.mobile-body-1-sb-serif,.mobile-body-2-sb-serif,.mobile-body-3-sb-serif,.mobile-body-4-sb-serif,.mobile-body-5-sb-serif,.mobile-interactive-1-sb-serif,.mobile-interactive-2-sb-serif,.mobile-interactive-3-sb-serif{font-weight:var(--font-sb)}.mobile-heading-1-serif,.mobile-heading-1-sb-serif,.mobile-heading-1-lt-serif,.mobile-heading-2-serif,.mobile-heading-2-sb-serif,.mobile-heading-2-lt-serif,.mobile-heading-3-serif,.mobile-heading-3-sb-serif,.mobile-heading-3-lt-serif,.mobile-heading-4-serif,.mobile-heading-4-sb-serif,.mobile-heading-4-lt-serif,.mobile-body-1-serif,.mobile-body-1-sb-serif,.mobile-body-2-serif,.mobile-body-2-sb-serif,.mobile-body-3-serif,.mobile-body-3-sb-serif,.mobile-body-4-serif,.mobile-body-4-sb-serif,.mobile-body-5-serif,.mobile-body-5-sb-serif,.mobile-interactive-1-serif,.mobile-interactive-1-sb-serif,.mobile-interactive-2-serif,.mobile-interactive-2-sb-serif,.mobile-interactive-3-serif,.mobile-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 768px) and (max-width: 1151px){.tablet-heading-1,.tablet-heading-1-sb,.tablet-heading-1-lt,.tablet-heading-1-serif,.tablet-heading-1-sb-serif,.tablet-heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.tablet-heading-2,.tablet-heading-2-sb,.tablet-heading-2-lt,.tablet-heading-2-serif,.tablet-heading-2-sb-serif,.tablet-heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-3,.tablet-heading-3-sb,.tablet-heading-3-lt,.tablet-heading-3-serif,.tablet-heading-3-sb-serif,.tablet-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-4,.tablet-heading-4-sb,.tablet-heading-4-lt,.tablet-heading-4-serif,.tablet-heading-4-sb-serif,.tablet-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-1,.tablet-body-1-sb,.tablet-body-1-serif,.tablet-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-2,.tablet-body-2-sb,.tablet-body-2-serif,.tablet-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.tablet-body-3,.tablet-body-3-sb,.tablet-body-3-serif,.tablet-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-body-4,.tablet-body-4-sb,.tablet-body-4-serif,.tablet-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-body-5,.tablet-body-5-sb,.tablet-body-5-serif,.tablet-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-interactive-1,.tablet-interactive-1-sb,.tablet-interactive-1-serif,.tablet-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-interactive-2,.tablet-interactive-2-sb,.tablet-interactive-2-serif,.tablet-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-interactive-3,.tablet-interactive-3-sb,.tablet-interactive-3-serif,.tablet-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-section-title-1{font:var(--section-title-1)}.tablet-section-title-2{font:var(--section-title-2)}.tablet-section-title-3{font:var(--section-title-3)}.tablet-section-title-4{font:var(--section-title-4)}.tablet-section-title-5{font:var(--section-title-5)}.tablet-section-title-6{font:var(--section-title-6)}.tablet-heading-1-lt,.tablet-heading-2-lt,.tablet-heading-3-lt,.tablet-heading-4-lt,.tablet-heading-1-lt-serif,.tablet-heading-2-lt-serif,.tablet-heading-3-lt-serif,.tablet-heading-4-lt-serif{font-weight:var(--font-lt)}.tablet-heading-1-sb,.tablet-heading-2-sb,.tablet-heading-3-sb,.tablet-heading-4-sb,.tablet-body-1-sb,.tablet-body-2-sb,.tablet-body-3-sb,.tablet-body-4-sb,.tablet-body-5-sb,.tablet-interactive-1-sb,.tablet-interactive-2-sb,.tablet-interactive-3-sb,.tablet-heading-1-sb-serif,.tablet-heading-2-sb-serif,.tablet-heading-3-sb-serif,.tablet-heading-4-sb-serif,.tablet-body-1-sb-serif,.tablet-body-2-sb-serif,.tablet-body-3-sb-serif,.tablet-body-4-sb-serif,.tablet-body-5-sb-serif,.tablet-interactive-1-sb-serif,.tablet-interactive-2-sb-serif,.tablet-interactive-3-sb-serif{font-weight:var(--font-sb)}.tablet-heading-1-serif,.tablet-heading-1-sb-serif,.tablet-heading-1-lt-serif,.tablet-heading-2-serif,.tablet-heading-2-sb-serif,.tablet-heading-2-lt-serif,.tablet-heading-3-serif,.tablet-heading-3-sb-serif,.tablet-heading-3-lt-serif,.tablet-heading-4-serif,.tablet-heading-4-sb-serif,.tablet-heading-4-lt-serif,.tablet-body-1-serif,.tablet-body-1-sb-serif,.tablet-body-2-serif,.tablet-body-2-sb-serif,.tablet-body-3-serif,.tablet-body-3-sb-serif,.tablet-body-4-serif,.tablet-body-4-sb-serif,.tablet-body-5-serif,.tablet-body-5-sb-serif,.tablet-interactive-1-serif,.tablet-interactive-1-sb-serif,.tablet-interactive-2-serif,.tablet-interactive-2-sb-serif,.tablet-interactive-3-serif,.tablet-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 1152px) and (max-width: 1365px){.desktop-heading-1,.desktop-heading-1-sb,.desktop-heading-1-lt,.desktop-heading-1-serif,.desktop-heading-1-sb-serif,.desktop-heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.desktop-heading-2,.desktop-heading-2-sb,.desktop-heading-2-lt,.desktop-heading-2-serif,.desktop-heading-2-sb-serif,.desktop-heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.desktop-heading-3,.desktop-heading-3-sb,.desktop-heading-3-lt,.desktop-heading-3-serif,.desktop-heading-3-sb-serif,.desktop-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.desktop-heading-4,.desktop-heading-4-sb,.desktop-heading-4-lt,.desktop-heading-4-serif,.desktop-heading-4-sb-serif,.desktop-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-1,.desktop-body-1-sb,.desktop-body-1-serif,.desktop-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-2,.desktop-body-2-sb,.desktop-body-2-serif,.desktop-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.desktop-body-3,.desktop-body-3-sb,.desktop-body-3-serif,.desktop-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-body-4,.desktop-body-4-sb,.desktop-body-4-serif,.desktop-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-body-5,.desktop-body-5-sb,.desktop-body-5-serif,.desktop-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-interactive-1,.desktop-interactive-1-sb,.desktop-interactive-1-serif,.desktop-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-interactive-2,.desktop-interactive-2-sb,.desktop-interactive-2-serif,.desktop-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-interactive-3,.desktop-interactive-3-sb,.desktop-interactive-3-serif,.desktop-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-section-title-1{font:var(--section-title-1)}.desktop-section-title-2{font:var(--section-title-2)}.desktop-section-title-3{font:var(--section-title-3)}.desktop-section-title-4{font:var(--section-title-4)}.desktop-section-title-5{font:var(--section-title-5)}.desktop-section-title-6{font:var(--section-title-6)}.desktop-heading-1-lt,.desktop-heading-2-lt,.desktop-heading-3-lt,.desktop-heading-4-lt,.desktop-heading-1-lt-serif,.desktop-heading-2-lt-serif,.desktop-heading-3-lt-serif,.desktop-heading-4-lt-serif{font-weight:var(--font-lt)}.desktop-heading-1-sb,.desktop-heading-2-sb,.desktop-heading-3-sb,.desktop-heading-4-sb,.desktop-body-1-sb,.desktop-body-2-sb,.desktop-body-3-sb,.desktop-body-4-sb,.desktop-body-5-sb,.desktop-interactive-1-sb,.desktop-interactive-2-sb,.desktop-interactive-3-sb,.desktop-heading-1-sb-serif,.desktop-heading-2-sb-serif,.desktop-heading-3-sb-serif,.desktop-heading-4-sb-serif,.desktop-body-1-sb-serif,.desktop-body-2-sb-serif,.desktop-body-3-sb-serif,.desktop-body-4-sb-serif,.desktop-body-5-sb-serif,.desktop-interactive-1-sb-serif,.desktop-interactive-2-sb-serif,.desktop-interactive-3-sb-serif{font-weight:var(--font-sb)}.desktop-heading-1-serif,.desktop-heading-1-sb-serif,.desktop-heading-1-lt-serif,.desktop-heading-2-serif,.desktop-heading-2-sb-serif,.desktop-heading-2-lt-serif,.desktop-heading-3-serif,.desktop-heading-3-sb-serif,.desktop-heading-3-lt-serif,.desktop-heading-4-serif,.desktop-heading-4-sb-serif,.desktop-heading-4-lt-serif,.desktop-body-1-serif,.desktop-body-1-sb-serif,.desktop-body-2-serif,.desktop-body-2-sb-serif,.desktop-body-3-serif,.desktop-body-3-sb-serif,.desktop-body-4-serif,.desktop-body-4-sb-serif,.desktop-body-5-serif,.desktop-body-5-sb-serif,.desktop-interactive-1-serif,.desktop-interactive-1-sb-serif,.desktop-interactive-2-serif,.desktop-interactive-2-sb-serif,.desktop-interactive-3-serif,.desktop-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 1366px){.wide-heading-1,.wide-heading-1-sb,.wide-heading-1-lt,.wide-heading-1-serif,.wide-heading-1-sb-serif,.wide-heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.wide-heading-2,.wide-heading-2-sb,.wide-heading-2-lt,.wide-heading-2-serif,.wide-heading-2-sb-serif,.wide-heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.wide-heading-3,.wide-heading-3-sb,.wide-heading-3-lt,.wide-heading-3-serif,.wide-heading-3-sb-serif,.wide-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.wide-heading-4,.wide-heading-4-sb,.wide-heading-4-lt,.wide-heading-4-serif,.wide-heading-4-sb-serif,.wide-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-1,.wide-body-1-sb,.wide-body-1-serif,.wide-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-2,.wide-body-2-sb,.wide-body-2-serif,.wide-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.wide-body-3,.wide-body-3-sb,.wide-body-3-serif,.wide-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-body-4,.wide-body-4-sb,.wide-body-4-serif,.wide-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-body-5,.wide-body-5-sb,.wide-body-5-serif,.wide-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-interactive-1,.wide-interactive-1-sb,.wide-interactive-1-serif,.wide-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-interactive-2,.wide-interactive-2-sb,.wide-interactive-2-serif,.wide-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-interactive-3,.wide-interactive-3-sb,.wide-interactive-3-serif,.wide-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-section-title-1{font:var(--section-title-1)}.wide-section-title-2{font:var(--section-title-2)}.wide-section-title-3{font:var(--section-title-3)}.wide-section-title-4{font:var(--section-title-4)}.wide-section-title-5{font:var(--section-title-5)}.wide-section-title-6{font:var(--section-title-6)}.wide-heading-1-lt,.wide-heading-2-lt,.wide-heading-3-lt,.wide-heading-4-lt,.wide-heading-1-lt-serif,.wide-heading-2-lt-serif,.wide-heading-3-lt-serif,.wide-heading-4-lt-serif{font-weight:var(--font-lt)}.wide-heading-1-sb,.wide-heading-2-sb,.wide-heading-3-sb,.wide-heading-4-sb,.wide-body-1-sb,.wide-body-2-sb,.wide-body-3-sb,.wide-body-4-sb,.wide-body-5-sb,.wide-interactive-1-sb,.wide-interactive-2-sb,.wide-interactive-3-sb,.wide-heading-1-sb-serif,.wide-heading-2-sb-serif,.wide-heading-3-sb-serif,.wide-heading-4-sb-serif,.wide-body-1-sb-serif,.wide-body-2-sb-serif,.wide-body-3-sb-serif,.wide-body-4-sb-serif,.wide-body-5-sb-serif,.wide-interactive-1-sb-serif,.wide-interactive-2-sb-serif,.wide-interactive-3-sb-serif{font-weight:var(--font-sb)}.wide-heading-1-serif,.wide-heading-1-sb-serif,.wide-heading-1-lt-serif,.wide-heading-2-serif,.wide-heading-2-sb-serif,.wide-heading-2-lt-serif,.wide-heading-3-serif,.wide-heading-3-sb-serif,.wide-heading-3-lt-serif,.wide-heading-4-serif,.wide-heading-4-sb-serif,.wide-heading-4-lt-serif,.wide-body-1-serif,.wide-body-1-sb-serif,.wide-body-2-serif,.wide-body-2-sb-serif,.wide-body-3-serif,.wide-body-3-sb-serif,.wide-body-4-serif,.wide-body-4-sb-serif,.wide-body-5-serif,.wide-body-5-sb-serif,.wide-interactive-1-serif,.wide-interactive-1-sb-serif,.wide-interactive-2-serif,.wide-interactive-2-sb-serif,.wide-interactive-3-serif,.wide-interactive-3-sb-serif{font-family:var(--font-family-serif)}}.heading-1-lt,.heading-2-lt,.heading-3-lt,.heading-4-lt,.heading-1-lt-serif,.heading-2-lt-serif,.heading-3-lt-serif,.heading-4-lt-serif{font-weight:var(--font-lt)}.heading-1-sb,.heading-2-sb,.heading-3-sb,.heading-4-sb,.body-1-sb,.body-2-sb,.body-3-sb,.body-4-sb,.body-5-sb,.interactive-1-sb,.interactive-2-sb,.interactive-3-sb,.helper-sb,.heading-1-sb-serif,.heading-2-sb-serif,.heading-3-sb-serif,.heading-4-sb-serif,.body-1-sb-serif,.body-2-sb-serif,.body-3-sb-serif,.body-4-sb-serif,.body-5-sb-serif,.interactive-1-sb-serif,.interactive-2-sb-serif,.interactive-3-sb-serif,.helper-sb-serif{font-weight:var(--font-sb)}.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif,.heading-3-serif,.heading-3-sb-serif,.heading-3-lt-serif,.heading-4-serif,.heading-4-sb-serif,.heading-4-lt-serif,.body-1-serif,.body-1-sb-serif,.body-2-serif,.body-2-sb-serif,.body-3-serif,.body-3-sb-serif,.body-4-serif,.body-4-sb-serif,.body-5-serif,.body-5-sb-serif,.interactive-1-serif,.interactive-1-sb-serif,.interactive-2-serif,.interactive-2-sb-serif,.interactive-3-serif,.interactive-3-sb-serif,.helper-serif,.helper-sb-serif{font-family:var(--font-family-serif)}`;

const ZTool = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleSubmenu = createEvent(this, "toggleSubmenu", 7);
        this.toggleTooltip = createEvent(this, "toggleTooltip", 7);
        /** Preferred tooltip position. Defaults to true. */
        this.tooltipPosition = PopoverPosition.TOP;
        /** Visual active state. */
        this.active = false;
        /** Disabled state. */
        this.disabled = false;
        /** Open state. */
        this.open = false;
        this.tooltipOpen = false;
        this.hasSlottedContent = false;
        this.isMobile = false;
        /** Indicates if the tool has nested open tools. Used to decide whether to auto-close the submenu. */
        this.hasNestedOpenTools = false;
        /** Indicates if the tool is nested inside another tool. */
        this.isNested = false;
        /**
         * Opens the tooltip with a delay when the button is hovered or focused, and if the tool's content isn't already visible.
         */
        this.handleTooltipOpen = (ev) => {
            if (!this.tooltip || this.open || !this.buttonRef.contains(ev.target)) {
                return;
            }
            clearTimeout(this.hoverDelay);
            this.hoverDelay = setTimeout(() => {
                this.tooltipOpen = true;
            }, 1000);
        };
        /**
         * Closes the tooltip immediately on button blur or when the mouse leaves the button or the tooltip, clearing any pending hover delay.
         */
        this.handleTooltipClose = (ev) => {
            var _a;
            if (!this.tooltip || ((_a = ev.relatedTarget) === null || _a === void 0 ? void 0 : _a.closest("z-tooltip")) === this.tooltipRef) {
                return;
            }
            clearTimeout(this.hoverDelay);
            this.tooltipOpen = false;
        };
        /**
         * Handles click events on the tool's button element.
         * If the tool has slotted content, toggles the open state and focuses the active/selected item in the nested toolbar or color picker,
         * or the first item if no active/selected item is found.
         */
        this.handleClick = () => {
            if (this.disabled || !this.hasSlottedContent) {
                return;
            }
            this.open = !this.open;
            if (this.open) {
                const colorPicker = this.hostElement.querySelector(":scope > z-color-picker");
                if (colorPicker) {
                    colorPicker.setFocus();
                    return;
                }
                // Focus the first active tool in the nested toolbar, or the first enabled if no active tool is found.
                const firstActiveOrEnabledNestedTool = (this.hostElement.querySelector(":scope > z-toolbar z-tool[active]:not(:disabled)") || this.hostElement.querySelector(":scope > z-toolbar z-tool:not(:disabled)"));
                firstActiveOrEnabledNestedTool === null || firstActiveOrEnabledNestedTool === void 0 ? void 0 : firstActiveOrEnabledNestedTool.setFocus();
            }
        };
        /**
         * Handles `openChange` events from the tooltip popover to keep the `tooltipOpen` state in sync, but only if the event is coming from this tool's tooltip (and not from nested tools' tooltips).
         */
        this.onTooltipOpenChange = (event) => {
            if (event.target === this.tooltipRef) {
                return;
            }
            this.tooltipOpen = event.detail.open;
        };
    }
    handleOpenChange() {
        this.toggleSubmenu.emit(this.open);
    }
    handleTooltipOpenChange() {
        this.toggleTooltip.emit(this.tooltipOpen);
    }
    /**
     * Handle `ESC` and `shift+TAB` to close the submenu and move focus back to the button.
     */
    handleKeyDown(event) {
        if (!this.open || this.hasNestedOpenTools) {
            return;
        }
        switch (event.key) {
            case KeyboardCode.ESC:
                event.stopPropagation();
                this.open = false;
                this.setFocus();
                break;
            case KeyboardCode.TAB:
                if (event.shiftKey && event.target.closest("z-tool:not(:scope)") === this.hostElement) {
                    this.open = false;
                }
                break;
        }
    }
    /**
     * Close the popover on clicks outside the component, only if there are no nested open tools.
     * In that case any outside click should close the nested submenu(s) first.
     */
    onOutsideClick(event) {
        const target = event.composedPath()[0];
        if (!this.open || containsElement(this.hostElement, target) || this.hasNestedOpenTools) {
            return;
        }
        this.open = false;
    }
    onNestedToolToggle(ev) {
        if (ev.target === this.hostElement) {
            return;
        }
        if (ev.detail === true) {
            this.hasNestedOpenTools = true;
            return;
        }
        this.hasNestedOpenTools = Array.from(this.hostElement.querySelectorAll("z-tool")).some((tool) => tool.open);
    }
    /**
     * Handles the `colorSelected` event from a nested `z-color-picker` component.
     * Updates the `indicatorColor` and closes the tool's popover.
     */
    handleColorSelected(event) {
        if (!Array.from(this.hostElement.children).includes(event.target)) {
            return;
        }
        this.indicatorColor = event.detail;
        this.open = false;
        this.setFocus();
    }
    /**
     * Close the submenu when focus moves outside the tool.
     */
    handleExternalFocusin(ev) {
        const target = ev.target;
        if (!containsElement(this.hostElement, target)) {
            this.open = false;
        }
    }
    /** Focuses the tool's button element. */
    async setFocus() {
        if (this.disabled) {
            return;
        }
        setTimeout(() => {
            var _a;
            (_a = this.buttonRef) === null || _a === void 0 ? void 0 : _a.focus();
        }, 50);
    }
    /** Sets the tab index of the tool's internal button element. */
    async setTabIndex(value) {
        if (!this.buttonRef) {
            return;
        }
        this.buttonRef.tabIndex = this.disabled ? -1 : value;
    }
    /** Closes the tooltip. */
    async closeTooltip() {
        clearTimeout(this.hoverDelay);
        this.tooltipOpen = false;
    }
    componentWillLoad() {
        this.hasSlottedContent = this.hostElement.children.length > 0;
        this.isNested = !!this.hostElement.closest("z-tool:not(:scope)");
        this.mainToolbar = this.hostElement.closest("z-toolbar:not(z-toolbar z-toolbar)");
        this.hasNestedOpenTools = !!this.hostElement.querySelector("z-tool[open]");
        this.mql = matchMedia("(max-width: 767px)");
        this.onMobileViewChange = (e) => (this.isMobile = e.matches);
        this.mql.addEventListener("change", this.onMobileViewChange);
        this.isMobile = this.mql.matches;
    }
    disconnectedCallback() {
        var _a;
        clearTimeout(this.hoverDelay);
        (_a = this.mql) === null || _a === void 0 ? void 0 : _a.removeEventListener("change", this.onMobileViewChange);
    }
    render() {
        return (h(Host, { key: 'a862cc3b4bdcc8c2b20097e9ae48a61d2fb60b7a', class: { "z-tool-tooltip-open": this.tooltipOpen } }, h("button", { key: '27d43ac4d61de27d52f238998461c256e67b9c99', class: "z-tool", type: "button", ref: (el) => (this.buttonRef = el), "aria-pressed": this.hasSlottedContent ? undefined : this.active ? "true" : "false", "aria-expanded": this.hasSlottedContent ? (this.open ? "true" : "false") : undefined, "aria-haspopup": this.hasSlottedContent ? "true" : undefined, "aria-label": this.htmlAriaLabel || this.tooltip || undefined, disabled: this.disabled, onClick: this.handleClick, onMouseEnter: this.handleTooltipOpen, onMouseLeave: this.handleTooltipClose, onFocus: this.handleTooltipOpen, onBlur: this.handleTooltipClose }, h("z-icon", { key: '8c9aade2f1fe33e259e35aa5348f421d4970b6d1', ref: (el) => (this.iconRef = el), name: this.icon, indicatorColor: this.indicatorColor })), this.tooltip && (h("z-tooltip", { key: 'd0aa375bf017345075e4a4b29d513bc1f2bebc06', class: "z-tool-tooltip", ref: (el) => (this.tooltipRef = el), bindTo: this.iconRef, open: this.tooltipOpen && !this.open, position: this.isNested ? PopoverPosition.BOTTOM : this.tooltipPosition, dark: true, onMouseLeave: this.handleTooltipClose, onBlur: this.handleTooltipClose, onOpenChange: this.onTooltipOpenChange }, h("span", { key: 'e3566362a0807d9e60d08b65e7242fd5b8fb9763', class: "body-4" }, this.tooltip))), this.hasSlottedContent && (h("z-popover", { key: 'd3464af7dc780cca6430aa957df4a82c72349b3c', class: "z-tool-submenu", open: this.open, bindTo: this.isMobile && this.mainToolbar ? this.mainToolbar : this.hostElement, center: true,
            /* disable auto-close to prevent unwanted close behaviors on mobile,
            when the bound element is the main toolbar */
            closable: false, position: this.isMobile ? PopoverPosition.TOP : PopoverPosition.BOTTOM }, h("slot", { key: 'eaba66d4cc957d0c1ee02f6c1b488eb80abd78c9' })))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }],
        "tooltipOpen": [{
                "handleTooltipOpenChange": 0
            }]
    }; }
};
ZTool.style = stylesCss() + typographyCss();

export { ZTool as z_tool };
