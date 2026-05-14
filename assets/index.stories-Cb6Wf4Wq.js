import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,et as r,nt as i,rt as a,tt as o}from"./iframe-DCi19jo_.js";import{c as s,q as c}from"./beans-G7NAvoly.js";import{H as l,N as u,T as d,U as f}from"./index2-FE8JoBwn.js";import{n as p}from"./index3-DVurE89l.js";import{n as m}from"./index5-8ycZPmMN.js";import{r as h}from"./index24-c3ZmCQW2.js";import{n as g}from"./index25-CuxiDWbM.js";var _=e((()=>{i(),u(),a(class extends t{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.ispressed=!1,this.ishighlighted=!1}retrieveClass(){let e=``;return this.cardtype===f.REAL?e+=`real`:this.cardtype===f.TRIAL?e+=`trial`:this.cardtype===f.TEMP&&(e+=`temp`),this.faded?e+=` faded`:this.ispressed?e+=` pressed`:this.ishighlighted&&(e+=` highlighted`),e}render(){return o(`div`,{key:`6f884d843aa4f9148312f03f30a836d44c75972f`,class:this.retrieveClass(),tabindex:`0`},o(`slot`,{key:`1eeb2b852f5fed6d6652c12179bff14e46cc4cea`}))}static get style(){return`:host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-background)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}`}},[257,`z-myz-card`,{faded:[4],cardtype:[1],ispressed:[4],ishighlighted:[4]}])})),v=e((()=>{i(),a(class extends t{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow()}render(){return o(`div`,{key:`49be2376ff831ba112c5fe1c0c7d3830882ddad5`},o(`slot`,{key:`9387b6ccf399fd9bce8df3d7e325661413f13597`,name:`alert`}),o(`slot`,{key:`6400116bc3aeda99db94b7e06918d3bc1fecf256`,name:`cover`}))}static get style(){return`:host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}`}},[257,`z-myz-card-body`])})),y,b,x=e((()=>{i(),u(),m(),p(),_(),v(),h(),g(),y=a(class extends t{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.cardFlipped=r(this,`cardFlipped`,7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel=`INFO`,this.hideinfobtn=!1}handleFlipCard(e){this.flipCard(e.detail)}flipCard(e=!0){this.flipped=e,this.cardFlipped.emit(e)}render(){return o(`div`,{key:`fe6d9d8cc73aa0135e2874d0bee4b996cf83dc64`},o(`z-myz-card`,{key:`eee9c5a48f74a1bb5fb36ed0952a84260c37b79e`},o(`z-myz-card-header`,{key:`0665c976a9a81efcc14f531585aeb01e29526896`,titolo:this.name}),o(`div`,{key:`c7ab52b273bdda1f32e016f0117844507159699e`,class:`content `+(this.flipped?`flipped`:``)},o(`div`,{key:`c7b2b5cc7253ba6c73033afc1dfa375ed281fae2`,class:`front`},o(`z-myz-card-body`,{key:`954bc5ad14a460c65ab58a85b1e6f6d9568a76ab`},o(`z-myz-card-cover`,{key:`ce0762910761111896f04d2a8071910b556d9471`,slot:`cover`,titolo:this.name,img:this.cover,faded:this.disabled})),o(`z-button`,{key:`385a8b63d361e250c2c3331e9e5222a2cd708ffe`,class:{"hide-info":this.hideinfobtn},variant:d.SECONDARY,icon:`informationsource`,size:l.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),o(`div`,{key:`115dfdbc6c12edbab647c0f8e1e16b197a0066fd`,class:`back`},o(`slot`,{key:`947dbf7463e16a9e1664df2390ec714a77d3b46a`,name:`info`}))),o(`slot`,{key:`bd851dc63c9a852237063f48b0c558363f1dd3f6`})))}static get style(){return`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`}},[257,`z-myz-card-dictionary`,{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,`flipCard`,`handleFlipCard`]]]),b=y})),S,C,w,T,E,D;e((()=>{n(),c(),x(),S={title:`Snowflakes/MyzCard/ZMyzCardDictionary`,component:b,args:{cover:`https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg`,disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:`info`}},C={author:`Nicola Zingarelli`,year:`2021`,title:`Vocabolario della lingua italiana`,description:`A cura di Mario Cannella, Beata Lazzarini`,onlineLicense:{expiration:`31/12/2021`,installations:`1`,expired:!0,expiring:!1},offlineLicense:{expiration:`30/06/2021`,installations:`2`,expired:!0,expiring:!1}},w={render:e=>o(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},o(`z-myz-card-footer-sections`,null,o(`div`,{slot:`top`},`Vocabolario della lingua italiana`),o(`div`,{slot:`bottom`},o(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),o(`z-myz-card-info`,{slot:`info`,data:C},o(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},T={args:{flipped:!0},render:e=>o(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},o(`z-myz-card-footer-sections`,null,o(`div`,{slot:`top`},`Vocabolario della lingua italiana`),o(`div`,{slot:`bottom`},o(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),o(`z-myz-card-info`,{slot:`info`,data:C},o(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},E={args:{hideinfobtn:!0},render:e=>o(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},o(`z-myz-card-footer-sections`,null,o(`div`,{slot:`top`},`Vocabolario della lingua italiana`),o(`div`,{slot:`bottom`},o(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),o(`z-myz-card-info`,{slot:`info`,data:C},o(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <z-myz-card-dictionary name={args.name} cover={args.cover} disabled={args.disabled} hideinfobtn={args.hideinfobtn} flipped={args.flipped} flipbuttonlabel={args.flipbuttonlabel}>
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{
          width: "100%"
        }}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info slot="info" data={DATA}>
        <z-button variant={ButtonVariant.TERTIARY} icon="gear">
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
} satisfies StoryObj<ZMyzCardDictionary>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    flipped: true
  },
  render: args => <z-myz-card-dictionary name={args.name} cover={args.cover} disabled={args.disabled} hideinfobtn={args.hideinfobtn} flipped={args.flipped} flipbuttonlabel={args.flipbuttonlabel}>
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{
          width: "100%"
        }}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info slot="info" data={DATA}>
        <z-button variant={ButtonVariant.TERTIARY} icon="gear">
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
} satisfies StoryObj<ZMyzCardDictionary>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    hideinfobtn: true
  },
  render: args => <z-myz-card-dictionary name={args.name} cover={args.cover} disabled={args.disabled} hideinfobtn={args.hideinfobtn} flipped={args.flipped} flipbuttonlabel={args.flipbuttonlabel}>
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{
          width: "100%"
        }}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info slot="info" data={DATA}>
        <z-button variant={ButtonVariant.TERTIARY} icon="gear">
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
} satisfies StoryObj<ZMyzCardDictionary>`,...E.parameters?.docs?.source}}},D=[`CardDefault`,`CardFlipped`,`CardNoInfoButton`]}))();export{w as CardDefault,T as CardFlipped,E as CardNoInfoButton,D as __namedExportsOrder,S as default};