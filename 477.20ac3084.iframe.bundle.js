/*! For license information please see 477.20ac3084.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[477],{"./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OSU5LOVZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>getTabbableElements,w:()=>getTabbableBoundary});var computedStyleMap=new WeakMap;function getCachedComputedStyle(el){let computedStyle=computedStyleMap.get(el);return computedStyle||(computedStyle=window.getComputedStyle(el,null),computedStyleMap.set(el,computedStyle)),computedStyle}function isTabbable(el){const tag=el.tagName.toLowerCase(),tabindex=Number(el.getAttribute("tabindex"));if(el.hasAttribute("tabindex")&&(isNaN(tabindex)||tabindex<=-1))return!1;if(el.hasAttribute("disabled"))return!1;if(el.closest("[inert]"))return!1;if("input"===tag&&"radio"===el.getAttribute("type")){const rootNode=el.getRootNode(),findRadios=`input[type='radio'][name="${el.getAttribute("name")}"]`,firstChecked=rootNode.querySelector(`${findRadios}:checked`);if(firstChecked)return firstChecked===el;return rootNode.querySelector(findRadios)===el}if(!function isVisible(el){if("function"==typeof el.checkVisibility)return el.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const computedStyle=getCachedComputedStyle(el);return"hidden"!==computedStyle.visibility&&"none"!==computedStyle.display}(el))return!1;if(("audio"===tag||"video"===tag)&&el.hasAttribute("controls"))return!0;if(el.hasAttribute("tabindex"))return!0;if(el.hasAttribute("contenteditable")&&"false"!==el.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(tag)||function isOverflowingAndTabbable(el){const computedStyle=getCachedComputedStyle(el),{overflowY,overflowX}=computedStyle;return"scroll"===overflowY||"scroll"===overflowX||"auto"===overflowY&&"auto"===overflowX&&(el.scrollHeight>el.clientHeight&&"auto"===overflowY||!(!(el.scrollWidth>el.clientWidth)||"auto"!==overflowX))}(el)}function getTabbableBoundary(root){var _a,_b;const tabbableElements=getTabbableElements(root);return{start:null!=(_a=tabbableElements[0])?_a:null,end:null!=(_b=tabbableElements[tabbableElements.length-1])?_b:null}}function getTabbableElements(root){const walkedEls=new WeakMap,tabbableElements=[];return function walk(el){if(el instanceof Element){if(el.hasAttribute("inert")||el.closest("[inert]"))return;if(walkedEls.has(el))return;walkedEls.set(el,!0),!tabbableElements.includes(el)&&isTabbable(el)&&tabbableElements.push(el),el instanceof HTMLSlotElement&&function getSlottedChildrenOutsideRootElement(slotElement,root){var _a;return(null==(_a=slotElement.getRootNode({composed:!0}))?void 0:_a.host)!==root}(el,root)&&el.assignedElements({flatten:!0}).forEach((assignedEl=>{walk(assignedEl)})),null!==el.shadowRoot&&"open"===el.shadowRoot.mode&&walk(el.shadowRoot)}for(const e of el.children)walk(e)}(root),tabbableElements.sort(((a,b)=>{const aTabindex=Number(a.getAttribute("tabindex"))||0;return(Number(b.getAttribute("tabindex"))||0)-aTabindex}))}},"./node_modules/@shoelace-style/shoelace/dist/components/dropdown/dropdown.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),dropdown_styles_default=lit.AH`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,chunk_OSU5LOVZ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OSU5LOVZ.js"),chunk_R37ISJMH=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R37ISJMH.js"),chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_GUCRZEMY_SlDropdown=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=event=>{this.open&&"Escape"===event.key&&(event.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=event=>{var _a;if("Escape"===event.key&&this.open&&!this.closeWatcher)return event.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===event.key){if(this.open&&"sl-menu-item"===(null==(_a=document.activeElement)?void 0:_a.tagName.toLowerCase()))return event.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var _a2,_b,_c;const activeElement=(null==(_a2=this.containingElement)?void 0:_a2.getRootNode())instanceof ShadowRoot?null==(_c=null==(_b=document.activeElement)?void 0:_b.shadowRoot)?void 0:_c.activeElement:document.activeElement;this.containingElement&&(null==activeElement?void 0:activeElement.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=event=>{const path=event.composedPath();this.containingElement&&!path.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=event=>{const target=event.target;this.stayOpenOnSelect||"sl-menu"!==target.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const trigger=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==trigger?void 0:trigger.focus)&&trigger.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((el=>"sl-menu"===el.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(event){if([" ","Enter"].includes(event.key))return event.preventDefault(),void this.handleTriggerClick();const menu=this.getMenu();if(menu){const menuItems=menu.getAllItems(),firstMenuItem=menuItems[0],lastMenuItem=menuItems[menuItems.length-1];["ArrowDown","ArrowUp","Home","End"].includes(event.key)&&(event.preventDefault(),this.open||(this.show(),await this.updateComplete),menuItems.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==event.key&&"Home"!==event.key||(menu.setCurrentItem(firstMenuItem),firstMenuItem.focus()),"ArrowUp"!==event.key&&"End"!==event.key||(menu.setCurrentItem(lastMenuItem),lastMenuItem.focus())})))}}handleTriggerKeyUp(event){" "===event.key&&event.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const accessibleTrigger=this.trigger.assignedElements({flatten:!0}).find((el=>(0,chunk_OSU5LOVZ.w)(el).start));let target;if(accessibleTrigger){switch(accessibleTrigger.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":target=accessibleTrigger.button;break;default:target=accessibleTrigger}target.setAttribute("aria-haspopup","true"),target.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var _a;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(_a=this.closeWatcher)||_a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var _a;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(_a=this.closeWatcher)||_a.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,chunk_AJ3ENQ5C.Ey)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"dropdown.show",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,chunk_AJ3ENQ5C.Ey)(this);const{keyframes,options}=(0,chunk_K7JGTRV7.RB)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,chunk_AJ3ENQ5C.jd)(this.popup.popup,keyframes,options),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return lit.qy`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(0,if_defined.J)(this.sync?this.sync:void 0)}
        class=${(0,class_map.H)({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};chunk_GUCRZEMY_SlDropdown.styles=[chunk_TUVJKY7S.$,dropdown_styles_default],chunk_GUCRZEMY_SlDropdown.dependencies={"sl-popup":chunk_R37ISJMH.m},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dropdown")],chunk_GUCRZEMY_SlDropdown.prototype,"popup",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dropdown__trigger")],chunk_GUCRZEMY_SlDropdown.prototype,"trigger",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".dropdown__panel")],chunk_GUCRZEMY_SlDropdown.prototype,"panel",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"placement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"stayOpenOnSelect",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:!1})],chunk_GUCRZEMY_SlDropdown.prototype,"containingElement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_GUCRZEMY_SlDropdown.prototype,"distance",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Number})],chunk_GUCRZEMY_SlDropdown.prototype,"skidding",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean})],chunk_GUCRZEMY_SlDropdown.prototype,"hoist",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"sync",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_GUCRZEMY_SlDropdown.prototype,"handleOpenChange",1),(0,chunk_K7JGTRV7.Ee)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});chunk_GUCRZEMY_SlDropdown.define("sl-dropdown");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js")},"./node_modules/@shoelace-style/shoelace/dist/components/menu-item/menu-item.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),menu_item_styles_default=lit.AH`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive_helpers=__webpack_require__("./node_modules/lit-html/directive-helpers.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i)}const c=i=>{i.type==directive.OA.CHILD&&(i._$AP??=n,i._$AQ??=h)};class f extends directive.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o(this))}setValue(t){if((0,directive_helpers.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}class ref_h{}const ref_o=new WeakMap,ref_n=(0,directive.u$)(class extends f{render(i){return lit_html.s6}update(i,[s]){const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=ref_o.get(i);void 0===s&&(s=new WeakMap,ref_o.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?ref_o.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var SubmenuController=class{constructor(host,hasSlotController){this.popupRef=new ref_h,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=event=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${event.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${event.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=event=>{switch(event.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":event.target!==this.host&&(event.preventDefault(),event.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(event)}},this.handleClick=event=>{var _a;event.target===this.host?(event.preventDefault(),event.stopPropagation()):event.target instanceof Element&&("sl-menu-item"===event.target.tagName||(null==(_a=event.target.role)?void 0:_a.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=event=>{event.relatedTarget&&event.relatedTarget instanceof Element&&this.host.contains(event.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=event=>{event.stopPropagation()},this.handlePopupReposition=()=>{const submenuSlot=this.host.renderRoot.querySelector("slot[name='submenu']"),menu=null==submenuSlot?void 0:submenuSlot.assignedElements({flatten:!0}).filter((el=>"sl-menu"===el.localName))[0],isRtl="rtl"===getComputedStyle(this.host).direction;if(!menu)return;const{left,top,width,height}=menu.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${isRtl?left+width:left}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${top}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${isRtl?left+width:left}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${top+height}px`)},(this.host=host).addController(this),this.hasSlotController=hasSlotController}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(event){const submenuSlot=this.host.renderRoot.querySelector("slot[name='submenu']");if(!submenuSlot)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let menuItems=null;for(const elt of submenuSlot.assignedElements())if(menuItems=elt.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==menuItems.length)break;if(menuItems&&0!==menuItems.length){menuItems[0].setAttribute("tabindex","0");for(let i=1;i!==menuItems.length;++i)menuItems[i].setAttribute("tabindex","-1");this.popupRef.value&&(event.preventDefault(),event.stopPropagation(),this.popupRef.value.active?menuItems[0]instanceof HTMLElement&&menuItems[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{menuItems[0]instanceof HTMLElement&&menuItems[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(state){this.popupRef.value&&this.popupRef.value.active!==state&&(this.popupRef.value.active=state,this.host.requestUpdate())}enableSubmenu(delay=!0){delay?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var _a;if(!(null==(_a=this.host.parentElement)?void 0:_a.computedStyleMap))return;const styleMap=this.host.parentElement.computedStyleMap(),skidding=["padding-top","border-top-width","margin-top"].reduce(((accumulator,attr)=>{var _a2;const styleValue=null!=(_a2=styleMap.get(attr))?_a2:new CSSUnitValue(0,"px");return accumulator-(styleValue instanceof CSSUnitValue?styleValue:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=skidding}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const isRtl="rtl"===getComputedStyle(this.host).direction;return this.isConnected?lit.qy`
      <sl-popup
        ${ref_n(this.popupRef)}
        placement=${isRtl?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:lit.qy` <slot name="submenu" hidden></slot> `}},chunk_R37ISJMH=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R37ISJMH.js"),chunk_MK453YAN=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MK453YAN.js"),chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_JGDQQFMA_SlMenuItem=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new chunk_NYIIDP5N.X(this,"submenu"),this.submenuController=new SubmenuController(this,this.hasSlotController),this.handleHostClick=event=>{this.disabled&&(event.preventDefault(),event.stopImmediatePropagation())},this.handleMouseOver=event=>{this.focus(),event.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const textLabel=this.getTextLabel();void 0!==this.cachedTextLabel?textLabel!==this.cachedTextLabel&&(this.cachedTextLabel=textLabel,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=textLabel}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return(0,chunk_NYIIDP5N.r)(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const isRtl="rtl"===this.localize.dir(),isSubmenuExpanded=this.submenuController.isExpanded();return lit.qy`
      <div
        id="anchor"
        part="base"
        class=${(0,class_map.H)({"menu-item":!0,"menu-item--rtl":isRtl,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":isSubmenuExpanded})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!isSubmenuExpanded}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?lit.qy` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};chunk_JGDQQFMA_SlMenuItem.styles=[chunk_TUVJKY7S.$,menu_item_styles_default],chunk_JGDQQFMA_SlMenuItem.dependencies={"sl-icon":chunk_4GJTAPTW.B,"sl-popup":chunk_R37ISJMH.m,"sl-spinner":chunk_MK453YAN.p},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("slot:not([name])")],chunk_JGDQQFMA_SlMenuItem.prototype,"defaultSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".menu-item")],chunk_JGDQQFMA_SlMenuItem.prototype,"menuItem",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_JGDQQFMA_SlMenuItem.prototype,"type",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_JGDQQFMA_SlMenuItem.prototype,"checked",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_JGDQQFMA_SlMenuItem.prototype,"value",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_JGDQQFMA_SlMenuItem.prototype,"loading",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_JGDQQFMA_SlMenuItem.prototype,"disabled",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("checked")],chunk_JGDQQFMA_SlMenuItem.prototype,"handleCheckedChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("disabled")],chunk_JGDQQFMA_SlMenuItem.prototype,"handleDisabledChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("type")],chunk_JGDQQFMA_SlMenuItem.prototype,"handleTypeChange",1);chunk_JGDQQFMA_SlMenuItem.define("sl-menu-item");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js")},"./node_modules/@shoelace-style/shoelace/dist/components/menu/menu.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),menu_styles_default=lit.AH`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_GIGQL3HG_SlMenu=class extends chunk_PFOQ5QRR.f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(event){const menuItemTypes=["menuitem","menuitemcheckbox"],composedPath=event.composedPath(),target=composedPath.find((el=>{var _a;return menuItemTypes.includes((null==(_a=null==el?void 0:el.getAttribute)?void 0:_a.call(el,"role"))||"")}));if(!target)return;if(composedPath.find((el=>{var _a;return"menu"===(null==(_a=null==el?void 0:el.getAttribute)?void 0:_a.call(el,"role"))}))!==this)return;const item=target;"checkbox"===item.type&&(item.checked=!item.checked),this.emit("sl-select",{detail:{item}})}handleKeyDown(event){if("Enter"===event.key||" "===event.key){const item=this.getCurrentItem();event.preventDefault(),event.stopPropagation(),null==item||item.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(event.key)){const items=this.getAllItems(),activeItem=this.getCurrentItem();let index=activeItem?items.indexOf(activeItem):0;items.length>0&&(event.preventDefault(),event.stopPropagation(),"ArrowDown"===event.key?index++:"ArrowUp"===event.key?index--:"Home"===event.key?index=0:"End"===event.key&&(index=items.length-1),index<0&&(index=items.length-1),index>items.length-1&&(index=0),this.setCurrentItem(items[index]),items[index].focus())}}handleMouseDown(event){const target=event.target;this.isMenuItem(target)&&this.setCurrentItem(target)}handleSlotChange(){const items=this.getAllItems();items.length>0&&this.setCurrentItem(items[0])}isMenuItem(item){var _a;return"sl-menu-item"===item.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(_a=item.getAttribute("role"))?_a:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((el=>!(el.inert||!this.isMenuItem(el))))}getCurrentItem(){return this.getAllItems().find((i=>"0"===i.getAttribute("tabindex")))}setCurrentItem(item){this.getAllItems().forEach((i=>{i.setAttribute("tabindex",i===item?"0":"-1")}))}render(){return lit.qy`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};chunk_GIGQL3HG_SlMenu.styles=[chunk_TUVJKY7S.$,menu_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("slot")],chunk_GIGQL3HG_SlMenu.prototype,"defaultSlot",2);chunk_GIGQL3HG_SlMenu.define("sl-menu")}}]);
//# sourceMappingURL=477.20ac3084.iframe.bundle.js.map