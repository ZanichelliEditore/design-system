var __spreadArray=this&&this.__spreadArray||function(t,n,r){if(r||arguments.length===2)for(var i=0,e=n.length,a;i<e;i++){if(a||!(i in n)){if(!a)a=Array.prototype.slice.call(n,0,i);a[i]=n[i]}}return t.concat(a||Array.prototype.slice.call(n))};System.register(["./p-d8fcaf1f.system.js","./p-c39f227f.system.js"],(function(t){"use strict";var n,r,i,e;return{setters:[function(t){n=t.r;r=t.c;i=t.h},function(t){e=t.f}],execute:function(){var a=":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";var o=a;var s=t("z_otp",function(){function t(t){n(this,t);this.otpChange=r(this,"otpChange",7);this.inputNum=6;this.status=undefined;this.message=undefined}t.prototype.emitInputChange=function(t){this.otpChange.emit({value:t})};t.prototype.componentWillLoad=function(){this.otp=__spreadArray([],Array(this.inputNum),true);this.otpRef=__spreadArray([],Array(this.inputNum),true)};t.prototype.render=function(){var t=this;return i("div",{key:"9e28959418f6f1b382f16836935e12b3acddfa8f",class:"otp-container"},i("div",{key:"9348bd6807e797441789a465ebdae3a03d1a7534",class:"digits-container"},this.otp.map((function(n,r){return i("input",{class:t.status==e.ERROR?"error":null,onKeyDown:function(n){if(n.keyCode>47){t.otpRef[r].value=""}},onKeyUp:function(n){if(n.keyCode>47){r<t.inputNum-1&&t.otpRef[r+1].focus()}},onInput:function(n){t.otp[r]=n.target.value;t.emitInputChange(t.otp.join(""))},type:"text",minlength:"1",maxlength:"1",autoComplete:"off",ref:function(n){return t.otpRef[r]=n}})}))),i("z-input-message",{key:"87ee18c72daec6c0c903aa91e5a717c4d5a729b5",message:this.message,status:this.status}))};return t}());s.style=o}}}));
//# sourceMappingURL=p-93f6a3ca.system.entry.js.map