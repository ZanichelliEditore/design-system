import{x as u}from"./lit-element-DGXdXVoE.js";import{U as o,e as g,D as Z,B as $}from"./index-CcuDdGyi.js";import"./index-D51VZP5f.js";import"./index-yOVBEWgS.js";import{s as I,g as p}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as P,H as U,c as B,h as t,a as _}from"./index-8h8udRzn.js";import"./index-Q01OCUZt.js";import{g as b}from"./utils-B_2tKo6T.js";import"./index-BEj-2O7q.js";import"./breakpoints-C5kxgyOu.js";const j=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:flex;height:228px;flex-direction:column;padding:calc(var(--space-unit) * 2);border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");border-radius:2px;color:var(--color-default-text)}:host>.dragdrop:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text-inverse)}:host>.dragdrop.dragover .dragover-container{display:flex;align-items:center;justify-content:center}`,R=class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.fileDropped=B(this,"fileDropped",7),this.dragAndDropLabel=void 0}fileDroppedHandler(e){this.fileDropped.emit(e)}renderOnDragOverMessage(){return t("div",{class:"dragover-container"},t("div",{class:"dragover-message"},t("span",{class:"body-2-sb"},this.dragAndDropLabel)))}render(){return t("div",{key:"df933bfa8f86b00c1f9f78f3a31a615beeca6599",tabIndex:0,ref:e=>this.dragDropContainer=e,class:"dragdrop",onDragOver:e=>{e.preventDefault(),this.dragDropContainer.classList.add("dragover")},onDragLeave:()=>{this.dragDropContainer.classList.remove("dragover")},onDrop:e=>{e.preventDefault(),e.dataTransfer.files.length&&(this.dragDropContainer.classList.remove("dragover"),this.fileDroppedHandler(e.dataTransfer.files))}},this.renderOnDragOverMessage(),t("slot",{key:"c2c770aa415a991fd0aab313836c5ff7321fbf76"}))}static get style(){return j}};P(R,[1,"z-dragdrop-area",{dragAndDropLabel:[1,"drag-and-drop-label"]}]);const y={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZDragdropArea",tagName:"z-dragdrop-area",customElement:!0,members:[{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label"}],events:[{kind:"event",name:"fileDropped",description:"Emitted when user drop one or more files"}]}],exports:[{kind:"js",name:"ZDragdropArea",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}},{kind:"custom-element-definition",name:"z-dragdrop-area",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}}]}]};I({...p()||{},...y,modules:[...(p()||{}).modules||[],...y.modules]});const V=':host{color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:flex;flex-direction:column}:host .modal-wrapper{display:flex;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2)}:host .modal-wrapper>.files-wrapper{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:flex;flex-direction:column;margin:auto}:host .text-container .body-1{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin:calc(var(--space-unit) * 2.5) 0 calc(var(--space-unit) * 4);font-size:calc(var(--space-unit) * 3);font-weight:var(--font-sb)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>.heading-4-sb{display:inline-block;margin:calc(var(--space-unit) * 3) 0;font-size:calc(var(--space-unit) * 2);font-weight:var(--font-sb)}:host([type="dragdrop"])>.container>.files-container>.heading-4-sb{margin-top:0;margin-bottom:calc(var(--space-unit) * 3)}:host>.container>.files-container>.files-wrapper{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}:host([type="dragdrop"])>.container>.files-container>z-divider{margin:calc(var(--space-unit) * 3) 0}:host .error-message{font-size:14px;font-weight:400;letter-spacing:0.16%;line-height:20px;text-align:left}:host .error-message>.file-name{font-weight:600}@media only screen and (min-width: 768px){:host>.container>z-button{align-self:flex-start}:host .modal-wrapper{padding:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){:host .modal-wrapper{padding:calc(var(--space-unit) * 4)}}',q=class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.fileInput=B(this,"fileInput",7),this.inputAttributes={type:"file",id:"file-elem",multiple:!0},this.type=o.DEFAULT,this.buttonVariant=void 0,this.acceptedFormat=void 0,this.fileMaxSize=void 0,this.mainTitle=void 0,this.description=void 0,this.files=[],this.uploadBtnLabel="allega",this.dragAndDropLabel="Rilascia i file in questa area per allegarli.",this.allowedFilesMessage=void 0,this.uploadClickableMessage="Carica",this.uploadMessage="o trascina dal tuo computer",this.errorModalTitle="Errore di caricamento",this.errorModalMessage=void 0,this.uploadedFilesLabel="File appena caricati",this.hasFileSection=!0,this.invalidFiles=void 0}removeFileListener(e){this.removeFileHandler(e.detail)}fileDroppedListener(e){this.input.files=e.detail,this.fileInputHandler()}componentDidUpdate(){this.handleAccessibility(),this.invalidFiles.size&&this.errorModal.focus()}componentWillLoad(){this.invalidFiles=new Map}fileInputHandler(){this.input.files.length&&(this.invalidFiles=this.checkFiles(Array.from(this.input.files)))}async getFiles(){return this.files}async removeFile(e){this.removeFileHandler(e)}removeFileHandler(e){const i=this.files,n=i.find(r=>r.name===e);if(n){const r=i.indexOf(n);r>=0&&(i.splice(r,1),this.files=[...i])}}getType(){return b()!==g.DESKTOP&&b()!==g.DESKTOP_WIDE?o.DEFAULT:this.type}handleAccessibility(){const e=this.el.querySelector("z-file:last-child z-chip button");this.files.length>0&&e?e.focus():this.getType()===o.DEFAULT?this.button.querySelector("button").focus():this.uploadLink.focus()}checkFiles(e){const i=new Map,n=`supera il limite di ${this.fileMaxSize}MB`,r=" ha un formato non supportato";return e.forEach(a=>{const O=a.size/1024/1024,m=this.acceptedFormat.split(",").some(c=>a.name.toLowerCase().endsWith(c.trim())),h=O<=this.fileMaxSize;if(h&&m){this.files.find(c=>c.name===a.name)||(this.files.push(a),this.fileInput.emit(a),this.input.value="");return}i.set(a.name,[]),h||i.get(a.name).push(n),m||i.get(a.name).push(r)}),i}renderTitle(){return t("span",{id:"title"},this.mainTitle)}renderDescription(e){return t("span",{class:e},this.description)}renderAllowedFileExtensions(){let e="",i="";this.acceptedFormat&&(e=` nei formati ${this.acceptedFormat.split(", ").map(a=>a.substring(1).toUpperCase()).join(", ")}`),this.fileMaxSize&&(i=` per un massimo di ${this.fileMaxSize}MB di peso`);const n=`Puoi allegare file${e}${i}.`;return t("span",{class:"body-3"},this.allowedFilesMessage?this.allowedFilesMessage:e||i?n:null)}renderFileSection(){if(this.hasFileSection)return t("section",{class:`files-container ${this.files.length?"":"hidden"}`},t("span",{class:"heading-4-sb"},this.uploadedFilesLabel),t("div",{class:"files-wrapper"},t("slot",{name:"files"})),t("z-divider",{size:Z.MEDIUM}))}renderInput(){return t("input",Object.assign({},this.inputAttributes,{onChange:()=>this.fileInputHandler(),accept:this.acceptedFormat,ref:e=>this.input=e}))}renderUploadButton(){return[this.renderInput(),t("z-button",{onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())},id:"fileSelect",variant:this.buttonVariant,icon:"upload",ref:e=>this.button=e},this.uploadBtnLabel)]}renderUploadLink(){return[this.renderInput(),t("span",{class:"body-1 upload-link-text"},t("span",{tabIndex:0,class:"body-1-sb upload-link",onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())},ref:e=>this.uploadLink=e},this.uploadClickableMessage)," ",this.uploadMessage)]}renderDefaultMode(){return[this.renderDescription("body-3-sb"),this.renderAllowedFileExtensions(),this.renderFileSection(),this.renderUploadButton()]}renderDragDropMode(){return[this.renderFileSection(),t("z-dragdrop-area",{"drag-and-drop-label":this.dragAndDropLabel},t("div",{class:"text-container"},this.renderDescription("body-1"),this.renderUploadLink(),this.renderAllowedFileExtensions()))]}formatErrorString(e,i){var n,r;const a=i[0]&&i[1]?" e ":"";return t("span",{class:"error-message"},"Il file ",t("span",{class:"file-name"},e)," ",(n=i[1])!==null&&n!==void 0?n:"",a,(r=i[0])!==null&&r!==void 0?r:"",".")}handleErrorModalContent(){return t("div",{slot:"modalContent"},t("div",{class:"modal-wrapper"},t("div",{class:"files"},this.errorModalMessage?t("span",{class:"body-3"},this.errorModalMessage):Array.from(this.invalidFiles).map(([e,i])=>t("span",{class:"body-3"},this.formatErrorString(e,i))))))}render(){return t(_,{key:"b193a7ac61650058521b051149c551af40302ae1"},t("div",{key:"b517c30e22e03fbb27ff1a1efd988fbff5e96cd2",class:`container ${this.getType()}`},this.mainTitle&&this.renderTitle(),this.getType()==o.DEFAULT?this.renderDefaultMode():this.renderDragDropMode()),!!this.invalidFiles.size&&t("z-modal",{key:"e1ff3cdba40368d2096a14d6d78f376348d50e71",modalid:`file-upload-${this.type}-error-modal`,tabIndex:0,ref:e=>this.errorModal=e,modaltitle:this.errorModalTitle,onModalClose:()=>this.invalidFiles=new Map,onModalBackgroundClick:()=>this.invalidFiles=new Map},this.handleErrorModalContent()))}get el(){return this}static get style(){return V}};P(q,[1,"z-file-upload",{type:[520],buttonVariant:[8,"button-variant"],acceptedFormat:[1,"accepted-format"],fileMaxSize:[2,"file-max-size"],mainTitle:[1,"main-title"],description:[1],uploadBtnLabel:[1,"upload-btn-label"],dragAndDropLabel:[1,"drag-and-drop-label"],allowedFilesMessage:[1,"allowed-files-message"],uploadClickableMessage:[1,"upload-clickable-message"],uploadMessage:[1,"upload-message"],errorModalTitle:[1,"error-modal-title"],errorModalMessage:[1,"error-modal-message"],uploadedFilesLabel:[1,"uploaded-files-label"],hasFileSection:[4,"has-file-section"],files:[32],invalidFiles:[32],getFiles:[64],removeFile:[64]},[[0,"removeFile","removeFileListener"],[0,"fileDropped","fileDroppedListener"]]]);const v={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZFileUpload",tagName:"z-file-upload",customElement:!0,members:[{kind:"field",name:"type",type:"any",description:"Prop indicating the file upload type - can be default or dragdrop",default:"ZFileUploadType.DEFAULT"},{kind:"field",name:"buttonVariant",type:"any",description:"Prop indicating the button variant"},{kind:"field",name:"acceptedFormat",type:"string",description:'Prop indicating the accepted file type: ex ".pdf, .doc, .jpg"'},{kind:"field",name:"fileMaxSize",type:"number",description:"Max file dimension in Megabyte"},{kind:"field",name:"mainTitle",type:"string",description:"Title"},{kind:"field",name:"description",type:"string",description:"Description"},{kind:"field",name:"uploadBtnLabel",type:"string",description:"upoload button label",default:'"allega"'},{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label",default:'"Rilascia i file in questa area per allegarli."'},{kind:"field",name:"allowedFilesMessage",type:"string",description:"allowed file message"},{kind:"field",name:"uploadClickableMessage",type:"string",description:"upload clickable message",default:'"Carica"'},{kind:"field",name:"uploadMessage",type:"string",description:"upload message",default:'"o trascina dal tuo computer"'},{kind:"field",name:"errorModalTitle",type:"string",description:"error modal title",default:'"Errore di caricamento"'},{kind:"field",name:"errorModalMessage",type:"string",description:"error modal message"},{kind:"field",name:"uploadedFilesLabel",type:"string",description:"loaded files label",default:'"File appena caricati"'},{kind:"field",name:"hasFileSection",type:"boolean",description:"uploaded files history rendering",default:"true"}],events:[{kind:"event",name:"fileInput",description:"Emitted when user select one or more files"}]}],exports:[{kind:"js",name:"ZFileUpload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}},{kind:"custom-element-definition",name:"z-file-upload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}}]}]};I({...p()||{},...v,modules:[...(p()||{}).modules||[],...v.modules]});var F=Object.freeze,H=Object.defineProperty,f=(e,i)=>F(H(e,"raw",{value:F(e.slice())})),M,D,x;const ie={title:"ZFileUpload",component:"z-file-upload",argTypes:{type:{options:Object.values(o),control:{type:"inline-radio"}},buttonVariant:{options:Object.values($),control:{type:"inline-radio"}}},args:{fileMaxSize:50,acceptedFormat:".pdf, .doc, .tiff, .png, .jpg",mainTitle:"Allega un file",description:"Vuoi allegare un file per chiarire meglio la tua richiesta?",uploadBtnLabel:"allega",hasFileSection:!0}},l={args:{buttonVariant:$.PRIMARY},render:e=>u(M||(M=f([`<h4 class="heading-4">
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
      <\/script>`])),o.DEFAULT,e.hasFileSection,e.description,e.buttonVariant,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.uploadBtnLabel)},s={args:{dragAndDropLabel:"Rilascia i file in questa area per allegarli."},render:e=>u(D||(D=f([`<h4 class="heading-4">
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
      <\/script>`])),o.DRAGDROP,e.hasFileSection,e.description,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.dragAndDropLabel)},d={args:{mainTitle:"Attach a file",description:"Do you want to attach a file to clarify your request?",uploadBtnLabel:"Attach",dragAndDropLabel:"Drop the image here",allowedFilesMessage:"You can upload files in the format PDF, DOC, TIFF, PNG, JPG for a maximum of 50MB",uploadClickableMessage:"Load",uploadMessage:"or drag from your computer",errorModalTitle:"Loading error",errorModalMessage:"The file does not respect the allowed parameters.",uploadedFilesLabel:"Uploaded files"},render:e=>u(x||(x=f([`<h4 class="heading-4">
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
        .allowedFilesMessage=`,`
        .uploadClickableMessage=`,`
        .uploadMessage=`,`
        .errorModalTitle=`,`
        .errorModalMessage=`,`
        .uploadedFilesLabel=`,`
        .uploadBtnLabel=`,`
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
      <\/script>`])),o.DRAGDROP,e.hasFileSection,e.description,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.dragAndDropLabel,e.allowedFilesMessage,e.uploadClickableMessage,e.uploadMessage,e.errorModalTitle,e.errorModalMessage,e.uploadedFilesLabel,e.uploadBtnLabel)};var k,L,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var z,S,A;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var T,E,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    mainTitle: "Attach a file",
    description: "Do you want to attach a file to clarify your request?",
    uploadBtnLabel: "Attach",
    dragAndDropLabel: "Drop the image here",
    allowedFilesMessage: "You can upload files in the format PDF, DOC, TIFF, PNG, JPG for a maximum of 50MB",
    uploadClickableMessage: "Load",
    uploadMessage: "or drag from your computer",
    errorModalTitle: "Loading error",
    errorModalMessage: "The file does not respect the allowed parameters.",
    uploadedFilesLabel: "Uploaded files"
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
        .allowedFilesMessage=\${args.allowedFilesMessage}
        .uploadClickableMessage=\${args.uploadClickableMessage}
        .uploadMessage=\${args.uploadMessage}
        .errorModalTitle=\${args.errorModalTitle}
        .errorModalMessage=\${args.errorModalMessage}
        .uploadedFilesLabel=\${args.uploadedFilesLabel}
        .uploadBtnLabel=\${args.uploadBtnLabel}
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
} satisfies Story`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const ae=["Default","Dragdrop","DragdropEnglish"];export{l as Default,s as Dragdrop,d as DragdropEnglish,ae as __namedExportsOrder,ie as default};
