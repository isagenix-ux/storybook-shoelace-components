"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[730],{"./stories/overlays/Drawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Contained:()=>Contained,CustomSize:()=>CustomSize,SlideFromBottom:()=>SlideFromBottom,SlideFromStart:()=>SlideFromStart,SlideFromTop:()=>SlideFromTop,WithHeaderActions:()=>WithHeaderActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Drawer_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),drawer_styles_default=lit.AH`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,chunk_P22EBAVT=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P22EBAVT.js"),chunk_RWUUFNUL=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js"),chunk_HLJ2JR6P=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HLJ2JR6P.js"),chunk_K7JGTRV7=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js"),chunk_B4BZKR24=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js"),chunk_AJ3ENQ5C=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js"),chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");function uppercaseFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1)}var chunk_OB2RFF5T_SlDrawer=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.hasSlotController=new chunk_NYIIDP5N.X(this,"footer"),this.localize=new chunk_6CTB5ZDJ.c(this),this.modal=new chunk_P22EBAVT.a(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=event=>{this.contained||"Escape"===event.key&&this.modal.isActive()&&this.open&&(event.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),(0,chunk_RWUUFNUL.JG)(this)))}disconnectedCallback(){super.disconnectedCallback(),(0,chunk_RWUUFNUL.I7)(this),this.removeOpenListeners()}requestClose(source){if(this.emit("sl-request-close",{cancelable:!0,detail:{source}}).defaultPrevented){const animation=(0,chunk_K7JGTRV7.RB)(this,"drawer.denyClose",{dir:this.localize.dir()});(0,chunk_AJ3ENQ5C.jd)(this.panel,animation.keyframes,animation.options)}else this.hide()}addOpenListeners(){var _a;"CloseWatcher"in window?(null==(_a=this.closeWatcher)||_a.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var _a;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(_a=this.closeWatcher)||_a.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),(0,chunk_RWUUFNUL.JG)(this));const autoFocusTarget=this.querySelector("[autofocus]");autoFocusTarget&&autoFocusTarget.removeAttribute("autofocus"),await Promise.all([(0,chunk_AJ3ENQ5C.Ey)(this.drawer),(0,chunk_AJ3ENQ5C.Ey)(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(autoFocusTarget?autoFocusTarget.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),autoFocusTarget&&autoFocusTarget.setAttribute("autofocus","")}));const panelAnimation=(0,chunk_K7JGTRV7.RB)(this,`drawer.show${uppercaseFirstLetter(this.placement)}`,{dir:this.localize.dir()}),overlayAnimation=(0,chunk_K7JGTRV7.RB)(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,chunk_AJ3ENQ5C.jd)(this.panel,panelAnimation.keyframes,panelAnimation.options),(0,chunk_AJ3ENQ5C.jd)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),(0,chunk_RWUUFNUL.I7)(this)),await Promise.all([(0,chunk_AJ3ENQ5C.Ey)(this.drawer),(0,chunk_AJ3ENQ5C.Ey)(this.overlay)]);const panelAnimation=(0,chunk_K7JGTRV7.RB)(this,`drawer.hide${uppercaseFirstLetter(this.placement)}`,{dir:this.localize.dir()}),overlayAnimation=(0,chunk_K7JGTRV7.RB)(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,chunk_AJ3ENQ5C.jd)(this.overlay,overlayAnimation.keyframes,overlayAnimation.options).then((()=>{this.overlay.hidden=!0})),(0,chunk_AJ3ENQ5C.jd)(this.panel,panelAnimation.keyframes,panelAnimation.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const trigger=this.originalTrigger;"function"==typeof(null==trigger?void 0:trigger.focus)&&setTimeout((()=>trigger.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),(0,chunk_RWUUFNUL.JG)(this)),this.open&&this.contained&&(this.modal.deactivate(),(0,chunk_RWUUFNUL.I7)(this))}async show(){if(!this.open)return this.open=!0,(0,chunk_B4BZKR24.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,chunk_B4BZKR24.l)(this,"sl-after-hide")}render(){return lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,if_defined.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,if_defined.J)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":lit.qy`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};chunk_OB2RFF5T_SlDrawer.styles=[chunk_TUVJKY7S.$,drawer_styles_default],chunk_OB2RFF5T_SlDrawer.dependencies={"sl-icon-button":chunk_HLJ2JR6P.h},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".drawer")],chunk_OB2RFF5T_SlDrawer.prototype,"drawer",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".drawer__panel")],chunk_OB2RFF5T_SlDrawer.prototype,"panel",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)(".drawer__overlay")],chunk_OB2RFF5T_SlDrawer.prototype,"overlay",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"open",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"label",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({reflect:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"placement",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"contained",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"noHeader",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("open",{waitUntilFirstUpdate:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"handleOpenChange",1),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("contained",{waitUntilFirstUpdate:!0})],chunk_OB2RFF5T_SlDrawer.prototype,"handleNoModalChange",1),(0,chunk_K7JGTRV7.Ee)("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),(0,chunk_K7JGTRV7.Ee)("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),(0,chunk_K7JGTRV7.Ee)("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,chunk_K7JGTRV7.Ee)("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});chunk_OB2RFF5T_SlDrawer.define("sl-drawer");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OSU5LOVZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js");const Drawer_stories={title:"Shoelace/Overlays/Drawer",tags:["autodocs"],render:args=>lit.qy`
      <div style="min-height: 300px; position: relative;">
        <sl-drawer 
          label=${args.label}
          placement=${args.placement}
          ?contained=${args.contained}
          ?no-header=${args.noHeader}
          style=${args.customSize?"--size: 50vw;":""}
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
            <sl-button variant="primary" @click=${e=>{e.target.closest("sl-drawer").hide()}}>Close</sl-button>
          </div>
        </sl-drawer>

        <sl-button @click=${e=>{e.target.parentElement.querySelector("sl-drawer").show()}}>Open Drawer</sl-button>
      </div>
    `,argTypes:{label:{control:"text",description:"The drawer title"},placement:{control:"select",options:["top","end","bottom","start"],description:"The direction from which the drawer will open"},contained:{control:"boolean",description:"Makes the drawer slide out of its parent element instead of the viewport"},noHeader:{control:"boolean",description:"Removes the header"},content:{control:"text",description:"The drawer content"},headerActions:{control:"boolean",description:"Shows additional actions in the header"},customSize:{control:"boolean",description:"Sets a custom size for the drawer"}}},Basic={args:{label:"Drawer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",placement:"end"}},SlideFromStart={args:{label:"Drawer",content:"This drawer slides in from the start.",placement:"start"}},SlideFromTop={args:{label:"Drawer",content:"This drawer slides in from the top.",placement:"top"}},SlideFromBottom={args:{label:"Drawer",content:"This drawer slides in from the bottom.",placement:"bottom"}},CustomSize={args:{label:"Drawer",content:"This drawer is always 50% of the viewport.",customSize:!0}},WithHeaderActions={args:{label:"Drawer",headerActions:!0,content:"This drawer has an additional action in the header."}},Contained={render:()=>lit.qy`
    <div style="position: relative; border: solid 2px var(--sl-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;">
      The drawer will be contained to this box.

      <sl-drawer label="Drawer" contained style="--size: 50%;">
        This drawer is contained to its parent element.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-drawer>

      <sl-button>Toggle Drawer</sl-button>
    </div>
  `},__namedExportsOrder=["Basic","SlideFromStart","SlideFromTop","SlideFromBottom","CustomSize","WithHeaderActions","Contained"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n    placement: 'end'\n  }\n}",...Basic.parameters?.docs?.source}}},SlideFromStart.parameters={...SlideFromStart.parameters,docs:{...SlideFromStart.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    content: 'This drawer slides in from the start.',\n    placement: 'start'\n  }\n}",...SlideFromStart.parameters?.docs?.source}}},SlideFromTop.parameters={...SlideFromTop.parameters,docs:{...SlideFromTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    content: 'This drawer slides in from the top.',\n    placement: 'top'\n  }\n}",...SlideFromTop.parameters?.docs?.source}}},SlideFromBottom.parameters={...SlideFromBottom.parameters,docs:{...SlideFromBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    content: 'This drawer slides in from the bottom.',\n    placement: 'bottom'\n  }\n}",...SlideFromBottom.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    content: 'This drawer is always 50% of the viewport.',\n    customSize: true\n  }\n}",...CustomSize.parameters?.docs?.source}}},WithHeaderActions.parameters={...WithHeaderActions.parameters,docs:{...WithHeaderActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Drawer',\n    headerActions: true,\n    content: 'This drawer has an additional action in the header.'\n  }\n}",...WithHeaderActions.parameters?.docs?.source}}},Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="position: relative; border: solid 2px var(--sl-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;">\n      The drawer will be contained to this box.\n\n      <sl-drawer label="Drawer" contained style="--size: 50%;">\n        This drawer is contained to its parent element.\n        <sl-button slot="footer" variant="primary">Close</sl-button>\n      </sl-drawer>\n\n      <sl-button>Toggle Drawer</sl-button>\n    </div>\n  `\n}',...Contained.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlays-Drawer-stories.e22521ac.iframe.bundle.js.map