import{x as f}from"./lit-element-DGXdXVoE.js";import{V as r,B as T}from"./index-BnC6Ywep.js";import"./index-DAjW2EC7.js";import{s as $,g as p}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as C,H as I,c as u,h as i,a as B}from"./index-BZ0rSFNp.js";import"./index-9KFn1aEa.js";import"./index-BpZkdoDR.js";import"./index-DrFu-skq.js";const Z=`:host{position:relative;display:flex;width:100%;height:232px;flex-direction:column;align-items:center;padding:calc(var(--space-unit) * 3);background-color:var(--color-surface02);background-image:repeating-linear-gradient(
      0deg,
      var(--color-surface03),
      var(--color-surface03) 12px,
      transparent 12px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      var(--color-surface03),
      var(--color-surface03) 12px,
      transparent 12px,
      transparent 20px
    ),
    repeating-linear-gradient(
      180deg,
      var(--color-surface03),
      var(--color-surface03) 12px,
      transparent 12px,
      transparent 20px
    ),
    repeating-linear-gradient(
      270deg,
      var(--color-surface03),
      var(--color-surface03) 12px,
      transparent 12px,
      transparent 20px
    );background-position:0 0,
    0 0,
    100% 0,
    0 100%;background-repeat:no-repeat;background-size:2px 100%,
    100% 2px,
    2px 100%,
    100% 2px;border-radius:var(--border-radius-small);color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}:host(.dragover) *{pointer-events:none}.dragover-container{position:absolute;z-index:1;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host(.dragover) .dragover-container{display:flex;align-items:center;justify-content:center}`,_=class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.fileDropped=u(this,"fileDropped",7),this.dragAndDropLabel=void 0,this.dragging=!1}onDrop(e){e.preventDefault(),this.dragging=!1,e.dataTransfer.files.length&&this.fileDropped.emit(e.dataTransfer.files)}render(){return i(B,{key:"be45bbb3f885f6db4885a81de0a76ea62b60a9c2",class:{dragover:this.dragging},onDragOver:e=>{e.preventDefault(),this.dragging=!0},onDragLeave:()=>{this.dragging=!1},onDrop:this.onDrop.bind(this)},i("div",{key:"972e6fbe821fb6cf26fb0443fda55cfaf1b55728",class:"dragover-container"},i("z-button",{key:"e1dcda4d05d8b5dc396a782fa7a8f65052c1e878"},this.dragAndDropLabel)),i("slot",{key:"59f8773d0b438925b1ac5ec2ab41a3cdfbf2c8d2"}))}static get style(){return Z}};C(_,[1,"z-dragdrop-area",{dragAndDropLabel:[1,"drag-and-drop-label"],dragging:[32]}]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZDragdropArea",tagName:"z-dragdrop-area",customElement:!0,members:[{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label"}],events:[{kind:"event",name:"fileDropped",description:"Emitted when user drop one or more files"}]}],exports:[{kind:"js",name:"ZDragdropArea",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}},{kind:"custom-element-definition",name:"z-dragdrop-area",declaration:{name:"ZDragdropArea",module:"src/components/file-upload/z-dragdrop-area/index.tsx"}}]}]};$({...p()||{},...g,modules:[...(p()||{}).modules||[],...g.modules]});const V='.sc-z-file-upload-h{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{display:flex;flex-direction:column;justify-content:center;padding:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}.sc-z-file-upload-h .text-container.sc-z-file-upload{display:flex;flex-direction:column;margin:auto;text-align:center}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload{color:var(--color-text-link-blue);cursor:pointer;text-decoration:underline}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link-text.sc-z-file-upload{margin-bottom:var(--space-unit)}.sc-z-file-upload-h input[type="file"].sc-z-file-upload{display:none}.sc-z-file-upload-h #title.sc-z-file-upload+#description.sc-z-file-upload{margin-top:var(--space-unit)}.sc-z-file-upload-h>*.sc-z-file-upload+z-button.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload+*.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload:not(:first-child){margin-top:calc(var(--space-unit) * 3)}.sc-z-file-upload-h>.files-container.hidden.sc-z-file-upload{display:none}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.uploaded-files-label.sc-z-file-upload{margin-bottom:calc(var(--space-unit) * 2)}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}@media (min-width: 768px){.sc-z-file-upload-h>.container.sc-z-file-upload>z-button.sc-z-file-upload{align-self:flex-start}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 3)}}@media (min-width: 1152px){.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 4)}}',j=class extends I{constructor(){super(),this.__registerHost(),this.fileInput=u(this,"fileInput",7),this.fileError=u(this,"fileError",7),this.type=r.DEFAULT,this.buttonVariant=void 0,this.acceptedFormat=void 0,this.fileMaxSize=void 0,this.mainTitle=void 0,this.description=void 0,this.uploadBtnLabel="allega",this.dragAndDropLabel="Rilascia i file in questa area per allegarli.",this.allowedFilesMessage=void 0,this.uploadClickableMessage="Carica",this.uploadMessage="o trascina dal tuo computer",this.errorModalTitle="Errore di caricamento",this.errorModalMessage=void 0,this.uploadedFilesLabel="File appena caricati",this.hasFileSection=!0,this.inputName="z-file-upload",this.showErrors=!0,this._type=this.type,this.files=[],this.invalidFiles=new Map}onFileRemoved(e){this.removeFile(e.detail)}fileDroppedListener(e){this.input.files=e.detail,this.checkFilesValidity(this.input.files)}async getFiles(){return this.files}async removeFile(e){const a=this.files,t=a.findIndex(n=>n.name===e);t>=0&&(a.splice(t,1),this.files=[...a])}checkFilesValidity(e){e.length&&Array.from(e).forEach(a=>{const t=a.size/1024/1024,n=this.acceptedFormat.split(",").some(c=>a.name.toLowerCase().endsWith(c.trim())),l=t<=this.fileMaxSize;if(l&&n&&!this.files.find(c=>c.name===a.name)){this.files=[...this.files,a],this.fileInput.emit(a),this.input.value="";return}const P=`Il file ${a.name} supera il limite di ${this.fileMaxSize}MB`,U=`Il file ${a.name} ha un formato non supportato`,h=[!l&&{cause:"size",message:P},!n&&{cause:"format",message:U}].filter(Boolean);this.invalidFiles.set(a.name,h),this.invalidFiles=new Map(this.invalidFiles),this.fileError.emit({file:a.name,errors:h})})}resetErrors(){this.invalidFiles=new Map}onFilesChange(e){this.checkFilesValidity(e.target.files)}componentWillLoad(){const e=window.matchMedia("(max-width: 1151px)");this._type=e.matches?r.DEFAULT:this.type,e.addEventListener("change",a=>{this._type=a.matches?r.DEFAULT:this.type})}componentDidUpdate(){!this.showErrors||!this.invalidFiles.size||this.errorModal.open()}renderDescription(e){if(this.description)return i("span",{id:"description",class:e},this.description)}renderAllowedFilesMessage(){let e="",a="";this.acceptedFormat&&(e=` nei formati ${this.acceptedFormat.split(", ").map(l=>l.substring(1).toUpperCase()).join(", ")}`),this.fileMaxSize&&(a=` per un massimo di ${this.fileMaxSize}MB di peso`);const t=e||a?`Puoi allegare file${e}${a}.`:void 0;if(!(!this.allowedFilesMessage&&!t))return i("span",{class:"allowed-files-message body-3"},this.allowedFilesMessage||t)}renderFileSection(){if(this.hasFileSection)return i("section",{class:{"files-container":!0,hidden:!this.files.length}},i("div",{class:"uploaded-files-label heading-3-sb"},this.uploadedFilesLabel),i("div",{class:"files-wrapper"},i("slot",{name:"files"})))}renderInput(){return i("input",{type:"file",name:this.inputName,multiple:!0,onChange:e=>this.onFilesChange(e),accept:this.acceptedFormat,ref:e=>this.input=e})}renderUploadButton(){return[i("z-button",{onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())},id:"fileSelect",variant:this.buttonVariant,icon:"upload"},this.uploadBtnLabel),this.renderInput()]}renderUploadLink(){return[this.renderInput(),i("span",{class:"body-1 upload-link-text"},i("span",{tabIndex:0,class:"body-1-sb upload-link",onClick:()=>this.input.click(),onKeyPress:e=>{(e.code=="Space"||e.code=="Enter")&&(e.preventDefault(),this.input.click())}},this.uploadClickableMessage)," ",this.uploadMessage)]}renderDefaultMode(){return[this.renderDescription("body-3-sb"),this.renderAllowedFilesMessage(),this.renderFileSection(),this.renderUploadButton()]}renderDragDropMode(){return[this.renderFileSection(),i("z-dragdrop-area",{"drag-and-drop-label":this.dragAndDropLabel},i("div",{class:"text-container"},this.renderDescription("body-1"),this.renderUploadLink(),this.renderAllowedFilesMessage()))]}renderFileErrors(){return Array.from(this.invalidFiles).map(([e,a])=>{const t=`Il file ${e}`;return i("span",{class:"error-message"},"Il file ",i("span",{class:"body-3-sb"},e),a.map(({message:n})=>n.replace(t,"")).join(" e "),".")})}render(){return i(B,{key:"39b5c843dfe809ffdaacbe2a98aaecd30e1c8d32"},this.mainTitle&&i("div",{key:"087472d77041ca0553c531a6d68054ec7305e0b5",id:"title",class:"heading-3-sb"},this.mainTitle),this._type==r.DEFAULT?this.renderDefaultMode():this.renderDragDropMode(),!!this.invalidFiles.size&&this.showErrors&&i("z-modal",{key:"f11d5ab3de54eca0bb2bb5f09c2833648b60cc93",modalid:`file-upload-${this.type}-error-modal`,ref:e=>this.errorModal=e,modaltitle:this.errorModalTitle,onModalClose:()=>this.resetErrors(),onModalBackgroundClick:()=>this.resetErrors()},i("div",{key:"cc4e8204e60a78ee631bdcebef6d632b4d2d6c09",slot:"modalContent"},i("div",{key:"272c723aeb5050da71ad912bab1cb8b06a82cf9a",class:"modal-wrapper body-3"},this.errorModalMessage?this.errorModalMessage:this.renderFileErrors()))))}get host(){return this}static get style(){return V}};C(j,[6,"z-file-upload",{type:[520],buttonVariant:[8,"button-variant"],acceptedFormat:[1,"accepted-format"],fileMaxSize:[2,"file-max-size"],mainTitle:[1,"main-title"],description:[1],uploadBtnLabel:[1,"upload-btn-label"],dragAndDropLabel:[1,"drag-and-drop-label"],allowedFilesMessage:[1,"allowed-files-message"],uploadClickableMessage:[1,"upload-clickable-message"],uploadMessage:[1,"upload-message"],errorModalTitle:[1,"error-modal-title"],errorModalMessage:[1,"error-modal-message"],uploadedFilesLabel:[1,"uploaded-files-label"],hasFileSection:[4,"has-file-section"],inputName:[1,"input-name"],showErrors:[4,"show-errors"],_type:[32],files:[32],invalidFiles:[32],getFiles:[64],removeFile:[64]},[[0,"removeFile","onFileRemoved"],[0,"fileDropped","fileDroppedListener"]]]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZFileUpload",tagName:"z-file-upload",customElement:!0,members:[{kind:"field",name:"type",type:"any",description:"Prop indicating the file upload type - can be default or dragdrop",default:"ZFileUploadType.DEFAULT"},{kind:"field",name:"buttonVariant",type:"any",description:"Prop indicating the button variant"},{kind:"field",name:"acceptedFormat",type:"string",description:'Prop indicating the accepted file type: ex ".pdf, .doc, .jpg"'},{kind:"field",name:"fileMaxSize",type:"number",description:"Max file dimension in Megabyte"},{kind:"field",name:"mainTitle",type:"string",description:"Title"},{kind:"field",name:"description",type:"string",description:"Description"},{kind:"field",name:"uploadBtnLabel",type:"string",description:"upoload button label",default:'"allega"'},{kind:"field",name:"dragAndDropLabel",type:"string",description:"drag & drop button label",default:'"Rilascia i file in questa area per allegarli."'},{kind:"field",name:"allowedFilesMessage",type:"string",description:"allowed file message"},{kind:"field",name:"uploadClickableMessage",type:"string",description:"upload clickable message",default:'"Carica"'},{kind:"field",name:"uploadMessage",type:"string",description:"upload message",default:'"o trascina dal tuo computer"'},{kind:"field",name:"errorModalTitle",type:"string",description:"error modal title",default:'"Errore di caricamento"'},{kind:"field",name:"errorModalMessage",type:"string",description:"error modal message"},{kind:"field",name:"uploadedFilesLabel",type:"string",description:"loaded files label",default:'"File appena caricati"'},{kind:"field",name:"hasFileSection",type:"boolean",description:"uploaded files history rendering",default:"true"},{kind:"field",name:"inputName",type:"string",description:"Value to set on the file input's `name` attribute (for use with forms)",default:'"z-file-upload"'},{kind:"field",name:"showErrors",type:"boolean",description:`Whether to show errors in the internal modal or leave the handling to the app.
Errors will still be emitted.`,default:"true"}],events:[{kind:"event",name:"fileInput",description:"Emitted when user select one or more files"},{kind:"event",name:"fileError",description:`Emits an array of error messages related to one or more files not allowed.
Emitted when some file is dropped or selected.`}]}],exports:[{kind:"js",name:"ZFileUpload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}},{kind:"custom-element-definition",name:"z-file-upload",declaration:{name:"ZFileUpload",module:"src/components/file-upload/z-file-upload/index.tsx"}}]}]};$({...p()||{},...b,modules:[...(p()||{}).modules||[],...b.modules]});var y=Object.freeze,R=Object.defineProperty,m=(e,a)=>y(R(e,"raw",{value:y(e.slice())})),F,M,z;const Q={title:"ZFileUpload",component:"z-file-upload",argTypes:{type:{options:Object.values(r),control:{type:"inline-radio"}},buttonVariant:{options:Object.values(T),control:{type:"inline-radio"}}},args:{fileMaxSize:50,acceptedFormat:".pdf, .doc, .tiff, .png, .jpg",mainTitle:"Allega un file",description:"Vuoi allegare un file per chiarire meglio la tua richiesta?",uploadBtnLabel:"allega",hasFileSection:!0,showErrors:!0}},o={args:{buttonVariant:T.PRIMARY},render:e=>f(F||(F=m([`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <z-file-upload
        type=`,`
        .showErrors=`,`
        .hasFileSection=`,`
        description="`,`"
        .buttonVariant=`,`
        .fileMaxSize=`,`
        .acceptedFormat=`,`
        .mainTitle=`,`
        .uploadBtnLabel=`,`
      />
      <script>
        fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>`])),r.DEFAULT,e.showErrors,e.hasFileSection,e.description,e.buttonVariant,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.uploadBtnLabel)},s={args:{dragAndDropLabel:"Rilascia i file in questa area per allegarli."},render:e=>f(M||(M=m([`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=`,`
        .showErrors=`,`
        .hasFileSection=`,`
        description="`,`"
        .fileMaxSize=`,`
        .acceptedFormat=`,`
        .mainTitle=`,`
        .dragAndDropLabel=`,`
      />
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>`])),r.DRAGDROP,e.showErrors,e.hasFileSection,e.description,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.dragAndDropLabel)},d={args:{mainTitle:"Attach a file",description:"Do you want to attach a file to clarify your request?",uploadBtnLabel:"Attach",dragAndDropLabel:"Drop the image here",allowedFilesMessage:"You can upload files in the format PDF, DOC, TIFF, PNG, JPG for a maximum of 50MB",uploadClickableMessage:"Load",uploadMessage:"or drag from your computer",errorModalTitle:"Loading error",errorModalMessage:"The file does not respect the allowed parameters.",uploadedFilesLabel:"Uploaded files"},render:e=>f(z||(z=m([`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=`,`
        .showErrors=`,`
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
      />
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>`])),r.DRAGDROP,e.showErrors,e.hasFileSection,e.description,e.fileMaxSize,e.acceptedFormat,e.mainTitle,e.dragAndDropLabel,e.allowedFilesMessage,e.uploadClickableMessage,e.uploadMessage,e.errorModalTitle,e.errorModalMessage,e.uploadedFilesLabel,e.uploadBtnLabel)};var v,x,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    buttonVariant: ButtonVariant.PRIMARY
  },
  render: args => html\`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <z-file-upload
        type=\${ZFileUploadType.DEFAULT}
        .showErrors=\${args.showErrors}
        .hasFileSection=\${args.hasFileSection}
        description="\${args.description}"
        .buttonVariant=\${args.buttonVariant}
        .fileMaxSize=\${args.fileMaxSize}
        .acceptedFormat=\${args.acceptedFormat}
        .mainTitle=\${args.mainTitle}
        .uploadBtnLabel=\${args.uploadBtnLabel}
      />
      <script>
        fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>\`
} satisfies Story`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,D,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        .showErrors=\${args.showErrors}
        .hasFileSection=\${args.hasFileSection}
        description="\${args.description}"
        .fileMaxSize=\${args.fileMaxSize}
        .acceptedFormat=\${args.acceptedFormat}
        .mainTitle=\${args.mainTitle}
        .dragAndDropLabel=\${args.dragAndDropLabel}
      />
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>\`
} satisfies Story`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,A,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        .showErrors=\${args.showErrors}
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
      />
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      <\/script>\`
} satisfies Story`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const X=["Default","Dragdrop","DragdropEnglish"];export{o as Default,s as Dragdrop,d as DragdropEnglish,X as __namedExportsOrder,Q as default};
