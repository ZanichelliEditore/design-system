import{x as o}from"./lit-element-DGXdXVoE.js";import"./index-DKeQRlLO.js";import"./index-kyZRTsWd.js";import"./index-MbkwI0VF.js";import"./index-q1A88zzo.js";import"./index-CeRtvgSS.js";import"./index-BINcgvRt.js";import{s as u,g as r}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as h,H as v,c as g,h as a}from"./index-BZ0rSFNp.js";import{B as $,v as k}from"./index-2GKZ5e5J.js";import"./index-DN_DTmEP.js";import"./index-D00pwYVy.js";import"./utils-Di3zQexw.js";import"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";const L=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`,C=class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.cardFlipped=g(this,"cardFlipped",7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel="INFO",this.hideinfobtn=!1}handleFlipCard(i){this.flipCard(i.detail)}flipCard(i=!0){this.flipped=i,this.cardFlipped.emit(i)}render(){return a("div",{key:"3bfe53ee15a5e23adaee0db6c128bb8d8c69db75"},a("z-myz-card",{key:"004a23eb3344692a7a7a515c0463c77c690d5418"},a("z-myz-card-header",{key:"a1e68946c0dd832d80dc9b1f4971e98e8bdff7d1",titolo:this.name}),a("div",{key:"cbb8664471c4d8dc020db274bfb71250011e9fee",class:`content ${this.flipped?"flipped":""}`},a("div",{key:"2d7d52b09171f487b3218f83aa01bf224d600a43",class:"front"},a("z-myz-card-body",{key:"fd75899711f159680114c024006334b630a56ca4"},a("z-myz-card-cover",{key:"dd0617403448bf60fc7d31fa16950f47b1bc551e",slot:"cover",titolo:this.name,img:this.cover,faded:this.disabled})),a("z-button",{key:"833290b5b62aecdc45c03813ad0915ff5fb06ec8",class:{"hide-info":this.hideinfobtn},variant:$.SECONDARY,icon:"informationsource",size:k.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),a("div",{key:"0f783b6fe32584b4fb7db85cb6fd146e6dadbe1a",class:"back"},a("slot",{key:"9ab8a5c3445767107496330b893759248d4b6529",name:"info"}))),a("slot",{key:"2e48112b272797bfa6d3938d55133f4f9dfe05d6"})))}static get style(){return L}};h(C,[1,"z-myz-card-dictionary",{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,"flipCard","handleFlipCard"]]]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzCardDictionary",tagName:"z-myz-card-dictionary",customElement:!0,members:[{kind:"field",name:"name",type:"string",description:"card title"},{kind:"field",name:"cover",type:"string",description:"card cover"},{kind:"field",name:"disabled",type:"boolean",description:"card is disabled",default:"false"},{kind:"field",name:"flipped",type:"boolean",description:"card is flipped",default:"false"},{kind:"field",name:"flipbuttonlabel",type:"string",description:"flip button label",default:'"INFO"'},{kind:"field",name:"hideinfobtn",type:"boolean",description:"hide info button",default:"false"}],events:[{kind:"event",name:"cardFlipped",description:"when card is flipped"}],slots:[{name:"-",description:"generic card slot"},{name:"info",description:"flipped card info"}]}],exports:[{kind:"js",name:"ZMyzCardDictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-card-dictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}}]}]};u({...r()||{},...d,modules:[...(r()||{}).modules||[],...d.modules]});const R={title:"Snowflakes/MyzCard/ZMyzCardDictionary",component:"z-myz-card-dictionary",args:{cover:"https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg",disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:"info"}},t={render:i=>o`
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
}`,...(y=(z=e.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const G=["CardDefault","CardFlipped","CardNoInfoButton"];export{t as CardDefault,n as CardFlipped,e as CardNoInfoButton,G as __namedExportsOrder,R as default};
