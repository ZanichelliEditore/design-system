import{x as c}from"./lit-element-DGXdXVoE.js";import"./index-C665CRSE.js";import{s as d,g as i}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as l,H as f,c as h,h as n}from"./index-BZ0rSFNp.js";import{I as g}from"./index-BnC6Ywep.js";import"./index-BpZkdoDR.js";import"./index-DrFu-skq.js";const y="input:focus{box-shadow:var(--shadow-focus-primary);outline:none !important}:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:flex;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}",v=class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.otpChange=h(this,"otpChange",7),this.inputNum=6,this.status=void 0,this.message=void 0}emitInputChange(a){this.otpChange.emit({value:a})}componentWillLoad(){this.otp=[...Array(this.inputNum)],this.otpRef=[...Array(this.inputNum)]}render(){return n("div",{key:"1d894b5748303b0c8608f99266b207697cc98659",class:"otp-container"},n("div",{key:"77a5be776089ea3d7988f63e56e6f6702116ffcc",class:"digits-container"},this.otp.map((a,e)=>n("input",{class:this.status==g.ERROR?"error":null,onKeyDown:t=>{t.keyCode>47&&(this.otpRef[e].value="")},onKeyUp:t=>{t.keyCode>47&&e<this.inputNum-1&&this.otpRef[e+1].focus()},onInput:t=>{this.otp[e]=t.target.value,this.emitInputChange(this.otp.join(""))},type:"text",minlength:"1",maxlength:"1",autoComplete:"off",ref:t=>this.otpRef[e]=t}))),n("z-input-message",{key:"862bef74e3e88e3caf212c5617db73820dae3af5",message:this.message,status:this.status}))}static get style(){return y}};l(v,[1,"z-otp",{inputNum:[2,"input-num"],status:[8],message:[1]}]);const r={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZOtp",tagName:"z-otp",customElement:!0,members:[{kind:"field",name:"inputNum",type:"number",description:"Input number",default:"6"},{kind:"field",name:"status",type:"any",description:"Input status"},{kind:"field",name:"message",type:"string",description:"Input message"}],events:[{kind:"event",name:"otpChange",description:"Otp change event"}]}],exports:[{kind:"js",name:"ZOtp",declaration:{name:"ZOtp",module:"src/snowflakes/myz/z-otp/index.tsx"}},{kind:"custom-element-definition",name:"z-otp",declaration:{name:"ZOtp",module:"src/snowflakes/myz/z-otp/index.tsx"}}]}]};d({...i()||{},...r,modules:[...(i()||{}).modules||[],...r.modules]});const E={title:"Snowflakes/ZOtp",component:"z-otp",argTypes:{status:{control:{type:"select"},options:["","error"]}},args:{inputNum:6,status:"",message:""}},o={render:s=>c`<z-otp
      .inputNum=${s.inputNum}
      .status=${s.status}
      .message=${s.message}
    ></z-otp>`};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`<z-otp
      .inputNum=\${args.inputNum}
      .status=\${args.status}
      .message=\${args.message}
    ></z-otp>\`
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["ZOtp"];export{o as ZOtp,I as __namedExportsOrder,E as default};