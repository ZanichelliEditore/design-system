import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o}from"./client-06BWhMJQ.js";import{c as s,u as c}from"./beans-CNd94UMz.js";import"./z-button-BRN_Z_XJ.js";import"./z-myz-card-cover-hXvSUsCk.js";import"./z-myz-card-footer-sections-DtvTzojZ.js";import"./z-myz-card-info-CPbjVT9d.js";import"./z-myz-card-body-DPB4d-FW.js";import"./z-myz-card-header-D-OX9290.js";var l=()=>`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.cardFlipped=i(this,`cardFlipped`,7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel=`INFO`,this.hideinfobtn=!1}handleFlipCard(e){this.flipCard(e.detail)}flipCard(e=!0){this.flipped=e,this.cardFlipped.emit(e)}render(){return o(`div`,{key:`350b45f1d67ce56be93878397dba191d9d49f3b3`},o(`z-myz-card`,{key:`058d520f685784f01f88aa608ab95d7c0b604800`},o(`z-myz-card-header`,{key:`0434420ee0f1855766ac19b650e2f52a2457a390`,titolo:this.name}),o(`div`,{key:`56039d4b2cebbe774918266d2510dab184a4870f`,class:`content ${this.flipped?`flipped`:``}`},o(`div`,{key:`ff37757d54b137592773cc08fb18e292c2271ebf`,class:`front`},o(`z-myz-card-body`,{key:`76186989080e96632530502946dd897dbc71642e`},o(`z-myz-card-cover`,{key:`0d222a6d9f2e8bb37fd5de222df581213cf9fe21`,slot:`cover`,titolo:this.name,img:this.cover,faded:this.disabled})),o(`z-button`,{key:`b9873d731a882ab353331dedceb61b38edd29f28`,class:{"hide-info":this.hideinfobtn},variant:c.SECONDARY,icon:`informationsource`,size:s.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),o(`div`,{key:`46968a38e5477fc0067c68821bcc61ecb4cdbc3c`,class:`back`},o(`slot`,{key:`5959142d1e8fbbeff52432cbdfce8306492c48a2`,name:`info`}))),o(`slot`,{key:`e7ade47f1627917fb787dbe73d5a87a4446620fa`})))}static get style(){return l()}},[257,`z-myz-card-dictionary`,{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,`flipCard`,`handleFlipCard`]]]);var u={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZMyzCardDictionary`,tagName:`z-myz-card-dictionary`,customElement:!0,members:[{kind:`field`,name:`name`,type:`string`,description:`card title`},{kind:`field`,name:`cover`,type:`string`,description:`card cover`},{kind:`field`,name:`disabled`,type:`boolean`,description:`card is disabled`,default:`false`},{kind:`field`,name:`flipped`,type:`boolean`,description:`card is flipped`,default:`false`},{kind:`field`,name:`flipbuttonlabel`,type:`string`,description:`flip button label`,default:`"INFO"`},{kind:`field`,name:`hideinfobtn`,type:`boolean`,description:`hide info button`,default:`false`}],events:[{kind:`event`,name:`cardFlipped`,description:`when card is flipped`}],slots:[{name:`-`,description:`generic card slot`},{name:`info`,description:`flipped card info`}]}],exports:[{kind:`js`,name:`ZMyzCardDictionary`,declaration:{name:`ZMyzCardDictionary`,module:`src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx`}},{kind:`custom-element-definition`,name:`z-myz-card-dictionary`,declaration:{name:`ZMyzCardDictionary`,module:`src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx`}}]}]};t({...n()||{},...u,modules:[...(n()||{}).modules||[],...u.modules]});var d={title:`Snowflakes/MyzCard/ZMyzCardDictionary`,component:`z-myz-card-dictionary`,args:{cover:`https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg`,disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:`info`}},f={render:t=>e`
    <z-myz-card-dictionary
      name="${t.name}"
      cover="${t.cover}"
      disabled="${t.disabled}"
      hideinfobtn="${t.hideinfobtn}"
      flipped="${t.flipped}"
      flipbuttonlabel="${t.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `},p={render:t=>e`
    <z-myz-card-dictionary
      name="${t.name}"
      cover="${t.cover}"
      disabled="${t.disabled}"
      hideinfobtn="${t.hideinfobtn}"
      flipped="${t.flipped}"
      flipbuttonlabel="${t.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `,args:{flipped:!0}},m={render:t=>e`
    <z-myz-card-dictionary
      name="${t.name}"
      cover="${t.cover}"
      disabled="${t.disabled}"
      hideinfobtn="${t.hideinfobtn}"
      flipped="${t.flipped}"
      flipbuttonlabel="${t.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `,args:{hideinfobtn:!0}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-myz-card-dictionary
      name="\${args.name}"
      cover="\${args.cover}"
      disabled="\${args.disabled}"
      hideinfobtn="\${args.hideinfobtn}"
      flipped="\${args.flipped}"
      flipbuttonlabel="\${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  \`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-myz-card-dictionary
      name="\${args.name}"
      cover="\${args.cover}"
      disabled="\${args.disabled}"
      hideinfobtn="\${args.hideinfobtn}"
      flipped="\${args.flipped}"
      flipbuttonlabel="\${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  \`,
  args: {
    flipped: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-myz-card-dictionary
      name="\${args.name}"
      cover="\${args.cover}"
      disabled="\${args.disabled}"
      hideinfobtn="\${args.hideinfobtn}"
      flipped="\${args.flipped}"
      flipbuttonlabel="\${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  \`,
  args: {
    hideinfobtn: true
  }
}`,...m.parameters?.docs?.source}}};var h=[`CardDefault`,`CardFlipped`,`CardNoInfoButton`];export{f as CardDefault,p as CardFlipped,m as CardNoInfoButton,h as __namedExportsOrder,d as default};