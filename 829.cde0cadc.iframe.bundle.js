/*! For license information please see 829.cde0cadc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[829],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G6:()=>validValidityState,Ud:()=>FormControlController,pL:()=>customErrorValidityState,zF:()=>valueMissingValidityState});var _chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),formCollections=new WeakMap,reportValidityOverloads=new WeakMap,checkValidityOverloads=new WeakMap,userInteractedControls=new WeakSet,interactions=new WeakMap,FormControlController=class{constructor(host,options){this.handleFormData=event=>{const disabled=this.options.disabled(this.host),name=this.options.name(this.host),value=this.options.value(this.host),isButton="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!disabled&&!isButton&&"string"==typeof name&&name.length>0&&void 0!==value&&(Array.isArray(value)?value.forEach((val=>{event.formData.append(name,val.toString())})):event.formData.append(name,value.toString()))},this.handleFormSubmit=event=>{var _a;const disabled=this.options.disabled(this.host),reportValidity=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(_a=formCollections.get(this.form))||_a.forEach((control=>{this.setUserInteracted(control,!0)}))),!this.form||this.form.noValidate||disabled||reportValidity(this.host)||(event.preventDefault(),event.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),interactions.set(this.host,[])},this.handleInteraction=event=>{const emittedEvents=interactions.get(this.host);emittedEvents.includes(event.type)||emittedEvents.push(event.type),emittedEvents.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const elements=this.form.querySelectorAll("*");for(const element of elements)if("function"==typeof element.checkValidity&&!element.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const elements=this.form.querySelectorAll("*");for(const element of elements)if("function"==typeof element.reportValidity&&!element.reportValidity())return!1}return!0},(this.host=host).addController(this),this.options=(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({form:input=>{const formId=input.form;if(formId){const form=input.getRootNode().querySelector(`#${formId}`);if(form)return form}return input.closest("form")},name:input=>input.name,value:input=>input.value,defaultValue:input=>input.defaultValue,disabled:input=>{var _a;return null!=(_a=input.disabled)&&_a},reportValidity:input=>"function"!=typeof input.reportValidity||input.reportValidity(),checkValidity:input=>"function"!=typeof input.checkValidity||input.checkValidity(),setValue:(input,value)=>input.value=value,assumeInteractionOn:["sl-input"]},options)}hostConnected(){const form=this.options.form(this.host);form&&this.attachForm(form),interactions.set(this.host,[]),this.options.assumeInteractionOn.forEach((event=>{this.host.addEventListener(event,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),interactions.delete(this.host),this.options.assumeInteractionOn.forEach((event=>{this.host.removeEventListener(event,this.handleInteraction)}))}hostUpdated(){const form=this.options.form(this.host);form||this.detachForm(),form&&this.form!==form&&(this.detachForm(),this.attachForm(form)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(form){form?(this.form=form,formCollections.has(this.form)?formCollections.get(this.form).add(this.host):formCollections.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)||(reportValidityOverloads.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),checkValidityOverloads.has(this.form)||(checkValidityOverloads.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const formCollection=formCollections.get(this.form);formCollection&&(formCollection.delete(this.host),formCollection.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)&&(this.form.reportValidity=reportValidityOverloads.get(this.form),reportValidityOverloads.delete(this.form)),checkValidityOverloads.has(this.form)&&(this.form.checkValidity=checkValidityOverloads.get(this.form),checkValidityOverloads.delete(this.form)),this.form=void 0))}setUserInteracted(el,hasInteracted){hasInteracted?userInteractedControls.add(el):userInteractedControls.delete(el),el.requestUpdate()}doAction(type,submitter){if(this.form){const button=document.createElement("button");button.type=type,button.style.position="absolute",button.style.width="0",button.style.height="0",button.style.clipPath="inset(50%)",button.style.overflow="hidden",button.style.whiteSpace="nowrap",submitter&&(button.name=submitter.name,button.value=submitter.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((attr=>{submitter.hasAttribute(attr)&&button.setAttribute(attr,submitter.getAttribute(attr))}))),this.form.append(button),button.click(),button.remove()}}getForm(){var _a;return null!=(_a=this.form)?_a:null}reset(submitter){this.doAction("reset",submitter)}submit(submitter){this.doAction("submit",submitter)}setValidity(isValid){const host=this.host,hasInteracted=Boolean(userInteractedControls.has(host)),required=Boolean(host.required);host.toggleAttribute("data-required",required),host.toggleAttribute("data-optional",!required),host.toggleAttribute("data-invalid",!isValid),host.toggleAttribute("data-valid",isValid),host.toggleAttribute("data-user-invalid",!isValid&&hasInteracted),host.toggleAttribute("data-user-valid",isValid&&hasInteracted)}updateValidity(){const host=this.host;this.setValidity(host.validity.valid)}emitInvalidEvent(originalInvalidEvent){const slInvalidEvent=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});originalInvalidEvent||slInvalidEvent.preventDefault(),this.host.dispatchEvent(slInvalidEvent)||null==originalInvalidEvent||originalInvalidEvent.preventDefault()}},validValidityState=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),valueMissingValidityState=Object.freeze((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},validValidityState),{valid:!1,valueMissing:!0})),customErrorValidityState=Object.freeze((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},validValidityState),{valid:!1,customError:!0}))},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>icon_button_styles_default});var icon_button_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ey:()=>stopAnimations,dc:()=>shimKeyframesHeightAuto,jd:()=>animateTo});var _chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js");function animateTo(el,keyframes,options){return new Promise((resolve=>{if((null==options?void 0:options.duration)===1/0)throw new Error("Promise-based animations must be finite.");const animation=el.animate(keyframes,(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},options),{duration:prefersReducedMotion()?0:options.duration}));animation.addEventListener("cancel",resolve,{once:!0}),animation.addEventListener("finish",resolve,{once:!0})}))}function prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function stopAnimations(el){return Promise.all(el.getAnimations().map((animation=>new Promise((resolve=>{animation.cancel(),requestAnimationFrame(resolve)})))))}function shimKeyframesHeightAuto(keyframes,calculatedHeight){return keyframes.map((keyframe=>(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},keyframe),{height:"auto"===keyframe.height?`${calculatedHeight}px`:keyframe.height})))}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function waitForEvent(el,eventName){return new Promise((resolve=>{el.addEventListener(eventName,(function done(event){event.target===el&&(el.removeEventListener(eventName,done),resolve())}))}))}__webpack_require__.d(__webpack_exports__,{l:()=>waitForEvent})},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SlIconButton});var _chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),_chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/static-html.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),SlIconButton=class extends _chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__.f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(event){this.disabled&&(event.preventDefault(),event.stopPropagation())}click(){this.button.click()}focus(options){this.button.focus(options)}blur(){this.button.blur()}render(){const isLink=!!this.href,tag=isLink?lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`a`:lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`button`;return lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.qy`
      <${tag}
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__.H)({"icon-button":!0,"icon-button--disabled":!isLink&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?void 0:this.disabled)}
        type=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?void 0:"button")}
        href=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?this.href:void 0)}
        target=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?this.target:void 0)}
        download=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?this.download:void 0)}
        rel=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink&&this.target?"noreferrer noopener":void 0)}
        role=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(isLink?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(this.name)}
          library=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(this.library)}
          src=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `}};SlIconButton.styles=[_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__.$,_chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__.Y],SlIconButton.dependencies={"sl-icon":_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__.B},(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)(".icon-button")],SlIconButton.prototype,"button",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],SlIconButton.prototype,"hasFocus",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"name",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"library",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"src",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"href",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"target",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"download",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"label",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],SlIconButton.prototype,"disabled",2)},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ee:()=>setDefaultAnimation,RB:()=>getAnimation});__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js");var defaultAnimationRegistry=new Map,customAnimationRegistry=new WeakMap;function ensureAnimation(animation){return null!=animation?animation:{keyframes:[],options:{duration:0}}}function getLogicalAnimation(animation,dir){return"rtl"===dir.toLowerCase()?{keyframes:animation.rtlKeyframes||animation.keyframes,options:animation.options}:animation}function setDefaultAnimation(animationName,animation){defaultAnimationRegistry.set(animationName,ensureAnimation(animation))}function getAnimation(el,animationName,options){const customAnimation=customAnimationRegistry.get(el);if(null==customAnimation?void 0:customAnimation[animationName])return getLogicalAnimation(customAnimation[animationName],options.dir);const defaultAnimation=defaultAnimationRegistry.get(animationName);return defaultAnimation?getLogicalAnimation(defaultAnimation,options.dir):{keyframes:[],options:{duration:0}}}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>HasSlotController});var HasSlotController=class{constructor(host,...slotNames){this.slotNames=[],this.handleSlotChange=event=>{const slot=event.target;(this.slotNames.includes("[default]")&&!slot.name||slot.name&&this.slotNames.includes(slot.name))&&this.host.requestUpdate()},(this.host=host).addController(this),this.slotNames=slotNames}hasDefaultSlot(){return[...this.host.childNodes].some((node=>{if(node.nodeType===node.TEXT_NODE&&""!==node.textContent.trim())return!0;if(node.nodeType===node.ELEMENT_NODE){const el=node;if("sl-visually-hidden"===el.tagName.toLowerCase())return!1;if(!el.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(name){return null!==this.host.querySelector(`:scope > [slot="${name}"]`)}test(slotName){return"[default]"===slotName?this.hasDefaultSlot():this.hasNamedSlot(slotName)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I7:()=>unlockBodyScrolling,JG:()=>lockBodyScrolling,Rt:()=>scrollIntoView});var locks=new Set;function lockBodyScrolling(lockingEl){if(locks.add(lockingEl),!document.documentElement.classList.contains("sl-scroll-lock")){const scrollbarWidth=function getScrollbarWidth(){const documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth)}()+function getExistingBodyPadding(){const padding=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(padding)||!padding?0:padding}();let scrollbarGutterProperty=getComputedStyle(document.documentElement).scrollbarGutter;scrollbarGutterProperty&&"auto"!==scrollbarGutterProperty||(scrollbarGutterProperty="stable"),scrollbarWidth<2&&(scrollbarGutterProperty=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",scrollbarGutterProperty),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${scrollbarWidth}px`)}}function unlockBodyScrolling(lockingEl){locks.delete(lockingEl),0===locks.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function scrollIntoView(element,container,direction="vertical",behavior="smooth"){const offset=function getOffset(element,parent){return{top:Math.round(element.getBoundingClientRect().top-parent.getBoundingClientRect().top),left:Math.round(element.getBoundingClientRect().left-parent.getBoundingClientRect().left)}}(element,container),offsetTop=offset.top+container.scrollTop,offsetLeft=offset.left+container.scrollLeft,minX=container.scrollLeft,maxX=container.scrollLeft+container.offsetWidth,minY=container.scrollTop,maxY=container.scrollTop+container.offsetHeight;"horizontal"!==direction&&"both"!==direction||(offsetLeft<minX?container.scrollTo({left:offsetLeft,behavior}):offsetLeft+element.clientWidth>maxX&&container.scrollTo({left:offsetLeft-container.offsetWidth+element.clientWidth,behavior})),"vertical"!==direction&&"both"!==direction||(offsetTop<minY?container.scrollTo({top:offsetTop,behavior}):offsetTop+element.clientHeight>maxY&&container.scrollTo({top:offsetTop-container.offsetHeight+element.clientHeight,behavior}))}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>form_control_styles_default});var form_control_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`},"./node_modules/@shoelace-style/shoelace/dist/components/badge/badge.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),badge_styles_default=lit.AH`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_SBEV2IKJ_SlBadge=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return lit.qy`
      <span
        part="base"
        class=${(0,class_map.H)({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};chunk_SBEV2IKJ_SlBadge.styles=[chunk_TUVJKY7S.$,badge_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_SBEV2IKJ_SlBadge.prototype,"variant",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_SBEV2IKJ_SlBadge.prototype,"pill",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_SBEV2IKJ_SlBadge.prototype,"pulse",2);chunk_SBEV2IKJ_SlBadge.define("sl-badge")},"./node_modules/@shoelace-style/shoelace/dist/components/divider/divider.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var divider_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_6EQLH47D_SlDivider=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};chunk_6EQLH47D_SlDivider.styles=[chunk_TUVJKY7S.$,divider_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_6EQLH47D_SlDivider.prototype,"vertical",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("vertical")],chunk_6EQLH47D_SlDivider.prototype,"handleVerticalChange",1);chunk_6EQLH47D_SlDivider.define("sl-divider")},"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./node_modules/@shoelace-style/shoelace/dist/components/option/option.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),option_styles_default=lit.AH`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_LKVYRWLR_SlOption=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then((()=>{const controller=this.closest("sl-select");controller&&controller.handleDefaultSlotChange()})):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const nodes=this.childNodes;let label="";return[...nodes].forEach((node=>{node.nodeType===Node.ELEMENT_NODE&&(node.hasAttribute("slot")||(label+=node.textContent)),node.nodeType===Node.TEXT_NODE&&(label+=node.textContent)})),label.trim()}render(){return lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};chunk_LKVYRWLR_SlOption.styles=[chunk_TUVJKY7S.$,option_styles_default],chunk_LKVYRWLR_SlOption.dependencies={"sl-icon":chunk_4GJTAPTW.B},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".option__label")],chunk_LKVYRWLR_SlOption.prototype,"defaultSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_LKVYRWLR_SlOption.prototype,"current",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_LKVYRWLR_SlOption.prototype,"selected",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_LKVYRWLR_SlOption.prototype,"hasHover",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_LKVYRWLR_SlOption.prototype,"value",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_LKVYRWLR_SlOption.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("disabled")],chunk_LKVYRWLR_SlOption.prototype,"handleDisabledChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("selected")],chunk_LKVYRWLR_SlOption.prototype,"handleSelectedChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("value")],chunk_LKVYRWLR_SlOption.prototype,"handleValueChange",1);chunk_LKVYRWLR_SlOption.define("sl-option");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js")},"./node_modules/@shoelace-style/shoelace/dist/components/select/select.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),tag_styles_default=lit.AH`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,chunk_HLJ2JR6P=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),SlTag=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return lit.qy`
      <span
        part="base"
        class=${(0,class_map.H)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?lit.qy`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};SlTag.styles=[chunk_TUVJKY7S.$,tag_styles_default],SlTag.dependencies={"sl-icon-button":chunk_HLJ2JR6P.h},(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],SlTag.prototype,"variant",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],SlTag.prototype,"size",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],SlTag.prototype,"pill",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],SlTag.prototype,"removable",2);var select_styles_default=lit.AH`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,chunk_RWUUFNUL=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js"),chunk_SI4ACBFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js"),popup_styles_default=lit.AH`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const floating_ui_utils_min=Math.min,floating_ui_utils_max=Math.max,round=Math.round,floor=Math.floor,createCoords=v=>({x:v,y:v}),oppositeSideMap={left:"right",right:"left",bottom:"top",top:"bottom"},oppositeAlignmentMap={start:"end",end:"start"};function clamp(start,value,end){return floating_ui_utils_max(start,floating_ui_utils_min(value,end))}function floating_ui_utils_evaluate(value,param){return"function"==typeof value?value(param):value}function floating_ui_utils_getSide(placement){return placement.split("-")[0]}function floating_ui_utils_getAlignment(placement){return placement.split("-")[1]}function floating_ui_utils_getOppositeAxis(axis){return"x"===axis?"y":"x"}function getAxisLength(axis){return"y"===axis?"height":"width"}function floating_ui_utils_getSideAxis(placement){return["top","bottom"].includes(floating_ui_utils_getSide(placement))?"y":"x"}function getAlignmentAxis(placement){return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement))}function floating_ui_utils_getOppositeAlignmentPlacement(placement){return placement.replace(/start|end/g,(alignment=>oppositeAlignmentMap[alignment]))}function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(side=>oppositeSideMap[side]))}function floating_ui_utils_getPaddingObject(padding){return"number"!=typeof padding?function expandPaddingObject(padding){return{top:0,right:0,bottom:0,left:0,...padding}}(padding):{top:padding,right:padding,bottom:padding,left:padding}}function floating_ui_utils_rectToClientRect(rect){const{x,y,width,height}=rect;return{width,height,top:y,left:x,right:x+width,bottom:y+height,x,y}}function computeCoordsFromPlacement(_ref,placement,rtl){let{reference,floating}=_ref;const sideAxis=floating_ui_utils_getSideAxis(placement),alignmentAxis=getAlignmentAxis(placement),alignLength=getAxisLength(alignmentAxis),side=floating_ui_utils_getSide(placement),isVertical="y"===sideAxis,commonX=reference.x+reference.width/2-floating.width/2,commonY=reference.y+reference.height/2-floating.height/2,commonAlign=reference[alignLength]/2-floating[alignLength]/2;let coords;switch(side){case"top":coords={x:commonX,y:reference.y-floating.height};break;case"bottom":coords={x:commonX,y:reference.y+reference.height};break;case"right":coords={x:reference.x+reference.width,y:commonY};break;case"left":coords={x:reference.x-floating.width,y:commonY};break;default:coords={x:reference.x,y:reference.y}}switch(floating_ui_utils_getAlignment(placement)){case"start":coords[alignmentAxis]-=commonAlign*(rtl&&isVertical?-1:1);break;case"end":coords[alignmentAxis]+=commonAlign*(rtl&&isVertical?-1:1)}return coords}async function detectOverflow(state,options){var _await$platform$isEle;void 0===options&&(options={});const{x,y,platform,rects,elements,strategy}=state,{boundary="clippingAncestors",rootBoundary="viewport",elementContext="floating",altBoundary=!1,padding=0}=floating_ui_utils_evaluate(options,state),paddingObject=floating_ui_utils_getPaddingObject(padding),element=elements[altBoundary?"floating"===elementContext?"reference":"floating":elementContext],clippingClientRect=floating_ui_utils_rectToClientRect(await platform.getClippingRect({element:null==(_await$platform$isEle=await(null==platform.isElement?void 0:platform.isElement(element)))||_await$platform$isEle?element:element.contextElement||await(null==platform.getDocumentElement?void 0:platform.getDocumentElement(elements.floating)),boundary,rootBoundary,strategy})),rect="floating"===elementContext?{x,y,width:rects.floating.width,height:rects.floating.height}:rects.reference,offsetParent=await(null==platform.getOffsetParent?void 0:platform.getOffsetParent(elements.floating)),offsetScale=await(null==platform.isElement?void 0:platform.isElement(offsetParent))&&await(null==platform.getScale?void 0:platform.getScale(offsetParent))||{x:1,y:1},elementClientRect=floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect?await platform.convertOffsetParentRelativeRectToViewportRelativeRect({elements,rect,offsetParent,strategy}):rect);return{top:(clippingClientRect.top-elementClientRect.top+paddingObject.top)/offsetScale.y,bottom:(elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom)/offsetScale.y,left:(clippingClientRect.left-elementClientRect.left+paddingObject.left)/offsetScale.x,right:(elementClientRect.right-clippingClientRect.right+paddingObject.right)/offsetScale.x}}function hasWindow(){return"undefined"!=typeof window}function getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}function isNode(value){return!!hasWindow()&&(value instanceof Node||value instanceof getWindow(value).Node)}function isElement(value){return!!hasWindow()&&(value instanceof Element||value instanceof getWindow(value).Element)}function isHTMLElement(value){return!!hasWindow()&&(value instanceof HTMLElement||value instanceof getWindow(value).HTMLElement)}function isShadowRoot(value){return!(!hasWindow()||"undefined"==typeof ShadowRoot)&&(value instanceof ShadowRoot||value instanceof getWindow(value).ShadowRoot)}function isOverflowElement(element){const{overflow,overflowX,overflowY,display}=floating_ui_utils_dom_getComputedStyle(element);return/auto|scroll|overlay|hidden|clip/.test(overflow+overflowY+overflowX)&&!["inline","contents"].includes(display)}function isTableElement(element){return["table","td","th"].includes(getNodeName(element))}function isTopLayer(element){return[":popover-open",":modal"].some((selector=>{try{return element.matches(selector)}catch(e){return!1}}))}function isContainingBlock(elementOrCss){const webkit=isWebKit(),css=isElement(elementOrCss)?floating_ui_utils_dom_getComputedStyle(elementOrCss):elementOrCss;return["transform","translate","scale","rotate","perspective"].some((value=>!!css[value]&&"none"!==css[value]))||!!css.containerType&&"normal"!==css.containerType||!webkit&&!!css.backdropFilter&&"none"!==css.backdropFilter||!webkit&&!!css.filter&&"none"!==css.filter||["transform","translate","scale","rotate","perspective","filter"].some((value=>(css.willChange||"").includes(value)))||["paint","layout","strict","content"].some((value=>(css.contain||"").includes(value)))}function isWebKit(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(node){return["html","body","#document"].includes(getNodeName(node))}function floating_ui_utils_dom_getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function getNodeScroll(element){return isElement(element)?{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}:{scrollLeft:element.scrollX,scrollTop:element.scrollY}}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||getDocumentElement(node);return isShadowRoot(result)?result.host:result}function getNearestOverflowAncestor(node){const parentNode=getParentNode(node);return isLastTraversableNode(parentNode)?node.ownerDocument?node.ownerDocument.body:node.body:isHTMLElement(parentNode)&&isOverflowElement(parentNode)?parentNode:getNearestOverflowAncestor(parentNode)}function getOverflowAncestors(node,list,traverseIframes){var _node$ownerDocument2;void 0===list&&(list=[]),void 0===traverseIframes&&(traverseIframes=!0);const scrollableAncestor=getNearestOverflowAncestor(node),isBody=scrollableAncestor===(null==(_node$ownerDocument2=node.ownerDocument)?void 0:_node$ownerDocument2.body),win=getWindow(scrollableAncestor);if(isBody){const frameElement=getFrameElement(win);return list.concat(win,win.visualViewport||[],isOverflowElement(scrollableAncestor)?scrollableAncestor:[],frameElement&&traverseIframes?getOverflowAncestors(frameElement):[])}return list.concat(scrollableAncestor,getOverflowAncestors(scrollableAncestor,[],traverseIframes))}function getFrameElement(win){return win.parent&&Object.getPrototypeOf(win.parent)?win.frameElement:null}function getCssDimensions(element){const css=floating_ui_utils_dom_getComputedStyle(element);let width=parseFloat(css.width)||0,height=parseFloat(css.height)||0;const hasOffset=isHTMLElement(element),offsetWidth=hasOffset?element.offsetWidth:width,offsetHeight=hasOffset?element.offsetHeight:height,shouldFallback=round(width)!==offsetWidth||round(height)!==offsetHeight;return shouldFallback&&(width=offsetWidth,height=offsetHeight),{width,height,$:shouldFallback}}function unwrapElement(element){return isElement(element)?element:element.contextElement}function getScale(element){const domElement=unwrapElement(element);if(!isHTMLElement(domElement))return createCoords(1);const rect=domElement.getBoundingClientRect(),{width,height,$}=getCssDimensions(domElement);let x=($?round(rect.width):rect.width)/width,y=($?round(rect.height):rect.height)/height;return x&&Number.isFinite(x)||(x=1),y&&Number.isFinite(y)||(y=1),{x,y}}const noOffsets=createCoords(0);function getVisualOffsets(element){const win=getWindow(element);return isWebKit()&&win.visualViewport?{x:win.visualViewport.offsetLeft,y:win.visualViewport.offsetTop}:noOffsets}function getBoundingClientRect(element,includeScale,isFixedStrategy,offsetParent){void 0===includeScale&&(includeScale=!1),void 0===isFixedStrategy&&(isFixedStrategy=!1);const clientRect=element.getBoundingClientRect(),domElement=unwrapElement(element);let scale=createCoords(1);includeScale&&(offsetParent?isElement(offsetParent)&&(scale=getScale(offsetParent)):scale=getScale(element));const visualOffsets=function shouldAddVisualOffsets(element,isFixed,floatingOffsetParent){return void 0===isFixed&&(isFixed=!1),!(!floatingOffsetParent||isFixed&&floatingOffsetParent!==getWindow(element))&&isFixed}(domElement,isFixedStrategy,offsetParent)?getVisualOffsets(domElement):createCoords(0);let x=(clientRect.left+visualOffsets.x)/scale.x,y=(clientRect.top+visualOffsets.y)/scale.y,width=clientRect.width/scale.x,height=clientRect.height/scale.y;if(domElement){const win=getWindow(domElement),offsetWin=offsetParent&&isElement(offsetParent)?getWindow(offsetParent):offsetParent;let currentWin=win,currentIFrame=getFrameElement(currentWin);for(;currentIFrame&&offsetParent&&offsetWin!==currentWin;){const iframeScale=getScale(currentIFrame),iframeRect=currentIFrame.getBoundingClientRect(),css=floating_ui_utils_dom_getComputedStyle(currentIFrame),left=iframeRect.left+(currentIFrame.clientLeft+parseFloat(css.paddingLeft))*iframeScale.x,top=iframeRect.top+(currentIFrame.clientTop+parseFloat(css.paddingTop))*iframeScale.y;x*=iframeScale.x,y*=iframeScale.y,width*=iframeScale.x,height*=iframeScale.y,x+=left,y+=top,currentWin=getWindow(currentIFrame),currentIFrame=getFrameElement(currentWin)}}return floating_ui_utils_rectToClientRect({width,height,x,y})}function getWindowScrollBarX(element,rect){const leftScroll=getNodeScroll(element).scrollLeft;return rect?rect.left+leftScroll:getBoundingClientRect(getDocumentElement(element)).left+leftScroll}function getHTMLOffset(documentElement,scroll,ignoreScrollbarX){void 0===ignoreScrollbarX&&(ignoreScrollbarX=!1);const htmlRect=documentElement.getBoundingClientRect();return{x:htmlRect.left+scroll.scrollLeft-(ignoreScrollbarX?0:getWindowScrollBarX(documentElement,htmlRect)),y:htmlRect.top+scroll.scrollTop}}function getClientRectFromClippingAncestor(element,clippingAncestor,strategy){let rect;if("viewport"===clippingAncestor)rect=function getViewportRect(element,strategy){const win=getWindow(element),html=getDocumentElement(element),visualViewport=win.visualViewport;let width=html.clientWidth,height=html.clientHeight,x=0,y=0;if(visualViewport){width=visualViewport.width,height=visualViewport.height;const visualViewportBased=isWebKit();(!visualViewportBased||visualViewportBased&&"fixed"===strategy)&&(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)}return{width,height,x,y}}(element,strategy);else if("document"===clippingAncestor)rect=function getDocumentRect(element){const html=getDocumentElement(element),scroll=getNodeScroll(element),body=element.ownerDocument.body,width=floating_ui_utils_max(html.scrollWidth,html.clientWidth,body.scrollWidth,body.clientWidth),height=floating_ui_utils_max(html.scrollHeight,html.clientHeight,body.scrollHeight,body.clientHeight);let x=-scroll.scrollLeft+getWindowScrollBarX(element);const y=-scroll.scrollTop;return"rtl"===floating_ui_utils_dom_getComputedStyle(body).direction&&(x+=floating_ui_utils_max(html.clientWidth,body.clientWidth)-width),{width,height,x,y}}(getDocumentElement(element));else if(isElement(clippingAncestor))rect=function getInnerBoundingClientRect(element,strategy){const clientRect=getBoundingClientRect(element,!0,"fixed"===strategy),top=clientRect.top+element.clientTop,left=clientRect.left+element.clientLeft,scale=isHTMLElement(element)?getScale(element):createCoords(1);return{width:element.clientWidth*scale.x,height:element.clientHeight*scale.y,x:left*scale.x,y:top*scale.y}}(clippingAncestor,strategy);else{const visualOffsets=getVisualOffsets(element);rect={x:clippingAncestor.x-visualOffsets.x,y:clippingAncestor.y-visualOffsets.y,width:clippingAncestor.width,height:clippingAncestor.height}}return floating_ui_utils_rectToClientRect(rect)}function hasFixedPositionAncestor(element,stopNode){const parentNode=getParentNode(element);return!(parentNode===stopNode||!isElement(parentNode)||isLastTraversableNode(parentNode))&&("fixed"===floating_ui_utils_dom_getComputedStyle(parentNode).position||hasFixedPositionAncestor(parentNode,stopNode))}function getRectRelativeToOffsetParent(element,offsetParent,strategy){const isOffsetParentAnElement=isHTMLElement(offsetParent),documentElement=getDocumentElement(offsetParent),isFixed="fixed"===strategy,rect=getBoundingClientRect(element,!0,isFixed,offsetParent);let scroll={scrollLeft:0,scrollTop:0};const offsets=createCoords(0);if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)if(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isOffsetParentAnElement){const offsetRect=getBoundingClientRect(offsetParent,!0,isFixed,offsetParent);offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}else documentElement&&(offsets.x=getWindowScrollBarX(documentElement));const htmlOffset=!documentElement||isOffsetParentAnElement||isFixed?createCoords(0):getHTMLOffset(documentElement,scroll);return{x:rect.left+scroll.scrollLeft-offsets.x-htmlOffset.x,y:rect.top+scroll.scrollTop-offsets.y-htmlOffset.y,width:rect.width,height:rect.height}}function isStaticPositioned(element){return"static"===floating_ui_utils_dom_getComputedStyle(element).position}function getTrueOffsetParent(element,polyfill){if(!isHTMLElement(element)||"fixed"===floating_ui_utils_dom_getComputedStyle(element).position)return null;if(polyfill)return polyfill(element);let rawOffsetParent=element.offsetParent;return getDocumentElement(element)===rawOffsetParent&&(rawOffsetParent=rawOffsetParent.ownerDocument.body),rawOffsetParent}function getOffsetParent(element,polyfill){const win=getWindow(element);if(isTopLayer(element))return win;if(!isHTMLElement(element)){let svgOffsetParent=getParentNode(element);for(;svgOffsetParent&&!isLastTraversableNode(svgOffsetParent);){if(isElement(svgOffsetParent)&&!isStaticPositioned(svgOffsetParent))return svgOffsetParent;svgOffsetParent=getParentNode(svgOffsetParent)}return win}let offsetParent=getTrueOffsetParent(element,polyfill);for(;offsetParent&&isTableElement(offsetParent)&&isStaticPositioned(offsetParent);)offsetParent=getTrueOffsetParent(offsetParent,polyfill);return offsetParent&&isLastTraversableNode(offsetParent)&&isStaticPositioned(offsetParent)&&!isContainingBlock(offsetParent)?win:offsetParent||function getContainingBlock(element){let currentNode=getParentNode(element);for(;isHTMLElement(currentNode)&&!isLastTraversableNode(currentNode);){if(isContainingBlock(currentNode))return currentNode;if(isTopLayer(currentNode))return null;currentNode=getParentNode(currentNode)}return null}(element)||win}const platform={convertOffsetParentRelativeRectToViewportRelativeRect:function convertOffsetParentRelativeRectToViewportRelativeRect(_ref){let{elements,rect,offsetParent,strategy}=_ref;const isFixed="fixed"===strategy,documentElement=getDocumentElement(offsetParent),topLayer=!!elements&&isTopLayer(elements.floating);if(offsetParent===documentElement||topLayer&&isFixed)return rect;let scroll={scrollLeft:0,scrollTop:0},scale=createCoords(1);const offsets=createCoords(0),isOffsetParentAnElement=isHTMLElement(offsetParent);if((isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isHTMLElement(offsetParent))){const offsetRect=getBoundingClientRect(offsetParent);scale=getScale(offsetParent),offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}const htmlOffset=!documentElement||isOffsetParentAnElement||isFixed?createCoords(0):getHTMLOffset(documentElement,scroll,!0);return{width:rect.width*scale.x,height:rect.height*scale.y,x:rect.x*scale.x-scroll.scrollLeft*scale.x+offsets.x+htmlOffset.x,y:rect.y*scale.y-scroll.scrollTop*scale.y+offsets.y+htmlOffset.y}},getDocumentElement,getClippingRect:function getClippingRect(_ref){let{element,boundary,rootBoundary,strategy}=_ref;const clippingAncestors=[..."clippingAncestors"===boundary?isTopLayer(element)?[]:function getClippingElementAncestors(element,cache){const cachedResult=cache.get(element);if(cachedResult)return cachedResult;let result=getOverflowAncestors(element,[],!1).filter((el=>isElement(el)&&"body"!==getNodeName(el))),currentContainingBlockComputedStyle=null;const elementIsFixed="fixed"===floating_ui_utils_dom_getComputedStyle(element).position;let currentNode=elementIsFixed?getParentNode(element):element;for(;isElement(currentNode)&&!isLastTraversableNode(currentNode);){const computedStyle=floating_ui_utils_dom_getComputedStyle(currentNode),currentNodeIsContaining=isContainingBlock(currentNode);currentNodeIsContaining||"fixed"!==computedStyle.position||(currentContainingBlockComputedStyle=null),(elementIsFixed?!currentNodeIsContaining&&!currentContainingBlockComputedStyle:!currentNodeIsContaining&&"static"===computedStyle.position&&currentContainingBlockComputedStyle&&["absolute","fixed"].includes(currentContainingBlockComputedStyle.position)||isOverflowElement(currentNode)&&!currentNodeIsContaining&&hasFixedPositionAncestor(element,currentNode))?result=result.filter((ancestor=>ancestor!==currentNode)):currentContainingBlockComputedStyle=computedStyle,currentNode=getParentNode(currentNode)}return cache.set(element,result),result}(element,this._c):[].concat(boundary),rootBoundary],firstClippingAncestor=clippingAncestors[0],clippingRect=clippingAncestors.reduce(((accRect,clippingAncestor)=>{const rect=getClientRectFromClippingAncestor(element,clippingAncestor,strategy);return accRect.top=floating_ui_utils_max(rect.top,accRect.top),accRect.right=floating_ui_utils_min(rect.right,accRect.right),accRect.bottom=floating_ui_utils_min(rect.bottom,accRect.bottom),accRect.left=floating_ui_utils_max(rect.left,accRect.left),accRect}),getClientRectFromClippingAncestor(element,firstClippingAncestor,strategy));return{width:clippingRect.right-clippingRect.left,height:clippingRect.bottom-clippingRect.top,x:clippingRect.left,y:clippingRect.top}},getOffsetParent,getElementRects:async function(data){const getOffsetParentFn=this.getOffsetParent||getOffsetParent,getDimensionsFn=this.getDimensions,floatingDimensions=await getDimensionsFn(data.floating);return{reference:getRectRelativeToOffsetParent(data.reference,await getOffsetParentFn(data.floating),data.strategy),floating:{x:0,y:0,width:floatingDimensions.width,height:floatingDimensions.height}}},getClientRects:function getClientRects(element){return Array.from(element.getClientRects())},getDimensions:function getDimensions(element){const{width,height}=getCssDimensions(element);return{width,height}},getScale,isElement,isRTL:function isRTL(element){return"rtl"===floating_ui_utils_dom_getComputedStyle(element).direction}};function rectsAreEqual(a,b){return a.x===b.x&&a.y===b.y&&a.width===b.width&&a.height===b.height}function autoUpdate(reference,floating,update,options){void 0===options&&(options={});const{ancestorScroll=!0,ancestorResize=!0,elementResize="function"==typeof ResizeObserver,layoutShift="function"==typeof IntersectionObserver,animationFrame=!1}=options,referenceEl=unwrapElement(reference),ancestors=ancestorScroll||ancestorResize?[...referenceEl?getOverflowAncestors(referenceEl):[],...getOverflowAncestors(floating)]:[];ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.addEventListener("scroll",update,{passive:!0}),ancestorResize&&ancestor.addEventListener("resize",update)}));const cleanupIo=referenceEl&&layoutShift?function observeMove(element,onMove){let timeoutId,io=null;const root=getDocumentElement(element);function cleanup(){var _io;clearTimeout(timeoutId),null==(_io=io)||_io.disconnect(),io=null}return function refresh(skip,threshold){void 0===skip&&(skip=!1),void 0===threshold&&(threshold=1),cleanup();const elementRectForRootMargin=element.getBoundingClientRect(),{left,top,width,height}=elementRectForRootMargin;if(skip||onMove(),!width||!height)return;const options={rootMargin:-floor(top)+"px "+-floor(root.clientWidth-(left+width))+"px "+-floor(root.clientHeight-(top+height))+"px "+-floor(left)+"px",threshold:floating_ui_utils_max(0,floating_ui_utils_min(1,threshold))||1};let isFirstUpdate=!0;function handleObserve(entries){const ratio=entries[0].intersectionRatio;if(ratio!==threshold){if(!isFirstUpdate)return refresh();ratio?refresh(!1,ratio):timeoutId=setTimeout((()=>{refresh(!1,1e-7)}),1e3)}1!==ratio||rectsAreEqual(elementRectForRootMargin,element.getBoundingClientRect())||refresh(),isFirstUpdate=!1}try{io=new IntersectionObserver(handleObserve,{...options,root:root.ownerDocument})}catch(e){io=new IntersectionObserver(handleObserve,options)}io.observe(element)}(!0),cleanup}(referenceEl,update):null;let frameId,reobserveFrame=-1,resizeObserver=null;elementResize&&(resizeObserver=new ResizeObserver((_ref=>{let[firstEntry]=_ref;firstEntry&&firstEntry.target===referenceEl&&resizeObserver&&(resizeObserver.unobserve(floating),cancelAnimationFrame(reobserveFrame),reobserveFrame=requestAnimationFrame((()=>{var _resizeObserver;null==(_resizeObserver=resizeObserver)||_resizeObserver.observe(floating)}))),update()})),referenceEl&&!animationFrame&&resizeObserver.observe(referenceEl),resizeObserver.observe(floating));let prevRefRect=animationFrame?getBoundingClientRect(reference):null;return animationFrame&&function frameLoop(){const nextRefRect=getBoundingClientRect(reference);prevRefRect&&!rectsAreEqual(prevRefRect,nextRefRect)&&update();prevRefRect=nextRefRect,frameId=requestAnimationFrame(frameLoop)}(),update(),()=>{var _resizeObserver2;ancestors.forEach((ancestor=>{ancestorScroll&&ancestor.removeEventListener("scroll",update),ancestorResize&&ancestor.removeEventListener("resize",update)})),null==cleanupIo||cleanupIo(),null==(_resizeObserver2=resizeObserver)||_resizeObserver2.disconnect(),resizeObserver=null,animationFrame&&cancelAnimationFrame(frameId)}}const floating_ui_dom_offset=function(options){return void 0===options&&(options=0),{name:"offset",options,async fn(state){var _middlewareData$offse,_middlewareData$arrow;const{x,y,placement,middlewareData}=state,diffCoords=await async function convertValueToCoords(state,options){const{placement,platform,elements}=state,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isVertical="y"===floating_ui_utils_getSideAxis(placement),mainAxisMulti=["left","top"].includes(side)?-1:1,crossAxisMulti=rtl&&isVertical?-1:1,rawValue=floating_ui_utils_evaluate(options,state);let{mainAxis,crossAxis,alignmentAxis}="number"==typeof rawValue?{mainAxis:rawValue,crossAxis:0,alignmentAxis:null}:{mainAxis:rawValue.mainAxis||0,crossAxis:rawValue.crossAxis||0,alignmentAxis:rawValue.alignmentAxis};return alignment&&"number"==typeof alignmentAxis&&(crossAxis="end"===alignment?-1*alignmentAxis:alignmentAxis),isVertical?{x:crossAxis*crossAxisMulti,y:mainAxis*mainAxisMulti}:{x:mainAxis*mainAxisMulti,y:crossAxis*crossAxisMulti}}(state,options);return placement===(null==(_middlewareData$offse=middlewareData.offset)?void 0:_middlewareData$offse.placement)&&null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset?{}:{x:x+diffCoords.x,y:y+diffCoords.y,data:{...diffCoords,placement}}}}},floating_ui_dom_shift=function(options){return void 0===options&&(options={}),{name:"shift",options,async fn(state){const{x,y,placement}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!1,limiter={fn:_ref=>{let{x,y}=_ref;return{x,y}}},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),coords={x,y},overflow=await detectOverflow(state,detectOverflowOptions),crossAxis=floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement)),mainAxis=floating_ui_utils_getOppositeAxis(crossAxis);let mainAxisCoord=coords[mainAxis],crossAxisCoord=coords[crossAxis];if(checkMainAxis){const maxSide="y"===mainAxis?"bottom":"right";mainAxisCoord=clamp(mainAxisCoord+overflow["y"===mainAxis?"top":"left"],mainAxisCoord,mainAxisCoord-overflow[maxSide])}if(checkCrossAxis){const maxSide="y"===crossAxis?"bottom":"right";crossAxisCoord=clamp(crossAxisCoord+overflow["y"===crossAxis?"top":"left"],crossAxisCoord,crossAxisCoord-overflow[maxSide])}const limitedCoords=limiter.fn({...state,[mainAxis]:mainAxisCoord,[crossAxis]:crossAxisCoord});return{...limitedCoords,data:{x:limitedCoords.x-x,y:limitedCoords.y-y,enabled:{[mainAxis]:checkMainAxis,[crossAxis]:checkCrossAxis}}}}}},floating_ui_dom_flip=function(options){return void 0===options&&(options={}),{name:"flip",options,async fn(state){var _middlewareData$arrow,_middlewareData$flip;const{placement,middlewareData,rects,initialPlacement,platform,elements}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!0,fallbackPlacements:specifiedFallbackPlacements,fallbackStrategy="bestFit",fallbackAxisSideDirection="none",flipAlignment=!0,...detectOverflowOptions}=floating_ui_utils_evaluate(options,state);if(null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset)return{};const side=floating_ui_utils_getSide(placement),initialSideAxis=floating_ui_utils_getSideAxis(initialPlacement),isBasePlacement=floating_ui_utils_getSide(initialPlacement)===initialPlacement,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipAlignment?[getOppositePlacement(initialPlacement)]:function getExpandedPlacements(placement){const oppositePlacement=getOppositePlacement(placement);return[floating_ui_utils_getOppositeAlignmentPlacement(placement),oppositePlacement,floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement)]}(initialPlacement)),hasFallbackAxisSideDirection="none"!==fallbackAxisSideDirection;!specifiedFallbackPlacements&&hasFallbackAxisSideDirection&&fallbackPlacements.push(...function getOppositeAxisPlacements(placement,flipAlignment,direction,rtl){const alignment=floating_ui_utils_getAlignment(placement);let list=function getSideList(side,isStart,rtl){const lr=["left","right"],rl=["right","left"],tb=["top","bottom"],bt=["bottom","top"];switch(side){case"top":case"bottom":return rtl?isStart?rl:lr:isStart?lr:rl;case"left":case"right":return isStart?tb:bt;default:return[]}}(floating_ui_utils_getSide(placement),"start"===direction,rtl);return alignment&&(list=list.map((side=>side+"-"+alignment)),flipAlignment&&(list=list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement)))),list}(initialPlacement,flipAlignment,fallbackAxisSideDirection,rtl));const placements=[initialPlacement,...fallbackPlacements],overflow=await detectOverflow(state,detectOverflowOptions),overflows=[];let overflowsData=(null==(_middlewareData$flip=middlewareData.flip)?void 0:_middlewareData$flip.overflows)||[];if(checkMainAxis&&overflows.push(overflow[side]),checkCrossAxis){const sides=function floating_ui_utils_getAlignmentSides(placement,rects,rtl){void 0===rtl&&(rtl=!1);const alignment=floating_ui_utils_getAlignment(placement),alignmentAxis=getAlignmentAxis(placement),length=getAxisLength(alignmentAxis);let mainAlignmentSide="x"===alignmentAxis?alignment===(rtl?"end":"start")?"right":"left":"start"===alignment?"bottom":"top";return rects.reference[length]>rects.floating[length]&&(mainAlignmentSide=getOppositePlacement(mainAlignmentSide)),[mainAlignmentSide,getOppositePlacement(mainAlignmentSide)]}(placement,rects,rtl);overflows.push(overflow[sides[0]],overflow[sides[1]])}if(overflowsData=[...overflowsData,{placement,overflows}],!overflows.every((side=>side<=0))){var _middlewareData$flip2,_overflowsData$filter;const nextIndex=((null==(_middlewareData$flip2=middlewareData.flip)?void 0:_middlewareData$flip2.index)||0)+1,nextPlacement=placements[nextIndex];if(nextPlacement)return{data:{index:nextIndex,overflows:overflowsData},reset:{placement:nextPlacement}};let resetPlacement=null==(_overflowsData$filter=overflowsData.filter((d=>d.overflows[0]<=0)).sort(((a,b)=>a.overflows[1]-b.overflows[1]))[0])?void 0:_overflowsData$filter.placement;if(!resetPlacement)switch(fallbackStrategy){case"bestFit":{var _overflowsData$filter2;const placement=null==(_overflowsData$filter2=overflowsData.filter((d=>{if(hasFallbackAxisSideDirection){const currentSideAxis=floating_ui_utils_getSideAxis(d.placement);return currentSideAxis===initialSideAxis||"y"===currentSideAxis}return!0})).map((d=>[d.placement,d.overflows.filter((overflow=>overflow>0)).reduce(((acc,overflow)=>acc+overflow),0)])).sort(((a,b)=>a[1]-b[1]))[0])?void 0:_overflowsData$filter2[0];placement&&(resetPlacement=placement);break}case"initialPlacement":resetPlacement=initialPlacement}if(placement!==resetPlacement)return{reset:{placement:resetPlacement}}}return{}}}},floating_ui_dom_size=function(options){return void 0===options&&(options={}),{name:"size",options,async fn(state){var _state$middlewareData,_state$middlewareData2;const{placement,rects,platform,elements}=state,{apply=()=>{},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),overflow=await detectOverflow(state,detectOverflowOptions),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isYAxis="y"===floating_ui_utils_getSideAxis(placement),{width,height}=rects.floating;let heightSide,widthSide;"top"===side||"bottom"===side?(heightSide=side,widthSide=alignment===(await(null==platform.isRTL?void 0:platform.isRTL(elements.floating))?"start":"end")?"left":"right"):(widthSide=side,heightSide="end"===alignment?"top":"bottom");const maximumClippingHeight=height-overflow.top-overflow.bottom,maximumClippingWidth=width-overflow.left-overflow.right,overflowAvailableHeight=floating_ui_utils_min(height-overflow[heightSide],maximumClippingHeight),overflowAvailableWidth=floating_ui_utils_min(width-overflow[widthSide],maximumClippingWidth),noShift=!state.middlewareData.shift;let availableHeight=overflowAvailableHeight,availableWidth=overflowAvailableWidth;if(null!=(_state$middlewareData=state.middlewareData.shift)&&_state$middlewareData.enabled.x&&(availableWidth=maximumClippingWidth),null!=(_state$middlewareData2=state.middlewareData.shift)&&_state$middlewareData2.enabled.y&&(availableHeight=maximumClippingHeight),noShift&&!alignment){const xMin=floating_ui_utils_max(overflow.left,0),xMax=floating_ui_utils_max(overflow.right,0),yMin=floating_ui_utils_max(overflow.top,0),yMax=floating_ui_utils_max(overflow.bottom,0);isYAxis?availableWidth=width-2*(0!==xMin||0!==xMax?xMin+xMax:floating_ui_utils_max(overflow.left,overflow.right)):availableHeight=height-2*(0!==yMin||0!==yMax?yMin+yMax:floating_ui_utils_max(overflow.top,overflow.bottom))}await apply({...state,availableWidth,availableHeight});const nextDimensions=await platform.getDimensions(elements.floating);return width!==nextDimensions.width||height!==nextDimensions.height?{reset:{rects:!0}}:{}}}},floating_ui_dom_arrow=options=>({name:"arrow",options,async fn(state){const{x,y,placement,rects,platform,elements,middlewareData}=state,{element,padding=0}=floating_ui_utils_evaluate(options,state)||{};if(null==element)return{};const paddingObject=floating_ui_utils_getPaddingObject(padding),coords={x,y},axis=getAlignmentAxis(placement),length=getAxisLength(axis),arrowDimensions=await platform.getDimensions(element),isYAxis="y"===axis,minProp=isYAxis?"top":"left",maxProp=isYAxis?"bottom":"right",clientProp=isYAxis?"clientHeight":"clientWidth",endDiff=rects.reference[length]+rects.reference[axis]-coords[axis]-rects.floating[length],startDiff=coords[axis]-rects.reference[axis],arrowOffsetParent=await(null==platform.getOffsetParent?void 0:platform.getOffsetParent(element));let clientSize=arrowOffsetParent?arrowOffsetParent[clientProp]:0;clientSize&&await(null==platform.isElement?void 0:platform.isElement(arrowOffsetParent))||(clientSize=elements.floating[clientProp]||rects.floating[length]);const centerToReference=endDiff/2-startDiff/2,largestPossiblePadding=clientSize/2-arrowDimensions[length]/2-1,minPadding=floating_ui_utils_min(paddingObject[minProp],largestPossiblePadding),maxPadding=floating_ui_utils_min(paddingObject[maxProp],largestPossiblePadding),min$1=minPadding,max=clientSize-arrowDimensions[length]-maxPadding,center=clientSize/2-arrowDimensions[length]/2+centerToReference,offset=clamp(min$1,center,max),shouldAddOffset=!middlewareData.arrow&&null!=floating_ui_utils_getAlignment(placement)&&center!==offset&&rects.reference[length]/2-(center<min$1?minPadding:maxPadding)-arrowDimensions[length]/2<0,alignmentOffset=shouldAddOffset?center<min$1?center-min$1:center-max:0;return{[axis]:coords[axis]+alignmentOffset,data:{[axis]:offset,centerOffset:center-offset-alignmentOffset,...shouldAddOffset&&{alignmentOffset}},reset:shouldAddOffset}}}),floating_ui_dom_computePosition=(reference,floating,options)=>{const cache=new Map,mergedOptions={platform,...options},platformWithCache={...mergedOptions.platform,_c:cache};return(async(reference,floating,config)=>{const{placement="bottom",strategy="absolute",middleware=[],platform}=config,validMiddleware=middleware.filter(Boolean),rtl=await(null==platform.isRTL?void 0:platform.isRTL(floating));let rects=await platform.getElementRects({reference,floating,strategy}),{x,y}=computeCoordsFromPlacement(rects,placement,rtl),statefulPlacement=placement,middlewareData={},resetCount=0;for(let i=0;i<validMiddleware.length;i++){const{name,fn}=validMiddleware[i],{x:nextX,y:nextY,data,reset}=await fn({x,y,initialPlacement:placement,placement:statefulPlacement,strategy,middlewareData,rects,platform,elements:{reference,floating}});x=null!=nextX?nextX:x,y=null!=nextY?nextY:y,middlewareData={...middlewareData,[name]:{...middlewareData[name],...data}},reset&&resetCount<=50&&(resetCount++,"object"==typeof reset&&(reset.placement&&(statefulPlacement=reset.placement),reset.rects&&(rects=!0===reset.rects?await platform.getElementRects({reference,floating,strategy}):reset.rects),({x,y}=computeCoordsFromPlacement(rects,statefulPlacement,rtl))),i=-1)}return{x,y,placement:statefulPlacement,strategy,middlewareData}})(reference,floating,{...mergedOptions,platform:platformWithCache})};function e(t){return i(t)}function r(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function i(e){for(let t=e;t;t=r(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let n=r(e);n;n=r(n)){if(!(n instanceof Element))continue;const e=getComputedStyle(n);if("contents"!==e.display){if("static"!==e.position||isContainingBlock(e))return n;if("BODY"===n.tagName)return n}}return null}var SlPopup=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const anchorRect=this.anchorEl.getBoundingClientRect(),popupRect=this.popup.getBoundingClientRect();let topLeftX=0,topLeftY=0,topRightX=0,topRightY=0,bottomLeftX=0,bottomLeftY=0,bottomRightX=0,bottomRightY=0;this.placement.includes("top")||this.placement.includes("bottom")?anchorRect.top<popupRect.top?(topLeftX=anchorRect.left,topLeftY=anchorRect.bottom,topRightX=anchorRect.right,topRightY=anchorRect.bottom,bottomLeftX=popupRect.left,bottomLeftY=popupRect.top,bottomRightX=popupRect.right,bottomRightY=popupRect.top):(topLeftX=popupRect.left,topLeftY=popupRect.bottom,topRightX=popupRect.right,topRightY=popupRect.bottom,bottomLeftX=anchorRect.left,bottomLeftY=anchorRect.top,bottomRightX=anchorRect.right,bottomRightY=anchorRect.top):anchorRect.left<popupRect.left?(topLeftX=anchorRect.right,topLeftY=anchorRect.top,topRightX=popupRect.left,topRightY=popupRect.top,bottomLeftX=anchorRect.right,bottomLeftY=anchorRect.bottom,bottomRightX=popupRect.left,bottomRightY=popupRect.bottom):(topLeftX=popupRect.right,topLeftY=popupRect.top,topRightX=anchorRect.left,topRightY=anchorRect.top,bottomLeftX=popupRect.right,bottomLeftY=popupRect.bottom,bottomRightX=anchorRect.left,bottomRightY=anchorRect.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${topLeftX}px`),this.style.setProperty("--hover-bridge-top-left-y",`${topLeftY}px`),this.style.setProperty("--hover-bridge-top-right-x",`${topRightX}px`),this.style.setProperty("--hover-bridge-top-right-y",`${topRightY}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${bottomLeftX}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${bottomLeftY}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${bottomRightX}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${bottomRightY}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(changedProps){super.updated(changedProps),changedProps.has("active")&&(this.active?this.start():this.stop()),changedProps.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const root=this.getRootNode();this.anchorEl=root.getElementById(this.anchor)}else this.anchor instanceof Element||function isVirtualElement(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=autoUpdate(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((resolve=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>resolve()))):resolve()}))}reposition(){if(!this.active||!this.anchorEl)return;const middleware=[floating_ui_dom_offset({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?middleware.push(floating_ui_dom_size({apply:({rects})=>{const syncWidth="width"===this.sync||"both"===this.sync,syncHeight="height"===this.sync||"both"===this.sync;this.popup.style.width=syncWidth?`${rects.reference.width}px`:"",this.popup.style.height=syncHeight?`${rects.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&middleware.push(floating_ui_dom_flip({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&middleware.push(floating_ui_dom_shift({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?middleware.push(floating_ui_dom_size({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth,availableHeight})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${availableHeight}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${availableWidth}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&middleware.push(floating_ui_dom_arrow({element:this.arrowEl,padding:this.arrowPadding}));const getOffsetParent="absolute"===this.strategy?element=>platform.getOffsetParent(element,e):platform.getOffsetParent;floating_ui_dom_computePosition(this.anchorEl,this.popup,{placement:this.placement,middleware,strategy:this.strategy,platform:(0,chunk_KAW7D32O.ko)((0,chunk_KAW7D32O.IA)({},platform),{getOffsetParent})}).then((({x,y,middlewareData,placement})=>{const isRtl="rtl"===this.localize.dir(),staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]];if(this.setAttribute("data-current-placement",placement),Object.assign(this.popup.style,{left:`${x}px`,top:`${y}px`}),this.arrow){const arrowX=middlewareData.arrow.x,arrowY=middlewareData.arrow.y;let top="",right="",bottom="",left="";if("start"===this.arrowPlacement){const value="number"==typeof arrowX?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";top="number"==typeof arrowY?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",right=isRtl?value:"",left=isRtl?"":value}else if("end"===this.arrowPlacement){const value="number"==typeof arrowX?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";right=isRtl?"":value,left=isRtl?value:"",bottom="number"==typeof arrowY?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(left="number"==typeof arrowX?"calc(50% - var(--arrow-size-diagonal))":"",top="number"==typeof arrowY?"calc(50% - var(--arrow-size-diagonal))":""):(left="number"==typeof arrowX?`${arrowX}px`:"",top="number"==typeof arrowY?`${arrowY}px`:"");Object.assign(this.arrowEl.style,{top,right,bottom,left,[staticSide]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return lit.qy`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${(0,class_map.H)({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${(0,class_map.H)({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?lit.qy`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};SlPopup.styles=[chunk_TUVJKY7S.$,popup_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".popup")],SlPopup.prototype,"popup",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".popup__arrow")],SlPopup.prototype,"arrowEl",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],SlPopup.prototype,"anchor",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],SlPopup.prototype,"active",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],SlPopup.prototype,"placement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],SlPopup.prototype,"strategy",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],SlPopup.prototype,"distance",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],SlPopup.prototype,"skidding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],SlPopup.prototype,"arrow",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"arrow-placement"})],SlPopup.prototype,"arrowPlacement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"arrow-padding",type:Number})],SlPopup.prototype,"arrowPadding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],SlPopup.prototype,"flip",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"flip-fallback-placements",converter:{fromAttribute:value=>value.split(" ").map((p=>p.trim())).filter((p=>""!==p)),toAttribute:value=>value.join(" ")}})],SlPopup.prototype,"flipFallbackPlacements",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"flip-fallback-strategy"})],SlPopup.prototype,"flipFallbackStrategy",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Object})],SlPopup.prototype,"flipBoundary",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"flip-padding",type:Number})],SlPopup.prototype,"flipPadding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],SlPopup.prototype,"shift",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Object})],SlPopup.prototype,"shiftBoundary",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"shift-padding",type:Number})],SlPopup.prototype,"shiftPadding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"auto-size"})],SlPopup.prototype,"autoSize",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],SlPopup.prototype,"sync",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Object})],SlPopup.prototype,"autoSizeBoundary",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"auto-size-padding",type:Number})],SlPopup.prototype,"autoSizePadding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"hover-bridge",type:Boolean})],SlPopup.prototype,"hoverBridge",2);var chunk_3RPBFEDE=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js"),chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),unsafe_html=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),chunk_7BBVTMGQ_SlSelect=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.formControlController=new chunk_3RPBFEDE.Ud(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new chunk_NYIIDP5N.X(this,"help-text","label"),this.localize=new chunk_6CTB5ZDJ.c(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=option=>lit.qy`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${event=>this.handleTagRemove(event,option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()},this.handleDocumentKeyDown=event=>{const target=event.target,isClearButton=null!==target.closest(".select__clear"),isIconButton=null!==target.closest("sl-icon-button");if(!isClearButton&&!isIconButton){if("Escape"===event.key&&this.open&&!this.closeWatcher&&(event.preventDefault(),event.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===event.key||" "===event.key&&""===this.typeToSelectString)return event.preventDefault(),event.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(event.key)){const allOptions=this.getAllOptions(),currentIndex=allOptions.indexOf(this.currentOption);let newIndex=Math.max(0,currentIndex);if(event.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===event.key?(newIndex=currentIndex+1,newIndex>allOptions.length-1&&(newIndex=0)):"ArrowUp"===event.key?(newIndex=currentIndex-1,newIndex<0&&(newIndex=allOptions.length-1)):"Home"===event.key?newIndex=0:"End"===event.key&&(newIndex=allOptions.length-1),this.setCurrentOption(allOptions[newIndex])}if(event.key&&1===event.key.length||"Backspace"===event.key){const allOptions=this.getAllOptions();if(event.metaKey||event.ctrlKey||event.altKey)return;if(!this.open){if("Backspace"===event.key)return;this.show()}event.stopPropagation(),event.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===event.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=event.key.toLowerCase();for(const option of allOptions){if(option.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(option);break}}}}},this.handleDocumentMouseDown=event=>{const path=event.composedPath();this&&!path.includes(this)&&this.hide()}}get value(){return this._value}set value(val){val=this.multiple?Array.isArray(val)?val:val.split(" "):Array.isArray(val)?val.join(" "):val,this._value!==val&&(this.valueHasChanged=!0,this._value=val)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.handleDefaultSlotChange()})),this.open=!1}addOpenListeners(){var _a;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(_a=this.closeWatcher)||_a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var _a;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(_a=this.closeWatcher)||_a.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(event){const isIconButton=event.composedPath().some((el=>el instanceof Element&&"sl-icon-button"===el.tagName.toLowerCase()));this.disabled||isIconButton||(event.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(event){"Tab"!==event.key&&(event.stopPropagation(),this.handleDocumentKeyDown(event))}handleClearClick(event){event.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")})))}handleClearMouseDown(event){event.stopPropagation(),event.preventDefault()}handleOptionClick(event){const option=event.target.closest("sl-option"),oldValue=this.value;option&&!option.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(option):this.setSelectedOptions(option),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.value!==oldValue&&this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then((()=>this.handleDefaultSlotChange()));const allOptions=this.getAllOptions(),val=this.valueHasChanged?this.value:this.defaultValue,value=Array.isArray(val)?val:[val],values=[];allOptions.forEach((option=>values.push(option.value))),this.setSelectedOptions(allOptions.filter((el=>value.includes(el.value))))}handleTagRemove(event,option){event.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(option,!1),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(option){this.getAllOptions().forEach((el=>{el.current=!1,el.tabIndex=-1})),option&&(this.currentOption=option,option.current=!0,option.tabIndex=0,option.focus())}setSelectedOptions(option){const allOptions=this.getAllOptions(),newSelectedOptions=Array.isArray(option)?option:[option];allOptions.forEach((el=>el.selected=!1)),newSelectedOptions.length&&newSelectedOptions.forEach((el=>el.selected=!0)),this.selectionChanged()}toggleOptionSelection(option,force){option.selected=!0===force||!1===force?force:!option.selected,this.selectionChanged()}selectionChanged(){var _a,_b,_c;const options=this.getAllOptions();this.selectedOptions=options.filter((el=>el.selected));const cachedValueHasChanged=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map((el=>el.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const selectedOption=this.selectedOptions[0];this.value=null!=(_a=null==selectedOption?void 0:selectedOption.value)?_a:"",this.displayLabel=null!=(_c=null==(_b=null==selectedOption?void 0:selectedOption.getTextLabel)?void 0:_b.call(selectedOption))?_c:""}this.valueHasChanged=cachedValueHasChanged,this.updateComplete.then((()=>{this.formControlController.updateValidity()}))}get tags(){return this.selectedOptions.map(((option,index)=>{if(index<this.maxOptionsVisible||this.maxOptionsVisible<=0){const tag=this.getTag(option,index);return lit.qy`<div @sl-remove=${e=>this.handleTagRemove(e,option)}>
          ${"string"==typeof tag?(0,unsafe_html._)(tag):tag}
        </div>`}return index===this.maxOptionsVisible?lit.qy`<sl-tag size=${this.size}>+${this.selectedOptions.length-index}</sl-tag>`:lit.qy``}))}handleInvalid(event){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(event)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(name,oldVal,newVal){if(super.attributeChangedCallback(name,oldVal,newVal),"value"===name){const cachedValueHasChanged=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=cachedValueHasChanged}}handleValueChange(){if(!this.valueHasChanged){const cachedValueHasChanged=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=cachedValueHasChanged}const allOptions=this.getAllOptions(),value=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(allOptions.filter((el=>value.includes(el.value))))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await(0,chunk_AJ3ENQ5C.Ey)(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)}));const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"select.show",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.currentOption&&(0,chunk_RWUUFNUL.Rt)(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,chunk_AJ3ENQ5C.Ey)(this);const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"select.hide",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(message){this.valueInput.setCustomValidity(message),this.formControlController.updateValidity()}focus(options){this.displayInput.focus(options)}blur(){this.displayInput.blur()}render(){const hasLabelSlot=this.hasSlotController.test("label"),hasHelpTextSlot=this.hasSlotController.test("help-text"),hasLabel=!!this.label||!!hasLabelSlot,hasHelpText=!!this.helpText||!!hasHelpTextSlot,hasClearIcon=this.clearable&&!this.disabled&&this.value.length>0,isPlaceholderVisible=this.placeholder&&this.value&&this.value.length<=0;return lit.qy`
      <div
        part="form-control"
        class=${(0,class_map.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":hasLabel,"form-control--has-help-text":hasHelpText})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${(0,class_map.H)({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":isPlaceholderVisible,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?lit.qy`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon?lit.qy`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};chunk_7BBVTMGQ_SlSelect.styles=[chunk_TUVJKY7S.$,chunk_SI4ACBFK.I,select_styles_default],chunk_7BBVTMGQ_SlSelect.dependencies={"sl-icon":chunk_4GJTAPTW.B,"sl-popup":SlPopup,"sl-tag":SlTag},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".select")],chunk_7BBVTMGQ_SlSelect.prototype,"popup",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".select__combobox")],chunk_7BBVTMGQ_SlSelect.prototype,"combobox",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".select__display-input")],chunk_7BBVTMGQ_SlSelect.prototype,"displayInput",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".select__value-input")],chunk_7BBVTMGQ_SlSelect.prototype,"valueInput",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".select__listbox")],chunk_7BBVTMGQ_SlSelect.prototype,"listbox",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"hasFocus",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"displayLabel",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"currentOption",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"selectedOptions",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"valueHasChanged",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_7BBVTMGQ_SlSelect.prototype,"name",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_7BBVTMGQ_SlSelect.prototype,"value",1),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"value"})],chunk_7BBVTMGQ_SlSelect.prototype,"defaultValue",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"size",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_7BBVTMGQ_SlSelect.prototype,"placeholder",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"multiple",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"max-options-visible",type:Number})],chunk_7BBVTMGQ_SlSelect.prototype,"maxOptionsVisible",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],chunk_7BBVTMGQ_SlSelect.prototype,"clearable",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],chunk_7BBVTMGQ_SlSelect.prototype,"hoist",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"filled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"pill",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_7BBVTMGQ_SlSelect.prototype,"label",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"placement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"help-text"})],chunk_7BBVTMGQ_SlSelect.prototype,"helpText",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"form",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"required",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_7BBVTMGQ_SlSelect.prototype,"getTag",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("disabled",{waitUntilFirstUpdate:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"handleDisabledChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)(["defaultValue","value"],{waitUntilFirstUpdate:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"handleValueChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_7BBVTMGQ_SlSelect.prototype,"handleOpenChange",1),(0,chunk_K7JGTRV7.Ee)("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});chunk_7BBVTMGQ_SlSelect.define("sl-select");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js")},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive.u$)(e)},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>u,eu:()=>i});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u}return t(r,...e)},u=n(lit_html.qy);n(lit_html.JW),n(lit_html.ej)}}]);
//# sourceMappingURL=829.cde0cadc.iframe.bundle.js.map