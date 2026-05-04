import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o}from"./client-C9JD6DZT.js";import{c as s,u as c}from"./beans-CNd94UMz.js";import"./z-button-BvaTgWEC.js";import"./z-myz-card-cover-B670r38A.js";import"./z-myz-card-footer-sections-Drpe9N0z.js";import"./z-myz-card-info-D24ia3ZC.js";import"./z-myz-card-body-DvcWtlHT.js";import"./z-myz-card-header-lDXCdx6X.js";var l=()=>`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.cardFlipped=i(this,`cardFlipped`,7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel=`INFO`,this.hideinfobtn=!1}handleFlipCard(e){this.flipCard(e.detail)}flipCard(e=!0){this.flipped=e,this.cardFlipped.emit(e)}render(){return o(`div`,{key:`a9487e6642ad2fd94a355d46598f786a7bc4db0d`},o(`z-myz-card`,{key:`2cf366c0538902b4991dcb436f3d3ca967aef5a6`},o(`z-myz-card-header`,{key:`31adc393ce9826bb753c05636bce1eb8cb7fdf6c`,titolo:this.name}),o(`div`,{key:`b1d77051a518d8933473f2ae3d9df0f67c5ef524`,class:`content ${this.flipped?`flipped`:``}`},o(`div`,{key:`ff0bd57ebae0a5747885c012714e15de743b3852`,class:`front`},o(`z-myz-card-body`,{key:`2e8cbb334315e0bca025a2dd3ce9a85a2e1942be`},o(`z-myz-card-cover`,{key:`69b3a3ad91249412576d593037046e043822cc2c`,slot:`cover`,titolo:this.name,img:this.cover,faded:this.disabled})),o(`z-button`,{key:`ce82f25b2d8355404b98063497646ad6961f78e4`,class:{"hide-info":this.hideinfobtn},variant:c.SECONDARY,icon:`informationsource`,size:s.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),o(`div`,{key:`563d862d59a2ff62991fbcde612ebe2ef7ef398b`,class:`back`},o(`slot`,{key:`c78f205fdc86b689e37f90be49b953ca520abf85`,name:`info`}))),o(`slot`,{key:`46bf3fd77eb98cda8a517f9d7c0b8e729e36b6e6`})))}static get style(){return l()}},[257,`z-myz-card-dictionary`,{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,`flipCard`,`handleFlipCard`]]]);var u={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZMyzCardDictionary`,tagName:`z-myz-card-dictionary`,customElement:!0,members:[{kind:`field`,name:`name`,type:`string`,description:`card title`},{kind:`field`,name:`cover`,type:`string`,description:`card cover`},{kind:`field`,name:`disabled`,type:`boolean`,description:`card is disabled`,default:`false`},{kind:`field`,name:`flipped`,type:`boolean`,description:`card is flipped`,default:`false`},{kind:`field`,name:`flipbuttonlabel`,type:`string`,description:`flip button label`,default:`"INFO"`},{kind:`field`,name:`hideinfobtn`,type:`boolean`,description:`hide info button`,default:`false`}],events:[{kind:`event`,name:`cardFlipped`,description:`when card is flipped`}],slots:[{name:`-`,description:`generic card slot`},{name:`info`,description:`flipped card info`}]}],exports:[{kind:`js`,name:`ZMyzCardDictionary`,declaration:{name:`ZMyzCardDictionary`,module:`src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx`}},{kind:`custom-element-definition`,name:`z-myz-card-dictionary`,declaration:{name:`ZMyzCardDictionary`,module:`src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx`}}]}]};t({...n()||{},...u,modules:[...(n()||{}).modules||[],...u.modules]});var d={title:`Snowflakes/MyzCard/ZMyzCardDictionary`,component:`z-myz-card-dictionary`,args:{cover:`https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg`,disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:`info`}},f={render:t=>e`
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