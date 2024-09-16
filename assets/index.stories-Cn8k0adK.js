import{x as t}from"./lit-element-DGXdXVoE.js";import{C as l,B as c}from"./index-C_NTAvuu.js";import"./index-DByg9Jyk.js";import"./index-DmFUwhJN.js";import"./index-DlGlwqHM.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-BJyMe-bF.js";import"./index-Dwk_yyJf.js";import"./utils-ElT8mkfg.js";import"./breakpoints-C5kxgyOu.js";import"./index-dIrrVhMU.js";import"./index-YNuhBc6u.js";import"./index-Dmn2GvMW.js";import"./index-fjhc731V.js";import"./index-BKvWzFpQ.js";import"./index-RDOHYzgn.js";const D={title:"ZSearchbar",component:"z-searchbar",argTypes:{size:{control:{type:"inline-radio"},options:Object.values(l)},variant:{control:{type:"inline-radio"},options:Object.values(c)}},args:{preventSubmit:!1,showSearchButton:!1,searchButtonIconOnly:!1,autocomplete:!1,autocompleteMinChars:3,resultsCount:null,searchHelperLabel:"Cerca {searchString}",resultsItems:[{label:"first item"},{label:"second item"},{label:"third item"},{label:"fourth item"}],sortResultsItems:!1,htmlid:"myId",placeholder:"my placeholder",value:"","--z-searchbar-results-height":"","--z-searchbar-tag-text-color":"var(--color-primary03)","--z-searchbar-tag-bg":"var(--color-hover-primary)",size:l.BIG,variant:c.PRIMARY}},s={render:e=>t`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
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
  `},a={parameters:{controls:{include:["value","placeholder","htmlid","size"]}},args:{htmlid:"myIdSimple"},render:e=>t`
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
  `},r={args:{autocomplete:!0,htmlid:"myIdAutocomplete",showSearchButton:!1,searchButtonIconOnly:!1},render:e=>t`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
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
  `},n={args:{autocomplete:!0,htmlid:"myIdGroupedAutocomplete",showSearchButton:!1,searchButtonIconOnly:!1,resultsItems:[{label:"first item",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"},category:"Category A",subcategory:"Subcategory A1"},{label:"second item",icon:"collezioni",category:"Category B",subcategory:"Subcategory B1"},{label:"third item",icon:"dictonary",category:"Category A",subcategory:"Subcategory A2"},{label:"fourth item",icon:"exercises-online",category:"Category A",subcategory:"Subcategory A1"},{label:"fifth item",icon:"interactives-maps",category:"Category A",subcategory:"Subcategory A1"},{label:"sixth item",icon:"textual-analysis",category:"Category B",subcategory:"Subcategory B1"}]},render:e=>t`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
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
  `},o={args:{autocomplete:!0,htmlid:"myIdGroupedAutocomplete",showSearchButton:!1,searchButtonIconOnly:!1,resultsItems:[{label:"first item",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"},category:"Category A",subcategory:"Subcategory A1",children:[{label:"first item - first child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"},children:[{label:"first item - first child - first child lunghissssssssssssssss sssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssimo",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}},{label:"first item - first child - second child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}},{label:"first item - first child - third child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}}]},{label:"first item - second child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}}]},{label:"second item",icon:"collezioni",category:"Category B",subcategory:"Subcategory B1"},{label:"third item",icon:"dictonary",category:"Category A",subcategory:"Subcategory A2"},{label:"fourth item",icon:"exercises-online",category:"Category A",subcategory:"Subcategory A1"},{label:"fifth item",icon:"interactives-maps",category:"Category A",subcategory:"Subcategory A1",children:[{label:"fifth item - first child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}},{label:"fifth item - second child",icon:"download",tag:{text:"Riservato all'insegnante",icon:"teacher"}}]},{label:"sixth item",icon:"textual-analysis",category:"Category B",subcategory:"Subcategory B1"}]},render:e=>t`
    <z-searchbar
      prevent-submit=${e.preventSubmit}
      show-search-button=${e.showSearchButton}
      search-button-icon-only=${e.searchButtonIconOnly}
      autocomplete=${e.autocomplete}
      autocomplete-min-chars=${e.autocompleteMinChars}
      results-count=${e.resultsCount}
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
  `};var i,h,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      autocomplete=\${args.autocomplete}
      autocomplete-min-chars=\${args.autocompleteMinChars}
      results-count=\${args.resultsCount}
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
} satisfies Story`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var d,p,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var $,f,v;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,z,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      subcategory: "Subcategory A1",
      children: [{
        label: "first item - first child",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher"
        },
        children: [{
          label: "first item - first child - first child lunghissssssssssssssss sssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssimo",
          icon: "download",
          tag: {
            text: "Riservato all'insegnante",
            icon: "teacher"
          }
        }, {
          label: "first item - first child - second child",
          icon: "download",
          tag: {
            text: "Riservato all'insegnante",
            icon: "teacher"
          }
        }, {
          label: "first item - first child - third child",
          icon: "download",
          tag: {
            text: "Riservato all'insegnante",
            icon: "teacher"
          }
        }]
      }, {
        label: "first item - second child",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher"
        }
      }]
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
      subcategory: "Subcategory A1",
      children: [{
        label: "fifth item - first child",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher"
        }
      }, {
        label: "fifth item - second child",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher"
        }
      }]
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
} satisfies Story`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const _=["Default","SimpleSearch","Autocomplete","AutocompleteWithComplexItems","AutocompleteWithComplexTreeItems"];export{r as Autocomplete,n as AutocompleteWithComplexItems,o as AutocompleteWithComplexTreeItems,s as Default,a as SimpleSearch,_ as __namedExportsOrder,D as default};
