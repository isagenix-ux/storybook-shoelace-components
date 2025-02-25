"use strict";(self.webpackChunkshoelace_version=self.webpackChunkshoelace_version||[]).push([[249],{"./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js").B.define("sl-icon");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js")},"./stories/navigation/Breadcrumb.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomSeparators:()=>CustomSeparators,WithDropdown:()=>WithDropdown,WithLinks:()=>WithLinks,WithPrefixes:()=>WithPrefixes,WithSuffixes:()=>WithSuffixes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumb_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),breadcrumb_styles_default=lit.AH`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,chunk_6CTB5ZDJ=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js"),chunk_4GJTAPTW=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4GJTAPTW.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_SQLKQL5A_SlBreadcrumb=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.localize=new chunk_6CTB5ZDJ.c(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const clone=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[clone,...clone.querySelectorAll("[id]")].forEach((el=>el.removeAttribute("id"))),clone.setAttribute("data-default",""),clone.slot="separator",clone}handleSlotChange(){const items=[...this.defaultSlot.assignedElements({flatten:!0})].filter((item=>"sl-breadcrumb-item"===item.tagName.toLowerCase()));items.forEach(((item,index)=>{const separator=item.querySelector('[slot="separator"]');null===separator?item.append(this.getSeparator()):separator.hasAttribute("data-default")&&separator.replaceWith(this.getSeparator()),index===items.length-1?item.setAttribute("aria-current","page"):item.removeAttribute("aria-current")}))}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then((()=>this.handleSlotChange()))),lit.qy`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};chunk_SQLKQL5A_SlBreadcrumb.styles=[chunk_TUVJKY7S.$,breadcrumb_styles_default],chunk_SQLKQL5A_SlBreadcrumb.dependencies={"sl-icon":chunk_4GJTAPTW.B},(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("slot")],chunk_SQLKQL5A_SlBreadcrumb.prototype,"defaultSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.P)('slot[name="separator"]')],chunk_SQLKQL5A_SlBreadcrumb.prototype,"separatorSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_SQLKQL5A_SlBreadcrumb.prototype,"label",2);chunk_SQLKQL5A_SlBreadcrumb.define("sl-breadcrumb");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js");var chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),breadcrumb_item_styles_default=lit.AH`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,chunk_NYIIDP5N=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),chunk_RCNTVK6L_SlBreadcrumbItem=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.hasSlotController=new chunk_NYIIDP5N.X(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const hasDropdown=this.defaultSlot.assignedElements({flatten:!0}).filter((i=>"sl-dropdown"===i.tagName.toLowerCase())).length>0;this.href?this.renderType="link":this.renderType=hasDropdown?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return lit.qy`
      <div
        part="base"
        class=${(0,class_map.H)({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?lit.qy`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${(0,if_defined.J)(this.target?this.target:void 0)}"
                rel=${(0,if_defined.J)(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?lit.qy`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?lit.qy`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};chunk_RCNTVK6L_SlBreadcrumbItem.styles=[chunk_TUVJKY7S.$,breadcrumb_item_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.P)("slot:not([name])")],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"defaultSlot",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.wk)()],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"renderType",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"href",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"target",2),(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)()],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"rel",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("href",{waitUntilFirstUpdate:!0})],chunk_RCNTVK6L_SlBreadcrumbItem.prototype,"hrefChanged",1);chunk_RCNTVK6L_SlBreadcrumbItem.define("sl-breadcrumb-item");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/dropdown/dropdown.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/menu/menu.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/menu-item/menu-item.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js");const Breadcrumb_stories={title:"Shoelace/Navigation/Breadcrumb",tags:["autodocs"],render:args=>lit.qy`
    <sl-breadcrumb>
      ${args.separator?lit.qy`
        <sl-icon name=${args.separator} slot="separator"></sl-icon>
      `:""}
      ${args.items.map((item=>lit.qy`
        <sl-breadcrumb-item href=${item.href||""}>
          ${item.prefix?lit.qy`
            <sl-icon slot="prefix" name=${item.prefix}></sl-icon>
          `:""}
          ${item.label}
          ${item.suffix?lit.qy`
            <sl-icon slot="suffix" name=${item.suffix}></sl-icon>
          `:""}
        </sl-breadcrumb-item>
      `))}
    </sl-breadcrumb>
  `,argTypes:{items:{control:"object",description:"Array of breadcrumb items"},separator:{control:"text",description:"Icon name for the separator"}}},Basic={args:{items:[{label:"Catalog"},{label:"Clothing"},{label:"Women's"},{label:"Shirts & Tops"}]}},WithLinks={args:{items:[{label:"Homepage",href:"https://example.com/home"},{label:"Our Services",href:"https://example.com/services"},{label:"Digital Media",href:"https://example.com/digital"},{label:"Web Design",href:"https://example.com/web-design"}]}},CustomSeparators={render:()=>lit.qy`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-breadcrumb>
        <sl-icon name="dot" slot="separator"></sl-icon>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>

      <sl-breadcrumb>
        <sl-icon name="arrow-right" slot="separator"></sl-icon>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>

      <sl-breadcrumb>
        <span slot="separator">/</span>
        <sl-breadcrumb-item>First</sl-breadcrumb-item>
        <sl-breadcrumb-item>Second</sl-breadcrumb-item>
        <sl-breadcrumb-item>Third</sl-breadcrumb-item>
      </sl-breadcrumb>
    </div>
  `},WithPrefixes={args:{items:[{label:"Home",prefix:"house"},{label:"Articles"},{label:"Traveling"}]}},WithSuffixes={args:{items:[{label:"Documents"},{label:"Policies"},{label:"Security",suffix:"shield-lock"}]}},WithDropdown={render:()=>lit.qy`
    <sl-breadcrumb>
      <sl-breadcrumb-item>Homepage</sl-breadcrumb-item>
      <sl-breadcrumb-item>
        <sl-dropdown>
          <sl-button slot="trigger" size="small" circle>
            <sl-icon label="More options" name="three-dots"></sl-icon>
          </sl-button>
          <sl-menu>
            <sl-menu-item type="checkbox" checked>Web Design</sl-menu-item>
            <sl-menu-item type="checkbox">Web Development</sl-menu-item>
            <sl-menu-item type="checkbox">Marketing</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </sl-breadcrumb-item>
      <sl-breadcrumb-item>Our Services</sl-breadcrumb-item>
      <sl-breadcrumb-item>Digital Media</sl-breadcrumb-item>
    </sl-breadcrumb>
  `},__namedExportsOrder=["Basic","WithLinks","CustomSeparators","WithPrefixes","WithSuffixes","WithDropdown"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Catalog'\n    }, {\n      label: 'Clothing'\n    }, {\n      label: \"Women's\"\n    }, {\n      label: 'Shirts & Tops'\n    }]\n  }\n}",...Basic.parameters?.docs?.source}}},WithLinks.parameters={...WithLinks.parameters,docs:{...WithLinks.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Homepage',\n      href: 'https://example.com/home'\n    }, {\n      label: 'Our Services',\n      href: 'https://example.com/services'\n    }, {\n      label: 'Digital Media',\n      href: 'https://example.com/digital'\n    }, {\n      label: 'Web Design',\n      href: 'https://example.com/web-design'\n    }]\n  }\n}",...WithLinks.parameters?.docs?.source}}},CustomSeparators.parameters={...CustomSeparators.parameters,docs:{...CustomSeparators.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      <sl-breadcrumb>\n        <sl-icon name="dot" slot="separator"></sl-icon>\n        <sl-breadcrumb-item>First</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Second</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Third</sl-breadcrumb-item>\n      </sl-breadcrumb>\n\n      <sl-breadcrumb>\n        <sl-icon name="arrow-right" slot="separator"></sl-icon>\n        <sl-breadcrumb-item>First</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Second</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Third</sl-breadcrumb-item>\n      </sl-breadcrumb>\n\n      <sl-breadcrumb>\n        <span slot="separator">/</span>\n        <sl-breadcrumb-item>First</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Second</sl-breadcrumb-item>\n        <sl-breadcrumb-item>Third</sl-breadcrumb-item>\n      </sl-breadcrumb>\n    </div>\n  `\n}',...CustomSeparators.parameters?.docs?.source}}},WithPrefixes.parameters={...WithPrefixes.parameters,docs:{...WithPrefixes.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Home',\n      prefix: 'house'\n    }, {\n      label: 'Articles'\n    }, {\n      label: 'Traveling'\n    }]\n  }\n}",...WithPrefixes.parameters?.docs?.source}}},WithSuffixes.parameters={...WithSuffixes.parameters,docs:{...WithSuffixes.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Documents'\n    }, {\n      label: 'Policies'\n    }, {\n      label: 'Security',\n      suffix: 'shield-lock'\n    }]\n  }\n}",...WithSuffixes.parameters?.docs?.source}}},WithDropdown.parameters={...WithDropdown.parameters,docs:{...WithDropdown.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <sl-breadcrumb>\n      <sl-breadcrumb-item>Homepage</sl-breadcrumb-item>\n      <sl-breadcrumb-item>\n        <sl-dropdown>\n          <sl-button slot="trigger" size="small" circle>\n            <sl-icon label="More options" name="three-dots"></sl-icon>\n          </sl-button>\n          <sl-menu>\n            <sl-menu-item type="checkbox" checked>Web Design</sl-menu-item>\n            <sl-menu-item type="checkbox">Web Development</sl-menu-item>\n            <sl-menu-item type="checkbox">Marketing</sl-menu-item>\n          </sl-menu>\n        </sl-dropdown>\n      </sl-breadcrumb-item>\n      <sl-breadcrumb-item>Our Services</sl-breadcrumb-item>\n      <sl-breadcrumb-item>Digital Media</sl-breadcrumb-item>\n    </sl-breadcrumb>\n  `\n}',...WithDropdown.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=navigation-Breadcrumb-stories.234490a4.iframe.bundle.js.map