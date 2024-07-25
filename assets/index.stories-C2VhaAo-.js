import{x as o}from"./lit-element-DGXdXVoE.js";import"./index-yOVBEWgS.js";import"./index-CYQ-qddQ.js";import"./index-X9P2fG-K.js";import"./index-B9h1-qEO.js";import"./index-srL4jxQE.js";import"./index-DjE_4ChB.js";import{s as u,g as r}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as h,H as v,c as g,h as a}from"./index-8h8udRzn.js";import{B as $,w as k}from"./index-CcuDdGyi.js";import"./index-BEj-2O7q.js";import"./index-D2BETxnn.js";import"./utils-B_2tKo6T.js";import"./breakpoints-C5kxgyOu.js";const L=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`,C=class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.cardFlipped=g(this,"cardFlipped",7),this.name=void 0,this.cover=void 0,this.disabled=!1,this.flipped=!1,this.flipbuttonlabel="INFO",this.hideinfobtn=!1}handleFlipCard(i){this.flipCard(i.detail)}flipCard(i=!0){this.flipped=i,this.cardFlipped.emit(i)}render(){return a("div",{key:"7c0e214af2e993695c66836efb42a8bf33dc4629"},a("z-myz-card",{key:"2ed67dddb917588b024b06c855f37abc638b4d1f"},a("z-myz-card-header",{key:"70237d92d6de3e5cd80ee418cfbe1f3baf1509af",titolo:this.name}),a("div",{key:"6c793e29fda36a4a1c4690940759e6fab48831d2",class:`content ${this.flipped?"flipped":""}`},a("div",{key:"496f8640ed73efdc08619431d73b9b0b4cadf65c",class:"front"},a("z-myz-card-body",{key:"d3241559449f5d3253896922431277417999c4bd"},a("z-myz-card-cover",{key:"a74ea6714308b1169893d6f2e9db15a033e99d4e",slot:"cover",titolo:this.name,img:this.cover,faded:this.disabled})),a("z-button",{key:"ad280718418f1fde5a4b3475a9c78434aac4d2f6",class:{"hide-info":this.hideinfobtn},variant:$.SECONDARY,icon:"informationsource",size:k.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),a("div",{key:"60155cded227ba7c45125598a53f6c447e7fef46",class:"back"},a("slot",{key:"ba43511e6db349c0ca937864e22b5ef7cd47dc32",name:"info"}))),a("slot",{key:"b0dc1b1affc7c352a12a0bed580fcd0c78a9cf22"})))}static get style(){return L}};h(C,[1,"z-myz-card-dictionary",{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,"flipCard","handleFlipCard"]]]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzCardDictionary",tagName:"z-myz-card-dictionary",customElement:!0,members:[{kind:"field",name:"name",type:"string",description:"card title"},{kind:"field",name:"cover",type:"string",description:"card cover"},{kind:"field",name:"disabled",type:"boolean",description:"card is disabled",default:"false"},{kind:"field",name:"flipped",type:"boolean",description:"card is flipped",default:"false"},{kind:"field",name:"flipbuttonlabel",type:"string",description:"flip button label",default:'"INFO"'},{kind:"field",name:"hideinfobtn",type:"boolean",description:"hide info button",default:"false"}],events:[{kind:"event",name:"cardFlipped",description:"when card is flipped"}],slots:[{name:"-",description:"generic card slot"},{name:"info",description:"flipped card info"}]}],exports:[{kind:"js",name:"ZMyzCardDictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-card-dictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}}]}]};u({...r()||{},...d,modules:[...(r()||{}).modules||[],...d.modules]});const S={title:"Snowflakes/MyzCard/ZMyzCardDictionary",component:"z-myz-card-dictionary",args:{cover:"https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg",disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:"info"}},t={render:i=>o`
    <z-myz-card-dictionary
      name="${i.name}"
      cover="${i.cover}"
      disabled="${i.disabled}"
      hideinfobtn="${i.hideinfobtn}"
      flipped="${i.flipped}"
      flipbuttonlabel="${i.flipbuttonlabel}"
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
  `},n={render:i=>o`
    <z-myz-card-dictionary
      name="${i.name}"
      cover="${i.cover}"
      disabled="${i.disabled}"
      hideinfobtn="${i.hideinfobtn}"
      flipped="${i.flipped}"
      flipbuttonlabel="${i.flipbuttonlabel}"
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
  `,args:{flipped:!0}},e={render:i=>o`
    <z-myz-card-dictionary
      name="${i.name}"
      cover="${i.cover}"
      disabled="${i.disabled}"
      hideinfobtn="${i.hideinfobtn}"
      flipped="${i.flipped}"
      flipbuttonlabel="${i.flipbuttonlabel}"
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
  `,args:{hideinfobtn:!0}};var l,s,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var f,p,m;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,z,y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(z=e.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const _=["CardDefault","CardFlipped","CardNoInfoButton"];export{t as CardDefault,n as CardFlipped,e as CardNoInfoButton,_ as __namedExportsOrder,S as default};
