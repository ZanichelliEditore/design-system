import"./lit-element--ufgQf_M.js";import{x as o}from"./lit-html-rc9TYZL2.js";import"./index-D1zTASq2.js";import"./index-IVEmculK.js";import"./index-DNJpS5K-.js";import"./index-DAJCFl5q.js";import"./index-DBq0n6mX.js";import"./index-Cbgw1EMM.js";import{s as u,g as r}from"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import{d as h,H as v,c as g,h as a}from"./index-BZ0rSFNp.js";import{B as $,t as k}from"./index-Dk5nO_yw.js";import"./index-9WVNbtLu.js";import"./index-DxTml2A-.js";import"./utils-BSX0QfGo.js";import"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";const L=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,
    -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`,C=class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.cardFlipped=g(this,"cardFlipped",7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel="INFO",this.hideinfobtn=!1}handleFlipCard(i){this.flipCard(i.detail)}flipCard(i=!0){this.flipped=i,this.cardFlipped.emit(i)}render(){return a("div",{key:"8da8eb5aeba92f47b4c2a3665db46e3696840b93"},a("z-myz-card",{key:"081cdeb9db1b5d31e453a585fa85a9a7b5e2b55b"},a("z-myz-card-header",{key:"2c72172e86fec6d6a1defe157d7d02187355db59",titolo:this.name}),a("div",{key:"3236c50898a654a85556e3e000bd11eae2bf6ecb",class:`content ${this.flipped?"flipped":""}`},a("div",{key:"0a810be7a0eb4dfadf4448b7765a0d51aac5b9b0",class:"front"},a("z-myz-card-body",{key:"f69c5b62bc54b391abd2d18783408392630b210a"},a("z-myz-card-cover",{key:"313b16345b5a414c391d7a134f51c0ff36eb9b47",slot:"cover",titolo:this.name,img:this.cover,faded:this.disabled})),a("z-button",{key:"9aa1ae4a534e0929c85a31a723b0418cb0456a53",class:{"hide-info":this.hideinfobtn},variant:$.SECONDARY,icon:"informationsource",size:k.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),a("div",{key:"b56c948509aa65c0a727bc0ef7b2e95cc1c5ae6f",class:"back"},a("slot",{key:"1bc840105341bbd2f49765f207126b294b2fa0da",name:"info"}))),a("slot",{key:"c0ebd8cde915dc511f7ac53f0617d044c8908197"})))}static get style(){return L}};h(C,[1,"z-myz-card-dictionary",{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,"flipCard","handleFlipCard"]]]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzCardDictionary",tagName:"z-myz-card-dictionary",customElement:!0,members:[{kind:"field",name:"name",type:"string",description:"card title"},{kind:"field",name:"cover",type:"string",description:"card cover"},{kind:"field",name:"disabled",type:"boolean",description:"card is disabled",default:"false"},{kind:"field",name:"flipped",type:"boolean",description:"card is flipped",default:"false"},{kind:"field",name:"flipbuttonlabel",type:"string",description:"flip button label",default:'"INFO"'},{kind:"field",name:"hideinfobtn",type:"boolean",description:"hide info button",default:"false"}],events:[{kind:"event",name:"cardFlipped",description:"when card is flipped"}],slots:[{name:"-",description:"generic card slot"},{name:"info",description:"flipped card info"}]}],exports:[{kind:"js",name:"ZMyzCardDictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-card-dictionary",declaration:{name:"ZMyzCardDictionary",module:"src/snowflakes/myz/card/z-myz-card-dictionary/index.tsx"}}]}]};u({...r()||{},...d,modules:[...(r()||{}).modules||[],...d.modules]});const G={title:"Snowflakes/MyzCard/ZMyzCardDictionary",component:"z-myz-card-dictionary",args:{cover:"https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg",disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:"info"}},t={render:i=>o`
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
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var f,p,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,z,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(z=e.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const P=["CardDefault","CardFlipped","CardNoInfoButton"];export{t as CardDefault,n as CardFlipped,e as CardNoInfoButton,P as __namedExportsOrder,G as default};
