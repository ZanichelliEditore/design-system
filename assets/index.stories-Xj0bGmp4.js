import{r as e}from"./lit-CgIPLKVa.js";import{h as t,u as n}from"./beans-CNd94UMz.js";import"./z-searchbar-CQjXIbHO.js";var r={title:`ZSearchbar`,component:`z-searchbar`,argTypes:{size:{control:{type:`inline-radio`},options:Object.values(t)},variant:{control:{type:`inline-radio`},options:Object.values(n)}},args:{preventSubmit:!1,showSearchButton:!1,searchButtonIconOnly:!1,searchButtonLabel:``,autocomplete:!1,autocompleteMinChars:3,resultsCount:void 0,searchHelperLabel:`Cerca {searchString}`,resultsItems:[{label:`first item`},{label:`second item`},{label:`third item`},{label:`fourth item`}],sortResultsItems:!1,htmlid:`myId`,placeholder:`my placeholder`,value:``,label:``,htmlAriaLabel:``,"--z-searchbar-results-height":`540px`,"--z-searchbar-tag-text-color":`var(--color-primary03)`,"--z-searchbar-tag-bg":`var(--color-hover-primary)`,size:t.BIG,variant:n.PRIMARY}},i={render:t=>e`
    <z-searchbar
      prevent-submit=${t.preventSubmit}
      show-search-button=${t.showSearchButton}
      search-button-label=${t.searchButtonLabel}
      search-button-icon-only=${t.searchButtonIconOnly}
      autocomplete=${t.autocomplete}
      autocomplete-min-chars=${t.autocompleteMinChars}
      results-count=${t.resultsCount}
      search-helper-label=${t.searchHelperLabel}
      results-items=${JSON.stringify(t.resultsItems)}
      sort-results-items=${JSON.stringify(t.sortResultsItems)}
      value=${t.value}
      placeholder=${t.placeholder}
      htmlid=${t.htmlid}
      style="--z-searchbar-results-height: ${t[`--z-searchbar-results-height`]}"
      size=${t.size}
      variant=${t.variant}
      label=${t.label}
      html-aria-label=${t.htmlAriaLabel}
    ></z-searchbar>
  `},a={parameters:{controls:{include:[`value`,`placeholder`,`htmlid`,`size`,`label`,`htmlAriaLabel`]}},args:{htmlid:`myIdSimple`},render:t=>e`
    <z-searchbar
      prevent-submit="false"
      show-search-button=${t.showSearchButton}
      search-button-icon-only=${t.searchButtonIconOnly}
      search-button-label=${t.searchButtonLabel}
      autcomplete="false"
      value=${t.value}
      placeholder=${t.placeholder}
      htmlid=${t.htmlid}
      size=${t.size}
      label=${t.label}
      html-aria-label=${t.htmlAriaLabel}
    ></z-searchbar>
  `},o={args:{autocomplete:!0,htmlid:`myIdAutocomplete`,showSearchButton:!1,searchButtonIconOnly:!1,searchButtonLabel:`Cliccami`},render:t=>e`
    <z-searchbar
      prevent-submit=${t.preventSubmit}
      show-search-button=${t.showSearchButton}
      search-button-icon-only=${t.searchButtonIconOnly}
      search-button-label=${t.searchButtonLabel}
      autocomplete=${t.autocomplete}
      autocomplete-min-chars=${t.autocompleteMinChars}
      results-count=${t.resultsCount}
      search-helper-label=${t.searchHelperLabel}
      results-items=${JSON.stringify(t.resultsItems)}
      sort-results-items=${JSON.stringify(t.sortResultsItems)}
      value=${t.value}
      placeholder=${t.placeholder}
      htmlid=${t.htmlid}
      style="--z-searchbar-results-height: ${t[`--z-searchbar-results-height`]}"
      size=${t.size}
      variant=${t.variant}
      label=${t.label}
      html-aria-label=${t.htmlAriaLabel}
    ></z-searchbar>
  `},s={args:{autocomplete:!0,htmlid:`myIdGroupedAutocomplete`,showSearchButton:!1,searchButtonIconOnly:!1,searchButtonLabel:`Cliccami`,resultsItems:[{label:`first item`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`},category:`Category A`,subcategory:`Subcategory A1`},{label:`second item`,icon:`collezioni`,category:`Category B`,subcategory:`Subcategory B1`},{label:`third item`,icon:`dictonary`,category:`Category A`,subcategory:`Subcategory A2`},{label:`fourth item`,icon:`exercises-online`,category:`Category A`,subcategory:`Subcategory A1`},{label:`fifth item`,icon:`interactives-maps`,category:`Category A`,subcategory:`Subcategory A1`},{label:`sixth item`,icon:`textual-analysis`,category:`Category B`,subcategory:`Subcategory B1`}]},render:t=>e`
    <z-searchbar
      prevent-submit=${t.preventSubmit}
      show-search-button=${t.showSearchButton}
      search-button-icon-only=${t.searchButtonIconOnly}
      search-button-label=${t.searchButtonLabel}
      autocomplete=${t.autocomplete}
      autocomplete-min-chars=${t.autocompleteMinChars}
      results-count=${t.resultsCount}
      search-helper-label=${t.searchHelperLabel}
      results-items=${JSON.stringify(t.resultsItems)}
      sort-results-items=${JSON.stringify(t.sortResultsItems)}
      value=${t.value}
      placeholder=${t.placeholder}
      htmlid=${t.htmlid}
      style="--z-searchbar-results-height: ${t[`--z-searchbar-results-height`]}; --z-searchbar-tag-text-color: ${t[`--z-searchbar-tag-text-color`]}; --z-searchbar-tag-bg: ${t[`--z-searchbar-tag-bg`]}"
      size=${t.size}
      variant=${t.variant}
      label=${t.label}
      html-aria-label=${t.htmlAriaLabel}
    ></z-searchbar>
  `},c={args:{autocomplete:!0,htmlid:`myIdGroupedAutocomplete`,showSearchButton:!1,searchButtonIconOnly:!1,searchButtonLabel:`Cliccami`,resultsItems:[{label:`first item`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`},category:`Category A`,subcategory:`Subcategory A1`,children:[{label:`first item - first child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`},children:[{label:`first item - first child - first child lunghissssssssssssssss sssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssimo`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}},{label:`first item - first child - second child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}},{label:`first item - first child - third child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}}]},{label:`first item - second child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}}]},{label:`second item`,icon:`collezioni`,category:`Category B`,subcategory:`Subcategory B1`},{label:`third item`,icon:`dictonary`,category:`Category A`,subcategory:`Subcategory A2`},{label:`fourth item`,icon:`exercises-online`,category:`Category A`,subcategory:`Subcategory A1`},{label:`fifth item`,icon:`interactives-maps`,category:`Category A`,subcategory:`Subcategory A1`,children:[{label:`fifth item - first child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}},{label:`fifth item - second child`,icon:`download`,tag:{text:`Riservato all'insegnante`,icon:`teacher`}}]},{label:`sixth item`,icon:`textual-analysis`,category:`Category B`,subcategory:`Subcategory B1`}]},render:t=>e`
    <z-searchbar
      prevent-submit=${t.preventSubmit}
      show-search-button=${t.showSearchButton}
      search-button-icon-only=${t.searchButtonIconOnly}
      search-button-label=${t.searchButtonLabel}
      autocomplete=${t.autocomplete}
      autocomplete-min-chars=${t.autocompleteMinChars}
      results-count=${t.resultsCount}
      search-helper-label=${t.searchHelperLabel}
      results-items=${JSON.stringify(t.resultsItems)}
      sort-results-items=${JSON.stringify(t.sortResultsItems)}
      value=${t.value}
      placeholder=${t.placeholder}
      htmlid=${t.htmlid}
      style="--z-searchbar-results-height: ${t[`--z-searchbar-results-height`]}; --z-searchbar-tag-text-color: ${t[`--z-searchbar-tag-text-color`]}; --z-searchbar-tag-bg: ${t[`--z-searchbar-tag-bg`]}"
      size=${t.size}
      variant=${t.variant}
      label=${t.label}
      html-aria-label=${t.htmlAriaLabel}
    ></z-searchbar>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-label=\${args.searchButtonLabel}
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
      label=\${args.label}
      html-aria-label=\${args.htmlAriaLabel}
    ></z-searchbar>
  \`
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["value", "placeholder", "htmlid", "size", "label", "htmlAriaLabel"]
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
      search-button-label=\${args.searchButtonLabel}
      autcomplete="false"
      value=\${args.value}
      placeholder=\${args.placeholder}
      htmlid=\${args.htmlid}
      size=\${args.size}
      label=\${args.label}
      html-aria-label=\${args.htmlAriaLabel}
    ></z-searchbar>
  \`
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    autocomplete: true,
    htmlid: "myIdAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami"
  },
  render: args => html\`
    <z-searchbar
      prevent-submit=\${args.preventSubmit}
      show-search-button=\${args.showSearchButton}
      search-button-icon-only=\${args.searchButtonIconOnly}
      search-button-label=\${args.searchButtonLabel}
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
      label=\${args.label}
      html-aria-label=\${args.htmlAriaLabel}
    ></z-searchbar>
  \`
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami",
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
      search-button-label=\${args.searchButtonLabel}
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
      label=\${args.label}
      html-aria-label=\${args.htmlAriaLabel}
    ></z-searchbar>
  \`
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami",
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
      search-button-label=\${args.searchButtonLabel}
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
      label=\${args.label}
      html-aria-label=\${args.htmlAriaLabel}
    ></z-searchbar>
  \`
} satisfies Story`,...c.parameters?.docs?.source}}};var l=[`Default`,`SimpleSearch`,`Autocomplete`,`AutocompleteWithComplexItems`,`AutocompleteWithComplexTreeItems`];export{o as Autocomplete,s as AutocompleteWithComplexItems,c as AutocompleteWithComplexTreeItems,i as Default,a as SimpleSearch,l as __namedExportsOrder,r as default};