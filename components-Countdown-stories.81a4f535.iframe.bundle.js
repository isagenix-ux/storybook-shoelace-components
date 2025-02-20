/*! For license information please see components-Countdown-stories.81a4f535.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[785],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>HasSlotController});var HasSlotController=class{constructor(host,...slotNames){this.slotNames=[],this.handleSlotChange=event=>{const slot=event.target;(this.slotNames.includes("[default]")&&!slot.name||slot.name&&this.slotNames.includes(slot.name))&&this.host.requestUpdate()},(this.host=host).addController(this),this.slotNames=slotNames}hasDefaultSlot(){return[...this.host.childNodes].some((node=>{if(node.nodeType===node.TEXT_NODE&&""!==node.textContent.trim())return!0;if(node.nodeType===node.ELEMENT_NODE){const el=node;if("sl-visually-hidden"===el.tagName.toLowerCase())return!1;if(!el.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(name){return null!==this.host.querySelector(`:scope > [slot="${name}"]`)}test(slotName){return"[default]"===slotName?this.hasDefaultSlot():this.hasNamedSlot(slotName)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ShoelaceElement});var _hasRecordedInitialProperties,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/decorators.js"),ShoelaceElement=class extends lit__WEBPACK_IMPORTED_MODULE_1__.WF{constructor(){super(),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_hasRecordedInitialProperties,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([name,component])=>{this.constructor.define(name,component)}))}emit(name,options){const event=new CustomEvent(name,(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({bubbles:!0,cancelable:!1,composed:!0,detail:{}},options));return this.dispatchEvent(event),event}static define(name,elementConstructor=this,options={}){const currentlyRegisteredConstructor=customElements.get(name);if(!currentlyRegisteredConstructor){try{customElements.define(name,elementConstructor,options)}catch(_err){customElements.define(name,class extends elementConstructor{},options)}return}let newVersion=" (unknown version)",existingVersion=newVersion;"version"in elementConstructor&&elementConstructor.version&&(newVersion=" v"+elementConstructor.version),"version"in currentlyRegisteredConstructor&&currentlyRegisteredConstructor.version&&(existingVersion=" v"+currentlyRegisteredConstructor.version),newVersion&&existingVersion&&newVersion===existingVersion||console.warn(`Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`)}attributeChangedCallback(name,oldValue,newValue){(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_hasRecordedInitialProperties)||(this.constructor.elementProperties.forEach(((obj,prop)=>{obj.reflect&&null!=this[prop]&&this.initialReflectedProperties.set(prop,this[prop])})),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.OV)(this,_hasRecordedInitialProperties,!0)),super.attributeChangedCallback(name,oldValue,newValue)}willUpdate(changedProperties){super.willUpdate(changedProperties),this.initialReflectedProperties.forEach(((value,prop)=>{changedProperties.has(prop)&&null==this[prop]&&(this[prop]=value)}))}};_hasRecordedInitialProperties=new WeakMap,ShoelaceElement.version="2.20.0",ShoelaceElement.dependencies={},(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.MZ)()],ShoelaceElement.prototype,"dir",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.MZ)()],ShoelaceElement.prototype,"lang",2)},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>component_styles_default});var component_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`},"./node_modules/@shoelace-style/shoelace/dist/components/card/card.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),card_styles_default=lit.AH`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),chunk_YUOHZV33_SlCard=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.hasSlotController=new chunk_NYIIDP5N.X(this,"footer","header","image")}render(){return lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};chunk_YUOHZV33_SlCard.styles=[chunk_TUVJKY7S.$,card_styles_default];chunk_YUOHZV33_SlCard.define("sl-card");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ls:()=>t,MZ:()=>n,P:()=>e,wk:()=>state_r});var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.W3,reflect:!1,hasChanged:reactive_element.Ec},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}function t(t){return(n,o)=>{const c="function"==typeof n?n:n[o];Object.assign(c,t)}}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>e});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const e=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html.c0}})},"./stories/components/Countdown.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlmostDone:()=>AlmostDone,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/card/card.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Countdown",tags:["autodocs"],render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 800px;">
      <div class="weekly-info">
        <h2>Weekly Information</h2>
        <p>Your weekly commission details and updates go here.</p>
      </div>

      <div class="countdown-container" style="text-align: right;">
        <h3 style="margin: 0; font-size: 16px; color: #666;">Commission week ends in:</h3>
        <div style="font-size: 48px; font-weight: bold; line-height: 1;">
          ${args.days}:${args.hours}:${args.minutes}
        </div>
        <div style="display: flex; gap: 20px; justify-content: flex-end; color: #666;">
          <span style="width: 65px">DAYS</span>
          <span style="width: 65px">HOURS</span>
          <span style="width: 65px">MINUTES</span>
        </div>
        <div style="margin-top: 8px; color: #666; font-size: 14px;">
          Pacific Time (Los Angeles): ${args.currentTime}
        </div>
      </div>
    </div>
  `,argTypes:{days:{control:"text"},hours:{control:"text"},minutes:{control:"text"},currentTime:{control:"text"}}},Default={args:{days:"04",hours:"08",minutes:"32",currentTime:"Feb-09-2025 6:40 PM"}},AlmostDone={args:{days:"00",hours:"02",minutes:"15",currentTime:"Feb-09-2025 6:40 PM"}},__namedExportsOrder=["Default","AlmostDone"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    days: '04',\n    hours: '08',\n    minutes: '32',\n    currentTime: 'Feb-09-2025 6:40 PM'\n  }\n}",...Default.parameters?.docs?.source}}},AlmostDone.parameters={...AlmostDone.parameters,docs:{...AlmostDone.parameters?.docs,source:{originalSource:"{\n  args: {\n    days: '00',\n    hours: '02',\n    minutes: '15',\n    currentTime: 'Feb-09-2025 6:40 PM'\n  }\n}",...AlmostDone.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Countdown-stories.81a4f535.iframe.bundle.js.map