import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,et as r,it as i,nt as a,rt as o}from"./iframe-e9i3gKXJ.js";import{J as s,c}from"./beans-NNuswqO1.js";import{D as l,N as u,P as d,w as f}from"./index2-D8kPOPlZ.js";import{n as p}from"./index3-DmUKOwU9.js";import{n as m}from"./index5-C246luL0.js";import{n as h}from"./index25-CyyLqJoC.js";import{t as g}from"./index26-Be0tKMQt.js";var _,v=e((()=>{o(),d(),_=()=>`:host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-background)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}`,i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.ispressed=!1,this.ishighlighted=!1}retrieveClass(){let e=``;return this.cardtype===f.REAL?e+=`real`:this.cardtype===f.TRIAL?e+=`trial`:this.cardtype===f.TEMP&&(e+=`temp`),this.faded?e+=` faded`:this.ispressed?e+=` pressed`:this.ishighlighted&&(e+=` highlighted`),e}render(){return a(`div`,{key:`7268d6cd9e424a3d8134ff4e96bc2ba665988a6c`,class:this.retrieveClass(),tabindex:`0`},a(`slot`,{key:`22c578f464737dcad6536f251e1dbea082a2eb1a`}))}static get style(){return _()}},[257,`z-myz-card`,{faded:[4],cardtype:[1],ispressed:[4],ishighlighted:[4]}])})),y,b=e((()=>{o(),y=()=>`:host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}`,i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow()}render(){return a(`div`,{key:`9a1f8e25043b54dd7ce20167622840c675d8282a`},a(`slot`,{key:`5b24f58f0ca8db42b6a7e8a112fd0af3af64df96`,name:`alert`}),a(`slot`,{key:`49f082fc29b4edab74ac4dfbd6c77d388eaa22cc`,name:`cover`}))}static get style(){return y()}},[257,`z-myz-card-body`])})),x,S,C,w=e((()=>{o(),d(),m(),p(),v(),b(),h(),g(),x=()=>`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host z-myz-card{--card-overflow:visible}:host>div{position:relative;width:100%;height:522px;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content{position:relative;z-index:2;width:100%;height:522px;transform-style:preserve-3d;transition:-webkit-transform 0.5s ease-out;transition:transform 0.5s ease-out;transition:transform 0.5s ease-out,     -webkit-transform 0.5s ease-out}:host>div .content.flipped{margin-top:-2px;transform:rotateY(180deg)}:host>div .front,:host>div .back{position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden}:host>div .front{z-index:2;top:0;left:0;transform:rotateY(0deg)}:host>div .front z-button{position:absolute;z-index:3;top:calc(var(--space-unit) * 0.5);left:calc(-1 * var(--space-unit))}:host>div .back{z-index:1;top:0;left:0;display:flex;justify-content:center;padding:0 var(--space-unit);margin-left:calc(-1 * var(--space-unit));transform:rotateY(180deg)}.hide-info{display:none}`,S=i(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.cardFlipped=r(this,`cardFlipped`,7),this.disabled=!1,this.flipped=!1,this.flipbuttonlabel=`INFO`,this.hideinfobtn=!1}handleFlipCard(e){this.flipCard(e.detail)}flipCard(e=!0){this.flipped=e,this.cardFlipped.emit(e)}render(){return a(`div`,{key:`d1e208c3b3a1fac92e72689db7b9fd700e2452b1`},a(`z-myz-card`,{key:`96203a335382ae05d8f8b4567936486bd05477d7`},a(`z-myz-card-header`,{key:`22b83315e7c72fc2794718ee07734d9be9ff981f`,titolo:this.name}),a(`div`,{key:`40f1a3a032d2f23b4151f6c5e3ac9598c6b2a694`,class:`content ${this.flipped?`flipped`:``}`},a(`div`,{key:`44adbb97b0b41855c9158a1496b0dbfb05a79c6e`,class:`front`},a(`z-myz-card-body`,{key:`f5c9b1f0994d0a14803039cf2a6b74ba4c303ffd`},a(`z-myz-card-cover`,{key:`934b89d09a3b8be386335656006fa88430f63b3a`,slot:`cover`,titolo:this.name,img:this.cover,faded:this.disabled})),a(`z-button`,{key:`1af759bc9a58dd131132d81f9f6e56603ac99be1`,class:{"hide-info":this.hideinfobtn},variant:u.SECONDARY,icon:`informationsource`,size:l.X_SMALL,onClick:()=>this.flipCard(!0),disabled:this.flipped},this.flipbuttonlabel)),a(`div`,{key:`1c85cf336ea01bc48e3e68ae405910c61eddf83d`,class:`back`},a(`slot`,{key:`4f89674544c94f61bcdef1ef10fdc4f845ed9e1e`,name:`info`}))),a(`slot`,{key:`5ecf28e236204b2e8e0789e2f866923c7c6b3cb5`})))}static get style(){return x()}},[257,`z-myz-card-dictionary`,{name:[1],cover:[1],disabled:[4],flipped:[1028],flipbuttonlabel:[1],hideinfobtn:[4]},[[0,`flipCard`,`handleFlipCard`]]]),C=S})),T,E,D,O,k,A;e((()=>{n(),s(),w(),T={title:`Snowflakes/MyzCard/ZMyzCardDictionary`,component:C,args:{cover:`https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg`,disabled:!1,hideinfobtn:!1,flipped:!1,flipbuttonlabel:`info`}},E={author:`Nicola Zingarelli`,year:`2021`,title:`Vocabolario della lingua italiana`,description:`A cura di Mario Cannella, Beata Lazzarini`,onlineLicense:{expiration:`31/12/2021`,installations:`1`,expired:!0,expiring:!1},offlineLicense:{expiration:`30/06/2021`,installations:`2`,expired:!0,expiring:!1}},D={render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:c.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},O={args:{flipped:!0},render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:c.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},k={args:{hideinfobtn:!0},render:e=>a(`z-myz-card-dictionary`,{name:e.name,cover:e.cover,disabled:e.disabled,hideinfobtn:e.hideinfobtn,flipped:e.flipped,flipbuttonlabel:e.flipbuttonlabel},a(`z-myz-card-footer-sections`,null,a(`div`,{slot:`top`},`Vocabolario della lingua italiana`),a(`div`,{slot:`bottom`},a(`z-button`,{style:{width:`100%`}},`VAI AL PRODOTTO`))),a(`z-myz-card-info`,{slot:`info`,data:E},a(`z-button`,{variant:c.TERTIARY,icon:`gear`},`Gestisci Licenze`)))},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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