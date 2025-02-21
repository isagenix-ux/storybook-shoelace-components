/*! For license information please see data-display-Tag-stories.6bf427a3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[425],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>icon_button_styles_default});var icon_button_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GQULGLWO.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>SlTag});var _chunk_V2OL7VMD_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js"),_chunk_HLJ2JR6P_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js"),_chunk_6CTB5ZDJ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),_chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),SlTag=class extends _chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_4__.f{constructor(){super(...arguments),this.localize=new _chunk_6CTB5ZDJ_js__WEBPACK_IMPORTED_MODULE_2__.c(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return lit__WEBPACK_IMPORTED_MODULE_7__.qy`
      <span
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__.H)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?lit__WEBPACK_IMPORTED_MODULE_7__.qy`
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
    `}};SlTag.styles=[_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__.$,_chunk_V2OL7VMD_js__WEBPACK_IMPORTED_MODULE_0__.g],SlTag.dependencies={"sl-icon-button":_chunk_HLJ2JR6P_js__WEBPACK_IMPORTED_MODULE_1__.h},(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({reflect:!0})],SlTag.prototype,"variant",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({reflect:!0})],SlTag.prototype,"size",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],SlTag.prototype,"pill",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean})],SlTag.prototype,"removable",2)},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SlIconButton});var _chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),_chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/static-html.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),SlIconButton=class extends _chunk_PFOQ5QRR_js__WEBPACK_IMPORTED_MODULE_3__.f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(event){this.disabled&&(event.preventDefault(),event.stopPropagation())}click(){this.button.click()}focus(options){this.button.focus(options)}blur(){this.button.blur()}render(){const isLink=!!this.href,tag=isLink?lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`a`:lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`button`;return lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.qy`
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
    `}};SlIconButton.styles=[_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__.$,_chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_0__.Y],SlIconButton.dependencies={"sl-icon":_chunk_4GJTAPTW_js__WEBPACK_IMPORTED_MODULE_1__.B},(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)(".icon-button")],SlIconButton.prototype,"button",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],SlIconButton.prototype,"hasFocus",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"name",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"library",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"src",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"href",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"target",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"download",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],SlIconButton.prototype,"label",2),(0,_chunk_KAW7D32O_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],SlIconButton.prototype,"disabled",2)},"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>tag_styles_default});var tag_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`},"./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js").h.define("sl-icon-button");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>u,eu:()=>i});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u}return t(r,...e)},u=n(lit_html.qy);n(lit_html.JW),n(lit_html.ej)},"./stories/data-display/Tag.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColors:()=>CustomColors,Pills:()=>Pills,Removable:()=>Removable,Sizes:()=>Sizes,Variants:()=>Variants,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var lit=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GQULGLWO.js").Q.define("sl-tag");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js");const Tag_stories={title:"Shoelace/Data Display/Tag",tags:["autodocs"],render:args=>lit.qy`
    <sl-tag
      variant=${args.variant||"neutral"}
      size=${args.size||"medium"}
      ?pill=${args.pill}
      ?removable=${args.removable}
      @sl-remove=${args.onRemove}
    >
      ${args.content}
    </sl-tag>
  `,argTypes:{variant:{control:"select",options:["primary","success","neutral","warning","danger"],description:"The tag's theme variant"},size:{control:"select",options:["small","medium","large"],description:"The tag's size"},pill:{control:"boolean",description:"Draws a pill-style tag with rounded edges"},removable:{control:"boolean",description:"Makes the tag removable and shows a remove button"},content:{control:"text",description:"The tag's content"}}},Variants={render:()=>lit.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag variant="primary">Primary</sl-tag>
      <sl-tag variant="success">Success</sl-tag>
      <sl-tag variant="neutral">Neutral</sl-tag>
      <sl-tag variant="warning">Warning</sl-tag>
      <sl-tag variant="danger">Danger</sl-tag>
    </div>
  `},Sizes={render:()=>lit.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
      <sl-tag size="small">Small</sl-tag>
      <sl-tag size="medium">Medium</sl-tag>
      <sl-tag size="large">Large</sl-tag>
    </div>
  `},Pills={render:()=>lit.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
      <sl-tag size="small" pill>Small</sl-tag>
      <sl-tag size="medium" pill>Medium</sl-tag>
      <sl-tag size="large" pill>Large</sl-tag>
    </div>
  `},Removable={render:()=>{const handleRemove=event=>{const tag=event.target;tag.style.opacity="0",setTimeout((()=>tag.style.opacity="1"),2e3)};return lit.qy`
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
        <sl-tag size="small" removable @sl-remove=${handleRemove}>Small</sl-tag>
        <sl-tag size="medium" removable @sl-remove=${handleRemove}>Medium</sl-tag>
        <sl-tag size="large" removable @sl-remove=${handleRemove}>Large</sl-tag>
      </div>
      <style>
        sl-tag {
          transition: var(--sl-transition-medium) opacity;
        }
      </style>
    `}},CustomColors={render:()=>lit.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag style="background: var(--sl-color-primary-100); color: var(--sl-color-primary-800); border-color: var(--sl-color-primary-200);">
        Custom
      </sl-tag>
      <sl-tag style="background: var(--sl-color-success-100); color: var(--sl-color-success-800); border-color: var(--sl-color-success-200);">
        Custom
      </sl-tag>
    </div>
  `},WithIcons={render:()=>lit.qy`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <sl-tag variant="primary">
        <sl-icon slot="prefix" name="tag"></sl-icon>
        Label
      </sl-tag>
      <sl-tag variant="success">
        <sl-icon slot="prefix" name="check2-circle"></sl-icon>
        Success
      </sl-tag>
      <sl-tag variant="warning">
        <sl-icon slot="prefix" name="exclamation-triangle"></sl-icon>
        Warning
      </sl-tag>
      <sl-tag variant="danger">
        <sl-icon slot="prefix" name="exclamation-octagon"></sl-icon>
        Danger
      </sl-tag>
    </div>
  `},__namedExportsOrder=["Variants","Sizes","Pills","Removable","CustomColors","WithIcons"];Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">\n      <sl-tag variant="primary">Primary</sl-tag>\n      <sl-tag variant="success">Success</sl-tag>\n      <sl-tag variant="neutral">Neutral</sl-tag>\n      <sl-tag variant="warning">Warning</sl-tag>\n      <sl-tag variant="danger">Danger</sl-tag>\n    </div>\n  `\n}',...Variants.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">\n      <sl-tag size="small">Small</sl-tag>\n      <sl-tag size="medium">Medium</sl-tag>\n      <sl-tag size="large">Large</sl-tag>\n    </div>\n  `\n}',...Sizes.parameters?.docs?.source}}},Pills.parameters={...Pills.parameters,docs:{...Pills.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">\n      <sl-tag size="small" pill>Small</sl-tag>\n      <sl-tag size="medium" pill>Medium</sl-tag>\n      <sl-tag size="large" pill>Large</sl-tag>\n    </div>\n  `\n}',...Pills.parameters?.docs?.source}}},Removable.parameters={...Removable.parameters,docs:{...Removable.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const handleRemove = event => {\n      const tag = event.target;\n      tag.style.opacity = \'0\';\n      setTimeout(() => tag.style.opacity = \'1\', 2000);\n    };\n    return html`\n      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">\n        <sl-tag size="small" removable @sl-remove=${handleRemove}>Small</sl-tag>\n        <sl-tag size="medium" removable @sl-remove=${handleRemove}>Medium</sl-tag>\n        <sl-tag size="large" removable @sl-remove=${handleRemove}>Large</sl-tag>\n      </div>\n      <style>\n        sl-tag {\n          transition: var(--sl-transition-medium) opacity;\n        }\n      </style>\n    `;\n  }\n}',...Removable.parameters?.docs?.source}}},CustomColors.parameters={...CustomColors.parameters,docs:{...CustomColors.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">\n      <sl-tag style="background: var(--sl-color-primary-100); color: var(--sl-color-primary-800); border-color: var(--sl-color-primary-200);">\n        Custom\n      </sl-tag>\n      <sl-tag style="background: var(--sl-color-success-100); color: var(--sl-color-success-800); border-color: var(--sl-color-success-200);">\n        Custom\n      </sl-tag>\n    </div>\n  `\n}',...CustomColors.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">\n      <sl-tag variant="primary">\n        <sl-icon slot="prefix" name="tag"></sl-icon>\n        Label\n      </sl-tag>\n      <sl-tag variant="success">\n        <sl-icon slot="prefix" name="check2-circle"></sl-icon>\n        Success\n      </sl-tag>\n      <sl-tag variant="warning">\n        <sl-icon slot="prefix" name="exclamation-triangle"></sl-icon>\n        Warning\n      </sl-tag>\n      <sl-tag variant="danger">\n        <sl-icon slot="prefix" name="exclamation-octagon"></sl-icon>\n        Danger\n      </sl-tag>\n    </div>\n  `\n}',...WithIcons.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=data-display-Tag-stories.6bf427a3.iframe.bundle.js.map