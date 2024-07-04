import{x as o}from"./lit-element-DGXdXVoE.js";import{C as l,B as n}from"./index-CcuDdGyi.js";import"./index-CyxFfaqa.js";import"./index-CGCrZSfn.js";import"./index-BN8hH0FG.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";import"./index-Dn_O_3qq.js";import"./utils-B_2tKo6T.js";import"./breakpoints-C5kxgyOu.js";import"./index-B7tABtxN.js";import"./index-DghEcubx.js";import"./index-qF8HYHf-.js";import"./index-C3NUbUgA.js";import"./index-q7DfQu9J.js";import"./index-e3_nc7KO.js";const L={title:"ZSearchbar",component:"z-searchbar",argTypes:{size:{control:{type:"inline-radio"},options:Object.values(l)},variant:{control:{type:"inline-radio"},options:Object.values(n)}},args:{preventSubmit:!1,showSearchButton:!1,searchButtonIconOnly:!1,autocomplete:!1,autocompleteMinChars:3,resultsCount:null,resultsEllipsis:!0,searchHelperLabel:"Cerca {searchString}",resultsItems:[{label:"first item"},{label:"second item"},{label:"third item"},{label:"fourth item"}],sortResultsItems:!1,htmlid:"myId",placeholder:"my placeholder",value:"","--z-searchbar-results-height":"","--z-searchbar-tag-text-color":"var(--color-primary03)","--z-searchbar-tag-bg":"var(--color-hover-primary)",size:l.BIG,variant:n.PRIMARY}},t={render:e=>o`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
      results-ellipsis=${e.resultsEllipsis}
      search-helper-label=${e.searchHelperLabel}
      results-items=${JSON.stringify(e.resultsItems)}
      sort-results-items=${JSON.stringify(e.sortResultsItems)}
      value=${e.value}
      placeholder=${e.placeholder}
      htmlid=${e.htmlid}
      style="--z-searchbar-results-height: ${e["--z-searchbar-results-height"]}"
      size=${e.size}
      variant=${e.variant}
    ></z-searchbar>
  `},r={parameters:{controls:{include:["value","placeholder","htmlid","size"]}},args:{htmlid:"myIdSimple"},render:e=>o`
    <z-searchbar
      prevent-submit="false"
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autcomplete="false"
      value=${e.value}
      placeholder=${e.placeholder}
      htmlid=${e.htmlid}
      size=${e.size}
    ></z-searchbar>
  `},s={args:{autocomplete:!0,htmlid:"myIdAutocomplete",showSearchButton:!1,searchButtonIconOnly:!1},render:e=>o`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
      results-ellipsis=${e.resultsEllipsis}
      search-helper-label=${e.searchHelperLabel}
      results-items=${JSON.stringify(e.resultsItems)}
      sort-results-items=${JSON.stringify(e.sortResultsItems)}
      value=${e.value}
      placeholder=${e.placeholder}
      htmlid=${e.htmlid}
      style="--z-searchbar-results-height: ${e["--z-searchbar-results-height"]}"
      size=${e.size}
      variant=${e.variant}
    ></z-searchbar>
  `},a={args:{autocomplete:!0,htmlid:"myIdGroupedAutocomplete",showSearchButton:!1,searchButtonIconOnly:!1,resultsItems:[{label:"first item",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"},category:"Category A",subcategory:"Subcategory A1"},{label:"second item",icon:"collezioni",category:"Category B",subcategory:"Subcategory B1"},{label:"third item",icon:"dictonary",category:"Category A",subcategory:"Subcategory A2"},{label:"fourth item",icon:"exercises-online",category:"Category A",subcategory:"Subcategory A1"},{label:"fifth item",icon:"interactives-maps",category:"Category A",subcategory:"Subcategory A1"},{label:"sixth item",icon:"textual-analysis",category:"Category B",subcategory:"Subcategory B1"}]},render:e=>o`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
      results-ellipsis=${e.resultsEllipsis}
      search-helper-label=${e.searchHelperLabel}
      results-items=${JSON.stringify(e.resultsItems)}
      sort-results-items=${JSON.stringify(e.sortResultsItems)}
      value=${e.value}
      placeholder=${e.placeholder}
      htmlid=${e.htmlid}
      style="--z-searchbar-results-height: ${e["--z-searchbar-results-height"]}; --z-searchbar-tag-text-color: ${e["--z-searchbar-tag-text-color"]}; --z-searchbar-tag-bg: ${e["--z-searchbar-tag-bg"]}"
      size=${e.size}
      variant=${e.variant}
    ></z-searchbar>
  `};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      autocomplete=\${args.autocomplete}
      autocomplete-min-chars=\${args.autocompleteMinChars}
      results-count=\${args.resultsCount}
      results-ellipsis=\${args.resultsEllipsis}
      search-helper-label=\${args.searchHelperLabel}
      results-items=\${JSON.stringify(args.resultsItems)}
      sort-results-items=\${JSON.stringify(args.sortResultsItems)}
      value=\${args.value}
      placeholder=\${args.placeholder}
      htmlid=\${args.htmlid}
      style="--z-searchbar-results-height: \${args["--z-searchbar-results-height"]}"
      size=\${args.size}
      variant=\${args.variant}
    ></z-searchbar>
  \`
} satisfies Story`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var h,m,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["value", "placeholder", "htmlid", "size"]
    }
  },
  args: {
    htmlid: "myIdSimple"
  },
  render: args => html\`
    <z-searchbar
      prevent-submit="false"
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      autcomplete="false"
      value=\${args.value}
      placeholder=\${args.placeholder}
      htmlid=\${args.htmlid}
      size=\${args.size}
    ></z-searchbar>
  \`
} satisfies Story`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,$;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    autocomplete: true,
    htmlid: "myIdAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false
  },
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      autocomplete=\${args.autocomplete}
      autocomplete-min-chars=\${args.autocompleteMinChars}
      results-count=\${args.resultsCount}
      results-ellipsis=\${args.resultsEllipsis}
      search-helper-label=\${args.searchHelperLabel}
      results-items=\${JSON.stringify(args.resultsItems)}
      sort-results-items=\${JSON.stringify(args.sortResultsItems)}
      value=\${args.value}
      placeholder=\${args.placeholder}
      htmlid=\${args.htmlid}
      style="--z-searchbar-results-height: \${args["--z-searchbar-results-height"]}"
      size=\${args.size}
      variant=\${args.variant}
    ></z-searchbar>
  \`
} satisfies Story`,...($=(g=s.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var y,d,z;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    resultsItems: [{
      label: "first item",
      icon: "download",
      tag: {
        text: "Riservato all'insegnante",
        icon: "teacher"
      },
      category: "Category A",
      subcategory: "Subcategory A1"
    }, {
      label: "second item",
      icon: "collezioni",
      category: "Category B",
      subcategory: "Subcategory B1"
    }, {
      label: "third item",
      icon: "dictonary",
      category: "Category A",
      subcategory: "Subcategory A2"
    }, {
      label: "fourth item",
      icon: "exercises-online",
      category: "Category A",
      subcategory: "Subcategory A1"
    }, {
      label: "fifth item",
      icon: "interactives-maps",
      category: "Category A",
      subcategory: "Subcategory A1"
    }, {
      label: "sixth item",
      icon: "textual-analysis",
      category: "Category B",
      subcategory: "Subcategory B1"
    }]
  },
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      autocomplete=\${args.autocomplete}
      autocomplete-min-chars=\${args.autocompleteMinChars}
      results-count=\${args.resultsCount}
      results-ellipsis=\${args.resultsEllipsis}
      search-helper-label=\${args.searchHelperLabel}
      results-items=\${JSON.stringify(args.resultsItems)}
      sort-results-items=\${JSON.stringify(args.sortResultsItems)}
      value=\${args.value}
      placeholder=\${args.placeholder}
      htmlid=\${args.htmlid}
      style="--z-searchbar-results-height: \${args["--z-searchbar-results-height"]}; --z-searchbar-tag-text-color: \${args["--z-searchbar-tag-text-color"]}; --z-searchbar-tag-bg: \${args["--z-searchbar-tag-bg"]}"
      size=\${args.size}
      variant=\${args.variant}
    ></z-searchbar>
  \`
} satisfies Story`,...(z=(d=a.parameters)==null?void 0:d.docs)==null?void 0:z.source}}};const G=["Default","SimpleSearch","Autocomplete","AutocompleteWithComplexItems"];export{s as Autocomplete,a as AutocompleteWithComplexItems,t as Default,r as SimpleSearch,G as __namedExportsOrder,L as default};
