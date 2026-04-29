import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o,r as s}from"./client-DQfH-YhT.js";import{Z as c,u as l}from"./beans-CNd94UMz.js";import"./z-button-ColY3FoG.js";import{t as u}from"./taggedTemplateLiteral-BA-xtlkT.js";import"./z-modal-BWVsfwlk.js";var d=()=>`:host{position:relative;display:flex;width:100%;height:232px;flex-direction:column;align-items:center;padding:calc(var(--space-unit) * 3);background-color:var(--color-surface02);background-image:repeating-linear-gradient(       0deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       90deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       180deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       270deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     );background-position:0 0,     0 0,     100% 0,     0 100%;background-repeat:no-repeat;background-size:2px 100%,     100% 2px,     2px 100%,     100% 2px;border-radius:var(--border-radius-small);color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}:host(.dragover) *{pointer-events:none}.dragover-container{position:absolute;z-index:1;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host(.dragover) .dragover-container{display:flex;align-items:center;justify-content:center}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.fileDropped=i(this,`fileDropped`,7),this.dragging=!1}onDrop(e){e.preventDefault(),this.dragging=!1,e.dataTransfer.files.length&&this.fileDropped.emit(e.dataTransfer.files)}render(){return o(s,{key:`19dc78d3662df0639e4d083d67de3995a0f9c896`,class:{dragover:this.dragging},onDragOver:e=>{e.preventDefault(),this.dragging=!0},onDragLeave:()=>{this.dragging=!1},onDrop:this.onDrop.bind(this)},o(`div`,{key:`24de335a2798ad39a83aa673a4fc1843473d6595`,class:`dragover-container`},o(`z-button`,{key:`cbc188544d1fd0b16aeb7107bae95982de27f268`},this.dragAndDropLabel)),o(`slot`,{key:`c03d397d7633d0963ca2c169f62732da3bdfef5a`}))}static get style(){return d()}},[257,`z-dragdrop-area`,{dragAndDropLabel:[1,`drag-and-drop-label`],dragging:[32]}]);var f={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZDragdropArea`,tagName:`z-dragdrop-area`,customElement:!0,members:[{kind:`field`,name:`dragAndDropLabel`,type:`string`,description:`drag & drop button label`}],events:[{kind:`event`,name:`fileDropped`,description:`Emitted when user drop one or more files`}]}],exports:[{kind:`js`,name:`ZDragdropArea`,declaration:{name:`ZDragdropArea`,module:`src/components/file-upload/z-dragdrop-area/index.tsx`}},{kind:`custom-element-definition`,name:`z-dragdrop-area`,declaration:{name:`ZDragdropArea`,module:`src/components/file-upload/z-dragdrop-area/index.tsx`}}]}]};t({...n()||{},...f,modules:[...(n()||{}).modules||[],...f.modules]});var p=()=>`.sc-z-file-upload-h{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{display:flex;flex-direction:column;justify-content:center;padding:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}.sc-z-file-upload-h .text-container.sc-z-file-upload{display:flex;flex-direction:column;margin:auto;text-align:center}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload{color:var(--color-text-link-blue);cursor:pointer;text-decoration:underline}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link-text.sc-z-file-upload{margin-bottom:var(--space-unit)}.sc-z-file-upload-h input[type="file"].sc-z-file-upload{display:none}.sc-z-file-upload-h #title.sc-z-file-upload+#description.sc-z-file-upload{margin-top:var(--space-unit)}.sc-z-file-upload-h>*.sc-z-file-upload+z-button.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload+*.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload:not(:first-child){margin-top:calc(var(--space-unit) * 3)}.sc-z-file-upload-h>.files-container.hidden.sc-z-file-upload{display:none}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.uploaded-files-label.sc-z-file-upload{margin-bottom:calc(var(--space-unit) * 2)}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}@media (min-width: 768px){.sc-z-file-upload-h>.container.sc-z-file-upload>z-button.sc-z-file-upload{align-self:flex-start}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 3)}}@media (min-width: 1152px){.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 4)}}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.fileInput=i(this,`fileInput`,7),this.fileError=i(this,`fileError`,7),this.type=c.DEFAULT,this.uploadBtnLabel=`allega`,this.dragAndDropLabel=`Rilascia i file in questa area per allegarli.`,this.uploadClickableMessage=`Carica`,this.uploadMessage=`o trascina dal tuo computer`,this.errorModalTitle=`Errore di caricamento`,this.uploadedFilesLabel=`File appena caricati`,this.hasFileSection=!0,this.inputName=`z-file-upload`,this.showErrors=!0,this._type=this.type,this.files=[],this.invalidFiles=new Map}onFileRemoved(e){this.removeFile(e.detail.fileName)}fileDroppedListener(e){this.input.files=e.detail,this.checkFilesValidity(this.input.files)}async getFiles(){return this.files}async removeFile(e){let t=this.files,n=t.findIndex(t=>t.name===e);n>=0&&(t.splice(n,1),this.files=[...t])}checkFilesValidity(e){e.length&&Array.from(e).forEach(e=>{let t=e.size/1024/1024,n=this.acceptedFormat.split(`,`).some(t=>e.name.toLowerCase().endsWith(t.trim())),r=t<=this.fileMaxSize;if(r&&n&&!this.files.find(t=>t.name===e.name)){this.files=[...this.files,e],this.fileInput.emit(e),this.input.value=``;return}let i=`Il file ${e.name} supera il limite di ${this.fileMaxSize}MB`,a=`Il file ${e.name} ha un formato non supportato`,o=[!r&&{cause:`size`,message:i},!n&&{cause:`format`,message:a}].filter(Boolean);this.invalidFiles.set(e.name,o),this.invalidFiles=new Map(this.invalidFiles),this.fileError.emit({file:e.name,errors:o})})}resetErrors(){this.invalidFiles=new Map}onFilesChange(e){this.checkFilesValidity(e.target.files)}componentWillLoad(){let e=window.matchMedia(`(max-width: 1151px)`);this._type=e.matches?c.DEFAULT:this.type,e.addEventListener(`change`,e=>{this._type=e.matches?c.DEFAULT:this.type})}componentDidUpdate(){!this.showErrors||!this.invalidFiles.size||this.errorModal.open()}renderDescription(e){if(this.description)return o(`span`,{id:`description`,class:e},this.description)}renderAllowedFilesMessage(){let e=``,t=``;this.acceptedFormat&&(e=` nei formati ${this.acceptedFormat.split(`, `).map(e=>e.substring(1).toUpperCase()).join(`, `)}`),this.fileMaxSize&&(t=` per un massimo di ${this.fileMaxSize}MB di peso`);let n=e||t?`Puoi allegare file${e}${t}.`:void 0;if(!(!this.allowedFilesMessage&&!n))return o(`span`,{class:`allowed-files-message body-3`},this.allowedFilesMessage||n)}renderFileSection(){if(this.hasFileSection)return o(`section`,{class:{"files-container":!0,hidden:!this.files.length}},o(`div`,{class:`uploaded-files-label heading-3-sb`},this.uploadedFilesLabel),o(`div`,{class:`files-wrapper`},o(`slot`,{name:`files`})))}renderInput(){return o(`input`,{type:`file`,name:this.inputName,multiple:!0,onChange:e=>this.onFilesChange(e),accept:this.acceptedFormat,ref:e=>this.input=e})}renderUploadButton(){return[o(`z-button`,{onClick:()=>this.input.click(),onKeyPress:e=>{(e.code==`Space`||e.code==`Enter`)&&(e.preventDefault(),this.input.click())},id:`fileSelect`,variant:this.buttonVariant,icon:`upload`},this.uploadBtnLabel),this.renderInput()]}renderUploadLink(){return[this.renderInput(),o(`span`,{class:`body-1 upload-link-text`},o(`span`,{tabIndex:0,class:`body-1-sb upload-link`,onClick:()=>this.input.click(),onKeyPress:e=>{(e.code==`Space`||e.code==`Enter`)&&(e.preventDefault(),this.input.click())}},this.uploadClickableMessage),` `,this.uploadMessage)]}renderDefaultMode(){return[this.renderDescription(`body-3-sb`),this.renderAllowedFilesMessage(),this.renderFileSection(),this.renderUploadButton()]}renderDragDropMode(){return[this.renderFileSection(),o(`z-dragdrop-area`,{"drag-and-drop-label":this.dragAndDropLabel},o(`div`,{class:`text-container`},this.renderDescription(`body-1`),this.renderUploadLink(),this.renderAllowedFilesMessage()))]}renderFileErrors(){return Array.from(this.invalidFiles).map(([e,t])=>{let n=`Il file ${e}`;return o(`span`,{class:`error-message`},`Il file `,o(`span`,{class:`body-3-sb`},e),t.map(({message:e})=>e.replace(n,``)).join(` e `),`.`)})}render(){return o(s,{key:`4c9eecc1c2d24c219c34231eb1ca8d1cd8d8450a`},this.mainTitle&&o(`div`,{key:`266ae44dad4c4353899d1f2e7bdbb3667e8212f9`,id:`title`,class:`heading-3-sb`},this.mainTitle),this._type==c.DEFAULT?this.renderDefaultMode():this.renderDragDropMode(),!!this.invalidFiles.size&&this.showErrors&&o(`z-modal`,{key:`6891bd809421e94519a3ee3fc282c04461058794`,modalid:`file-upload-${this.type}-error-modal`,ref:e=>this.errorModal=e,modaltitle:this.errorModalTitle,onModalClose:()=>this.resetErrors(),onModalBackgroundClick:()=>this.resetErrors()},o(`div`,{key:`566d49f0c368feefb8799dd944572530d12afe6f`,slot:`modalContent`},o(`div`,{key:`fc579be51eb22d4aa99cced35005ac6453818192`,class:`modal-wrapper body-3`},this.errorModalMessage?this.errorModalMessage:this.renderFileErrors()))))}get host(){return this}static get style(){return p()}},[262,`z-file-upload`,{type:[520],buttonVariant:[8,`button-variant`],acceptedFormat:[1,`accepted-format`],fileMaxSize:[2,`file-max-size`],mainTitle:[1,`main-title`],description:[1],uploadBtnLabel:[1,`upload-btn-label`],dragAndDropLabel:[1,`drag-and-drop-label`],allowedFilesMessage:[1,`allowed-files-message`],uploadClickableMessage:[1,`upload-clickable-message`],uploadMessage:[1,`upload-message`],errorModalTitle:[1,`error-modal-title`],errorModalMessage:[1,`error-modal-message`],uploadedFilesLabel:[1,`uploaded-files-label`],hasFileSection:[4,`has-file-section`],inputName:[1,`input-name`],showErrors:[4,`show-errors`],_type:[32],files:[32],invalidFiles:[32],input:[32],getFiles:[64],removeFile:[64]},[[0,`removeFile`,`onFileRemoved`],[0,`fileDropped`,`fileDroppedListener`]]]);var m={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZFileUpload`,tagName:`z-file-upload`,customElement:!0,members:[{kind:`field`,name:`type`,type:`any`,description:`Prop indicating the file upload type - can be default or dragdrop`,default:`ZFileUploadType.DEFAULT`},{kind:`field`,name:`buttonVariant`,type:`any`,description:`Prop indicating the button variant`},{kind:`field`,name:`acceptedFormat`,type:`string`,description:`Prop indicating the accepted file type: ex ".pdf, .doc, .jpg"`},{kind:`field`,name:`fileMaxSize`,type:`number`,description:`Max file dimension in Megabyte`},{kind:`field`,name:`mainTitle`,type:`string`,description:`Title`},{kind:`field`,name:`description`,type:`string`,description:`Description`},{kind:`field`,name:`uploadBtnLabel`,type:`string`,description:`upoload button label`,default:`"allega"`},{kind:`field`,name:`dragAndDropLabel`,type:`string`,description:`drag & drop button label`,default:`"Rilascia i file in questa area per allegarli."`},{kind:`field`,name:`allowedFilesMessage`,type:`string`,description:`allowed file message`},{kind:`field`,name:`uploadClickableMessage`,type:`string`,description:`upload clickable message`,default:`"Carica"`},{kind:`field`,name:`uploadMessage`,type:`string`,description:`upload message`,default:`"o trascina dal tuo computer"`},{kind:`field`,name:`errorModalTitle`,type:`string`,description:`error modal title`,default:`"Errore di caricamento"`},{kind:`field`,name:`errorModalMessage`,type:`string`,description:`error modal message`},{kind:`field`,name:`uploadedFilesLabel`,type:`string`,description:`loaded files label`,default:`"File appena caricati"`},{kind:`field`,name:`hasFileSection`,type:`boolean`,description:`uploaded files history rendering`,default:`true`},{kind:`field`,name:`inputName`,type:`string`,description:"Value to set on the file input's `name` attribute (for use with forms)",default:`"z-file-upload"`},{kind:`field`,name:`showErrors`,type:`boolean`,description:`Whether to show errors in the internal modal or leave the handling to the app.
Errors will still be emitted.`,default:`true`}],events:[{kind:`event`,name:`fileInput`,description:`Emitted when user select one or more files`},{kind:`event`,name:`fileError`,description:`Emits an array of error messages related to one or more files not allowed.
Emitted when some file is dropped or selected.`}]}],exports:[{kind:`js`,name:`ZFileUpload`,declaration:{name:`ZFileUpload`,module:`src/components/file-upload/z-file-upload/index.tsx`}},{kind:`custom-element-definition`,name:`z-file-upload`,declaration:{name:`ZFileUpload`,module:`src/components/file-upload/z-file-upload/index.tsx`}}]}]};t({...n()||{},...m,modules:[...(n()||{}).modules||[],...m.modules]});var h,g,_,v={title:`ZFileUpload`,component:`z-file-upload`,argTypes:{type:{options:Object.values(c),control:{type:`inline-radio`}},buttonVariant:{options:Object.values(l),control:{type:`inline-radio`}}},args:{fileMaxSize:50,acceptedFormat:`.pdf, .doc, .tiff, .png, .jpg`,mainTitle:`Allega un file`,description:`Vuoi allegare un file per chiarire meglio la tua richiesta?`,uploadBtnLabel:`allega`,hasFileSection:!0,showErrors:!0}},y={args:{buttonVariant:l.PRIMARY},render:t=>e(h||=u([`<h4 class="heading-4">
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
      <\/script>`]),c.DEFAULT,t.showErrors,t.hasFileSection,t.description,t.buttonVariant,t.fileMaxSize,t.acceptedFormat,t.mainTitle,t.uploadBtnLabel)},b={args:{dragAndDropLabel:`Rilascia i file in questa area per allegarli.`},render:t=>e(g||=u([`<h4 class="heading-4">
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
      <\/script>`]),c.DRAGDROP,t.showErrors,t.hasFileSection,t.description,t.fileMaxSize,t.acceptedFormat,t.mainTitle,t.dragAndDropLabel)},x={args:{mainTitle:`Attach a file`,description:`Do you want to attach a file to clarify your request?`,uploadBtnLabel:`Attach`,dragAndDropLabel:`Drop the image here`,allowedFilesMessage:`You can upload files in the format PDF, DOC, TIFF, PNG, JPG for a maximum of 50MB`,uploadClickableMessage:`Load`,uploadMessage:`or drag from your computer`,errorModalTitle:`Loading error`,errorModalMessage:`The file does not respect the allowed parameters.`,uploadedFilesLabel:`Uploaded files`},render:t=>e(_||=u([`<h4 class="heading-4">
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
      <\/script>`]),c.DRAGDROP,t.showErrors,t.hasFileSection,t.description,t.fileMaxSize,t.acceptedFormat,t.mainTitle,t.dragAndDropLabel,t.allowedFilesMessage,t.uploadClickableMessage,t.uploadMessage,t.errorModalTitle,t.errorModalMessage,t.uploadedFilesLabel,t.uploadBtnLabel)};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};var S=[`Default`,`Dragdrop`,`DragdropEnglish`];export{y as Default,b as Dragdrop,x as DragdropEnglish,S as __namedExportsOrder,v as default};