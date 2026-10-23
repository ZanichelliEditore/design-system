import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{K as r,f as i,x as a}from"./beans-zckFsBZy.js";var o,s,c,l,u,d,f;e((()=>{t(),r(),o={title:`ZSelect`,component:`z-select`,argTypes:{items:{control:{type:`object`}},status:{control:{type:`select`},options:Object.values(a)},size:{control:{type:`inline-radio`},options:Object.values(i)}},args:{items:[{id:`item_1`,name:`item_1`,selected:!1},{id:`item_2`,name:`item_2`,selected:!0},{id:`item_3`,name:`item_3`,selected:!1,disabled:!0},{id:`item_4`,name:`item_4`,selected:!1}],label:`this is the label`,htmlAriaLabel:``,placeholder:`select placeholder`,status:null,message:`helper text`,size:i.BIG,name:`select-name`,disabled:!1,readonly:!1,required:!1,htmlid:``,htmltitle:``,autocomplete:!1,noresultslabel:`Nessun risultato`,hasGroupItems:!1,hasTreeItems:!1,resetItem:``,isfixed:!1},render:e=>n(`z-select`,e)},s={},c={args:{hasGroupItems:!0,items:[{id:`item_1`,name:`item_1`,selected:!1,category:`Gruppo 1`},{id:`item_2`,name:`item_2`,selected:!1,category:`Gruppo 1`},{id:`item_3`,name:`item_3`,selected:!1,category:`Gruppo 2`,disabled:!0},{id:`item_4`,name:`item_4`,selected:!1,category:`Gruppo 2`},{id:`item_5`,name:`item_5`,selected:!1,category:`Gruppo 3`,disabled:!0},{id:`item_6`,name:`item_6`,selected:!1,category:`Gruppo 3`}]}},l={args:{hasGroupItems:!0,items:[{id:`item_1`,name:`item_1`,selected:!1,icon:`teacher`},{id:`item_2`,name:`item_2`,selected:!1,icon:`teacher`},{id:`item_3`,name:`item_3`,selected:!1,disabled:!0,icon:`teacher`}]}},u={args:{hasTreeItems:!0,hasGroupItems:!1,items:[{id:`padre`,name:`Padre`,selected:!1,category:`Sezione`,children:[{id:`figlio1aa`,name:`Figlio`,selected:!1,children:[]},{id:`figlio1b`,name:`Figlio 2`,selected:!1}]},{id:`padre3`,name:`Padre 3`,selected:!1,category:`Altra sezione`,children:[{id:`figlio3a`,name:`Figlio 3A`,selected:!1,children:[{id:`nipote3a-1`,name:`Nipote 3A-1`,selected:!1}]}]}]}},d={args:{hasTreeItems:!0,hasGroupItems:!0,showChildrenOfMatchingParent:!1,items:[{id:`padreA`,name:`Padre A`,selected:!1,category:`Sezione`,children:[{id:`figlioA1`,name:`Figlio A1`,selected:!1,children:[]},{id:`figlioA2`,name:`Figlio A2`,selected:!1}]},{id:`padreB`,name:`Padre B`,selected:!1,category:`Altra sezione`,children:[{id:`figlioB1`,name:`Figlio B1`,selected:!1,children:[{id:`nipoteB1`,name:`Nipote B1`,selected:!1,children:[{id:`pronipoteB1`,name:`Pronipote B1`,selected:!1}]}]}]},{id:`altro`,name:`Altro`,selected:!1,category:`Altra sezione`,children:[]}]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      category: "Gruppo 2",
      disabled: true
    }, {
      id: "item_4",
      name: "item_4",
      selected: false,
      category: "Gruppo 2"
    }, {
      id: "item_5",
      name: "item_5",
      selected: false,
      category: "Gruppo 3",
      disabled: true
    }, {
      id: "item_6",
      name: "item_6",
      selected: false,
      category: "Gruppo 3"
    }] as SelectItem[]
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      disabled: true,
      icon: "teacher"
    }] as SelectItem[]
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: false,
    items: [{
      id: "padre",
      name: "Padre",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlio1aa",
        name: "Figlio",
        selected: false,
        children: []
      }, {
        id: "figlio1b",
        name: "Figlio 2",
        selected: false
      }]
    }, {
      id: "padre3",
      name: "Padre 3",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlio3a",
        name: "Figlio 3A",
        selected: false,
        children: [{
          id: "nipote3a-1",
          name: "Nipote 3A-1",
          selected: false
        }]
      }]
    }] as SelectItem[]
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: true,
    showChildrenOfMatchingParent: false,
    items: [{
      id: "padreA",
      name: "Padre A",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlioA1",
        name: "Figlio A1",
        selected: false,
        children: []
      }, {
        id: "figlioA2",
        name: "Figlio A2",
        selected: false
      }]
    }, {
      id: "padreB",
      name: "Padre B",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlioB1",
        name: "Figlio B1",
        selected: false,
        children: [{
          id: "nipoteB1",
          name: "Nipote B1",
          selected: false,
          children: [{
            id: "pronipoteB1",
            name: "Pronipote B1",
            selected: false
          }]
        }]
      }]
    }, {
      id: "altro",
      name: "Altro",
      selected: false,
      category: "Altra sezione",
      children: []
    }] as SelectItem[]
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f=[`Default`,`Groups`,`ZSelectWithIcons`,`ZSelectWithTreeItems`,`ZSelectWithGroupsAndTreeItems`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      category: "Gruppo 2",
      disabled: true
    }, {
      id: "item_4",
      name: "item_4",
      selected: false,
      category: "Gruppo 2"
    }, {
      id: "item_5",
      name: "item_5",
      selected: false,
      category: "Gruppo 3",
      disabled: true
    }, {
      id: "item_6",
      name: "item_6",
      selected: false,
      category: "Gruppo 3"
    }] as SelectItem[]
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      disabled: true,
      icon: "teacher"
    }] as SelectItem[]
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: false,
    items: [{
      id: "padre",
      name: "Padre",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlio1aa",
        name: "Figlio",
        selected: false,
        children: []
      }, {
        id: "figlio1b",
        name: "Figlio 2",
        selected: false
      }]
    }, {
      id: "padre3",
      name: "Padre 3",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlio3a",
        name: "Figlio 3A",
        selected: false,
        children: [{
          id: "nipote3a-1",
          name: "Nipote 3A-1",
          selected: false
        }]
      }]
    }] as SelectItem[]
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: true,
    showChildrenOfMatchingParent: false,
    items: [{
      id: "padreA",
      name: "Padre A",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlioA1",
        name: "Figlio A1",
        selected: false,
        children: []
      }, {
        id: "figlioA2",
        name: "Figlio A2",
        selected: false
      }]
    }, {
      id: "padreB",
      name: "Padre B",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlioB1",
        name: "Figlio B1",
        selected: false,
        children: [{
          id: "nipoteB1",
          name: "Nipote B1",
          selected: false,
          children: [{
            id: "pronipoteB1",
            name: "Pronipote B1",
            selected: false
          }]
        }]
      }]
    }, {
      id: "altro",
      name: "Altro",
      selected: false,
      category: "Altra sezione",
      children: []
    }] as SelectItem[]
  }
} satisfies Story`,...d.parameters?.docs?.source}}}}))();export{s as Default,c as Groups,d as ZSelectWithGroupsAndTreeItems,l as ZSelectWithIcons,u as ZSelectWithTreeItems,f as __namedExportsOrder,o as default};