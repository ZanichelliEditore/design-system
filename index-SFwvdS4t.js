const NAMESPACE = 'web-components-library';
const BUILD = /* web-components-library */ { hotModuleReplacement: false, hydratedSelectorName: "hydrated", lazyLoad: true, propChangeCallback: true, shadowDom: true, slotRelocation: true, state: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "@import url(\"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap\");\n:root {\n  --gray950: #121212;\n  --gray900: #292929;\n  --gray800: #3d3d3d;\n  --gray700: #525252;\n  --gray600: #666;\n  --gray500: #9b9b9b;\n  --gray400: #adadad;\n  --gray300: #c2c2c2;\n  --gray200: #d6d6d6;\n  --gray100: #ebebeb;\n  --gray50: #f6f6f6;\n  --gray25: #fafafa;\n}\n\n:root {\n  --blue950: #001229;\n  --blue900: #001f46;\n  --blue800: #002c63;\n  --blue700: #003981;\n  --blue600: #0047a0;\n  --blue500: #0056c1;\n  --blue400: #2e76ce;\n  --blue300: #5893db;\n  --blue200: #82b0e7;\n  --blue100: #accdf3;\n  --blue50: #d6eaff;\n  --blue25: #ebf5ff;\n}\n\n:root {\n  --green950: #19200a;\n  --green900: #22330a;\n  --green800: #2b4808;\n  --green700: #355d06;\n  --green600: #407305;\n  --green500: #568818;\n  --green400: #6f9d2f;\n  --green300: #8ab14a;\n  --green200: #a6c66b;\n  --green100: #c3da92;\n  --green50: #effce0;\n  --green25: #f5fdec;\n}\n\n:root {\n  --yellow950: #33280f;\n  --yellow900: #5c4615;\n  --yellow800: #85641a;\n  --yellow700: #ab8125;\n  --yellow600: #d09e30;\n  --yellow500: #f6bb3b;\n  --yellow400: #f9c852;\n  --yellow300: #fbd468;\n  --yellow200: #fee17f;\n  --yellow150: #ffde72;\n  --yellow100: #ffea91;\n  --yellow50: #fbf4e6;\n  --yellow25: #fcf7ed;\n}\n\n:root {\n  --red950: #2a0005;\n  --red900: #4c0009;\n  --red800: #6f000d;\n  --red700: #940111;\n  --red600: #ba0115;\n  --red500: #e4011c;\n  --red400: #ec5163;\n  --red300: #f07a88;\n  --red200: #f49fa9;\n  --red100: #f8bfc4;\n  --red50: #fdeeed;\n  --red25: #fef6f6;\n}\n\n:root {\n  --avatar-C01: #99005b;\n  --avatar-C02: #b01300;\n  --avatar-C03: #e62200;\n  --avatar-C04: #7c4000;\n  --avatar-C05: #c25600;\n  --avatar-C06: #6e6d6d;\n  --avatar-C07: #667d00;\n  --avatar-C08: #008741;\n  --avatar-C09: #00612f;\n  --avatar-C10: #007d8a;\n  --avatar-C11: #007db3;\n  --avatar-C12: #00548c;\n  --avatar-C13: #0028b1;\n  --avatar-C14: #00019c;\n  --avatar-C15: #6400ee;\n  --avatar-C16: #5f3fff;\n  --avatar-C17: #8b00a5;\n  --avatar-C18: #b200ff;\n  --avatar-C19: #c700d6;\n}\n\n:root {\n  --subject-art: #7b7b06;\n  --subject-art_image: #7b7b06;\n  --subject-biology: #438454;\n  --subject-chemistry: #ba5191;\n  --subject-civics: #000080;\n  --subject-communication: #1777d5;\n  --subject-computer_science: #10893e;\n  --subject-earth_science: #8d3eb2;\n  --subject-economic: #004080;\n  --subject-english: #c25353;\n  --subject-food_science: #38846b;\n  --subject-french: #c25353;\n  --subject-geography: #378092;\n  --subject-german: #c25353;\n  --subject-grammar: #be5926;\n  --subject-graphic: #8e7406;\n  --subject-greek: #37818a;\n  --subject-history: #8b572a;\n  --subject-law: #b90000;\n  --subject-latin: #8b4513;\n  --subject-math: #266997;\n  --subject-natural_science: #318473;\n  --subject-philosophy: #5a189a;\n  --subject-physics: #4a7ba4;\n  --subject-science_middle_school: #3a7922;\n  --subject-spanish: #c25353;\n  --subject-technology: #138473;\n  --subject-topography: #ac6604;\n  --subject-technique: #752771;\n}\n\n\n\n:root {\n  --color-black: #000;\n  --color-white: #fff;\n}\n\n:root {\n  /* font-family */\n  --font-family-sans: \"IBM Plex Sans\", sans-serif;\n  --font-family-serif: \"IBM Plex Serif\", serif;\n\n  /* font-weight */\n  --font-lt: 300;\n  --font-rg: 400;\n  --font-sb: 600;\n  --font-bd: 700;\n\n  /* font-size type scale */\n  --font-size-1: 0.75rem; /* 12px */\n  --font-size-2: 0.875rem; /* 14px */\n  --font-size-3: 1rem; /* assuming 16px */\n  --font-size-4: 1.125rem; /* 18px */\n  --font-size-5: 1.25rem; /* 20px */\n  --font-size-6: 1.5rem; /* 24px */\n  --font-size-7: 1.75rem; /* 28px */\n  --font-size-8: 2rem; /* 32px */\n  --font-size-9: 2.25rem; /* 36px */\n  --font-size-10: 2.625rem; /* 42px */\n  --font-size-11: 3rem; /* 48px */\n  --font-size-12: 3.375rem; /* 54px */\n  --font-size-13: 3.75rem; /* 60px */\n  --font-size-14: 4.25rem; /* 68px */\n  --font-size-15: 4.75rem; /* 76px */\n  --font-size-16: 5.25rem; /* 84px */\n  --font-size-17: 5.75rem; /* 92px */\n\n  /* CSS props to use with the `font` shorthand property */\n  --section-title-1: var(--font-sb) var(--font-size-11) / 1.083 var(--font-family-serif);\n  --section-title-2: var(--font-sb) var(--font-size-10) / 1.142 var(--font-family-serif);\n  --section-title-3: var(--font-sb) var(--font-size-9) / 1.222 var(--font-family-serif);\n  --section-title-4: var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);\n  --section-title-5: var(--font-sb) var(--font-size-7) / 1.2857 var(--font-family-serif);\n  --section-title-6: var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-1: var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);\n  --heading-1-serif: var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);\n  --heading-1-sb: var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);\n  --heading-1-sb-serif: var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);\n  --heading-1-lt: var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);\n  --heading-1-lt-serif: var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif);\n  --heading-2: var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-2-serif: var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-2-sb: var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-2-sb-serif: var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-2-lt: var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-2-lt-serif: var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-3: var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-3-serif: var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-3-sb: var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-3-sb-serif: var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-3-lt: var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);\n  --heading-3-lt-serif: var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);\n  --heading-4: var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);\n  --heading-4-serif: var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);\n  --heading-4-sb: var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);\n  --heading-4-sb-serif: var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);\n  --heading-4-lt: var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-sans);\n  --heading-4-lt-serif: var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-serif);\n  --body-1: var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);\n  --body-1-serif: var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);\n  --body-1-sb: var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);\n  --body-1-sb-serif: var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);\n  --body-2: var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-sans);\n  --body-2-serif: var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-serif);\n  --body-2-sb: var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-sans);\n  --body-2-sb-serif: var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-serif);\n  --body-3: var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);\n  --body-3-serif: var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);\n  --body-3-sb: var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);\n  --body-3-sb-serif: var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);\n  --body-4: var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);\n  --body-4-serif: var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);\n  --body-4-sb: var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);\n  --body-4-sb-serif: var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);\n  --body-5: var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --body-5-serif: var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);\n  --body-5-sb: var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --body-5-sb-serif: var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);\n  --interactive-1: var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);\n  --interactive-1-serif: var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);\n  --interactive-1-sb: var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);\n  --interactive-1-sb-serif: var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);\n  --interactive-2: var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);\n  --interactive-2-serif: var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);\n  --interactive-2-sb: var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);\n  --interactive-2-sb-serif: var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);\n  --interactive-3: var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --interactive-3-serif: var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);\n  --interactive-3-sb: var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --interactive-3-sb-serif: var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);\n  --helper: italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --helper-serif: italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);\n  --helper-sb: italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);\n  --helper-sb-serif: italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);\n}\n\n@media (min-width: 1152px) {\n  :root {\n    --heading-1: var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-sans);\n    --heading-1-serif: var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-serif);\n    --heading-1-sb: var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-sans);\n    --heading-1-sb-serif: var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);\n    --heading-1-lt: var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-sans);\n    --heading-1-lt-serif: var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-serif);\n    --heading-2: var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);\n    --heading-2-serif: var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);\n    --heading-2-sb: var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);\n    --heading-2-sb-serif: var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);\n    --heading-2-lt: var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);\n    --heading-2-lt-serif: var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif);\n  }\n}\n\n/* Typography classes */\n.heading-1,\n.heading-1-sb,\n.heading-1-lt,\n.heading-1-serif,\n.heading-1-sb-serif,\n.heading-1-lt-serif {\n  font-size: var(--font-size-7);\n  font-weight: var(--font-rg);\n  line-height: 1.28;\n}\n\n.heading-2,\n.heading-2-sb,\n.heading-2-lt,\n.heading-2-serif,\n.heading-2-sb-serif,\n.heading-2-lt-serif {\n  font-size: var(--font-size-6);\n  font-weight: var(--font-rg);\n  line-height: 1.333;\n}\n\n.heading-3,\n.heading-3-sb,\n.heading-3-lt,\n.heading-3-serif,\n.heading-3-sb-serif,\n.heading-3-lt-serif {\n  font-size: var(--font-size-6);\n  font-weight: var(--font-rg);\n  line-height: 1.333;\n}\n\n.heading-4,\n.heading-4-sb,\n.heading-4-lt,\n.heading-4-serif,\n.heading-4-sb-serif,\n.heading-4-lt-serif {\n  font-size: var(--font-size-5);\n  font-weight: var(--font-rg);\n  line-height: 1.4;\n}\n\n.body-1,\n.body-1-sb,\n.body-1-serif,\n.body-1-sb-serif {\n  font-size: var(--font-size-5);\n  font-weight: var(--font-rg);\n  line-height: 1.4;\n}\n\n.body-2,\n.body-2-sb,\n.body-2-serif,\n.body-2-sb-serif {\n  font-size: var(--font-size-4);\n  font-weight: var(--font-rg);\n  line-height: 1.5;\n}\n\n.body-3,\n.body-3-sb,\n.body-3-serif,\n.body-3-sb-serif {\n  font-size: var(--font-size-3);\n  font-weight: var(--font-rg);\n  line-height: 1.5;\n}\n\n.body-4,\n.body-4-sb,\n.body-4-serif,\n.body-4-sb-serif {\n  font-size: var(--font-size-2);\n  font-weight: var(--font-rg);\n  letter-spacing: 0.16px;\n  line-height: 1.4;\n}\n\n.body-5,\n.body-5-sb,\n.body-5-serif,\n.body-5-sb-serif {\n  font-size: var(--font-size-1);\n  font-weight: var(--font-rg);\n  letter-spacing: 0.32px;\n  line-height: 1.333;\n}\n\n.interactive-1,\n.interactive-1-sb,\n.interactive-1-serif,\n.interactive-1-sb-serif {\n  font-size: var(--font-size-3);\n  font-weight: var(--font-rg);\n  line-height: 1.5;\n}\n\n.interactive-2,\n.interactive-2-sb,\n.interactive-2-serif,\n.interactive-2-sb-serif {\n  font-size: var(--font-size-2);\n  font-weight: var(--font-rg);\n  letter-spacing: 0.16px;\n  line-height: 1.4;\n}\n\n.interactive-3,\n.interactive-3-sb,\n.interactive-3-serif,\n.interactive-3-sb-serif {\n  font-size: var(--font-size-1);\n  font-weight: var(--font-rg);\n  letter-spacing: 0.32px;\n  line-height: 1.333;\n}\n\n.helper,\n.helper-sb,\n.helper-serif,\n.helper-sb-serif {\n  font-size: var(--font-size-1);\n  font-style: italic;\n  font-weight: var(--font-rg);\n  letter-spacing: 0.32px;\n  line-height: 1.333;\n}\n\n/* section title */\n.section-title-1 {\n  font: var(--section-title-1);\n}\n\n.section-title-2 {\n  font: var(--section-title-2);\n}\n\n.section-title-3 {\n  font: var(--section-title-3);\n}\n\n.section-title-4 {\n  font: var(--section-title-4);\n}\n\n.section-title-5 {\n  font: var(--section-title-5);\n}\n\n.section-title-6 {\n  font: var(--section-title-6);\n}\n\n/* heading-1/2 for desktop and wide viewports */\n@media (min-width: 1152px) {\n  .heading-1,\n  .heading-1-sb,\n  .heading-1-lt,\n  .heading-1-serif,\n  .heading-1-sb-serif,\n  .heading-1-lt-serif {\n    font-size: var(--font-size-8);\n    font-weight: var(--font-rg);\n    line-height: 1.25;\n  }\n\n  .heading-2,\n  .heading-2-sb,\n  .heading-2-lt,\n  .heading-2-serif,\n  .heading-2-sb-serif,\n  .heading-2-lt-serif {\n    font-size: var(--font-size-7);\n    font-weight: var(--font-rg);\n    line-height: 1.28;\n  }\n}\n\n/* viewport classes */\n@media (max-width: 767px) {\n  .mobile-heading-1,\n  .mobile-heading-1-sb,\n  .mobile-heading-1-lt,\n  .mobile-heading-1-serif,\n  .mobile-heading-1-sb-serif,\n  .mobile-heading-1-lt-serif {\n    font-size: var(--font-size-7);\n    font-weight: var(--font-rg);\n    line-height: 1.28;\n  }\n\n  .mobile-heading-2,\n  .mobile-heading-2-sb,\n  .mobile-heading-2-lt,\n  .mobile-heading-2-serif,\n  .mobile-heading-2-sb-serif,\n  .mobile-heading-2-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .mobile-heading-3,\n  .mobile-heading-3-sb,\n  .mobile-heading-3-lt,\n  .mobile-heading-3-serif,\n  .mobile-heading-3-sb-serif,\n  .mobile-heading-3-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .mobile-heading-4,\n  .mobile-heading-4-sb,\n  .mobile-heading-4-lt,\n  .mobile-heading-4-serif,\n  .mobile-heading-4-sb-serif,\n  .mobile-heading-4-lt-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .mobile-body-1,\n  .mobile-body-1-sb,\n  .mobile-body-1-serif,\n  .mobile-body-1-sb-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .mobile-body-2,\n  .mobile-body-2-sb,\n  .mobile-body-2-serif,\n  .mobile-body-2-sb-serif {\n    font-size: var(--font-size-4);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .mobile-body-3,\n  .mobile-body-3-sb,\n  .mobile-body-3-serif,\n  .mobile-body-3-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .mobile-body-4,\n  .mobile-body-4-sb,\n  .mobile-body-4-serif,\n  .mobile-body-4-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .mobile-body-5,\n  .mobile-body-5-sb,\n  .mobile-body-5-serif,\n  .mobile-body-5-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .mobile-interactive-1,\n  .mobile-interactive-1-sb,\n  .mobile-interactive-1-serif,\n  .mobile-interactive-1-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .mobile-interactive-2,\n  .mobile-interactive-2-sb,\n  .mobile-interactive-2-serif,\n  .mobile-interactive-2-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .mobile-interactive-3,\n  .mobile-interactive-3-sb,\n  .mobile-interactive-3-serif,\n  .mobile-interactive-3-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .mobile-section-title-1 {\n    font: var(--section-title-1);\n  }\n\n  .mobile-section-title-2 {\n    font: var(--section-title-2);\n  }\n\n  .mobile-section-title-3 {\n    font: var(--section-title-3);\n  }\n\n  .mobile-section-title-4 {\n    font: var(--section-title-4);\n  }\n\n  .mobile-section-title-5 {\n    font: var(--section-title-5);\n  }\n\n  .mobile-section-title-6 {\n    font: var(--section-title-6);\n  }\n\n  .mobile-heading-1-lt,\n  .mobile-heading-2-lt,\n  .mobile-heading-3-lt,\n  .mobile-heading-4-lt,\n  .mobile-heading-1-lt-serif,\n  .mobile-heading-2-lt-serif,\n  .mobile-heading-3-lt-serif,\n  .mobile-heading-4-lt-serif {\n    font-weight: var(--font-lt);\n  }\n\n  .mobile-heading-1-sb,\n  .mobile-heading-2-sb,\n  .mobile-heading-3-sb,\n  .mobile-heading-4-sb,\n  .mobile-body-1-sb,\n  .mobile-body-2-sb,\n  .mobile-body-3-sb,\n  .mobile-body-4-sb,\n  .mobile-body-5-sb,\n  .mobile-interactive-1-sb,\n  .mobile-interactive-2-sb,\n  .mobile-interactive-3-sb,\n  .mobile-heading-1-sb-serif,\n  .mobile-heading-2-sb-serif,\n  .mobile-heading-3-sb-serif,\n  .mobile-heading-4-sb-serif,\n  .mobile-body-1-sb-serif,\n  .mobile-body-2-sb-serif,\n  .mobile-body-3-sb-serif,\n  .mobile-body-4-sb-serif,\n  .mobile-body-5-sb-serif,\n  .mobile-interactive-1-sb-serif,\n  .mobile-interactive-2-sb-serif,\n  .mobile-interactive-3-sb-serif {\n    font-weight: var(--font-sb);\n  }\n\n  .mobile-heading-1-serif,\n  .mobile-heading-1-sb-serif,\n  .mobile-heading-1-lt-serif,\n  .mobile-heading-2-serif,\n  .mobile-heading-2-sb-serif,\n  .mobile-heading-2-lt-serif,\n  .mobile-heading-3-serif,\n  .mobile-heading-3-sb-serif,\n  .mobile-heading-3-lt-serif,\n  .mobile-heading-4-serif,\n  .mobile-heading-4-sb-serif,\n  .mobile-heading-4-lt-serif,\n  .mobile-body-1-serif,\n  .mobile-body-1-sb-serif,\n  .mobile-body-2-serif,\n  .mobile-body-2-sb-serif,\n  .mobile-body-3-serif,\n  .mobile-body-3-sb-serif,\n  .mobile-body-4-serif,\n  .mobile-body-4-sb-serif,\n  .mobile-body-5-serif,\n  .mobile-body-5-sb-serif,\n  .mobile-interactive-1-serif,\n  .mobile-interactive-1-sb-serif,\n  .mobile-interactive-2-serif,\n  .mobile-interactive-2-sb-serif,\n  .mobile-interactive-3-serif,\n  .mobile-interactive-3-sb-serif {\n    font-family: var(--font-family-serif);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 1151px) {\n  .tablet-heading-1,\n  .tablet-heading-1-sb,\n  .tablet-heading-1-lt,\n  .tablet-heading-1-serif,\n  .tablet-heading-1-sb-serif,\n  .tablet-heading-1-lt-serif {\n    font-size: var(--font-size-7);\n    font-weight: var(--font-rg);\n    line-height: 1.28;\n  }\n\n  .tablet-heading-2,\n  .tablet-heading-2-sb,\n  .tablet-heading-2-lt,\n  .tablet-heading-2-serif,\n  .tablet-heading-2-sb-serif,\n  .tablet-heading-2-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .tablet-heading-3,\n  .tablet-heading-3-sb,\n  .tablet-heading-3-lt,\n  .tablet-heading-3-serif,\n  .tablet-heading-3-sb-serif,\n  .tablet-heading-3-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .tablet-heading-4,\n  .tablet-heading-4-sb,\n  .tablet-heading-4-lt,\n  .tablet-heading-4-serif,\n  .tablet-heading-4-sb-serif,\n  .tablet-heading-4-lt-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .tablet-body-1,\n  .tablet-body-1-sb,\n  .tablet-body-1-serif,\n  .tablet-body-1-sb-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .tablet-body-2,\n  .tablet-body-2-sb,\n  .tablet-body-2-serif,\n  .tablet-body-2-sb-serif {\n    font-size: var(--font-size-4);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .tablet-body-3,\n  .tablet-body-3-sb,\n  .tablet-body-3-serif,\n  .tablet-body-3-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .tablet-body-4,\n  .tablet-body-4-sb,\n  .tablet-body-4-serif,\n  .tablet-body-4-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .tablet-body-5,\n  .tablet-body-5-sb,\n  .tablet-body-5-serif,\n  .tablet-body-5-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .tablet-interactive-1,\n  .tablet-interactive-1-sb,\n  .tablet-interactive-1-serif,\n  .tablet-interactive-1-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .tablet-interactive-2,\n  .tablet-interactive-2-sb,\n  .tablet-interactive-2-serif,\n  .tablet-interactive-2-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .tablet-interactive-3,\n  .tablet-interactive-3-sb,\n  .tablet-interactive-3-serif,\n  .tablet-interactive-3-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .tablet-section-title-1 {\n    font: var(--section-title-1);\n  }\n\n  .tablet-section-title-2 {\n    font: var(--section-title-2);\n  }\n\n  .tablet-section-title-3 {\n    font: var(--section-title-3);\n  }\n\n  .tablet-section-title-4 {\n    font: var(--section-title-4);\n  }\n\n  .tablet-section-title-5 {\n    font: var(--section-title-5);\n  }\n\n  .tablet-section-title-6 {\n    font: var(--section-title-6);\n  }\n\n  .tablet-heading-1-lt,\n  .tablet-heading-2-lt,\n  .tablet-heading-3-lt,\n  .tablet-heading-4-lt,\n  .tablet-heading-1-lt-serif,\n  .tablet-heading-2-lt-serif,\n  .tablet-heading-3-lt-serif,\n  .tablet-heading-4-lt-serif {\n    font-weight: var(--font-lt);\n  }\n\n  .tablet-heading-1-sb,\n  .tablet-heading-2-sb,\n  .tablet-heading-3-sb,\n  .tablet-heading-4-sb,\n  .tablet-body-1-sb,\n  .tablet-body-2-sb,\n  .tablet-body-3-sb,\n  .tablet-body-4-sb,\n  .tablet-body-5-sb,\n  .tablet-interactive-1-sb,\n  .tablet-interactive-2-sb,\n  .tablet-interactive-3-sb,\n  .tablet-heading-1-sb-serif,\n  .tablet-heading-2-sb-serif,\n  .tablet-heading-3-sb-serif,\n  .tablet-heading-4-sb-serif,\n  .tablet-body-1-sb-serif,\n  .tablet-body-2-sb-serif,\n  .tablet-body-3-sb-serif,\n  .tablet-body-4-sb-serif,\n  .tablet-body-5-sb-serif,\n  .tablet-interactive-1-sb-serif,\n  .tablet-interactive-2-sb-serif,\n  .tablet-interactive-3-sb-serif {\n    font-weight: var(--font-sb);\n  }\n\n  .tablet-heading-1-serif,\n  .tablet-heading-1-sb-serif,\n  .tablet-heading-1-lt-serif,\n  .tablet-heading-2-serif,\n  .tablet-heading-2-sb-serif,\n  .tablet-heading-2-lt-serif,\n  .tablet-heading-3-serif,\n  .tablet-heading-3-sb-serif,\n  .tablet-heading-3-lt-serif,\n  .tablet-heading-4-serif,\n  .tablet-heading-4-sb-serif,\n  .tablet-heading-4-lt-serif,\n  .tablet-body-1-serif,\n  .tablet-body-1-sb-serif,\n  .tablet-body-2-serif,\n  .tablet-body-2-sb-serif,\n  .tablet-body-3-serif,\n  .tablet-body-3-sb-serif,\n  .tablet-body-4-serif,\n  .tablet-body-4-sb-serif,\n  .tablet-body-5-serif,\n  .tablet-body-5-sb-serif,\n  .tablet-interactive-1-serif,\n  .tablet-interactive-1-sb-serif,\n  .tablet-interactive-2-serif,\n  .tablet-interactive-2-sb-serif,\n  .tablet-interactive-3-serif,\n  .tablet-interactive-3-sb-serif {\n    font-family: var(--font-family-serif);\n  }\n}\n\n@media (min-width: 1152px) and (max-width: 1365px) {\n  .desktop-heading-1,\n  .desktop-heading-1-sb,\n  .desktop-heading-1-lt,\n  .desktop-heading-1-serif,\n  .desktop-heading-1-sb-serif,\n  .desktop-heading-1-lt-serif {\n    font-size: var(--font-size-8);\n    font-weight: var(--font-rg);\n    line-height: 1.25;\n  }\n\n  .desktop-heading-2,\n  .desktop-heading-2-sb,\n  .desktop-heading-2-lt,\n  .desktop-heading-2-serif,\n  .desktop-heading-2-sb-serif,\n  .desktop-heading-2-lt-serif {\n    font-size: var(--font-size-7);\n    font-weight: var(--font-rg);\n    line-height: 1.28;\n  }\n\n  .desktop-heading-3,\n  .desktop-heading-3-sb,\n  .desktop-heading-3-lt,\n  .desktop-heading-3-serif,\n  .desktop-heading-3-sb-serif,\n  .desktop-heading-3-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .desktop-heading-4,\n  .desktop-heading-4-sb,\n  .desktop-heading-4-lt,\n  .desktop-heading-4-serif,\n  .desktop-heading-4-sb-serif,\n  .desktop-heading-4-lt-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .desktop-body-1,\n  .desktop-body-1-sb,\n  .desktop-body-1-serif,\n  .desktop-body-1-sb-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .desktop-body-2,\n  .desktop-body-2-sb,\n  .desktop-body-2-serif,\n  .desktop-body-2-sb-serif {\n    font-size: var(--font-size-4);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .desktop-body-3,\n  .desktop-body-3-sb,\n  .desktop-body-3-serif,\n  .desktop-body-3-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .desktop-body-4,\n  .desktop-body-4-sb,\n  .desktop-body-4-serif,\n  .desktop-body-4-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .desktop-body-5,\n  .desktop-body-5-sb,\n  .desktop-body-5-serif,\n  .desktop-body-5-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .desktop-interactive-1,\n  .desktop-interactive-1-sb,\n  .desktop-interactive-1-serif,\n  .desktop-interactive-1-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .desktop-interactive-2,\n  .desktop-interactive-2-sb,\n  .desktop-interactive-2-serif,\n  .desktop-interactive-2-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .desktop-interactive-3,\n  .desktop-interactive-3-sb,\n  .desktop-interactive-3-serif,\n  .desktop-interactive-3-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .desktop-section-title-1 {\n    font: var(--section-title-1);\n  }\n\n  .desktop-section-title-2 {\n    font: var(--section-title-2);\n  }\n\n  .desktop-section-title-3 {\n    font: var(--section-title-3);\n  }\n\n  .desktop-section-title-4 {\n    font: var(--section-title-4);\n  }\n\n  .desktop-section-title-5 {\n    font: var(--section-title-5);\n  }\n\n  .desktop-section-title-6 {\n    font: var(--section-title-6);\n  }\n\n  .desktop-heading-1-lt,\n  .desktop-heading-2-lt,\n  .desktop-heading-3-lt,\n  .desktop-heading-4-lt,\n  .desktop-heading-1-lt-serif,\n  .desktop-heading-2-lt-serif,\n  .desktop-heading-3-lt-serif,\n  .desktop-heading-4-lt-serif {\n    font-weight: var(--font-lt);\n  }\n\n  .desktop-heading-1-sb,\n  .desktop-heading-2-sb,\n  .desktop-heading-3-sb,\n  .desktop-heading-4-sb,\n  .desktop-body-1-sb,\n  .desktop-body-2-sb,\n  .desktop-body-3-sb,\n  .desktop-body-4-sb,\n  .desktop-body-5-sb,\n  .desktop-interactive-1-sb,\n  .desktop-interactive-2-sb,\n  .desktop-interactive-3-sb,\n  .desktop-heading-1-sb-serif,\n  .desktop-heading-2-sb-serif,\n  .desktop-heading-3-sb-serif,\n  .desktop-heading-4-sb-serif,\n  .desktop-body-1-sb-serif,\n  .desktop-body-2-sb-serif,\n  .desktop-body-3-sb-serif,\n  .desktop-body-4-sb-serif,\n  .desktop-body-5-sb-serif,\n  .desktop-interactive-1-sb-serif,\n  .desktop-interactive-2-sb-serif,\n  .desktop-interactive-3-sb-serif {\n    font-weight: var(--font-sb);\n  }\n\n  .desktop-heading-1-serif,\n  .desktop-heading-1-sb-serif,\n  .desktop-heading-1-lt-serif,\n  .desktop-heading-2-serif,\n  .desktop-heading-2-sb-serif,\n  .desktop-heading-2-lt-serif,\n  .desktop-heading-3-serif,\n  .desktop-heading-3-sb-serif,\n  .desktop-heading-3-lt-serif,\n  .desktop-heading-4-serif,\n  .desktop-heading-4-sb-serif,\n  .desktop-heading-4-lt-serif,\n  .desktop-body-1-serif,\n  .desktop-body-1-sb-serif,\n  .desktop-body-2-serif,\n  .desktop-body-2-sb-serif,\n  .desktop-body-3-serif,\n  .desktop-body-3-sb-serif,\n  .desktop-body-4-serif,\n  .desktop-body-4-sb-serif,\n  .desktop-body-5-serif,\n  .desktop-body-5-sb-serif,\n  .desktop-interactive-1-serif,\n  .desktop-interactive-1-sb-serif,\n  .desktop-interactive-2-serif,\n  .desktop-interactive-2-sb-serif,\n  .desktop-interactive-3-serif,\n  .desktop-interactive-3-sb-serif {\n    font-family: var(--font-family-serif);\n  }\n}\n\n@media (min-width: 1366px) {\n  .wide-heading-1,\n  .wide-heading-1-sb,\n  .wide-heading-1-lt,\n  .wide-heading-1-serif,\n  .wide-heading-1-sb-serif,\n  .wide-heading-1-lt-serif {\n    font-size: var(--font-size-8);\n    font-weight: var(--font-rg);\n    line-height: 1.25;\n  }\n\n  .wide-heading-2,\n  .wide-heading-2-sb,\n  .wide-heading-2-lt,\n  .wide-heading-2-serif,\n  .wide-heading-2-sb-serif,\n  .wide-heading-2-lt-serif {\n    font-size: var(--font-size-7);\n    font-weight: var(--font-rg);\n    line-height: 1.28;\n  }\n\n  .wide-heading-3,\n  .wide-heading-3-sb,\n  .wide-heading-3-lt,\n  .wide-heading-3-serif,\n  .wide-heading-3-sb-serif,\n  .wide-heading-3-lt-serif {\n    font-size: var(--font-size-6);\n    font-weight: var(--font-rg);\n    line-height: 1.333;\n  }\n\n  .wide-heading-4,\n  .wide-heading-4-sb,\n  .wide-heading-4-lt,\n  .wide-heading-4-serif,\n  .wide-heading-4-sb-serif,\n  .wide-heading-4-lt-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .wide-body-1,\n  .wide-body-1-sb,\n  .wide-body-1-serif,\n  .wide-body-1-sb-serif {\n    font-size: var(--font-size-5);\n    font-weight: var(--font-rg);\n    line-height: 1.4;\n  }\n\n  .wide-body-2,\n  .wide-body-2-sb,\n  .wide-body-2-serif,\n  .wide-body-2-sb-serif {\n    font-size: var(--font-size-4);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .wide-body-3,\n  .wide-body-3-sb,\n  .wide-body-3-serif,\n  .wide-body-3-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .wide-body-4,\n  .wide-body-4-sb,\n  .wide-body-4-serif,\n  .wide-body-4-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .wide-body-5,\n  .wide-body-5-sb,\n  .wide-body-5-serif,\n  .wide-body-5-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .wide-interactive-1,\n  .wide-interactive-1-sb,\n  .wide-interactive-1-serif,\n  .wide-interactive-1-sb-serif {\n    font-size: var(--font-size-3);\n    font-weight: var(--font-rg);\n    line-height: 1.5;\n  }\n\n  .wide-interactive-2,\n  .wide-interactive-2-sb,\n  .wide-interactive-2-serif,\n  .wide-interactive-2-sb-serif {\n    font-size: var(--font-size-2);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.16px;\n    line-height: 1.4;\n  }\n\n  .wide-interactive-3,\n  .wide-interactive-3-sb,\n  .wide-interactive-3-serif,\n  .wide-interactive-3-sb-serif {\n    font-size: var(--font-size-1);\n    font-weight: var(--font-rg);\n    letter-spacing: 0.32px;\n    line-height: 1.333;\n  }\n\n  .wide-section-title-1 {\n    font: var(--section-title-1);\n  }\n\n  .wide-section-title-2 {\n    font: var(--section-title-2);\n  }\n\n  .wide-section-title-3 {\n    font: var(--section-title-3);\n  }\n\n  .wide-section-title-4 {\n    font: var(--section-title-4);\n  }\n\n  .wide-section-title-5 {\n    font: var(--section-title-5);\n  }\n\n  .wide-section-title-6 {\n    font: var(--section-title-6);\n  }\n\n  .wide-heading-1-lt,\n  .wide-heading-2-lt,\n  .wide-heading-3-lt,\n  .wide-heading-4-lt,\n  .wide-heading-1-lt-serif,\n  .wide-heading-2-lt-serif,\n  .wide-heading-3-lt-serif,\n  .wide-heading-4-lt-serif {\n    font-weight: var(--font-lt);\n  }\n\n  .wide-heading-1-sb,\n  .wide-heading-2-sb,\n  .wide-heading-3-sb,\n  .wide-heading-4-sb,\n  .wide-body-1-sb,\n  .wide-body-2-sb,\n  .wide-body-3-sb,\n  .wide-body-4-sb,\n  .wide-body-5-sb,\n  .wide-interactive-1-sb,\n  .wide-interactive-2-sb,\n  .wide-interactive-3-sb,\n  .wide-heading-1-sb-serif,\n  .wide-heading-2-sb-serif,\n  .wide-heading-3-sb-serif,\n  .wide-heading-4-sb-serif,\n  .wide-body-1-sb-serif,\n  .wide-body-2-sb-serif,\n  .wide-body-3-sb-serif,\n  .wide-body-4-sb-serif,\n  .wide-body-5-sb-serif,\n  .wide-interactive-1-sb-serif,\n  .wide-interactive-2-sb-serif,\n  .wide-interactive-3-sb-serif {\n    font-weight: var(--font-sb);\n  }\n\n  .wide-heading-1-serif,\n  .wide-heading-1-sb-serif,\n  .wide-heading-1-lt-serif,\n  .wide-heading-2-serif,\n  .wide-heading-2-sb-serif,\n  .wide-heading-2-lt-serif,\n  .wide-heading-3-serif,\n  .wide-heading-3-sb-serif,\n  .wide-heading-3-lt-serif,\n  .wide-heading-4-serif,\n  .wide-heading-4-sb-serif,\n  .wide-heading-4-lt-serif,\n  .wide-body-1-serif,\n  .wide-body-1-sb-serif,\n  .wide-body-2-serif,\n  .wide-body-2-sb-serif,\n  .wide-body-3-serif,\n  .wide-body-3-sb-serif,\n  .wide-body-4-serif,\n  .wide-body-4-sb-serif,\n  .wide-body-5-serif,\n  .wide-body-5-sb-serif,\n  .wide-interactive-1-serif,\n  .wide-interactive-1-sb-serif,\n  .wide-interactive-2-serif,\n  .wide-interactive-2-sb-serif,\n  .wide-interactive-3-serif,\n  .wide-interactive-3-sb-serif {\n    font-family: var(--font-family-serif);\n  }\n}\n\n.heading-1-lt,\n.heading-2-lt,\n.heading-3-lt,\n.heading-4-lt,\n.heading-1-lt-serif,\n.heading-2-lt-serif,\n.heading-3-lt-serif,\n.heading-4-lt-serif {\n  font-weight: var(--font-lt);\n}\n\n.heading-1-sb,\n.heading-2-sb,\n.heading-3-sb,\n.heading-4-sb,\n.body-1-sb,\n.body-2-sb,\n.body-3-sb,\n.body-4-sb,\n.body-5-sb,\n.interactive-1-sb,\n.interactive-2-sb,\n.interactive-3-sb,\n.helper-sb,\n.heading-1-sb-serif,\n.heading-2-sb-serif,\n.heading-3-sb-serif,\n.heading-4-sb-serif,\n.body-1-sb-serif,\n.body-2-sb-serif,\n.body-3-sb-serif,\n.body-4-sb-serif,\n.body-5-sb-serif,\n.interactive-1-sb-serif,\n.interactive-2-sb-serif,\n.interactive-3-sb-serif,\n.helper-sb-serif {\n  font-weight: var(--font-sb);\n}\n\n.heading-1-serif,\n.heading-1-sb-serif,\n.heading-1-lt-serif,\n.heading-2-serif,\n.heading-2-sb-serif,\n.heading-2-lt-serif,\n.heading-3-serif,\n.heading-3-sb-serif,\n.heading-3-lt-serif,\n.heading-4-serif,\n.heading-4-sb-serif,\n.heading-4-lt-serif,\n.body-1-serif,\n.body-1-sb-serif,\n.body-2-serif,\n.body-2-sb-serif,\n.body-3-serif,\n.body-3-sb-serif,\n.body-4-serif,\n.body-4-sb-serif,\n.body-5-serif,\n.body-5-sb-serif,\n.interactive-1-serif,\n.interactive-1-sb-serif,\n.interactive-2-serif,\n.interactive-2-sb-serif,\n.interactive-3-serif,\n.interactive-3-sb-serif,\n.helper-serif,\n.helper-sb-serif {\n  font-family: var(--font-family-serif);\n}\n\n:root {\n  --space-unit: 8px;\n  --space-unit-1: var(--space-unit);\n  --space-unit-2: calc(var(--space-unit) * 2);\n  --space-unit-3: calc(var(--space-unit) * 3);\n  --space-unit-4: calc(var(--space-unit) * 4);\n  --space-unit-5: calc(var(--space-unit) * 5);\n  --space-unit-6: calc(var(--space-unit) * 6);\n  --space-unit-7: calc(var(--space-unit) * 7);\n  --space-unit-8: calc(var(--space-unit) * 8);\n}\n\n/* Margin classes */\n\n.z-m-0 {\n  margin: 0;\n}\n\n.z-m-1 {\n  margin: var(--space-unit-1);\n}\n\n.z-m-2 {\n  margin: var(--space-unit-2);\n}\n\n.z-m-3 {\n  margin: var(--space-unit-3);\n}\n\n.z-m-4 {\n  margin: var(--space-unit-4);\n}\n\n.z-m-5 {\n  margin: var(--space-unit-5);\n}\n\n.z-m-6 {\n  margin: var(--space-unit-6);\n}\n\n.z-m-7 {\n  margin: var(--space-unit-7);\n}\n\n.z-m-8 {\n  margin: var(--space-unit-8);\n}\n\n.z-mx-0 {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.z-my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.z-mx-1 {\n  margin-right: var(--space-unit-1);\n  margin-left: var(--space-unit-1);\n}\n\n.z-my-1 {\n  margin-top: var(--space-unit-1);\n  margin-bottom: var(--space-unit-1);\n}\n\n.z-mx-2 {\n  margin-right: var(--space-unit-2);\n  margin-left: var(--space-unit-2);\n}\n\n.z-my-2 {\n  margin-top: var(--space-unit-2);\n  margin-bottom: var(--space-unit-2);\n}\n\n.z-mx-3 {\n  margin-right: var(--space-unit-3);\n  margin-left: var(--space-unit-3);\n}\n\n.z-my-3 {\n  margin-top: var(--space-unit-3);\n  margin-bottom: var(--space-unit-3);\n}\n\n.z-mx-4 {\n  margin-right: var(--space-unit-4);\n  margin-left: var(--space-unit-4);\n}\n\n.z-my-4 {\n  margin-top: var(--space-unit-4);\n  margin-bottom: var(--space-unit-4);\n}\n\n.z-mx-5 {\n  margin-right: var(--space-unit-5);\n  margin-left: var(--space-unit-5);\n}\n\n.z-my-5 {\n  margin-top: var(--space-unit-5);\n  margin-bottom: var(--space-unit-5);\n}\n\n.z-mx-6 {\n  margin-right: var(--space-unit-6);\n  margin-left: var(--space-unit-6);\n}\n\n.z-my-6 {\n  margin-top: var(--space-unit-6);\n  margin-bottom: var(--space-unit-6);\n}\n\n.z-mx-7 {\n  margin-right: var(--space-unit-7);\n  margin-left: var(--space-unit-7);\n}\n\n.z-my-7 {\n  margin-top: var(--space-unit-7);\n  margin-bottom: var(--space-unit-7);\n}\n\n.z-mx-8 {\n  margin-right: var(--space-unit-8);\n  margin-left: var(--space-unit-8);\n}\n\n.z-my-8 {\n  margin-top: var(--space-unit-8);\n  margin-bottom: var(--space-unit-8);\n}\n\n.z-mt-0 {\n  margin-top: 0;\n}\n\n.z-mr-0 {\n  margin-right: 0;\n}\n\n.z-mb-0 {\n  margin-bottom: 0;\n}\n\n.z-ml-0 {\n  margin-left: 0;\n}\n\n.z-mt-1 {\n  margin-top: var(--space-unit-1);\n}\n\n.z-mr-1 {\n  margin-right: var(--space-unit-1);\n}\n\n.z-mb-1 {\n  margin-bottom: var(--space-unit-1);\n}\n\n.z-ml-1 {\n  margin-left: var(--space-unit-1);\n}\n\n.z-mt-2 {\n  margin-top: var(--space-unit-2);\n}\n\n.z-mr-2 {\n  margin-right: var(--space-unit-2);\n}\n\n.z-mb-2 {\n  margin-bottom: var(--space-unit-2);\n}\n\n.z-ml-2 {\n  margin-left: var(--space-unit-2);\n}\n\n.z-mt-3 {\n  margin-top: var(--space-unit-3);\n}\n\n.z-mr-3 {\n  margin-right: var(--space-unit-3);\n}\n\n.z-mb-3 {\n  margin-bottom: var(--space-unit-3);\n}\n\n.z-ml-3 {\n  margin-left: var(--space-unit-3);\n}\n\n.z-mt-4 {\n  margin-top: var(--space-unit-4);\n}\n\n.z-mr-4 {\n  margin-right: var(--space-unit-4);\n}\n\n.z-mb-4 {\n  margin-bottom: var(--space-unit-4);\n}\n\n.z-ml-4 {\n  margin-left: var(--space-unit-4);\n}\n\n.z-mt-5 {\n  margin-top: var(--space-unit-5);\n}\n\n.z-mr-5 {\n  margin-right: var(--space-unit-5);\n}\n\n.z-mb-5 {\n  margin-bottom: var(--space-unit-5);\n}\n\n.z-ml-5 {\n  margin-left: var(--space-unit-5);\n}\n\n.z-mt-6 {\n  margin-top: var(--space-unit-6);\n}\n\n.z-mr-6 {\n  margin-right: var(--space-unit-6);\n}\n\n.z-mb-6 {\n  margin-bottom: var(--space-unit-6);\n}\n\n.z-ml-6 {\n  margin-left: var(--space-unit-6);\n}\n\n.z-mt-7 {\n  margin-top: var(--space-unit-7);\n}\n\n.z-mr-7 {\n  margin-right: var(--space-unit-7);\n}\n\n.z-mb-7 {\n  margin-bottom: var(--space-unit-7);\n}\n\n.z-ml-7 {\n  margin-left: var(--space-unit-7);\n}\n\n.z-mt-8 {\n  margin-top: var(--space-unit-8);\n}\n\n.z-mr-8 {\n  margin-right: var(--space-unit-8);\n}\n\n.z-mb-8 {\n  margin-bottom: var(--space-unit-8);\n}\n\n.z-ml-8 {\n  margin-left: var(--space-unit-8);\n}\n\n/* Padding classes */\n\n.z-p-0 {\n  padding: 0;\n}\n\n.z-p-1 {\n  padding: var(--space-unit-1);\n}\n\n.z-p-2 {\n  padding: var(--space-unit-2);\n}\n\n.z-p-3 {\n  padding: var(--space-unit-3);\n}\n\n.z-p-4 {\n  padding: var(--space-unit-4);\n}\n\n.z-p-5 {\n  padding: var(--space-unit-5);\n}\n\n.z-p-6 {\n  padding: var(--space-unit-6);\n}\n\n.z-p-7 {\n  padding: var(--space-unit-7);\n}\n\n.z-p-8 {\n  padding: var(--space-unit-8);\n}\n\n.z-px-0 {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.z-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.z-px-1 {\n  padding-right: var(--space-unit-1);\n  padding-left: var(--space-unit-1);\n}\n\n.z-py-1 {\n  padding-top: var(--space-unit-1);\n  padding-bottom: var(--space-unit-1);\n}\n\n.z-px-2 {\n  padding-right: var(--space-unit-2);\n  padding-left: var(--space-unit-2);\n}\n\n.z-py-2 {\n  padding-top: var(--space-unit-2);\n  padding-bottom: var(--space-unit-2);\n}\n\n.z-px-3 {\n  padding-right: var(--space-unit-3);\n  padding-left: var(--space-unit-3);\n}\n\n.z-py-3 {\n  padding-top: var(--space-unit-3);\n  padding-bottom: var(--space-unit-3);\n}\n\n.z-px-4 {\n  padding-right: var(--space-unit-4);\n  padding-left: var(--space-unit-4);\n}\n\n.z-py-4 {\n  padding-top: var(--space-unit-4);\n  padding-bottom: var(--space-unit-4);\n}\n\n.z-px-5 {\n  padding-right: var(--space-unit-5);\n  padding-left: var(--space-unit-5);\n}\n\n.z-py-5 {\n  padding-top: var(--space-unit-5);\n  padding-bottom: var(--space-unit-5);\n}\n\n.z-px-6 {\n  padding-right: var(--space-unit-6);\n  padding-left: var(--space-unit-6);\n}\n\n.z-py-6 {\n  padding-top: var(--space-unit-6);\n  padding-bottom: var(--space-unit-6);\n}\n\n.z-px-7 {\n  padding-right: var(--space-unit-7);\n  padding-left: var(--space-unit-7);\n}\n\n.z-py-7 {\n  padding-top: var(--space-unit-7);\n  padding-bottom: var(--space-unit-7);\n}\n\n.z-px-8 {\n  padding-right: var(--space-unit-8);\n  padding-left: var(--space-unit-8);\n}\n\n.z-py-8 {\n  padding-top: var(--space-unit-8);\n  padding-bottom: var(--space-unit-8);\n}\n\n.z-pt-0 {\n  padding-top: 0;\n}\n\n.z-pr-0 {\n  padding-right: 0;\n}\n\n.z-pb-0 {\n  padding-bottom: 0;\n}\n\n.z-pl-0 {\n  padding-left: 0;\n}\n\n.z-pt-1 {\n  padding-top: var(--space-unit-1);\n}\n\n.z-pr-1 {\n  padding-right: var(--space-unit-1);\n}\n\n.z-pb-1 {\n  padding-bottom: var(--space-unit-1);\n}\n\n.z-pl-1 {\n  padding-left: var(--space-unit-1);\n}\n\n.z-pt-2 {\n  padding-top: var(--space-unit-2);\n}\n\n.z-pr-2 {\n  padding-right: var(--space-unit-2);\n}\n\n.z-pb-2 {\n  padding-bottom: var(--space-unit-2);\n}\n\n.z-pl-2 {\n  padding-left: var(--space-unit-2);\n}\n\n.z-pt-3 {\n  padding-top: var(--space-unit-3);\n}\n\n.z-pr-3 {\n  padding-right: var(--space-unit-3);\n}\n\n.z-pb-3 {\n  padding-bottom: var(--space-unit-3);\n}\n\n.z-pl-3 {\n  padding-left: var(--space-unit-3);\n}\n\n.z-pt-4 {\n  padding-top: var(--space-unit-4);\n}\n\n.z-pr-4 {\n  padding-right: var(--space-unit-4);\n}\n\n.z-pb-4 {\n  padding-bottom: var(--space-unit-4);\n}\n\n.z-pl-4 {\n  padding-left: var(--space-unit-4);\n}\n\n.z-pt-5 {\n  padding-top: var(--space-unit-5);\n}\n\n.z-pr-5 {\n  padding-right: var(--space-unit-5);\n}\n\n.z-pb-5 {\n  padding-bottom: var(--space-unit-5);\n}\n\n.z-pl-5 {\n  padding-left: var(--space-unit-5);\n}\n\n.z-pt-6 {\n  padding-top: var(--space-unit-6);\n}\n\n.z-pr-6 {\n  padding-right: var(--space-unit-6);\n}\n\n.z-pb-6 {\n  padding-bottom: var(--space-unit-6);\n}\n\n.z-pl-6 {\n  padding-left: var(--space-unit-6);\n}\n\n.z-pt-7 {\n  padding-top: var(--space-unit-7);\n}\n\n.z-pr-7 {\n  padding-right: var(--space-unit-7);\n}\n\n.z-pb-7 {\n  padding-bottom: var(--space-unit-7);\n}\n\n.z-pl-7 {\n  padding-left: var(--space-unit-7);\n}\n\n.z-pt-8 {\n  padding-top: var(--space-unit-8);\n}\n\n.z-pr-8 {\n  padding-right: var(--space-unit-8);\n}\n\n.z-pb-8 {\n  padding-bottom: var(--space-unit-8);\n}\n\n.z-pl-8 {\n  padding-left: var(--space-unit-8);\n}\n\n:root {\n  --shadow-color-base: rgb(61 61 61 / 35%);\n  --shadow-inset-2: inset 0 2px 4px 0 var(--shadow-color-base);\n  --shadow-inset-4: inset 0 4px 8px 0 var(--shadow-color-base);\n  --shadow-0: 0 0 0 0 var(--shadow-color-base);\n  --shadow-1: 0 1px 2px 0 var(--shadow-color-base);\n  --shadow-2: 0 2px 4px 0 var(--shadow-color-base);\n  --shadow-3: 0 3px 6px 0 var(--shadow-color-base);\n  --shadow-4: 0 4px 8px 0 var(--shadow-color-base);\n  --shadow-6: 0 6px 12px 0 var(--shadow-color-base);\n  --shadow-8: 0 8px 16px 0 var(--shadow-color-base);\n  --shadow-12: 0 12px 24px 0 var(--shadow-color-base);\n  --shadow-16: 0 16px 32px 0 var(--shadow-color-base);\n  --shadow-24: 0 24px 48px 0 var(--shadow-color-base);\n}\n\n:root {\n  --border-no-radius: 0;\n  --border-size-small: 1px;\n  --border-size-medium: 2px;\n  --border-size-large: 4px;\n  --border-radius-small: 2px;\n  --border-radius: 4px;\n}\n\n:root {\n  --grid-mobile-viewport: 768px;\n  --grid-mobile-column: 4;\n  --grid-mobile-margin: 16px;\n  --grid-mobile-gutter: 16px;\n  --grid-tablet-viewport: 768px;\n  --grid-tablet-column: 8;\n  --grid-tablet-margin: 24px;\n  --grid-tablet-gutter: 24px;\n  --grid-desktop-viewport: 1152px;\n  --grid-desktop-column: 12;\n  --grid-desktop-margin: 24px;\n  --grid-desktop-gutter: 24px;\n  --grid-wide-viewport: 1366px;\n  --grid-wide-column: 12;\n  --grid-wide-margin: 32px;\n  --grid-wide-gutter: 32px;\n  --page-max-width: 1366px;\n\n  /* These variables automatically adapt to the viewport size,\n    that apps don't have to worry about updating the value manually. */\n  --grid-margin: var(--grid-mobile-margin);\n  --grid-gutter: var(--grid-mobile-gutter);\n  --grid-columns: var(--grid-mobile-column);\n}\n\n@media (min-width: 768px) and (max-width: 1151px) {\n  :root {\n    --grid-margin: var(--grid-tablet-margin);\n    --grid-gutter: var(--grid-tablet-gutter);\n    --grid-columns: var(--grid-tablet-column);\n  }\n}\n\n@media (min-width: 1152px) and (max-width: 1365px) {\n  :root {\n    --grid-margin: var(--grid-desktop-margin);\n    --grid-gutter: var(--grid-desktop-gutter);\n    --grid-columns: var(--grid-desktop-column);\n  }\n}\n\n@media (min-width: 1366px) {\n  :root {\n    --grid-margin: var(--grid-wide-margin);\n    --grid-gutter: var(--grid-wide-gutter);\n    --grid-columns: var(--grid-wide-column);\n  }\n}\n\n.z-grid {\n  display: grid;\n  width: 100%;\n  column-gap: var(--grid-gutter);\n  grid-template-columns: repeat(var(--grid-columns), 1fr);\n\n  .col-full {\n    grid-column: 1 / -1;\n  }\n\n  .col-1 {\n    grid-column: span 1;\n  }\n\n  .col-2 {\n    grid-column: span 2;\n  }\n\n  .col-3 {\n    grid-column: span 3;\n  }\n\n  .col-4,\n  .col-5,\n  .col-6,\n  .col-7,\n  .col-8,\n  .col-9,\n  .col-10,\n  .col-11,\n  .col-12 {\n    grid-column: span 4;\n  }\n\n  .col-start-1 {\n    grid-column-start: 1;\n  }\n\n  .col-start-2 {\n    grid-column-start: 2;\n  }\n\n  .col-start-3 {\n    grid-column-start: 3;\n  }\n\n  .col-start-4,\n  .col-start-5,\n  .col-start-6,\n  .col-start-7,\n  .col-start-8,\n  .col-start-9,\n  .col-start-10,\n  .col-start-11,\n  .col-start-12 {\n    grid-column-start: 4;\n  }\n\n  /*\n  .-col-start-1 is intentionally left out\n*/\n\n  .-col-start-2 {\n    grid-column-start: -2;\n  }\n\n  .-col-start-3 {\n    grid-column-start: -3;\n  }\n\n  .-col-start-4 {\n    grid-column-start: -4;\n  }\n\n  .-col-start-5,\n  .-col-start-6,\n  .-col-start-7,\n  .-col-start-8,\n  .-col-start-9,\n  .-col-start-10,\n  .-col-start-11,\n  .-col-start-12,\n  .-col-start-13 {\n    grid-column-start: -5;\n  }\n\n  .col-end-last {\n    grid-column-end: -1;\n  }\n\n  /*\n  .col-end-1 is intentionally left out\n*/\n\n  .col-end-2 {\n    grid-column-end: 2;\n  }\n\n  .col-end-3 {\n    grid-column-end: 3;\n  }\n\n  .col-end-4 {\n    grid-column-end: 4;\n  }\n\n  /*\n  This means \"end this column where column 5 start\",\n  which is the same as saying \"end this column where column 4 end\"\n*/\n  .col-end-5,\n  .col-end-6,\n  .col-end-7,\n  .col-end-8,\n  .col-end-9,\n  .col-end-10,\n  .col-end-11,\n  .col-end-12,\n  .col-end-13 {\n    grid-column-end: 5;\n  }\n\n  .-col-end-1 {\n    grid-column-end: -1;\n  }\n\n  .-col-end-2 {\n    grid-column-end: -2;\n  }\n\n  .-col-end-3 {\n    grid-column-end: -3;\n  }\n\n  .-col-end-4,\n  .-col-end-5,\n  .-col-end-6,\n  .-col-end-7,\n  .-col-end-8,\n  .-col-end-9,\n  .-col-end-10,\n  .-col-end-11,\n  .-col-end-12 {\n    grid-column-end: -4;\n  }\n\n  @media (max-width: 767px) {\n    .mobile-col-full {\n      grid-column: 1 / -1;\n    }\n\n    .mobile-col-1 {\n      grid-column: span 1;\n    }\n\n    .mobile-col-2 {\n      grid-column: span 2;\n    }\n\n    .mobile-col-3 {\n      grid-column: span 3;\n    }\n\n    .mobile-col-4 {\n      grid-column: span 4;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .col-5 {\n      grid-column: span 5;\n    }\n\n    .col-6 {\n      grid-column: span 6;\n    }\n\n    .col-7 {\n      grid-column: span 7;\n    }\n\n    .col-8,\n    .col-9,\n    .col-10,\n    .col-11,\n    .col-12 {\n      grid-column: span 8;\n    }\n\n    .col-start-5 {\n      grid-column-start: 5;\n    }\n\n    .col-start-6 {\n      grid-column-start: 6;\n    }\n\n    .col-start-7 {\n      grid-column-start: 7;\n    }\n\n    .col-start-8,\n    .col-start-9,\n    .col-start-10,\n    .col-start-11,\n    .col-start-12 {\n      grid-column-start: 8;\n    }\n\n    .-col-start-6 {\n      grid-column-start: -6;\n    }\n\n    .-col-start-7 {\n      grid-column-start: -7;\n    }\n\n    .-col-start-8 {\n      grid-column-start: -8;\n    }\n\n    .-col-start-9,\n    .-col-start-10,\n    .-col-start-11,\n    .-col-start-12,\n    .-col-start-13 {\n      grid-column-start: -9;\n    }\n\n    .col-end-6 {\n      grid-column-end: 6;\n    }\n\n    .col-end-7 {\n      grid-column-end: 7;\n    }\n\n    .col-end-8 {\n      grid-column-end: 8;\n    }\n\n    .col-end-9,\n    .col-end-10,\n    .col-end-11,\n    .col-end-12,\n    .col-end-13 {\n      grid-column-end: 9;\n    }\n\n    .-col-end-5 {\n      grid-column-end: -5;\n    }\n\n    .-col-end-6 {\n      grid-column-end: -6;\n    }\n\n    .-col-end-7 {\n      grid-column-end: -7;\n    }\n\n    .-col-end-8,\n    .-col-end-9,\n    .-col-end-10,\n    .-col-end-11,\n    .-col-end-12 {\n      grid-column-end: -8;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 1151px) {\n    .tablet-col-full {\n      grid-column: 1 / -1;\n    }\n\n    .tablet-col-1 {\n      grid-column: span 1;\n    }\n\n    .tablet-col-2 {\n      grid-column: span 2;\n    }\n\n    .tablet-col-3 {\n      grid-column: span 3;\n    }\n\n    .tablet-col-4 {\n      grid-column: span 4;\n    }\n\n    .tablet-col-5 {\n      grid-column: span 5;\n    }\n\n    .tablet-col-6 {\n      grid-column: span 6;\n    }\n\n    .tablet-col-7 {\n      grid-column: span 7;\n    }\n\n    .tablet-col-8 {\n      grid-column: span 8;\n    }\n\n    .tablet-col-start-1 {\n      grid-column-start: 1;\n    }\n\n    .tablet-col-start-2 {\n      grid-column-start: 2;\n    }\n\n    .tablet-col-start-3 {\n      grid-column-start: 3;\n    }\n\n    .tablet-col-start-4 {\n      grid-column-start: 4;\n    }\n\n    .tablet-col-start-5 {\n      grid-column-start: 5;\n    }\n\n    .tablet-col-start-6 {\n      grid-column-start: 6;\n    }\n\n    .tablet-col-start-7 {\n      grid-column-start: 7;\n    }\n\n    .tablet-col-start-8 {\n      grid-column-start: 8;\n    }\n\n    .-tablet-col-start-2 {\n      grid-column-start: -2;\n    }\n\n    .-tablet-col-start-3 {\n      grid-column-start: -3;\n    }\n\n    .-tablet-col-start-4 {\n      grid-column-start: -4;\n    }\n\n    .-tablet-col-start-5 {\n      grid-column-start: -5;\n    }\n\n    .-tablet-col-start-6 {\n      grid-column-start: -6;\n    }\n\n    .-tablet-col-start-7 {\n      grid-column-start: -7;\n    }\n\n    .-tablet-col-start-8 {\n      grid-column-start: -8;\n    }\n\n    .tablet-col-end-2 {\n      grid-column-end: 2;\n    }\n\n    .tablet-col-end-3 {\n      grid-column-end: 3;\n    }\n\n    .tablet-col-end-4 {\n      grid-column-end: 4;\n    }\n\n    .tablet-col-end-6 {\n      grid-column-end: 6;\n    }\n\n    .tablet-col-end-7 {\n      grid-column-end: 7;\n    }\n\n    .tablet-col-end-8 {\n      grid-column-end: 8;\n    }\n\n    .tablet-col-end-last {\n      grid-column-end: -1;\n    }\n\n    .-tablet-col-end-1 {\n      grid-column-end: -1;\n    }\n\n    .-tablet-col-end-2 {\n      grid-column-end: -2;\n    }\n\n    .-tablet-col-end-3 {\n      grid-column-end: -3;\n    }\n\n    .-tablet-col-end-4 {\n      grid-column-end: -4;\n    }\n\n    .-tablet-col-end-5 {\n      grid-column-end: -5;\n    }\n\n    .-tablet-col-end-6 {\n      grid-column-end: -6;\n    }\n\n    .-tablet-col-end-7 {\n      grid-column-end: -7;\n    }\n\n    .-tablet-col-end-8 {\n      grid-column-end: -8;\n    }\n  }\n\n  @media (min-width: 1152px) {\n    .col-9 {\n      grid-column: span 9;\n    }\n\n    .col-10 {\n      grid-column: span 10;\n    }\n\n    .col-11 {\n      grid-column: span 11;\n    }\n\n    .col-12 {\n      grid-column: span 12;\n    }\n\n    .col-start-9 {\n      grid-column-start: 9;\n    }\n\n    .col-start-10 {\n      grid-column-start: 10;\n    }\n\n    .col-start-11 {\n      grid-column-start: 11;\n    }\n\n    .col-start-12 {\n      grid-column-start: 12;\n    }\n\n    .-col-start-10 {\n      grid-column-start: -10;\n    }\n\n    .-col-start-11 {\n      grid-column-start: -11;\n    }\n\n    .-col-start-12 {\n      grid-column-start: -12;\n    }\n\n    .-col-start-13 {\n      grid-column-start: -13;\n    }\n\n    .col-end-10 {\n      grid-column-end: 10;\n    }\n\n    .col-end-11 {\n      grid-column-end: 11;\n    }\n\n    .col-end-12 {\n      grid-column-end: 12;\n    }\n\n    .col-end-13 {\n      grid-column-end: 13;\n    }\n\n    .-col-end-9 {\n      grid-column-end: -9;\n    }\n\n    .-col-end-10 {\n      grid-column-end: -10;\n    }\n\n    .-col-end-11 {\n      grid-column-end: -11;\n    }\n\n    .-col-end-12 {\n      grid-column-end: -12;\n    }\n  }\n\n  @media (min-width: 1152px) and (max-width: 1365px) {\n    .desktop-col-full {\n      grid-column: 1 / -1;\n    }\n\n    .desktop-col-1 {\n      grid-column: span 1;\n    }\n\n    .desktop-col-2 {\n      grid-column: span 2;\n    }\n\n    .desktop-col-3 {\n      grid-column: span 3;\n    }\n\n    .desktop-col-4 {\n      grid-column: span 4;\n    }\n\n    .desktop-col-5 {\n      grid-column: span 5;\n    }\n\n    .desktop-col-6 {\n      grid-column: span 6;\n    }\n\n    .desktop-col-7 {\n      grid-column: span 7;\n    }\n\n    .desktop-col-8 {\n      grid-column: span 8;\n    }\n\n    .desktop-col-9 {\n      grid-column: span 9;\n    }\n\n    .desktop-col-10 {\n      grid-column: span 10;\n    }\n\n    .desktop-col-11 {\n      grid-column: span 11;\n    }\n\n    .desktop-col-12 {\n      grid-column: span 12;\n    }\n\n    .desktop-col-start-1 {\n      grid-column-start: 1;\n    }\n\n    .desktop-col-start-2 {\n      grid-column-start: 2;\n    }\n\n    .desktop-col-start-3 {\n      grid-column-start: 3;\n    }\n\n    .desktop-col-start-4 {\n      grid-column-start: 4;\n    }\n\n    .desktop-col-start-5 {\n      grid-column-start: 5;\n    }\n\n    .desktop-col-start-6 {\n      grid-column-start: 6;\n    }\n\n    .desktop-col-start-7 {\n      grid-column-start: 7;\n    }\n\n    .desktop-col-start-8 {\n      grid-column-start: 8;\n    }\n\n    .desktop-col-start-9 {\n      grid-column-start: 9;\n    }\n\n    .desktop-col-start-10 {\n      grid-column-start: 10;\n    }\n\n    .desktop-col-start-11 {\n      grid-column-start: 11;\n    }\n\n    .desktop-col-start-12 {\n      grid-column-start: 12;\n    }\n\n    .-desktop-col-start-2 {\n      grid-column-start: -2;\n    }\n\n    .-desktop-col-start-3 {\n      grid-column-start: -3;\n    }\n\n    .-desktop-col-start-4 {\n      grid-column-start: -4;\n    }\n\n    .-desktop-col-start-5 {\n      grid-column-start: -5;\n    }\n\n    .-desktop-col-start-6 {\n      grid-column-start: -6;\n    }\n\n    .-desktop-col-start-7 {\n      grid-column-start: -7;\n    }\n\n    .-desktop-col-start-8 {\n      grid-column-start: -8;\n    }\n\n    .-desktop-col-start-9 {\n      grid-column-start: -9;\n    }\n\n    .-desktop-col-start-10 {\n      grid-column-start: -10;\n    }\n\n    .-desktop-col-start-11 {\n      grid-column-start: -11;\n    }\n\n    .-desktop-col-start-12 {\n      grid-column-start: -12;\n    }\n\n    .desktop-col-end-2 {\n      grid-column-end: 2;\n    }\n\n    .desktop-col-end-3 {\n      grid-column-end: 3;\n    }\n\n    .desktop-col-end-4 {\n      grid-column-end: 4;\n    }\n\n    .desktop-col-end-6 {\n      grid-column-end: 6;\n    }\n\n    .desktop-col-end-7 {\n      grid-column-end: 7;\n    }\n\n    .desktop-col-end-8 {\n      grid-column-end: 8;\n    }\n\n    .desktop-col-end-9 {\n      grid-column-end: 9;\n    }\n\n    .desktop-col-end-10 {\n      grid-column-end: 10;\n    }\n\n    .desktop-col-end-11 {\n      grid-column-end: 11;\n    }\n\n    .desktop-col-end-12 {\n      grid-column-end: 12;\n    }\n\n    .desktop-col-end-last {\n      grid-column-end: -1;\n    }\n\n    .-desktop-col-end-1 {\n      grid-column-end: -1;\n    }\n\n    .-desktop-col-end-2 {\n      grid-column-end: -2;\n    }\n\n    .-desktop-col-end-3 {\n      grid-column-end: -3;\n    }\n\n    .-desktop-col-end-4 {\n      grid-column-end: -4;\n    }\n\n    .-desktop-col-end-5 {\n      grid-column-end: -5;\n    }\n\n    .-desktop-col-end-6 {\n      grid-column-end: -6;\n    }\n\n    .-desktop-col-end-7 {\n      grid-column-end: -7;\n    }\n\n    .-desktop-col-end-8 {\n      grid-column-end: -8;\n    }\n\n    .-desktop-col-end-9 {\n      grid-column-end: -9;\n    }\n\n    .-desktop-col-end-10 {\n      grid-column-end: -10;\n    }\n\n    .-desktop-col-end-11 {\n      grid-column-end: -11;\n    }\n\n    .-desktop-col-end-12 {\n      grid-column-end: -12;\n    }\n  }\n\n  @media (min-width: 1366px) {\n    .wide-col-full {\n      grid-column: 1 / -1;\n    }\n\n    .wide-col-1 {\n      grid-column: span 1;\n    }\n\n    .wide-col-2 {\n      grid-column: span 2;\n    }\n\n    .wide-col-3 {\n      grid-column: span 3;\n    }\n\n    .wide-col-4 {\n      grid-column: span 4;\n    }\n\n    .wide-col-5 {\n      grid-column: span 5;\n    }\n\n    .wide-col-6 {\n      grid-column: span 6;\n    }\n\n    .wide-col-7 {\n      grid-column: span 7;\n    }\n\n    .wide-col-8 {\n      grid-column: span 8;\n    }\n\n    .wide-col-9 {\n      grid-column: span 9;\n    }\n\n    .wide-col-10 {\n      grid-column: span 10;\n    }\n\n    .wide-col-11 {\n      grid-column: span 11;\n    }\n\n    .wide-col-12 {\n      grid-column: span 12;\n    }\n\n    .wide-col-start-1 {\n      grid-column-start: 1;\n    }\n\n    .wide-col-start-2 {\n      grid-column-start: 2;\n    }\n\n    .wide-col-start-3 {\n      grid-column-start: 3;\n    }\n\n    .wide-col-start-4 {\n      grid-column-start: 4;\n    }\n\n    .wide-col-start-5 {\n      grid-column-start: 5;\n    }\n\n    .wide-col-start-6 {\n      grid-column-start: 6;\n    }\n\n    .wide-col-start-7 {\n      grid-column-start: 7;\n    }\n\n    .wide-col-start-8 {\n      grid-column-start: 8;\n    }\n\n    .wide-col-start-9 {\n      grid-column-start: 9;\n    }\n\n    .wide-col-start-10 {\n      grid-column-start: 10;\n    }\n\n    .wide-col-start-11 {\n      grid-column-start: 11;\n    }\n\n    .wide-col-start-12 {\n      grid-column-start: 12;\n    }\n\n    .-wide-col-start-2 {\n      grid-column-start: -2;\n    }\n\n    .-wide-col-start-3 {\n      grid-column-start: -3;\n    }\n\n    .-wide-col-start-4 {\n      grid-column-start: -4;\n    }\n\n    .-wide-col-start-5 {\n      grid-column-start: -5;\n    }\n\n    .-wide-col-start-6 {\n      grid-column-start: -6;\n    }\n\n    .-wide-col-start-7 {\n      grid-column-start: -7;\n    }\n\n    .-wide-col-start-8 {\n      grid-column-start: -8;\n    }\n\n    .-wide-col-start-9 {\n      grid-column-start: -9;\n    }\n\n    .-wide-col-start-10 {\n      grid-column-start: -10;\n    }\n\n    .-wide-col-start-11 {\n      grid-column-start: -11;\n    }\n\n    .-wide-col-start-12 {\n      grid-column-start: -12;\n    }\n\n    .wide-col-end-2 {\n      grid-column-end: 2;\n    }\n\n    .wide-col-end-3 {\n      grid-column-end: 3;\n    }\n\n    .wide-col-end-4 {\n      grid-column-end: 4;\n    }\n\n    .wide-col-end-6 {\n      grid-column-end: 6;\n    }\n\n    .wide-col-end-7 {\n      grid-column-end: 7;\n    }\n\n    .wide-col-end-8 {\n      grid-column-end: 8;\n    }\n\n    .wide-col-end-9 {\n      grid-column-end: 9;\n    }\n\n    .wide-col-end-10 {\n      grid-column-end: 10;\n    }\n\n    .wide-col-end-11 {\n      grid-column-end: 11;\n    }\n\n    .wide-col-end-12 {\n      grid-column-end: 12;\n    }\n\n    .wide-col-end-last {\n      grid-column-end: -1;\n    }\n\n    .-wide-col-end-1 {\n      grid-column-end: -1;\n    }\n\n    .-wide-col-end-2 {\n      grid-column-end: -2;\n    }\n\n    .-wide-col-end-3 {\n      grid-column-end: -3;\n    }\n\n    .-wide-col-end-4 {\n      grid-column-end: -4;\n    }\n\n    .-wide-col-end-5 {\n      grid-column-end: -5;\n    }\n\n    .-wide-col-end-6 {\n      grid-column-end: -6;\n    }\n\n    .-wide-col-end-7 {\n      grid-column-end: -7;\n    }\n\n    .-wide-col-end-8 {\n      grid-column-end: -8;\n    }\n\n    .-wide-col-end-9 {\n      grid-column-end: -9;\n    }\n\n    .-wide-col-end-10 {\n      grid-column-end: -10;\n    }\n\n    .-wide-col-end-11 {\n      grid-column-end: -11;\n    }\n\n    .-wide-col-end-12 {\n      grid-column-end: -12;\n    }\n  }\n}\n\n/* Default size: big. Default color variant: primary01 */\n.z-fab {\n  --z-fab-right-offset: var(--grid-margin);\n  --z-fab-bottom-offset: var(--grid-margin);\n  --z-fab-icon-size: 20px;\n  --z-fab-icon-fill: var(--color-inverse-icon);\n\n  position: fixed;\n  z-index: 1;\n  right: var(--z-fab-right-offset);\n  bottom: var(--z-fab-bottom-offset);\n  display: flex;\n  max-width: 48px;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 14px;\n  background-color: var(--color-primary01);\n  border-radius: 24px;\n  box-shadow: var(--shadow-4);\n  color: var(--color-text-inverse);\n  column-gap: 0;\n  cursor: pointer;\n  font-family: var(--font-family-sans);\n  font-size: var(--font-size-3);\n  font-weight: var(--font-rg);\n  line-height: 1.25;\n  transition: all 0.2s ease-in-out;\n}\n\n.z-fab:focus {\n  box-shadow: var(--shadow-focus-primary);\n  outline: none;\n}\n\nbutton.z-fab {\n  border: none;\n}\n\na.z-fab {\n  text-decoration: none;\n}\n\n.z-fab.z-fab-small {\n  --z-fab-icon-size: 18px;\n\n  max-width: 42px;\n  padding: 12px;\n  border-radius: 21px;\n  font-size: var(--font-size-2);\n  line-height: 1.285;\n}\n\n.z-fab.z-fab-x-small {\n  --z-fab-icon-size: 16px;\n\n  max-width: 36px;\n  padding: 10px;\n  border-radius: 18px;\n  font-size: var(--font-size-1);\n  line-height: 1.333;\n}\n\n.z-fab.z-fab-extended {\n  max-width: 100%;\n  column-gap: var(--space-unit);\n}\n\n.z-fab.z-fab-extended.z-fab-x-small {\n  column-gap: calc(var(--space-unit) / 2);\n}\n\n.z-fab.z-fab-extended > *:not(z-icon) {\n  opacity: 1;\n}\n\n/* color variants */\n.z-fab.z-fab-primary03 {\n  --z-fab-icon-fill: var(--color-primary01-icon);\n\n  background-color: var(--color-primary03);\n  color: var(--color-primary01-icon);\n}\n\n.z-fab.z-fab-surface01 {\n  --z-fab-icon-fill: var(--color-primary01-icon);\n\n  background-color: var(--color-surface01);\n  color: var(--color-primary01-icon);\n}\n\n.z-fab.z-fab-surface02 {\n  --z-fab-icon-fill: var(--color-primary01-icon);\n\n  background-color: var(--color-background);\n  color: var(--color-primary01-icon);\n}\n\n.z-fab.z-fab-surface04 {\n  --z-fab-icon-fill: var(--color-inverse-icon);\n\n  background-color: var(--color-surface04);\n  color: var(--color-text-inverse);\n}\n\n.z-fab z-icon {\n  --z-icon-width: var(--z-fab-icon-size);\n  --z-icon-height: var(--z-fab-icon-size);\n\n  fill: var(--z-fab-icon-fill);\n}\n\n.z-fab > *:not(z-icon) {\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  white-space: nowrap;\n}\n\n.z-fab.z-fab-extended > *:not(z-icon:first-child) {\n  opacity: 1;\n}\n\n@media (hover: hover) {\n  .z-fab.z-fab-extendable:hover {\n    max-width: 100%;\n    column-gap: var(--space-unit);\n  }\n\n  .z-fab.z-fab-extendable:hover > *:not(z-icon:first-child) {\n    opacity: 1;\n  }\n\n  .z-fab.z-fab-x-small.z-fab-extendable:hover {\n    column-gap: calc(var(--space-unit) / 2);\n  }\n}\n\n.z-label {\n  display: inline-block;\n  padding-bottom: calc(var(--space-unit) / 2);\n  color: var(--color-default-text);\n  font-family: var(--font-family-sans);\n  font-size: var(--font-size-2);\n  font-weight: var(--font-sb);\n  line-height: 1.25rem;\n  text-align: left;\n}\n\n.z-label::first-letter {\n  text-transform: uppercase;\n}\n\nbutton.z-link {\n  padding: 0;\n  border: 0;\n  margin: 0;\n  background-color: transparent;\n}\n\na.z-link,\nbutton.z-link {\n  display: inline-flex;\n  cursor: pointer;\n  font-family: var(--font-family-sans);\n  line-height: inherit;\n  text-decoration: none;\n}\n\na.z-link.z-link-icon,\nbutton.z-link.z-link-icon {\n  --z-icon-width: 1.125em;\n  --z-icon-height: 1.125em;\n\n  align-items: center;\n  column-gap: 0.5em;\n}\n\na.z-link.z-link-sb,\nbutton.z-link.z-link-sb {\n  font-weight: var(--font-sb);\n}\n\na.z-link.z-link-underline,\nbutton.z-link.z-link-underline {\n  text-decoration: underline;\n}\n\na.z-link:hover,\nbutton.z-link:hover,\na.z-link:focus-visible,\nbutton.z-link:focus-visible,\na.z-link:active,\nbutton.z-link:active {\n  text-decoration: underline;\n}\n\na.z-link:focus-visible,\nbutton.z-link:focus-visible {\n  box-shadow: var(--shadow-focus-primary);\n  outline: none;\n}\n\na.z-link.z-link-disabled,\nbutton.z-link.z-link-disabled {\n  box-shadow: none;\n  color: var(--color-disabled03);\n  cursor: default;\n  fill: var(--color-disabled03);\n  outline: none;\n  pointer-events: none;\n  text-decoration: none;\n}\n\na.z-link,\nbutton.z-link,\na.z-link.z-link-active,\nbutton.z-link.z-link-active,\na.z-link:hover,\nbutton.z-link:hover,\na.z-link.z-link-active:hover,\nbutton.z-link.z-link-active:hover,\na.z-link:focus-visible,\nbutton.z-link:focus-visible,\na.z-link.z-link-active:focus-visible,\nbutton.z-link.z-link-active:focus-visible,\na.z-link:active,\nbutton.z-link:active,\na.z-link.z-link-active:active,\nbutton.z-link.z-link-active:active,\na.z-link:visited,\nbutton.z-link:visited,\na.z-link.z-link-active:visited,\nbutton.z-link.z-link-active:visited {\n  color: var(--color-text-link-default);\n  fill: var(--color-text-link-default);\n}\n\na.z-link.z-link-blue,\nbutton.z-link.z-link-blue,\na.z-link.z-link-blue.z-link-active,\nbutton.z-link.z-link-blue.z-link-active {\n  color: var(--color-text-link-blue);\n  fill: var(--color-text-link-blue);\n}\n\na.z-link.z-link-red,\nbutton.z-link.z-link-red,\na.z-link.z-link-red.z-link-active,\nbutton.z-link.z-link-red.z-link-active {\n  color: var(--color-text-link-red);\n  fill: var(--color-text-link-red);\n}\n\na.z-link.z-link-inverse,\nbutton.z-link.z-link-inverse,\na.z-link.z-link-inverse.z-link-active,\nbutton.z-link.z-link-inverse.z-link-active {\n  color: var(--color-text-link-inverse);\n  fill: var(--color-text-link-inverse);\n}\n\na.z-link.z-link-blue:hover,\nbutton.z-link.z-link-blue:hover {\n  color: var(--color-text-link-blue-hover);\n  fill: var(--color-text-link-blue-hover);\n}\n\na.z-link.z-link-red:hover,\nbutton.z-link.z-link-red:hover {\n  color: var(--color-text-link-red-hover);\n  fill: var(--color-text-link-red-hover);\n}\n\na.z-link.z-link-inverse:hover,\nbutton.z-link.z-link-inverse:hover {\n  color: var(--color-text-link-inverse);\n  fill: var(--color-text-link-inverse);\n}\n\na.z-link.z-link-blue:active,\nbutton.z-link.z-link-blue:active,\na.z-link.z-link-blue:focus-visible,\nbutton.z-link.z-link-blue:focus-visible {\n  color: var(--color-text-link-blue-active);\n  fill: var(--color-text-link-blue-active);\n}\n\na.z-link.z-link-red:active,\nbutton.z-link.z-link-red:active,\na.z-link.z-link-red:focus-visible,\nbutton.z-link.z-link-red:focus-visible {\n  color: var(--color-text-link-red-active);\n  fill: var(--color-text-link-red-active);\n}\n\na.z-link.z-link-inverse:active,\nbutton.z-link.z-link-inverse:active,\na.z-link.z-link-inverse:focus-visible,\nbutton.z-link.z-link-inverse:focus-visible {\n  color: var(--color-text-link-inverse);\n  fill: var(--color-text-link-inverse);\n}\n\na.z-link.z-link-blue:visited,\nbutton.z-link.z-link-blue:visited {\n  color: var(--color-text-link-blue-visited);\n  fill: var(--color-text-link-blue-visited);\n}\n\na.z-link.z-link-red:visited,\nbutton.z-link.z-link-red:visited {\n  color: var(--color-text-link-red-visited);\n  fill: var(--color-text-link-red-visited);\n}\n\na.z-link.z-link-inverse:visited,\nbutton.z-link.z-link-inverse:visited {\n  color: var(--color-text-link-inverse);\n  fill: var(--color-text-link-inverse);\n}\n\n/* Webkit Scrollbar */\n.z-scrollbar {\n  --z-scrollbar-track-gradient: linear-gradient(\n    to right,\n    transparent 0 1px,\n    var(--gray200) 1px 5px,\n    transparent 5px 6px\n  );\n  --z-scrollbar-track-color: var(--gray200);\n  --z-scrollbar-thumb-color: var(--color-primary01);\n  --z-scrollbar-thumb-hover-color: var(--color-hover-primary);\n  --z-scrollbar-corner-color: transparent;\n}\n\n.z-scrollbar::-webkit-scrollbar {\n  width: 6px;\n  background: var(--z-scrollbar-track-gradient);\n}\n\n.z-scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--z-scrollbar-thumb-color);\n}\n\n.z-scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--z-scrollbar-thumb-hover-color);\n}\n\n.z-scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--z-scrollbar-corner-color);\n}\n\n/* Dark theme */\n:host([theme=\"dark\"]) .z-scrollbar,\n.z-scrollbar--dark {\n  --z-scrollbar-track-gradient: linear-gradient(\n    to right,\n    transparent 0 1px,\n    var(--gray600) 1px 5px,\n    transparent 5px 6px\n  );\n  --z-scrollbar-track-color: var(--gray600);\n  --z-scrollbar-thumb-color: var(--color-white);\n  --z-scrollbar-thumb-hover-color: var(--gray500);\n  --z-scrollbar-corner-color: transparent;\n}\n\n/* Red theme */\n.theme-red .z-scrollbar {\n  --z-scrollbar-track-gradient: linear-gradient(\n    to right,\n    transparent 0 1px,\n    var(--gray200) 1px 5px,\n    transparent 5px 6px\n  );\n  --z-scrollbar-track-color: var(--gray200);\n  --z-scrollbar-thumb-color: var(--red500);\n  --z-scrollbar-thumb-hover-color: var(--red700);\n  --z-scrollbar-corner-color: transparent;\n}\n\n.theme-black.theme-black--red .z-scrollbar,\n.theme-black.theme-black--yellow .z-scrollbar {\n  --z-scrollbar-track-gradient: linear-gradient(\n    to right,\n    transparent 0 1px,\n    var(--gray200) 1px 5px,\n    transparent 5px 6px\n  );\n  --z-scrollbar-track-color: var(--gray200);\n  --z-scrollbar-thumb-color: var(--gray950);\n  --z-scrollbar-thumb-hover-color: var(--gray900);\n  --z-scrollbar-corner-color: transparent;\n}\n\n/* Firefox Scrollbar */\n@supports not selector(.z-scrollbar::-webkit-scrollbar-track) {\n  .z-scrollbar {\n    scrollbar-color: var(--z-scrollbar-thumb-color) var(--z-scrollbar-track-color);\n  }\n}\n\nz-table,\ntable.z-table {\n  background-color: var(--color-surface01);\n\n  --z-table--cells-padding: calc(var(--space-unit) * 2);\n}\n\ntable.z-table {\n  border-collapse: collapse;\n}\n\nz-thead,\ntable.z-table thead {\n  background-color: var(--color-background);\n\n  --z-table--cells-bottom-border-size: var(--border-size-medium);\n}\n\nz-tfoot,\ntable.z-table tfoot {\n  border-top: var(--border-size-medium) solid var(--color-surface03);\n  border-bottom: var(--border-size-medium) solid var(--color-surface03);\n}\n\nz-tfoot z-tr,\ntable.z-table tfoot tr {\n  border-bottom: calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important;\n}\n\nz-tr,\ntable.z-table tr {\n  border-bottom: var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03);\n}\n\nz-td,\nz-th,\ntable.z-table td,\ntable.z-table th {\n  padding: var(--z-table--cells-padding, calc(var(--space-unit) * 2));\n  text-align: left;\n}\n\nz-th:not(:first-child),\nz-td:not(:first-child),\ntable.z-table th:not(:first-child),\ntable.z-table td:not(:first-child) {\n  border-left: var(--z-table--cell-left-border, none);\n}\n\nz-table[bordered],\ntable.z-table.z-table-bordered {\n  --z-table--cell-left-border: 1px solid var(--color-surface03);\n}\n\ntable.z-table-hover > tbody > tr:hover > td,\ntable.z-table-hover > tfoot > tr:hover > td {\n  position: relative;\n  background-color: var(--color-surface02);\n}\n\ntable.z-table-hover > tbody > tr:hover > td::after,\ntable.z-table-hover > tfoot > tr:hover > td::after {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -1px;\n  box-shadow:\n    inset 0 var(--border-size-small) 0 var(--color-surface04),\n    inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);\n  content: \"\";\n}\n\ntable.z-table-hover > tbody > tr:hover > td:first-child::after,\ntable.z-table-hover > thead > tr:hover > th:first-child::after,\ntable.z-table-hover > tfoot > tr:hover > td:first-child::after {\n  left: 0;\n}\n\n\n\n:root,\n.theme-default {\n  --color-background: var(--gray50);\n  --shadow-focus-primary: 0 0 0 2px var(--color-white), 0 0 2px 5px var(--blue800);\n\n  /* primary */\n  --color-active-primary: var(--blue400);\n  --color-hover-primary: var(--blue800);\n  --color-pressed-primary: var(--blue400);\n  --color-primary01: var(--blue500);\n  --color-primary02: var(--blue25);\n  --color-primary03: var(--blue50);\n\n  /* secondary */\n  --color-active-secondary: var(--red400);\n  --color-hover-secondary: var(--red800);\n  --color-pressed-secondary: var(--red400);\n  --color-secondary01: var(--red500);\n  --color-secondary02: var(--red25);\n  --color-secondary03: var(--red50);\n  --color-button-secondary: var(--color-surface01);\n\n  /* surface */\n  --color-surface01: var(--color-white);\n  --color-surface02: var(--gray100);\n  --color-surface03: var(--gray300);\n  --color-surface04: var(--gray700);\n  --color-surface05: var(--gray900);\n\n  /* text */\n  --color-default-text: var(--gray900);\n  --color-hover-text: var(--gray800);\n  --color-pressed-text: var(--gray700);\n  --color-text-inverse: var(--color-white);\n  --color-text02: var(--gray100);\n  --color-text03: var(--gray300);\n  --color-text05: var(--gray500);\n\n  /* disabled */\n  --color-disabled01: var(--gray300);\n  --color-disabled02: var(--gray100);\n  --color-disabled03: var(--gray500);\n\n  /* icons */\n  --color-active-primary-icon: var(--blue400);\n  --color-default-icon: var(--gray900);\n  --color-disabled01-icon: var(--gray300);\n  --color-disabled02-icon: var(--gray100);\n  --color-disabled03-icon: var(--gray500);\n  --color-hover-icon: var(--color-black);\n  --color-hover-primary-icon: var(--blue800);\n  --color-inverse-icon: var(--color-white);\n  --color-pressed-icon: var(--gray700);\n  --color-primary01-icon: var(--blue500);\n\n  /* alert */\n  --color-default-error: var(--red500);\n  --color-default-success: var(--green500);\n  --color-default-warning: var(--yellow500);\n  --color-hover-error: var(--red800);\n  --color-hover-success: var(--green800);\n  --color-hover-warning: var(--yellow800);\n  --color-inverse-error: var(--red50);\n  --color-inverse-hover-error: var(--red500);\n  --color-inverse-hover-success: var(--green500);\n  --color-inverse-hover-warning: var(--yellow500);\n  --color-inverse-success: var(--green50);\n  --color-inverse-warning: var(--yellow50);\n\n  /* forms */\n  --color-form-active-primary: var(--blue400);\n  --color-form-background: var(--color-white);\n  --color-form-default-icon: var(--gray900);\n  --color-form-default-text: var(--gray900);\n  --color-form-disabled-text: var(--gray500);\n  --color-form-disabled01-icon: var(--gray500);\n  --color-form-disabled03: var(--gray500);\n  --color-form-hover-error: var(--red800);\n  --color-form-hover-primary: var(--blue800);\n  --color-form-hover-success: var(--green800);\n  --color-form-hover-warning: var(--yellow800);\n  --color-form-inverse-error: var(--red50);\n  --color-form-inverse-success: var(--green50);\n  --color-form-inverse-warning: var(--yellow50);\n  --color-form-placeholder-text: var(--gray600);\n  --color-form-success01: var(--green500);\n  --color-form-surface03: var(--gray200);\n  --color-form-surface04: var(--gray600);\n  --color-form-warning01: var(--yellow500);\n\n  /* links */\n  --color-text-link-blue: var(--blue500);\n  --color-text-link-blue-hover: var(--blue800);\n  --color-text-link-blue-active: var(--blue800);\n  --color-text-link-blue-visited: var(--blue800);\n  --color-text-link-blue-pressed: var(--blue400);\n  --color-text-link-red: var(--red500);\n  --color-text-link-red-hover: var(--red800);\n  --color-text-link-red-active: var(--red800);\n  --color-text-link-red-visited: var(--red800);\n  --color-text-link-red-pressed: var(--red400);\n  --color-text-link-inverse: var(--color-white);\n  --color-text-link-default: var(--gray900);\n}\n\n.theme-black {\n  /* primary */\n  --color-active-primary: var(--gray600);\n  --color-hover-primary: var(--gray700);\n  --color-pressed-primary: var(--gray600);\n  --color-primary01: var(--gray950);\n  --color-primary02: var(--gray100);\n  --color-primary03: var(--gray200);\n\n  /* secondary */\n  --color-active-secondary: var(--gray400);\n  --color-hover-secondary: var(--gray700);\n  --color-pressed-secondary: var(--gray400);\n  --color-secondary01: var(--gray800);\n  --color-secondary02: var(--gray800);\n  --color-secondary03: var(--gray100);\n\n  /* icons */\n  --color-active-primary-icon: var(--gray600);\n  --color-hover-primary-icon: var(--gray700);\n  --color-primary01-icon: var(--gray950);\n\n  /* forms */\n  --color-form-active-primary: var(--gray600);\n  --color-form-hover-primary: var(--gray700);\n}\n\n/* --- Black theme variants --- Use them in combination with `theme-black` css class: `<div class=\"theme-black theme-black--red\">` */\n\n.theme-black.theme-black--red {\n  /* secondary */\n  --color-active-secondary: var(--red400);\n  --color-hover-secondary: var(--red800);\n  --color-pressed-secondary: var(--red400);\n  --color-secondary01: var(--red500);\n  --color-secondary02: var(--red25);\n  --color-secondary03: var(--red50);\n}\n\n.theme-black.theme-black--yellow {\n  /* secondary */\n  --color-active-secondary: var(--yellow400);\n  --color-hover-secondary: var(--yellow800);\n  --color-pressed-secondary: var(--yellow400);\n  --color-secondary01: var(--yellow500);\n  --color-secondary02: var(--yellow25);\n  --color-secondary03: var(--yellow50);\n}\n\n.theme-dark {\n  --color-background: var(--gray900);\n  --shadow-focus-primary: 0 0 0 2px var(--gray900), 0 0 2px 5px var(--blue25);\n\n  /* primary */\n  --color-active-primary: var(--gray25);\n  --color-hover-primary: var(--gray100);\n  --color-pressed-primary: var(--gray25);\n  --color-primary01: var(--color-white);\n  --color-primary02: var(--gray800);\n  --color-primary03: var(--gray700);\n\n  /* secondary */\n  --color-hover-secondary: var(--red200);\n  --color-secondary01: var(--red500);\n  --color-secondary02: var(--red900);\n  --color-secondary03: var(--red800);\n  --color-button-secondary: transparent;\n\n  /* surface */\n  --color-surface01: var(--gray900);\n  --color-surface02: var(--gray700);\n  --color-surface03: var(--gray300);\n  --color-surface04: var(--gray100);\n  --color-surface05: var(--color-white);\n\n  /* text */\n  --color-default-text: var(--gray100);\n  --color-hover-text: var(--gray300);\n  --color-pressed-text: var(--gray300);\n  --color-text-inverse: var(--gray900);\n  --color-text02: var(--gray900);\n  --color-text03: var(--gray700);\n  --color-text05: var(--gray500);\n\n  /* disabled */\n  --color-disabled01: var(--gray700);\n  --color-disabled02: var(--gray900);\n  --color-disabled03: var(--gray500);\n\n  /* icons */\n  --color-active-primary-icon: var(--gray300);\n  --color-default-icon: var(--gray100);\n  --color-disabled01-icon: var(--gray700);\n  --color-disabled02-icon: var(--gray900);\n  --color-disabled03-icon: var(--gray500);\n  --color-hover-icon: var(--gray300);\n  --color-hover-primary-icon: var(--gray300);\n  --color-inverse-icon: var(--gray900);\n  --color-pressed-icon: var(--gray300);\n  --color-primary01-icon: var(--color-white);\n\n  /* alert */\n  --color-default-error: var(--red200);\n  --color-default-success: var(--green200);\n  --color-default-warning: var(--yellow200);\n  --color-hover-error: var(--red50);\n  --color-hover-success: var(--green50);\n  --color-hover-warning: var(--yellow50);\n  --color-inverse-error: var(--red800);\n  --color-inverse-hover-error: var(--red200);\n  --color-inverse-hover-success: var(--green200);\n  --color-inverse-hover-warning: var(--yellow200);\n  --color-inverse-success: var(--green800);\n  --color-inverse-warning: var(--yellow800);\n\n  /* forms */\n  --color-form-active-primary: var(--gray800);\n  --color-form-hover-primary: var(--gray800);\n\n  /* links */\n  --color-text-link-blue-active: var(--color-white);\n  --color-text-link-blue-hover: var(--color-white);\n  --color-text-link-blue-pressed: var(--color-white);\n  --color-text-link-blue-visited: var(--color-white);\n  --color-text-link-blue: var(--color-white);\n  --color-text-link-default: var(--color-white);\n  --color-text-link-inverse: var(--gray900);\n  --color-text-link-red-active: var(--color-white);\n  --color-text-link-red-hover: var(--color-white);\n  --color-text-link-red-pressed: var(--color-white);\n  --color-text-link-red-visited: var(--color-white);\n  --color-text-link-red: var(--color-white);\n}\n\n.theme-red {\n  /* primary */\n  --color-active-primary: var(--red400);\n  --color-hover-primary: var(--red800);\n  --color-pressed-primary: var(--red400);\n  --color-primary01: var(--red500);\n  --color-primary02: var(--red25);\n  --color-primary03: var(--red50);\n\n  /* secondary */\n  --color-active-secondary: var(--gray400);\n  --color-hover-secondary: var(--gray800);\n  --color-pressed-secondary: var(--gray400);\n  --color-secondary01: var(--gray500);\n  --color-secondary02: var(--gray25);\n  --color-secondary03: var(--gray50);\n\n  /* icons */\n  --color-active-primary-icon: var(--red400);\n  --color-hover-primary-icon: var(--red800);\n  --color-primary01-icon: var(--red500);\n\n  /* forms */\n  --color-form-active-primary: var(--red400);\n  --color-form-hover-primary: var(--red800);\n}\n\n\n/* Styles for stacked z-accordions */\n\nz-accordion + z-accordion {\n  border-top: none;\n}\n\n/* all z-accordions with some sibling z-accordion */\nz-accordion[variant=\"background\"]:not(:first-of-type, :last-of-type),\nz-accordion[variant=\"background\"]:not(:first-of-type, :last-of-type)::part(summary),\nz-accordion[variant=\"background\"]:not(:first-of-type, :last-of-type)::part(content),\nz-accordion[variant=\"background\"]:not(:first-of-type, :last-of-type)::part(summary)::before,\nz-accordion[variant=\"background\"]:not(:first-of-type, :last-of-type)::part(content)::before {\n  border-radius: 0;\n}\n\n/* first z-accordion with some sibling z-accordion */\nz-accordion[variant=\"background\"]:first-of-type:not(:only-of-type),\nz-accordion[variant=\"background\"]:first-of-type:not(:only-of-type)::part(summary),\nz-accordion[variant=\"background\"]:first-of-type:not(:only-of-type)::part(content),\nz-accordion[variant=\"background\"][highlight]:first-of-type:not(:only-of-type)::part(summary)::before,\nz-accordion[variant=\"background\"][highlight]:first-of-type:not(:only-of-type)::part(content)::before {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* last z-accordion with some sibling z-accordion */\nz-accordion[variant=\"background\"]:last-of-type:not(:only-of-type),\nz-accordion[variant=\"background\"]:last-of-type:not(:only-of-type)::part(summary),\nz-accordion[variant=\"background\"][highlight]:last-of-type:not(:only-of-type)::part(summary)::before,\nz-accordion[variant=\"background\"][highlight]:last-of-type:not(:only-of-type)::part(content)::before {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n";

/*
 Stencil Client Platform v4.43.5 | MIT Licensed | https://stenciljs.com
 */


// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/get-prop-descriptor.ts
function getPropertyDescriptor(obj, memberName, getOnly) {
  const stopAt = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : null;
  while (obj && obj !== stopAt) {
    const desc = Object.getOwnPropertyDescriptor(obj, memberName);
    if (desc && (!getOnly || desc.get)) return desc;
    obj = Object.getPrototypeOf(obj);
  }
  return void 0;
}

// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */)) {
      const ogValue = instance[memberName];
      const ogDescriptor = getPropertyDescriptor(Object.getPrototypeOf(instance), memberName, true) || Object.getOwnPropertyDescriptor(instance, memberName);
      if (ogDescriptor) {
        Object.defineProperty(instance, memberName, {
          get() {
            return ogDescriptor.get.call(this);
          },
          set(newValue) {
            ogDescriptor.set.call(this, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      if (hostRef.$instanceValues$.has(memberName)) {
        instance[memberName] = hostRef.$instanceValues$.get(memberName);
      } else if (ogValue !== void 0) {
        instance[memberName] = ogValue;
      }
    }
  });
};

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  if (!hostRef) return;
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
  if (hostRef.$cmpMeta$.$flags$ & 512 /* hasModernPropertyDecls */ && (BUILD.state)) {
    reWireGetterSetter(lazyInstance, hostRef);
  }
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map(),
    $serializerValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  {
    hostRef.$fetchedCbList$ = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'z-aria-alert':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-aria-alert.entry.js').then(processMod, consoleError);
                case 'z-accordion':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-accordion.entry.js').then(processMod, consoleError);
                case 'z-anchor-navigation':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-anchor-navigation.entry.js').then(processMod, consoleError);
                case 'z-avatar':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-avatar.entry.js').then(processMod, consoleError);
                case 'z-breadcrumb':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-breadcrumb.entry.js').then(processMod, consoleError);
                case 'z-button-sort':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-button-sort.entry.js').then(processMod, consoleError);
                case 'z-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-card.entry.js').then(processMod, consoleError);
                case 'z-color-picker':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-color-picker.entry.js').then(processMod, consoleError);
                case 'z-cover-hero':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-cover-hero.entry.js').then(processMod, consoleError);
                case 'z-file':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-file.entry.js').then(processMod, consoleError);
                case 'z-file-upload':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-file-upload.entry.js').then(processMod, consoleError);
                case 'z-info-box':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-info-box.entry.js').then(processMod, consoleError);
                case 'z-logo':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-logo.entry.js').then(processMod, consoleError);
                case 'z-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-menu.entry.js').then(processMod, consoleError);
                case 'z-menu-section':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-menu-section.entry.js').then(processMod, consoleError);
                case 'z-navigation-tabs':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-navigation-tabs.entry.js').then(processMod, consoleError);
                case 'z-notification':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-notification.entry.js').then(processMod, consoleError);
                case 'z-pagination':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-pagination.entry.js').then(processMod, consoleError);
                case 'z-range-picker':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-range-picker.entry.js').then(processMod, consoleError);
                case 'z-result-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-result-card.entry.js').then(processMod, consoleError);
                case 'z-select':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-select.entry.js').then(processMod, consoleError);
                case 'z-skip-to-content':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-skip-to-content.entry.js').then(processMod, consoleError);
                case 'z-stepper':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-stepper.entry.js').then(processMod, consoleError);
                case 'z-stepper-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-stepper-item.entry.js').then(processMod, consoleError);
                case 'z-toast-notification-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-toast-notification-list.entry.js').then(processMod, consoleError);
                case 'z-toggle-switch':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-toggle-switch.entry.js').then(processMod, consoleError);
                case 'z-toolbar':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-toolbar.entry.js').then(processMod, consoleError);
                case 'z-tree-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tree-list.entry.js').then(processMod, consoleError);
                case 'z-visually-hidden':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-visually-hidden.entry.js').then(processMod, consoleError);
                case 'z-chip':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-chip.entry.js').then(processMod, consoleError);
                case 'z-ghost-loading':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-ghost-loading.entry.js').then(processMod, consoleError);
                case 'z-info-reveal':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-info-reveal.entry.js').then(processMod, consoleError);
                case 'z-tooltip':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tooltip.entry.js').then(processMod, consoleError);
                case 'z-popover':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-popover.entry.js').then(processMod, consoleError);
                case 'z-carousel':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-carousel.entry.js').then(processMod, consoleError);
                case 'z-combobox':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-combobox.entry.js').then(processMod, consoleError);
                case 'z-input-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-input-range.entry.js').then(processMod, consoleError);
                case 'z-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-table.entry.js').then(processMod, consoleError);
                case 'z-tool':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tool.entry.js').then(processMod, consoleError);
                case 'z-book-cover':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-book-cover.entry.js').then(processMod, consoleError);
                case 'z-book-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-book-card.entry.js').then(processMod, consoleError);
                case 'z-book-card-app':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-book-card-app.entry.js').then(processMod, consoleError);
                case 'z-date-picker':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-date-picker.entry.js').then(processMod, consoleError);
                case 'z-dragdrop-area_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-dragdrop-area_2.entry.js').then(processMod, consoleError);
                case 'z-toast-notification':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-toast-notification.entry.js').then(processMod, consoleError);
                case 'z-app-header_12':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-app-header_12.entry.js').then(processMod, consoleError);
                case 'z-tbody':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tbody.entry.js').then(processMod, consoleError);
                case 'z-td':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-td.entry.js').then(processMod, consoleError);
                case 'z-tfoot':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tfoot.entry.js').then(processMod, consoleError);
                case 'z-th':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-th.entry.js').then(processMod, consoleError);
                case 'z-thead':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-thead.entry.js').then(processMod, consoleError);
                case 'z-tr':
                    return import(
                      /* webpackMode: "lazy" */
                      './z-tr.entry.js').then(processMod, consoleError);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var win = typeof window !== "undefined" ? window : {};
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    if (!win.document.adoptedStyleSheets) {
      return false;
    }
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const opts = { mode: "open" };
  const shadowRoot = this.attachShadow(opts);
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  } else if (!supportsConstructableStylesheets) {
    const styleElm = document.createElement("style");
    styleElm.innerHTML = globalStyles;
    shadowRoot.prepend(styleElm);
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    return;
  }
  const slottedNodeLocation = document.createTextNode("");
  slottedNodeLocation["s-nr"] = newChild;
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = internalCall(parent, "appendChild");
  {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return { slotNode: null, slotName: "" };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return { slotNode, slotName };
}
var patchCloneNode = (HostElementPrototype) => {
  if (HostElementPrototype.__cloneNode) return;
  const orgCloneNode = HostElementPrototype.__cloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow ;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = [
        "s-id",
        "s-cr",
        "s-lr",
        "s-rc",
        "s-sc",
        "s-p",
        "s-cn",
        "s-sr",
        "s-sn",
        "s-hn",
        "s-ol",
        "s-nr",
        "s-si",
        "s-rf",
        "s-scs"
      ];
      const childNodes = this.__childNodes || this.childNodes;
      for (; i2 < childNodes.length; i2++) {
        slotted = childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !childNodes[i2][privateField]);
        if (slotted) {
          if (clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = (HostElementPrototype) => {
  if (HostElementPrototype.__appendChild) return;
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const { slotName, slotNode } = findSlotFromSlottedNode(newChild, this);
    if (slotNode) {
      addSlotRelocateNode(newChild, slotNode);
      const slotChildNodes = getSlotChildSiblings(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const parent = internalCall(appendAfter, "parentNode");
      const insertedNode = internalCall(parent, "insertBefore")(newChild, appendAfter.nextSibling);
      dispatchSlotChangeEvent(slotNode);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchChildSlotNodes = (elm) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  patchHostOriginalAccessor("children", elm);
  Object.defineProperty(elm, "children", {
    get() {
      return this.childNodes.filter((n) => n.nodeType === 1);
    }
  });
  Object.defineProperty(elm, "childElementCount", {
    get() {
      return this.children.length;
    }
  });
  patchHostOriginalAccessor("firstChild", elm);
  Object.defineProperty(elm, "firstChild", {
    get() {
      return this.childNodes[0];
    }
  });
  patchHostOriginalAccessor("lastChild", elm);
  Object.defineProperty(elm, "lastChild", {
    get() {
      return this.childNodes[this.childNodes.length - 1];
    }
  });
  patchHostOriginalAccessor("childNodes", elm);
  Object.defineProperty(elm, "childNodes", {
    get() {
      const result = new FakeNodeList();
      result.push(...getSlottedChildNodes(this.__childNodes));
      return result;
    }
  });
};
var validElementPatches = ["children", "nextElementSibling", "previousElementSibling"];
var validNodesPatches = [
  "childNodes",
  "firstChild",
  "lastChild",
  "nextSibling",
  "previousSibling",
  "textContent",
  "parentNode"
];
function patchHostOriginalAccessor(accessorName, node) {
  if (!globalThis.Node || !globalThis.Element) {
    return;
  }
  let accessor;
  if (validElementPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Element.prototype, accessorName);
  } else if (validNodesPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Node.prototype, accessorName);
  }
  if (!accessor) {
    accessor = Object.getOwnPropertyDescriptor(node, accessorName);
  }
  if (accessor) Object.defineProperty(node, "__" + accessorName, accessor);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/runtime/styles.ts
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a, _b, _c;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        styleElm = win.document.createElement("style");
        styleElm.textContent = style;
        const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
        if (nonce != null) {
          styleElm.setAttribute("nonce", nonce);
        }
        if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
          if (styleContainerNode.nodeName === "HEAD") {
            const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
            const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
            styleContainerNode.insertBefore(
              styleElm,
              (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
            );
          } else if ("host" in styleContainerNode) {
            if (supportsConstructableStylesheets) {
              const currentWindow = (_b = styleContainerNode.defaultView) != null ? _b : styleContainerNode.ownerDocument.defaultView;
              const stylesheet = new currentWindow.CSSStyleSheet();
              stylesheet.replaceSync(style);
              if (supportsMutableAdoptedStyleSheets) {
                styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
              } else {
                styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
              }
            } else {
              const existingStyleContainer = styleContainerNode.querySelector("style");
              if (existingStyleContainer && true) {
                existingStyleContainer.textContent = style + existingStyleContainer.textContent;
              } else {
                styleContainerNode.prepend(styleElm);
              }
            }
          } else {
            styleContainerNode.append(styleElm);
          }
        }
        if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
          styleContainerNode.insertBefore(styleElm, null);
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.textContent += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else {
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        const currentWindow = (_c = styleContainerNode.defaultView) != null ? _c : styleContainerNode.ownerDocument.defaultView;
        let stylesheet;
        if (style.constructor === currentWindow.CSSStyleSheet) {
          stylesheet = style;
        } else {
          stylesheet = new currentWindow.CSSStyleSheet();
          for (let i2 = 0; i2 < style.cssRules.length; i2++) {
            stylesheet.insertRule(style.cssRules[i2].cssText, i2);
          }
        }
        if (supportsMutableAdoptedStyleSheets) {
          styleContainerNode.adoptedStyleSheets.push(stylesheet);
        } else {
          styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, stylesheet];
        }
        appliedStyles.add(scopeId2);
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);

// src/utils/helpers.ts
var isDef = (v) => v != null && v !== void 0;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/runtime/vdom/h.ts
var h = (nodeName, vnodeData, ...children) => {
  if (typeof nodeName === "string") {
    nodeName = transformTag(nodeName);
  }
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    // Normalize undefined to null to prevent rendering "undefined" as text
    $text$: text != null ? text : null,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/normalize-watchers.ts
var normalizeWatchers = (raw) => {
  if (!raw) return void 0;
  const keys = Object.keys(raw);
  if (keys.length === 0) return void 0;
  let hasLegacy = false;
  for (const propName of keys) {
    if (hasLegacy) break;
    for (const h2 of raw[propName]) {
      if (typeof h2 === "string") {
        hasLegacy = true;
        break;
      }
    }
  }
  if (!hasLegacy) return raw;
  const out = {};
  for (const propName of keys) {
    out[propName] = raw[propName].map(
      (h2) => typeof h2 === "string" ? { [h2]: 0 } : h2
    );
  }
  return out;
};

// src/runtime/parse-property-value.ts
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      if (isFormAssociated && typeof propValue === "string") {
        return propValue === "" || !!propValue;
      } else {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      queueRefAttachment(newValue, elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else if (memberName[0] === "a" && memberName.startsWith("attr:")) {
    const propName = memberName.slice(5);
    let attrName;
    {
      const hostRef = getHostRef(elm);
      if (hostRef && hostRef.$cmpMeta$ && hostRef.$cmpMeta$.$members$) {
        const memberMeta = hostRef.$cmpMeta$.$members$[propName];
        if (memberMeta && memberMeta[1]) {
          attrName = memberMeta[1];
        }
      }
    }
    if (!attrName) {
      attrName = propName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(attrName) === "") {
        elm.removeAttribute(attrName);
      }
    } else {
      elm.setAttribute(attrName, newValue === true ? "" : newValue);
    }
    return;
  } else if (memberName[0] === "p" && memberName.startsWith("prop:")) {
    const propName = memberName.slice(5);
    try {
      elm[propName] = newValue;
    } catch (e) {
    }
    return;
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] !== n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var refCallbacksToRemove = [];
var refCallbacksToAttach = [];
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ != null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      const appendTarget = newVNode2.$tag$ === "template" ? elm.content : elm;
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          appendTarget.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        relocateToHostRoot(oldParentVNode.$elm$);
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find(
      (ref) => ref["s-cr"]
    );
    const childNodeArray = Array.from(
      parentElm.__childNodes || parentElm.childNodes
    );
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"]) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  if (parentVNode.$tag$ === "template") {
    containerElm = containerElm.content;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  const containerElm = newVNode2.$tag$ === "template" ? parentElm.content : parentElm;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(containerElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(containerElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text == null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    if (vNode.$attrs$ && vNode.$attrs$.ref) {
      refCallbacksToRemove.push(() => vNode.$attrs$.ref(null));
    }
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var queueRefAttachment = (refCallback, elm) => {
  {
    refCallbacksToAttach.push(() => refCallback(elm));
  }
};
var flushQueuedRefCallbacks = () => {
  {
    refCallbacksToRemove.forEach((cb) => cb());
    refCallbacksToRemove.length = 0;
    refCallbacksToAttach.forEach((cb) => cb());
    refCallbacksToAttach.length = 0;
  }
};
var insertBefore = (parent, newNode, reference, isInitialLoad) => {
  {
    if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
      addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
    } else if (typeof newNode["s-sn"] === "string") {
      parent.insertBefore(newNode, reference);
      const { slotNode } = findSlotFromSlottedNode(newNode);
      if (slotNode && !isInitialLoad) dispatchSlotChangeEvent(slotNode);
      return newNode;
    }
  }
  if (parent.__insertBefore) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => {
      {
        rootVnode.$attrs$[attribute] = hostElm[propName];
      }
    });
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(
            nodeToRelocate.parentNode,
            nodeToRelocate["s-ol"] = orgLocationNode,
            nodeToRelocate,
            isInitialLoad
          );
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (nodeToRelocate.nodeType === 1 /* ElementNode */ && isInitialLoad) {
          nodeToRelocate["s-ih"] = (_a = nodeToRelocate.hidden) != null ? _a : false;
        }
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_b = nodeToRelocate["s-ol"]) == null ? void 0 : _b.previousSibling;
            while (orgLocationNode) {
              let refNode = (_c = orgLocationNode["s-nr"]) != null ? _c : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode, isInitialLoad);
              if (nodeToRelocate.nodeType === 8 /* CommentNode */ && nodeToRelocate.nodeValue.startsWith("s-nt-")) {
                const textNode = win.document.createTextNode(nodeToRelocate.nodeValue.replace(/^s-nt-/, ""));
                textNode["s-hn"] = nodeToRelocate["s-hn"];
                textNode["s-sn"] = nodeToRelocate["s-sn"];
                textNode["s-sh"] = nodeToRelocate["s-sh"];
                textNode["s-sr"] = nodeToRelocate["s-sr"];
                textNode["s-ol"] = nodeToRelocate["s-ol"];
                textNode["s-ol"]["s-nr"] = textNode;
                insertBefore(nodeToRelocate.parentNode, textNode, nodeToRelocate, isInitialLoad);
                nodeToRelocate.parentNode.removeChild(nodeToRelocate);
              }
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_d = nodeToRelocate["s-ih"]) != null ? _d : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
          nodeToRelocate.hidden = true;
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (!useNativeShadowDom && !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && hostElm["s-cr"]) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
          childNode.hidden = true;
        } else if (childNode.nodeType === 3 /* TextNode */ && !!childNode.nodeValue.trim()) {
          const textCommentNode = win.document.createComment("s-nt-" + childNode.nodeValue);
          textCommentNode["s-sn"] = childNode["s-sn"];
          insertBefore(childNode.parentNode, textCommentNode, childNode, isInitialLoad);
          childNode.parentNode.removeChild(childNode);
        }
      }
    }
  }
  contentRef = void 0;
  flushQueuedRefCallbacks();
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      if (hostRef.$deferredConnectedCallback$) {
        hostRef.$deferredConnectedCallback$ = false;
        safeCall(instance, "connectedCallback", void 0, elm);
      }
      {
        hostRef.$flags$ |= 256 /* isListenReady */;
        if (hostRef.$queuedListeners$) {
          hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
          hostRef.$queuedListeners$ = void 0;
        }
      }
      if (hostRef.$fetchedCbList$.length) {
        hostRef.$fetchedCbList$.forEach((cb) => cb(elm));
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err) => {
  console.error(err);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate).catch(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0],
    !!(cmpMeta.$flags$ & 64 /* formAssociated */)
  );
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (cmpMeta.$watchers$) {
      const watchMethods = cmpMeta.$watchers$[propName];
      if (watchMethods) {
        watchMethods.map((watcher) => {
          try {
            const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
            if (flags & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */) {
              if (!instance) {
                hostRef.$fetchedCbList$.push(() => {
                  hostRef.$lazyInstance$[watchMethodName](newVal, oldVal, propName);
                });
              } else {
                instance[watchMethodName](newVal, oldVal, propName);
              }
            }
          } catch (e) {
            consoleError(e, elm);
          }
        });
      }
    }
    if (flags & 2 /* hasRendered */) {
      if (instance.componentShouldUpdate) {
        const shouldUpdate = instance.componentShouldUpdate(newVal, oldVal, propName);
        if (shouldUpdate === false && !(flags & 16 /* isQueuedForUpdate */)) {
          return;
        }
      }
      if (!(flags & 16 /* isQueuedForUpdate */)) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          var _a2;
          const hostRef = getHostRef(this);
          const instance = hostRef == null ? void 0 : hostRef.$lazyInstance$ ;
          if (!instance) {
            (_a2 = hostRef == null ? void 0 : hostRef.$onReadyPromise$) == null ? void 0 : _a2.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = instance[cbName] ;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (cmpMeta.$members$ || BUILD.propChangeCallback) {
    {
      if (Cstr.watchers && !cmpMeta.$watchers$) {
        cmpMeta.$watchers$ = normalizeWatchers(Cstr.watchers);
      }
      if (Cstr.deserializers && !cmpMeta.$deserializers$) {
        cmpMeta.$deserializers$ = Cstr.deserializers;
      }
      if (Cstr.serializers && !cmpMeta.$serializers$) {
        cmpMeta.$serializers$ = Cstr.serializers;
      }
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = getPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                )
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$fetchedCbList$.push(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                );
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$fetchedCbList$.push(() => {
                  setterSetVal();
                });
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          const hostRef = getHostRef(this);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          }
          if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((watcher) => {
                const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
                if (instance[watchMethodName] != null && (flags2 & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */)) {
                  instance[watchMethodName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propFlags = members.find(([m]) => m === propName);
          const isBooleanTarget = propFlags && propFlags[1][0] & 4 /* Boolean */;
          const isSpuriousBooleanRemoval = isBooleanTarget && newValue === null && this[propName] === void 0;
          if (isBooleanTarget) {
            newValue = newValue === null || newValue === "false" ? false : true;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          if (!isSpuriousBooleanRemoval && newValue != this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 31 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  try {
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
      hostRef.$flags$ |= 32 /* hasInitializedComponent */;
      const bundleId = cmpMeta.$lazyBundleId$;
      if (bundleId) {
        const CstrImport = loadModule(cmpMeta, hostRef);
        if (CstrImport && "then" in CstrImport) {
          const endLoad = uniqueTime();
          Cstr = await CstrImport;
          endLoad();
        } else {
          Cstr = CstrImport;
        }
        if (!Cstr) {
          throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
        }
        if (!Cstr.isProxied) {
          {
            cmpMeta.$watchers$ = normalizeWatchers(Cstr.watchers);
            cmpMeta.$serializers$ = Cstr.serializers;
            cmpMeta.$deserializers$ = Cstr.deserializers;
          }
          proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
          Cstr.isProxied = true;
        }
        const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
        {
          hostRef.$flags$ |= 8 /* isConstructingInstance */;
        }
        try {
          new Cstr(hostRef);
        } catch (e) {
          consoleError(e, elm);
        }
        {
          hostRef.$flags$ &= -9 /* isConstructingInstance */;
        }
        {
          hostRef.$flags$ |= 128 /* isWatchReady */;
        }
        endNewInstance();
        const needsDeferredCallback = cmpMeta.$flags$ & 4 /* hasSlotRelocation */;
        if (!needsDeferredCallback) {
          fireConnectedCallback(hostRef.$lazyInstance$, elm);
        } else {
          hostRef.$deferredConnectedCallback$ = true;
        }
      } else {
        Cstr = elm.constructor;
        const cmpTag = elm.localName;
        customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
      }
      if (Cstr && Cstr.style) {
        let style;
        if (typeof Cstr.style === "string") {
          style = Cstr.style;
        }
        const scopeId2 = getScopeId(cmpMeta);
        if (!styles.has(scopeId2) || BUILD.hotModuleReplacement) {
          const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
          registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
          endRegisterStyles();
        }
      }
    }
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent["s-rc"]) {
      ancestorComponent["s-rc"].push(schedule);
    } else {
      schedule();
    }
  } catch (e) {
    consoleError(e, elm);
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$onReadyResolve$) {
      hostRef.$onReadyResolve$(elm);
    }
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && Object.prototype.hasOwnProperty.call(elm, memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2, _b;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = normalizeWatchers(compactMeta[4]);
        cmpMeta.$serializers$ = (_a2 = compactMeta[5]) != null ? _a2 : {};
        cmpMeta.$deserializers$ = (_b = compactMeta[6]) != null ? _b : {};
      }
      const tagName = transformTag(cmpMeta.$tagName$);
      const HostElement = class extends HTMLElement {
        ["s-p"];
        ["s-rc"];
        hasRegisteredEventListeners = false;
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && cmpMeta.$flags$ & 256 /* hasSlot */) {
        {
          {
            patchChildSlotNodes(HostElement.prototype);
          }
          {
            patchCloneNode(HostElement.prototype);
          }
          {
            patchSlotAppendChild(HostElement.prototype);
          }
        }
      } else {
        patchCloneNode(HostElement.prototype);
      }
      if (cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4 /* TargetDocument */) {
    return doc;
  }
  if (flags & 8 /* TargetWindow */) {
    return win;
  }
  if (flags & 16 /* TargetBody */) {
    return doc.body;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;
function transformTag(tag) {
  return tag;
}

export { Fragment as F, Host as H, H as a, bootstrapLazy as b, createEvent as c, getElement as d, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
