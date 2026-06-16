import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,et as r,it as i,nt as a,rt as o}from"./iframe-L9IszzLp.js";import{c as s,q as c}from"./beans-GvJywrye.js";import{B as l,P as u,T as d,U as f}from"./index2-qyCzFCqb.js";import{n as p}from"./index3-e6kIIikC.js";import{n as m}from"./index5-Ch11us1_.js";import{n as h}from"./index24--i_mNB1M.js";import{t as g}from"./index25-CZ5oqXdj.js";var _,v=e((()=>{o(),u(),_=()=>`:host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-background)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}`,i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.ispressed=!1,this.ishighlighted=!1}retrieveClass(){let e=``;return this.cardtype===d.REAL?e+=`real`:this.cardtype===d.TRIAL?e+=`trial`:this.cardtype===d.TEMP&&(e+=`temp`),this.faded?e+=` faded`:this.ispressed?e+=` pressed`:this.ishighlighted&&(e+=` highlighted`),e}render(){return a(`div`,{key:`ed3d5841bd46ec168fef3fcb25e177cc5548ff42`,class:this.retrieveClass(),tabindex:`0`},a(`slot`,{key:`87fa940d952cc77e8a2d95cbff8a8690d782039a`}))}static get style(){return _()}},[257,`z-myz-card`,{faded:[4],cardtype:[1],ispressed:[4],ishighlighted:[4]}])})),y,b=e((()=>{o(),y=()=>`:host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}`,i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow()}render(){return a(`div`,{key:`95ef1a2e8d5babdef3f5d89b532b6916cd1e2e4c`},a(`slot`,{key:`96616fcb612f3ae7f1db129d50e5dbd0497870a9`,name:`alert`}),a(`slot`,{key:`327613cfcfe1a9f96e66531629d0591b90717569`,name:`cover`}))}static get style(){return y()}},[257,`z-myz-card-body`])})),x,S,C,w=e((()=>{o(),u(),m(),p(),v(),b(),h(),g(),x=()=>`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`,S=i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.cardFlipped=r(this,`cardFlipped`,7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel=`INFO`,this.hideinfobtn=!1}handleFlipCard(e){this.flipCard(e.detail)}flipCard(e=!0){this.flipped=e,this.cardFlipped.emit(e)}render(){return a(`div`,{key:`fe6d9d8cc73aa0135e2874d0bee4b996cf83dc64`},a(`z-myz-card`,{key:`eee9c5a48f74a1bb5fb36ed0952a84260c37b79e`},a(`z-myz-card-header`,{key:`0665c976a9a81efcc14f531585aeb01e29526896`,titolo:this.name}),a(`div`,{key:`c7ab52b273bdda1f32e016f0117844507159699e`,class:`content ${this.flipped?`flipped`:``}`},a(`div`,{key:`c7b2b5cc7253ba6c73033afc1dfa375ed281fae2`,class:`front`},a(`z-myz-card-body`,{key:`954bc5ad14a460c65ab58a85b1e6f6d9568a76ab`},a(`z-myz-card-cover`,{key:`ce0762910761111896f04d2a8071910b556d9471`,slot:`cover`,titolo:this.name,img:this.cover,faded:this.disabled})),a(`z-button`,{key:`385a8b63d361e250c2c3331e9e5222a2cd708ffe`,class:{"hide-info":this.hideinfobtn},variant:l.SECONDARY,icon:`informationsource`,size:f.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),a(`div`,{key:`115dfdbc6c12edbab647c0f8e1e16b197a0066fd`,class:`back`},a(`slot`,{key:`947dbf7463e16a9e1664df2390ec714a77d3b46a`,name:`info`}))),a(`slot`,{key:`bd851dc63c9a852237063f48b0c558363f1dd3f6`})))}static get style(){return x()}},[257,`z-myz-card-dictionary`,{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,`flipCard`,`handleFlipCard`]]]),C=S})),T,E,D,O,k,A;e((()=>{n(),c(),w(),T={title:`Snowflakes/MyzCard/ZMyzCardDictionary`,component:C,args:{cover:`https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg`,disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:`info`}},E={author:`Nicola Zingarelli`,year:`2021`,title:`Vocabolario della lingua italiana`,description:`A cura di Mario Cannella, Beata Lazzarini`,onlineLicense:{expiration:`31/12/2021`,installations:`1`,expired:!0,expiring:!1},offlineLicense:{expiration:`30/06/2021`,installations:`2`,expired:!0,expiring:!1}},D={render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},O={args:{flipped:!0},render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},k={args:{hideinfobtn:!0},render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:s.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZMyzCardDictionary>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZMyzCardDictionary>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZMyzCardDictionary>`,...k.parameters?.docs?.source}}},A=[`CardDefault`,`CardFlipped`,`CardNoInfoButton`]}))();export{D as CardDefault,O as CardFlipped,k as CardNoInfoButton,A as __namedExportsOrder,T as default};