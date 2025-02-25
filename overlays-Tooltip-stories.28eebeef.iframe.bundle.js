"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[562],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>icon_button_styles_default});var icon_button_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SlIconButton});var _chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),_chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/static-html.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),SlIconButton=class extends _chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__.f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(event){this.disabled&&(event.preventDefault(),event.stopPropagation())}click(){this.button.click()}focus(options){this.button.focus(options)}blur(){this.button.blur()}render(){const isLink=!!this.href,tag=isLink?lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`a`:lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`button`;return lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.qy`
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
    `}};SlIconButton.styles=[_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__.$,_chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__.Y],SlIconButton.dependencies={"sl-icon":_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__.B},(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)(".icon-button")],SlIconButton.prototype,"button",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],SlIconButton.prototype,"hasFocus",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"name",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"library",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"src",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"href",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"target",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"download",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"label",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],SlIconButton.prototype,"disabled",2)},"./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js").h.define("sl-icon-button");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./stories/overlays/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ClickTrigger:()=>ClickTrigger,CustomWidth:()=>CustomWidth,Hoisting:()=>Hoisting,HtmlContent:()=>HtmlContent,ManualTrigger:()=>ManualTrigger,NoArrow:()=>NoArrow,Placement:()=>Placement,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),tooltip_styles_default=lit.AH`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,chunk_R37ISJMH=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R37ISJMH.js"),chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_A6P554PO_SlTooltip=class extends chunk_PFOQ5QRR.f{constructor(){super(),this.localize=new chunk_6CTB5ZDJ.c(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=event=>{"Escape"===event.key&&(event.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const delay=(0,chunk_AJ3ENQ5C.E9)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),delay)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const delay=(0,chunk_AJ3ENQ5C.E9)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),delay)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var _a;super.disconnectedCallback(),null==(_a=this.closeWatcher)||_a.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(triggerType){return this.trigger.split(" ").includes(triggerType)}async handleOpenChange(){var _a,_b;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(_a=this.closeWatcher)||_a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await(0,chunk_AJ3ENQ5C.Ey)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"tooltip.show",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(_b=this.closeWatcher)||_b.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await(0,chunk_AJ3ENQ5C.Ey)(this.body);const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide")}render(){return lit.qy`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,class_map.H)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};chunk_A6P554PO_SlTooltip.styles=[chunk_TUVJKY7S.$,tooltip_styles_default],chunk_A6P554PO_SlTooltip.dependencies={"sl-popup":chunk_R37ISJMH.m},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("slot:not([name])")],chunk_A6P554PO_SlTooltip.prototype,"defaultSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".tooltip__body")],chunk_A6P554PO_SlTooltip.prototype,"body",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("sl-popup")],chunk_A6P554PO_SlTooltip.prototype,"popup",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_A6P554PO_SlTooltip.prototype,"content",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_A6P554PO_SlTooltip.prototype,"placement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_A6P554PO_SlTooltip.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_A6P554PO_SlTooltip.prototype,"distance",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_A6P554PO_SlTooltip.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_A6P554PO_SlTooltip.prototype,"skidding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_A6P554PO_SlTooltip.prototype,"trigger",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],chunk_A6P554PO_SlTooltip.prototype,"hoist",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_A6P554PO_SlTooltip.prototype,"handleOpenChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)(["content","distance","hoist","placement","skidding"])],chunk_A6P554PO_SlTooltip.prototype,"handleOptionsChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("disabled")],chunk_A6P554PO_SlTooltip.prototype,"handleDisabledChange",1),(0,chunk_K7JGTRV7.Ee)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});chunk_A6P554PO_SlTooltip.define("sl-tooltip");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js");const Tooltip_stories={title:"Shoelace/Overlays/Tooltip",tags:["autodocs"],render:args=>lit.qy`
    <div style="min-height: 200px; padding: 50px;">
      <sl-tooltip
        content=${args.content}
        placement=${args.placement||"top"}
        ?disabled=${args.disabled}
        distance=${args.distance}
        ?open=${args.open}
        skidding=${args.skidding}
        trigger=${args.trigger||"hover"}
        ?hoist=${args.hoist}
        style=${args.maxWidth?`--max-width: ${args.maxWidth};`:""}
      >
        ${args.slot?lit.qy`
          <div slot="content">${args.slot}</div>
        `:""}
        <sl-button>${args.buttonText||"Hover Me"}</sl-button>
      </sl-tooltip>
    </div>
  `,argTypes:{content:{control:"text",description:"The tooltip content"},placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],description:"The preferred placement of the tooltip"},disabled:{control:"boolean",description:"Disables the tooltip"},distance:{control:"number",description:"The distance in pixels from which to offset the tooltip away from its target"},open:{control:"boolean",description:"Indicates whether or not the tooltip is open"},skidding:{control:"number",description:"The distance in pixels from which to offset the tooltip along its target"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Controls how the tooltip is triggered"},hoist:{control:"boolean",description:"Enable this option to prevent the tooltip from being clipped"},maxWidth:{control:"text",description:"The maximum width of the tooltip"},buttonText:{control:"text",description:"The text of the button that triggers the tooltip"},slot:{control:"text",description:"HTML content for the tooltip"}}},Basic={args:{content:"This is a tooltip"}},Placement={render:()=>lit.qy`
    <div class="tooltip-placement-example" style="padding: 100px;">
      <div class="tooltip-placement-example-row">
        <sl-tooltip content="top-start" placement="top-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="top" placement="top">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="top-end" placement="top-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left-start" placement="left-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right-start" placement="right-start">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left" placement="left">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right" placement="right">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="left-end" placement="left-end">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="right-end" placement="right-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <sl-tooltip content="bottom-start" placement="bottom-start">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="bottom" placement="bottom">
          <sl-button></sl-button>
        </sl-tooltip>

        <sl-tooltip content="bottom-end" placement="bottom-end">
          <sl-button></sl-button>
        </sl-tooltip>
      </div>
    </div>

    <style>
      .tooltip-placement-example {
        width: 250px;
      }

      .tooltip-placement-example-row {
        margin-bottom: 1rem;
      }

      .tooltip-placement-example-row:after {
        content: '';
        display: table;
        clear: both;
      }

      .tooltip-placement-example sl-button {
        float: left;
        width: 2.5rem;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .tooltip-placement-example-row:nth-child(1) sl-tooltip:first-child sl-button,
      .tooltip-placement-example-row:nth-child(5) sl-tooltip:first-child sl-button {
        margin-left: calc(40px + 0.25rem);
      }

      .tooltip-placement-example-row:nth-child(2) sl-tooltip:nth-child(2) sl-button,
      .tooltip-placement-example-row:nth-child(3) sl-tooltip:nth-child(2) sl-button,
      .tooltip-placement-example-row:nth-child(4) sl-tooltip:nth-child(2) sl-button {
        margin-left: calc((40px * 3) + (0.25rem * 3));
      }
    </style>
  `},ClickTrigger={args:{content:"Click again to dismiss",trigger:"click",buttonText:"Click to Toggle"}},ManualTrigger={render:()=>lit.qy`
      <div style="display: flex; gap: 4rem; padding: 50px;">
        <sl-button @click=${e=>{const tooltip=e.target.nextElementSibling;tooltip.open=!tooltip.open}}>Toggle Manually</sl-button>
        <sl-tooltip content="This is a tooltip" trigger="manual">
          <sl-icon-button name="gear" label="Settings"></sl-icon-button>
        </sl-tooltip>
      </div>
    `},NoArrow={args:{content:"This is a tooltip",buttonText:"No Arrow",maxWidth:"0"}},HtmlContent={args:{buttonText:"Hover me",slot:lit.qy`I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!`}},CustomWidth={args:{content:"This tooltip will wrap after only 80 pixels.",maxWidth:"80px"}},Hoisting={render:()=>lit.qy`
    <div style="border: solid 2px var(--sl-panel-border-color); overflow: hidden; padding: 50px; position: relative;">
      <sl-tooltip content="This is a tooltip">
        <sl-button>No Hoist</sl-button>
      </sl-tooltip>

      <sl-tooltip content="This is a tooltip" hoist>
        <sl-button>Hoist</sl-button>
      </sl-tooltip>
    </div>
  `},__namedExportsOrder=["Basic","Placement","ClickTrigger","ManualTrigger","NoArrow","HtmlContent","CustomWidth","Hoisting"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'This is a tooltip'\n  }\n}",...Basic.parameters?.docs?.source}}},Placement.parameters={...Placement.parameters,docs:{...Placement.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div class="tooltip-placement-example" style="padding: 100px;">\n      <div class="tooltip-placement-example-row">\n        <sl-tooltip content="top-start" placement="top-start">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="top" placement="top">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="top-end" placement="top-end">\n          <sl-button></sl-button>\n        </sl-tooltip>\n      </div>\n\n      <div class="tooltip-placement-example-row">\n        <sl-tooltip content="left-start" placement="left-start">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="right-start" placement="right-start">\n          <sl-button></sl-button>\n        </sl-tooltip>\n      </div>\n\n      <div class="tooltip-placement-example-row">\n        <sl-tooltip content="left" placement="left">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="right" placement="right">\n          <sl-button></sl-button>\n        </sl-tooltip>\n      </div>\n\n      <div class="tooltip-placement-example-row">\n        <sl-tooltip content="left-end" placement="left-end">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="right-end" placement="right-end">\n          <sl-button></sl-button>\n        </sl-tooltip>\n      </div>\n\n      <div class="tooltip-placement-example-row">\n        <sl-tooltip content="bottom-start" placement="bottom-start">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="bottom" placement="bottom">\n          <sl-button></sl-button>\n        </sl-tooltip>\n\n        <sl-tooltip content="bottom-end" placement="bottom-end">\n          <sl-button></sl-button>\n        </sl-tooltip>\n      </div>\n    </div>\n\n    <style>\n      .tooltip-placement-example {\n        width: 250px;\n      }\n\n      .tooltip-placement-example-row {\n        margin-bottom: 1rem;\n      }\n\n      .tooltip-placement-example-row:after {\n        content: \'\';\n        display: table;\n        clear: both;\n      }\n\n      .tooltip-placement-example sl-button {\n        float: left;\n        width: 2.5rem;\n        margin-right: 0.25rem;\n        margin-bottom: 0.25rem;\n      }\n\n      .tooltip-placement-example-row:nth-child(1) sl-tooltip:first-child sl-button,\n      .tooltip-placement-example-row:nth-child(5) sl-tooltip:first-child sl-button {\n        margin-left: calc(40px + 0.25rem);\n      }\n\n      .tooltip-placement-example-row:nth-child(2) sl-tooltip:nth-child(2) sl-button,\n      .tooltip-placement-example-row:nth-child(3) sl-tooltip:nth-child(2) sl-button,\n      .tooltip-placement-example-row:nth-child(4) sl-tooltip:nth-child(2) sl-button {\n        margin-left: calc((40px * 3) + (0.25rem * 3));\n      }\n    </style>\n  `\n}',...Placement.parameters?.docs?.source}}},ClickTrigger.parameters={...ClickTrigger.parameters,docs:{...ClickTrigger.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'Click again to dismiss',\n    trigger: 'click',\n    buttonText: 'Click to Toggle'\n  }\n}",...ClickTrigger.parameters?.docs?.source}}},ManualTrigger.parameters={...ManualTrigger.parameters,docs:{...ManualTrigger.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const handleToggle = e => {\n      const tooltip = e.target.nextElementSibling;\n      tooltip.open = !tooltip.open;\n    };\n    return html`\n      <div style="display: flex; gap: 4rem; padding: 50px;">\n        <sl-button @click=${handleToggle}>Toggle Manually</sl-button>\n        <sl-tooltip content="This is a tooltip" trigger="manual">\n          <sl-icon-button name="gear" label="Settings"></sl-icon-button>\n        </sl-tooltip>\n      </div>\n    `;\n  }\n}',...ManualTrigger.parameters?.docs?.source}}},NoArrow.parameters={...NoArrow.parameters,docs:{...NoArrow.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'This is a tooltip',\n    buttonText: 'No Arrow',\n    maxWidth: '0' // This removes the arrow\n  }\n}",...NoArrow.parameters?.docs?.source}}},HtmlContent.parameters={...HtmlContent.parameters,docs:{...HtmlContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    buttonText: 'Hover me',\n    slot: html`I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!`\n  }\n}",...HtmlContent.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'This tooltip will wrap after only 80 pixels.',\n    maxWidth: '80px'\n  }\n}",...CustomWidth.parameters?.docs?.source}}},Hoisting.parameters={...Hoisting.parameters,docs:{...Hoisting.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="border: solid 2px var(--sl-panel-border-color); overflow: hidden; padding: 50px; position: relative;">\n      <sl-tooltip content="This is a tooltip">\n        <sl-button>No Hoist</sl-button>\n      </sl-tooltip>\n\n      <sl-tooltip content="This is a tooltip" hoist>\n        <sl-button>Hoist</sl-button>\n      </sl-tooltip>\n    </div>\n  `\n}',...Hoisting.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlays-Tooltip-stories.28eebeef.iframe.bundle.js.map