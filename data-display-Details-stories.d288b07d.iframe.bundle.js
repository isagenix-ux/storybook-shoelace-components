"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[615],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E9:()=>parseDuration,Ey:()=>stopAnimations,dc:()=>shimKeyframesHeightAuto,jd:()=>animateTo});var _chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js");function animateTo(el,keyframes,options){return new Promise((resolve=>{if((null==options?void 0:options.duration)===1/0)throw new Error("Promise-based animations must be finite.");const animation=el.animate(keyframes,(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},options),{duration:prefersReducedMotion()?0:options.duration}));animation.addEventListener("cancel",resolve,{once:!0}),animation.addEventListener("finish",resolve,{once:!0})}))}function parseDuration(delay){return(delay=delay.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(delay):delay.indexOf("s")>-1?1e3*parseFloat(delay):parseFloat(delay)}function prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function stopAnimations(el){return Promise.all(el.getAnimations().map((animation=>new Promise((resolve=>{animation.cancel(),requestAnimationFrame(resolve)})))))}function shimKeyframesHeightAuto(keyframes,calculatedHeight){return keyframes.map((keyframe=>(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},keyframe),{height:"auto"===keyframe.height?`${calculatedHeight}px`:keyframe.height})))}},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function waitForEvent(el,eventName){return new Promise((resolve=>{el.addEventListener(eventName,(function done(event){event.target===el&&(el.removeEventListener(eventName,done),resolve())}))}))}__webpack_require__.d(__webpack_exports__,{l:()=>waitForEvent})},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ee:()=>setDefaultAnimation,RB:()=>getAnimation});__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js");var defaultAnimationRegistry=new Map,customAnimationRegistry=new WeakMap;function ensureAnimation(animation){return null!=animation?animation:{keyframes:[],options:{duration:0}}}function getLogicalAnimation(animation,dir){return"rtl"===dir.toLowerCase()?{keyframes:animation.rtlKeyframes||animation.keyframes,options:animation.options}:animation}function setDefaultAnimation(animationName,animation){defaultAnimationRegistry.set(animationName,ensureAnimation(animation))}function getAnimation(el,animationName,options){const customAnimation=customAnimationRegistry.get(el);if(null==customAnimation?void 0:customAnimation[animationName])return getLogicalAnimation(customAnimation[animationName],options.dir);const defaultAnimation=defaultAnimationRegistry.get(animationName);return defaultAnimation?getLogicalAnimation(defaultAnimation,options.dir):{keyframes:[],options:{duration:0}}}},"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./stories/data-display/Details.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomIcons:()=>CustomIcons,DetailsGroup:()=>DetailsGroup,Disabled:()=>Disabled,OpenByDefault:()=>OpenByDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Details_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),details_styles_default=lit.AH`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_2OJZ4GYU_SlDetails=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver((changes=>{for(const change of changes)"attributes"===change.type&&"open"===change.attributeName&&(this.details.open?this.show():this.hide())})),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var _a;super.disconnectedCallback(),null==(_a=this.detailsObserver)||_a.disconnect()}handleSummaryClick(event){event.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(event){"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==event.key&&"ArrowLeft"!==event.key||(event.preventDefault(),this.hide()),"ArrowDown"!==event.key&&"ArrowRight"!==event.key||(event.preventDefault(),this.show())}async handleOpenChange(){if(this.open){this.details.open=!0;if(this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await(0,chunk_AJ3ENQ5C.Ey)(this.body);const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"details.show",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.body,(0,chunk_AJ3ENQ5C.dc)(keyframes,this.body.scrollHeight),options),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await(0,chunk_AJ3ENQ5C.Ey)(this.body);const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"details.hide",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.body,(0,chunk_AJ3ENQ5C.dc)(keyframes,this.body.scrollHeight),options),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide")}render(){const isRtl="rtl"===this.localize.dir();return lit.qy`
      <details
        part="base"
        class=${(0,class_map.H)({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":isRtl})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};chunk_2OJZ4GYU_SlDetails.styles=[chunk_TUVJKY7S.$,details_styles_default],chunk_2OJZ4GYU_SlDetails.dependencies={"sl-icon":chunk_4GJTAPTW.B},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".details")],chunk_2OJZ4GYU_SlDetails.prototype,"details",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".details__header")],chunk_2OJZ4GYU_SlDetails.prototype,"header",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".details__body")],chunk_2OJZ4GYU_SlDetails.prototype,"body",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".details__expand-icon-slot")],chunk_2OJZ4GYU_SlDetails.prototype,"expandIconSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_2OJZ4GYU_SlDetails.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_2OJZ4GYU_SlDetails.prototype,"summary",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_2OJZ4GYU_SlDetails.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_2OJZ4GYU_SlDetails.prototype,"handleOpenChange",1),(0,chunk_K7JGTRV7.Ee)("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),(0,chunk_K7JGTRV7.Ee)("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});chunk_2OJZ4GYU_SlDetails.define("sl-details");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js");const Details_stories={title:"Shoelace/Data Display/Details",tags:["autodocs"],render:args=>lit.qy`
    <sl-details
      summary=${args.summary}
      ?open=${args.open}
      ?disabled=${args.disabled}
    >
      ${args.customIcons?lit.qy`
        <sl-icon name="plus-square" slot="expand-icon"></sl-icon>
        <sl-icon name="dash-square" slot="collapse-icon"></sl-icon>
      `:""}
      ${args.content}
    </sl-details>
  `,argTypes:{summary:{control:"text",description:"The summary to show in the header"},open:{control:"boolean",description:"Indicates whether the details is open"},disabled:{control:"boolean",description:"Disables the details so it can't be toggled"},customIcons:{control:"boolean",description:"Use custom expand/collapse icons"},content:{control:"text",description:"The details content"}}},Basic={args:{summary:"Toggle Me",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},OpenByDefault={args:{summary:"Toggle Me",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",open:!0}},Disabled={args:{summary:"Disabled",content:"This content cannot be shown because the details element is disabled.",disabled:!0}},CustomIcons={args:{summary:"Toggle Me",content:"This details element uses custom expand and collapse icons.",customIcons:!0}},DetailsGroup={render:()=>lit.qy`
      <div @sl-show=${event=>{if("sl-details"===event.target.tagName.toLowerCase()){event.target.parentElement.querySelectorAll("sl-details").forEach((d=>{d.open=d===event.target}))}}} style="display: flex; flex-direction: column; gap: var(--sl-spacing-2x-small);">
        <sl-details summary="First" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>

        <sl-details summary="Second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>

        <sl-details summary="Third">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </sl-details>
      </div>
    `},__namedExportsOrder=["Basic","OpenByDefault","Disabled","CustomIcons","DetailsGroup"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    summary: 'Toggle Me',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n  }\n}",...Basic.parameters?.docs?.source}}},OpenByDefault.parameters={...OpenByDefault.parameters,docs:{...OpenByDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    summary: 'Toggle Me',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',\n    open: true\n  }\n}",...OpenByDefault.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    summary: 'Disabled',\n    content: 'This content cannot be shown because the details element is disabled.',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomIcons.parameters={...CustomIcons.parameters,docs:{...CustomIcons.parameters?.docs,source:{originalSource:"{\n  args: {\n    summary: 'Toggle Me',\n    content: 'This details element uses custom expand and collapse icons.',\n    customIcons: true\n  }\n}",...CustomIcons.parameters?.docs?.source}}},DetailsGroup.parameters={...DetailsGroup.parameters,docs:{...DetailsGroup.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    // Handle showing only one details at a time\n    const handleShow = event => {\n      if (event.target.tagName.toLowerCase() === \'sl-details\') {\n        const details = event.target.parentElement.querySelectorAll(\'sl-details\');\n        details.forEach(d => {\n          d.open = d === event.target;\n        });\n      }\n    };\n    return html`\n      <div @sl-show=${handleShow} style="display: flex; flex-direction: column; gap: var(--sl-spacing-2x-small);">\n        <sl-details summary="First" open>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </sl-details>\n\n        <sl-details summary="Second">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </sl-details>\n\n        <sl-details summary="Third">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </sl-details>\n      </div>\n    `;\n  }\n}',...DetailsGroup.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=data-display-Details-stories.d288b07d.iframe.bundle.js.map