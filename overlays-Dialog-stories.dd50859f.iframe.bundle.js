/*! For license information please see overlays-Dialog-stories.dd50859f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[802],{"./node_modules/@shoelace-style/shoelace/dist/components/rating/rating.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),rating_styles_default=lit.AH`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;var chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),style_map=__webpack_require__("./node_modules/lit/directives/style-map.js"),unsafe_html=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),chunk_SEJYSI7P_SlRating=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(event){return this.getValueFromXCoordinate(event.clientX)}getValueFromTouchPosition(event){return this.getValueFromXCoordinate(event.touches[0].clientX)}getValueFromXCoordinate(coordinate){const isRtl="rtl"===this.localize.dir(),{left,right,width}=this.rating.getBoundingClientRect();return function clamp(value,min,max){return n=value<min?min:value>max?max:value,Object.is(n,-0)?0:n;var n}(isRtl?this.roundToPrecision((right-coordinate)/width*this.max,this.precision):this.roundToPrecision((coordinate-left)/width*this.max,this.precision),0,this.max)}handleClick(event){this.disabled||(this.setValue(this.getValueFromMousePosition(event)),this.emit("sl-change"))}setValue(newValue){this.disabled||this.readonly||(this.value=newValue===this.value?0:newValue,this.isHovering=!1)}handleKeyDown(event){const isLtr="ltr"===this.localize.dir(),isRtl="rtl"===this.localize.dir(),oldValue=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===event.key||isLtr&&"ArrowLeft"===event.key||isRtl&&"ArrowRight"===event.key){const decrement=event.shiftKey?1:this.precision;this.value=Math.max(0,this.value-decrement),event.preventDefault()}if("ArrowUp"===event.key||isLtr&&"ArrowRight"===event.key||isRtl&&"ArrowLeft"===event.key){const increment=event.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+increment),event.preventDefault()}"Home"===event.key&&(this.value=0,event.preventDefault()),"End"===event.key&&(this.value=this.max,event.preventDefault()),this.value!==oldValue&&this.emit("sl-change")}}handleMouseEnter(event){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(event)}handleMouseMove(event){this.hoverValue=this.getValueFromMousePosition(event)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(event){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(event),event.preventDefault()}handleTouchMove(event){this.hoverValue=this.getValueFromTouchPosition(event)}handleTouchEnd(event){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),event.preventDefault()}roundToPrecision(numberToRound,precision=.5){const multiplier=1/precision;return Math.ceil(numberToRound*multiplier)/multiplier}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(options){this.rating.focus(options)}blur(){this.rating.blur()}render(){const isRtl="rtl"===this.localize.dir(),counter=Array.from(Array(this.max).keys());let displayValue=0;return displayValue=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":isRtl})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${counter.map((index=>displayValue>index&&displayValue<index+1?lit.qy`
                <span
                  class=${(0,class_map.H)({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(displayValue)===index+1})}
                  role="presentation"
                >
                  <div
                    style=${(0,style_map.W)({clipPath:isRtl?`inset(0 ${100*(displayValue-index)}% 0 0)`:`inset(0 0 0 ${100*(displayValue-index)}%)`})}
                  >
                    ${(0,unsafe_html._)(this.getSymbol(index+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${(0,style_map.W)({clipPath:isRtl?`inset(0 0 0 ${100-100*(displayValue-index)}%)`:`inset(0 ${100-100*(displayValue-index)}% 0 0)`})}
                  >
                    ${(0,unsafe_html._)(this.getSymbol(index+1))}
                  </div>
                </span>
              `:lit.qy`
              <span
                class=${(0,class_map.H)({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(displayValue)===index+1,"rating__symbol--active":displayValue>=index+1})}
                role="presentation"
              >
                ${(0,unsafe_html._)(this.getSymbol(index+1))}
              </span>
            `))}
        </span>
      </div>
    `}};chunk_SEJYSI7P_SlRating.styles=[chunk_TUVJKY7S.$,rating_styles_default],chunk_SEJYSI7P_SlRating.dependencies={"sl-icon":chunk_4GJTAPTW.B},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".rating")],chunk_SEJYSI7P_SlRating.prototype,"rating",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_SEJYSI7P_SlRating.prototype,"hoverValue",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_SEJYSI7P_SlRating.prototype,"isHovering",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_SEJYSI7P_SlRating.prototype,"label",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_SEJYSI7P_SlRating.prototype,"value",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_SEJYSI7P_SlRating.prototype,"max",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_SEJYSI7P_SlRating.prototype,"precision",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_SEJYSI7P_SlRating.prototype,"readonly",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_SEJYSI7P_SlRating.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_SEJYSI7P_SlRating.prototype,"getSymbol",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.Ls)({passive:!0})],chunk_SEJYSI7P_SlRating.prototype,"handleTouchMove",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("hoverValue")],chunk_SEJYSI7P_SlRating.prototype,"handleHoverValueChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("isHovering")],chunk_SEJYSI7P_SlRating.prototype,"handleIsHoveringChange",1);chunk_SEJYSI7P_SlRating.define("sl-rating");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js")},"./node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const n="important",i=" !"+n,o=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html.c0}})},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive.u$)(e)},"./stories/overlays/Dialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Complex:()=>Complex,CustomWidth:()=>CustomWidth,Scrolling:()=>Scrolling,WithAutofocus:()=>WithAutofocus,WithHeaderActions:()=>WithHeaderActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),chunk_P22EBAVT=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P22EBAVT.js"),chunk_RWUUFNUL=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js"),dialog_styles_default=lit.AH`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,chunk_HLJ2JR6P=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js"),chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_HFKQKKMR_SlDialog=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.hasSlotController=new chunk_NYIIDP5N.X(this,"footer"),this.localize=new chunk_6CTB5ZDJ.c(this),this.modal=new chunk_P22EBAVT.a(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=event=>{"Escape"===event.key&&this.modal.isActive()&&this.open&&(event.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,chunk_RWUUFNUL.JG)(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),(0,chunk_RWUUFNUL.I7)(this),this.removeOpenListeners()}requestClose(source){if(this.emit("sl-request-close",{cancelable:!0,detail:{source}}).defaultPrevented){const animation=(0,chunk_K7JGTRV7.RB)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,chunk_AJ3ENQ5C.jd)(this.panel,animation.keyframes,animation.options)}else this.hide()}addOpenListeners(){var _a;"CloseWatcher"in window?(null==(_a=this.closeWatcher)||_a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var _a;null==(_a=this.closeWatcher)||_a.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,chunk_RWUUFNUL.JG)(this);const autoFocusTarget=this.querySelector("[autofocus]");autoFocusTarget&&autoFocusTarget.removeAttribute("autofocus"),await Promise.all([(0,chunk_AJ3ENQ5C.Ey)(this.dialog),(0,chunk_AJ3ENQ5C.Ey)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(autoFocusTarget?autoFocusTarget.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),autoFocusTarget&&autoFocusTarget.setAttribute("autofocus","")}));const panelAnimation=(0,chunk_K7JGTRV7.RB)(this,"dialog.show",{dir:this.localize.dir()}),overlayAnimation=(0,chunk_K7JGTRV7.RB)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,chunk_AJ3ENQ5C.jd)(this.panel,panelAnimation.keyframes,panelAnimation.options),(0,chunk_AJ3ENQ5C.jd)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,chunk_AJ3ENQ5C.Ey)(this.dialog),(0,chunk_AJ3ENQ5C.Ey)(this.overlay)]);const panelAnimation=(0,chunk_K7JGTRV7.RB)(this,"dialog.hide",{dir:this.localize.dir()}),overlayAnimation=(0,chunk_K7JGTRV7.RB)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,chunk_AJ3ENQ5C.jd)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options).then((()=>{this.overlay.hidden=!0})),(0,chunk_AJ3ENQ5C.jd)(this.panel,panelAnimation.keyframes,panelAnimation.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,chunk_RWUUFNUL.I7)(this);const trigger=this.originalTrigger;"function"==typeof(null==trigger?void 0:trigger.focus)&&setTimeout((()=>trigger.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide")}render(){return lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,if_defined.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,if_defined.J)(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":lit.qy`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};chunk_HFKQKKMR_SlDialog.styles=[chunk_TUVJKY7S.$,dialog_styles_default],chunk_HFKQKKMR_SlDialog.dependencies={"sl-icon-button":chunk_HLJ2JR6P.h},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dialog")],chunk_HFKQKKMR_SlDialog.prototype,"dialog",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dialog__panel")],chunk_HFKQKKMR_SlDialog.prototype,"panel",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dialog__overlay")],chunk_HFKQKKMR_SlDialog.prototype,"overlay",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_HFKQKKMR_SlDialog.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_HFKQKKMR_SlDialog.prototype,"label",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],chunk_HFKQKKMR_SlDialog.prototype,"noHeader",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_HFKQKKMR_SlDialog.prototype,"handleOpenChange",1),(0,chunk_K7JGTRV7.Ee)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,chunk_K7JGTRV7.Ee)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,chunk_K7JGTRV7.Ee)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});chunk_HFKQKKMR_SlDialog.define("sl-dialog");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OSU5LOVZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/input/input.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/rating/rating.js");const Dialog_stories={title:"Shoelace/Overlays/Dialog",tags:["autodocs"],render:args=>lit.qy`
      <div style="min-height: 300px; position: relative;">
        <sl-dialog 
          label=${args.label}
          ?no-header=${args.noHeader}
          style=${args.customWidth?"--width: 50vw;":""}
        >
          ${args.headerActions?lit.qy`
            <sl-icon-button
              slot="header-actions"
              name="box-arrow-up-right"
              label="Open in new window"
            ></sl-icon-button>
          `:""}

          ${args.content}
          
          <div slot="footer">
            ${"string"==typeof args.footer?lit.qy`<sl-button variant="primary" @click=${e=>{e.target.closest("sl-dialog").hide()}}>Close</sl-button>`:args.footer}
          </div>
        </sl-dialog>

        <sl-button @click=${e=>{e.target.parentElement.querySelector("sl-dialog").show()}}>Open Dialog</sl-button>
      </div>
    `,argTypes:{label:{control:"text",description:"The dialog title",table:{type:{summary:"string"},defaultValue:{summary:"Dialog"}}},noHeader:{control:"boolean",description:"Removes the header. This will also remove the default close button.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},content:{control:"text",description:"The dialog content",table:{type:{summary:"string | TemplateResult"}}},headerActions:{control:"boolean",description:"Shows additional actions in the header",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},customWidth:{control:"boolean",description:"Sets a custom width for the dialog",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},footer:{control:"text"}},parameters:{docs:{description:{component:'\n          Dialogs, sometimes called "modals", appear above the page and require the user\'s immediate attention.\n          \n          Use dialogs for:\n          - Displaying important information\n          - Getting confirmation before a destructive action\n          - Complex forms or settings that deserve their own page\n        '},canvas:{sourceState:"hidden"}},layout:"padded",controls:{sort:"requiredFirst"}}},Basic={args:{label:"Dialog",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},CustomWidth={args:{label:"Dialog",content:"This dialog is wider than the default.",customWidth:!0}},WithHeaderActions={args:{label:"Dialog",headerActions:!0,content:"This dialog has an additional action in the header."}},Scrolling={args:{label:"Dialog",content:lit.qy`
      <div style="height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;">
        <p>Scroll down and give it a try! 👇</p>
      </div>
    `}},WithAutofocus={args:{label:"Dialog",content:lit.qy`
      <sl-input autofocus placeholder="I will have focus when the dialog is opened"></sl-input>
    `}},Complex={args:{label:"Dialog",content:lit.qy`
      <sl-rating></sl-rating>
      <br><br>
      This is a more complex dialog that demonstrates some of the advanced features and components working together.
      <br><br>
      <sl-input placeholder="Type something"></sl-input>
    `,footer:lit.qy`
      <sl-button variant="neutral" @click=${e=>e.target.closest("sl-dialog").hide()}>Cancel</sl-button>
      <sl-button variant="primary" @click=${e=>e.target.closest("sl-dialog").hide()}>Save</sl-button>
    `}},__namedExportsOrder=["Basic","CustomWidth","WithHeaderActions","Scrolling","WithAutofocus","Complex"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n  }\n}",...Basic.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: 'This dialog is wider than the default.',\n    customWidth: true\n  }\n}",...CustomWidth.parameters?.docs?.source}}},WithHeaderActions.parameters={...WithHeaderActions.parameters,docs:{...WithHeaderActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    headerActions: true,\n    content: 'This dialog has an additional action in the header.'\n  }\n}",...WithHeaderActions.parameters?.docs?.source}}},Scrolling.parameters={...Scrolling.parameters,docs:{...Scrolling.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <div style=\"height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;\">\n        <p>Scroll down and give it a try! 👇</p>\n      </div>\n    `\n  }\n}",...Scrolling.parameters?.docs?.source}}},WithAutofocus.parameters={...WithAutofocus.parameters,docs:{...WithAutofocus.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <sl-input autofocus placeholder=\"I will have focus when the dialog is opened\"></sl-input>\n    `\n  }\n}",...WithAutofocus.parameters?.docs?.source}}},Complex.parameters={...Complex.parameters,docs:{...Complex.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Dialog',\n    content: html`\n      <sl-rating></sl-rating>\n      <br><br>\n      This is a more complex dialog that demonstrates some of the advanced features and components working together.\n      <br><br>\n      <sl-input placeholder=\"Type something\"></sl-input>\n    `,\n    footer: html`\n      <sl-button variant=\"neutral\" @click=${e => e.target.closest('sl-dialog').hide()}>Cancel</sl-button>\n      <sl-button variant=\"primary\" @click=${e => e.target.closest('sl-dialog').hide()}>Save</sl-button>\n    `\n  }\n}",...Complex.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlays-Dialog-stories.dd50859f.iframe.bundle.js.map