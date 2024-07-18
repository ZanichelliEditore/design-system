import{x as A}from"./lit-element-DGXdXVoE.js";import{U as o,e as f,D as U,B as L}from"./index-CcuDdGyi.js";import"./index-CGBfektC.js";import"./index-yOVBEWgS.js";import{s as w,g as d}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as E,H as M,c as T,h as t,a as $}from"./index-8h8udRzn.js";import"./index-wiJQDjTb.js";import{g as m}from"./utils-B_2tKo6T.js";import"./index-BEj-2O7q.js";import"./breakpoints-C5kxgyOu.js";const _=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:flex;height:228px;flex-direction:column;padding:calc(var(--space-unit) * 2);border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");border-radius:2px;color:var(--color-default-text)}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text-inverse)}:host>.dragdrop.dragover .dragover-container{display:flex;align-items:center;justify-content:center}`,Z=class extends M{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.fileDropped=T(this,"fileDropped",7),this.dragAndDropLabel=void 0}fileDroppedHandler(e){this.fileDropped.emit(e)}renderOnDragOverMessage(){return t("div",{class:"dragover-container"},t("div",{class:"dragover-message"},t("span",{class:"body-2-sb"},this.dragAndDropLabel)))}render(){return t("div",{key:"3167629a30bd1ffdb861d9b13003eb804332a43b",tabIndex:0,ref:e=>this.dragDropContainer=e,class:"dragdrop",onDragOver:e=>{e.preventDefault(),this.dragDropContainer.classList.add("dragover")},onDragLeave:()=>{this.dragDropContainer.classList.remove("dragover")},onDrop:e=>{e.preventDefault(),e.dataTransfer.files.length&&(this.dragDropContainer.classList.remove("dragover"),this.fileDroppedHandler(e.dataTransfer.files))}},this.renderOnDragOverMessage(),t("slot",{key:"6255fd60685c2cd2c0dc0abad0f221100360f956"}))}static get style(){return _}};E(Z,[1,"z-dragdrop-area",{dragAndDropLabel:[1,"drag-and-drop-label"]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZDragdropArea",tagName:"z-dragdrop-area",customElement:!0,members:[{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label"}],events:[{kind:"event",name:"fileDropped",description:"Emitted when user drop one or more files"}]}],exports:[{kind:"js",name:"ZDragdropArea",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}},{kind:"custom-element-definition",name:"z-dragdrop-area",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}}]}]};w({...d()||{},...h,modules:[...(d()||{}).modules||[],...h.modules]});const j=':host{color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:flex;flex-direction:column}:host .modal-wrapper{display:flex;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2)}:host .modal-wrapper>.files-wrapper{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:flex;flex-direction:column;margin:auto}:host .text-container .body-1{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin:calc(var(--space-unit) * 2.5) 0 calc(var(--space-unit) * 4);font-size:calc(var(--space-unit) * 3);font-weight:var(--font-sb)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>.heading-4-sb{display:inline-block;margin:calc(var(--space-unit) * 3) 0;font-size:calc(var(--space-unit) * 2);font-weight:var(--font-sb)}:host([type="dragdrop"])>.container>.files-container>.heading-4-sb{margin-top:0;margin-bottom:calc(var(--space-unit) * 3)}:host>.container>.files-container>.files-wrapper{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}:host([type="dragdrop"])>.container>.files-container>z-divider{margin:calc(var(--space-unit) * 3) 0}:host .error-message{font-size:14px;font-weight:400;letter-spacing:0.16%;line-height:20px;text-align:left}:host .error-message>.file-name{font-weight:600}@media only screen and (min-width: 768px){:host>.container>z-button{align-self:flex-start}:host .modal-wrapper{padding:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){:host .modal-wrapper{padding:calc(var(--space-unit) * 4)}}',O=class extends M{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.fileInput=T(this,"fileInput",7),this.inputAttributes={type:"file",id:"file-elem",multiple:!0},this.type=o.DEFAULT,this.buttonVariant=void 0,this.acceptedFormat=void 0,this.fileMaxSize=void 0,this.mainTitle=void 0,this.description=void 0,this.files=[],this.uploadBtnLabel="allega",this.dragAndDropLabel="Rilascia i file in questa area per allegarli.",this.hasFileSection=!0,this.invalidFiles=void 0}removeFileListener(e){this.removeFileHandler(e.detail)}fileDroppedListener(e){this.input.files=e.detail,this.fileInputHandler()}componentDidUpdate(){this.handleAccessibility(),this.invalidFiles.size&&this.errorModal.focus()}componentWillLoad(){this.invalidFiles=new Map}fileInputHandler(){this.input.files.length&&(this.invalidFiles=this.checkFiles(Array.from(this.input.files)))}async getFiles(){return this.files}async removeFile(e){this.removeFileHandler(e)}removeFileHandler(e){const i=this.files,r=i.find(n=>n.name===e);if(r){const n=i.indexOf(r);n>=0&&(i.splice(n,1),this.files=[...i])}}getType(){return m()!==f.DESKTOP&&m()!==f.DESKTOP_WIDE?o.DEFAULT:this.type}handleAccessibility(){const e=this.el.querySelector("z-file:last-child z-chip button");this.files.length>0&&e?e.focus():this.getType()===o.DEFAULT?this.button.querySelector("button").focus():this.uploadLink.focus()}checkFiles(e){const i=new Map,r=`supera il limite di ${this.fileMaxSize}MB`,n=" ha un formato non supportato";return e.forEach(a=>{const I=a.size/1024/1024,c=this.acceptedFormat.split(",").some(p=>a.name.toLowerCase().endsWith(p.trim())),u=I<=this.fileMaxSize;if(u&&c){this.files.find(p=>p.name===a.name)||(this.files.push(a),this.fileInput.emit(a),this.input.value="");return}i.set(a.name,[]),u||i.get(a.name).push(r),c||i.get(a.name).push(n)}),i}renderTitle(){return t("span",{id:"title"},this.mainTitle)}renderDescription(e){return t("span",{class:e},this.description)}renderAllowedFileExtensions(){let e="",i="";this.acceptedFormat&&(e=` nei formati ${this.acceptedFormat.split(", ").map(a=>a.substring(1).toUpperCase()).join(", ")}`),this.fileMaxSize&&(i=` per un massimo di ${this.fileMaxSize}MB di peso`);const r=`Puoi allegare file${e}${i}.`;return t("span",{class:"body-3"},e||i?r:null)}renderFileSection(){if(this.hasFileSection)return t("section",{class:`files-container ${this.files.length?"":"hidden"}`},t("span",{class:"heading-4-sb"},"File appena caricati"),t("div",{class:"files-wrapper"},t("slot",{name:"files"})),t("z-divider",{size:U.MEDIUM}))}renderInput(){return t("input",Object.assign({},this.inputAttributes,{onChange:()=>this.fileInputHandler(),accept:this.acceptedFormat,ref:e=>this.input=e}))}renderUploadButton(){return[this.renderInput(),t("z-button",{onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())},id:"fileSelect",variant:this.buttonVariant,icon:"upload",ref:e=>this.button=e},this.uploadBtnLabel)]}renderUploadLink(){return[this.renderInput(),t("span",{class:"body-1 upload-link-text"},"Trascina o"," ",t("span",{tabIndex:0,class:"body-1-sb upload-link",onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())},ref:e=>this.uploadLink=e},"carica")," ","dal tuo computer")]}renderDefaultMode(){return[this.renderDescription("body-3-sb"),this.renderAllowedFileExtensions(),this.renderFileSection(),this.renderUploadButton()]}renderDragDropMode(){return[this.renderFileSection(),t("z-dragdrop-area",{"drag-and-drop-label":this.dragAndDropLabel},t("div",{class:"text-container"},this.renderDescription("body-1"),this.renderUploadLink(),this.renderAllowedFileExtensions()))]}formatErrorString(e,i){var r,n;const a=i[0]&&i[1]?" e ":"";return t("span",{class:"error-message"},"Il file ",t("span",{class:"file-name"},e)," ",(r=i[1])!==null&&r!==void 0?r:"",a,(n=i[0])!==null&&n!==void 0?n:"",".")}handleErrorModalContent(){return t("div",{slot:"modalContent"},t("div",{class:"modal-wrapper"},t("div",{class:"files"},Array.from(this.invalidFiles).map(([e,i])=>t("span",{class:"body-3"},this.formatErrorString(e,i))))))}render(){return t($,{key:"9d70b41b511113fa9ff2596a6e55ddd97b4438f2"},t("div",{key:"8770fdbd31faf8704e86ad10d165a4e92eb67b1e",tabIndex:0,class:`container ${this.getType()}`},this.mainTitle&&this.renderTitle(),this.getType()==o.DEFAULT?this.renderDefaultMode():this.renderDragDropMode()),!!this.invalidFiles.size&&t("z-modal",{key:"2ff7b5dd1e61beac3a08a97dccf6a28e8e0e06dc",modalid:`file-upload-${this.type}-error-modal`,tabIndex:0,ref:e=>this.errorModal=e,modaltitle:"Errore di caricamento",onModalClose:()=>this.invalidFiles=new Map,onModalBackgroundClick:()=>this.invalidFiles=new Map},this.handleErrorModalContent()))}get el(){return this}static get style(){return j}};E(O,[1,"z-file-upload",{type:[520],buttonVariant:[8,"button-variant"],acceptedFormat:[1,"accepted-format"],fileMaxSize:[2,"file-max-size"],mainTitle:[1,"main-title"],description:[1],uploadBtnLabel:[1,"upload-btn-label"],dragAndDropLabel:[1,"drag-and-drop-label"],hasFileSection:[4,"has-file-section"],files:[32],invalidFiles:[32],getFiles:[64],removeFile:[64]},[[0,"removeFile","removeFileListener"],[0,"fileDropped","fileDroppedListener"]]]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZFileUpload",tagName:"z-file-upload",customElement:!0,members:[{kind:"field",name:"type",type:"any",description:"Prop indicating the file upload type - can be default or dragdrop",default:"ZFileUploadType.DEFAULT"},{kind:"field",name:"buttonVariant",type:"any",description:"Prop indicating the button variant"},{kind:"field",name:"acceptedFormat",type:"string",description:'Prop indicating the accepted file type: ex ".pdf, .doc, .jpg"'},{kind:"field",name:"fileMaxSize",type:"number",description:"Max file dimension in Megabyte"},{kind:"field",name:"mainTitle",type:"string",description:"Title"},{kind:"field",name:"description",type:"string",description:"Description"},{kind:"field",name:"uploadBtnLabel",type:"string",description:"upoload button label",default:'"allega"'},{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label",default:'"Rilascia i file in questa area per allegarli."'},{kind:"field",name:"hasFileSection",type:"boolean",description:"uploaded files history rendering",default:"true"}],events:[{kind:"event",name:"fileInput",description:"Emitted when user select one or more files"}]}],exports:[{kind:"js",name:"ZFileUpload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}},{kind:"custom-element-definition",name:"z-file-upload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}}]}]};w({...d()||{},...g,modules:[...(d()||{}).modules||[],...g.modules]});var b=Object.freeze,P=Object.defineProperty,C=(e,i)=>b(P(e,"raw",{value:b(e.slice())})),v,y;const J={title:"ZFileUpload",component:"z-file-upload",argTypes:{type:{options:Object.values(o),control:{type:"inline-radio"}},buttonVariant:{options:Object.values(L),control:{type:"inline-radio"}}},args:{fileMaxSize:50,acceptedFormat:".pdf, .doc, .tiff, .png, .jpg",mainTitle:"Allega un file",description:"Vuoi allegare un file per chiarire meglio la tua richiesta?",uploadBtnLabel:"allega",hasFileSection:!0}},s={args:{buttonVariant:L.PRIMARY},render:e=>A(v||(v=C([`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <z-file-upload
        type=`,`
        .hasFileSection=`,`
        description="`,`"
        .buttonVariant=`,`
        .fileMaxSize=`,`
        .acceptedFormat=`,`
        .mainTitle=`,`
        .uploadBtnLabel=`,`
      >
      </z-file-upload>
      <script>
        let uploaderDefault = document.querySelector("z-file-upload");
        let fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          uploaderDefault.appendChild(chip);
        });
      <\/script>`])),o.DEFAULT,e.hasFileSection,e.description,e.buttonVariant,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.uploadBtnLabel)},l={args:{dragAndDropLabel:"Rilascia i file in questa area per allegarli."},render:e=>A(y||(y=C([`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=`,`
        .hasFileSection=`,`
        description="`,`"
        .fileMaxSize=`,`
        .acceptedFormat=`,`
        .mainTitle=`,`
        .dragAndDropLabel=`,`
      >
      </z-file-upload>
      <script>
        const uploaderDragdrop = document.querySelector("z-file-upload");
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          uploaderDragdrop.appendChild(chip);
        });
      <\/script>`])),o.DRAGDROP,e.hasFileSection,e.description,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.dragAndDropLabel)};var F,D,x;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    buttonVariant: ButtonVariant.PRIMARY
  },
  render: args => html\`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <z-file-upload
        type=\${ZFileUploadType.DEFAULT}
        .hasFileSection=\${args.hasFileSection}
        description="\${args.description}"
        .buttonVariant=\${args.buttonVariant}
        .fileMaxSize=\${args.fileMaxSize}
        .acceptedFormat=\${args.acceptedFormat}
        .mainTitle=\${args.mainTitle}
        .uploadBtnLabel=\${args.uploadBtnLabel}
      >
      </z-file-upload>
      <script>
        let uploaderDefault = document.querySelector("z-file-upload");
        let fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          uploaderDefault.appendChild(chip);
        });
      <\/script>\`
} satisfies Story`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var z,k,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dragAndDropLabel: "Rilascia i file in questa area per allegarli."
  },
  render: args => html\`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=\${ZFileUploadType.DRAGDROP}
        .hasFileSection=\${args.hasFileSection}
        description="\${args.description}"
        .fileMaxSize=\${args.fileMaxSize}
        .acceptedFormat=\${args.acceptedFormat}
        .mainTitle=\${args.mainTitle}
        .dragAndDropLabel=\${args.dragAndDropLabel}
      >
      </z-file-upload>
      <script>
        const uploaderDragdrop = document.querySelector("z-file-upload");
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          uploaderDragdrop.appendChild(chip);
        });
      <\/script>\`
} satisfies Story`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Q=["Default","Dragdrop"];export{s as Default,l as Dragdrop,Q as __namedExportsOrder,J as default};
