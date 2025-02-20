"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[451],{"./node_modules/@shoelace-style/shoelace/dist/components/divider/divider.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var divider_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,chunk_GMYPQTFK=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js"),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_KAW7D32O=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),chunk_6EQLH47D_SlDivider=class extends chunk_PFOQ5QRR.f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};chunk_6EQLH47D_SlDivider.styles=[chunk_TUVJKY7S.$,divider_styles_default],(0,chunk_KAW7D32O.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],chunk_6EQLH47D_SlDivider.prototype,"vertical",2),(0,chunk_KAW7D32O.Cc)([(0,chunk_GMYPQTFK.w)("vertical")],chunk_6EQLH47D_SlDivider.prototype,"handleVerticalChange",1);chunk_6EQLH47D_SlDivider.define("sl-divider")},"./stories/navigation/Menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,InDropdown:()=>InDropdown,WithDisabledItems:()=>WithDisabledItems,WithLabels:()=>WithLabels,WithSelection:()=>WithSelection,WithSubmenus:()=>WithSubmenus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),menu_label_styles_default=(__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/menu/menu.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/menu-item/menu-item.js"),lit.AH`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`),chunk_TUVJKY7S=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js"),chunk_PFOQ5QRR=__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFOQ5QRR.js"),chunk_BHVEZOP3_SlMenuLabel=class extends chunk_PFOQ5QRR.f{render(){return lit.qy` <slot part="base" class="menu-label"></slot> `}};chunk_BHVEZOP3_SlMenuLabel.styles=[chunk_TUVJKY7S.$,menu_label_styles_default];chunk_BHVEZOP3_SlMenuLabel.define("sl-menu-label");__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/divider/divider.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/dropdown/dropdown.js"),__webpack_require__("./node_modules/@shoelace-style/shoelace/dist/components/button/button.js");const Menu_stories={title:"Shoelace/Navigation/Menu",tags:["autodocs"],render:args=>lit.qy`
    <sl-menu style="max-width: 200px;">
      ${args.hasLabels?lit.qy`
        <sl-menu-label>Edit</sl-menu-label>
      `:""}
      <sl-menu-item value="undo">Undo</sl-menu-item>
      <sl-menu-item value="redo">Redo</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item value="cut">Cut</sl-menu-item>
      <sl-menu-item value="copy">Copy</sl-menu-item>
      <sl-menu-item value="paste">Paste</sl-menu-item>
      ${args.hasDisabled?lit.qy`
        <sl-menu-item value="delete" disabled>Delete</sl-menu-item>
      `:lit.qy`
        <sl-menu-item value="delete">Delete</sl-menu-item>
      `}
    </sl-menu>
  `,argTypes:{hasLabels:{control:"boolean",description:"Shows menu labels"},hasDisabled:{control:"boolean",description:"Shows disabled items"}}},Basic={args:{}},WithLabels={args:{hasLabels:!0}},WithDisabledItems={args:{hasDisabled:!0}},InDropdown={render:()=>lit.qy`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Edit</sl-button>
      <sl-menu>
        <sl-menu-item value="cut">Cut</sl-menu-item>
        <sl-menu-item value="copy">Copy</sl-menu-item>
        <sl-menu-item value="paste">Paste</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `},WithSubmenus={render:()=>lit.qy`
    <sl-menu style="max-width: 200px;">
      <sl-menu-item value="undo">Undo</sl-menu-item>
      <sl-menu-item value="redo">Redo</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item value="cut">Cut</sl-menu-item>
      <sl-menu-item value="copy">Copy</sl-menu-item>
      <sl-menu-item value="paste">Paste</sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item>
        Find
        <sl-menu slot="submenu">
          <sl-menu-item value="find">Find…</sl-menu-item>
          <sl-menu-item value="find-previous">Find Next</sl-menu-item>
          <sl-menu-item value="find-next">Find Previous</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item>
        Transformations
        <sl-menu slot="submenu">
          <sl-menu-item value="uppercase">Make uppercase</sl-menu-item>
          <sl-menu-item value="lowercase">Make lowercase</sl-menu-item>
          <sl-menu-item value="capitalize">Capitalize</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
    </sl-menu>
  `},WithSelection={render:()=>lit.qy`
      <sl-menu style="max-width: 200px;" @sl-select=${event=>{const item=event.detail.item;console.log(`Selected item: ${item.value}`)}}>
        <sl-menu-item value="cut">Cut</sl-menu-item>
        <sl-menu-item value="copy">Copy</sl-menu-item>
        <sl-menu-item value="paste">Paste</sl-menu-item>
      </sl-menu>
    `},__namedExportsOrder=["Basic","WithLabels","WithDisabledItems","InDropdown","WithSubmenus","WithSelection"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}},WithLabels.parameters={...WithLabels.parameters,docs:{...WithLabels.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasLabels: true\n  }\n}",...WithLabels.parameters?.docs?.source}}},WithDisabledItems.parameters={...WithDisabledItems.parameters,docs:{...WithDisabledItems.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasDisabled: true\n  }\n}",...WithDisabledItems.parameters?.docs?.source}}},InDropdown.parameters={...InDropdown.parameters,docs:{...InDropdown.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <sl-dropdown>\n      <sl-button slot="trigger" caret>Edit</sl-button>\n      <sl-menu>\n        <sl-menu-item value="cut">Cut</sl-menu-item>\n        <sl-menu-item value="copy">Copy</sl-menu-item>\n        <sl-menu-item value="paste">Paste</sl-menu-item>\n      </sl-menu>\n    </sl-dropdown>\n  `\n}',...InDropdown.parameters?.docs?.source}}},WithSubmenus.parameters={...WithSubmenus.parameters,docs:{...WithSubmenus.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <sl-menu style="max-width: 200px;">\n      <sl-menu-item value="undo">Undo</sl-menu-item>\n      <sl-menu-item value="redo">Redo</sl-menu-item>\n      <sl-divider></sl-divider>\n      <sl-menu-item value="cut">Cut</sl-menu-item>\n      <sl-menu-item value="copy">Copy</sl-menu-item>\n      <sl-menu-item value="paste">Paste</sl-menu-item>\n      <sl-divider></sl-divider>\n      <sl-menu-item>\n        Find\n        <sl-menu slot="submenu">\n          <sl-menu-item value="find">Find…</sl-menu-item>\n          <sl-menu-item value="find-previous">Find Next</sl-menu-item>\n          <sl-menu-item value="find-next">Find Previous</sl-menu-item>\n        </sl-menu>\n      </sl-menu-item>\n      <sl-menu-item>\n        Transformations\n        <sl-menu slot="submenu">\n          <sl-menu-item value="uppercase">Make uppercase</sl-menu-item>\n          <sl-menu-item value="lowercase">Make lowercase</sl-menu-item>\n          <sl-menu-item value="capitalize">Capitalize</sl-menu-item>\n        </sl-menu>\n      </sl-menu-item>\n    </sl-menu>\n  `\n}',...WithSubmenus.parameters?.docs?.source}}},WithSelection.parameters={...WithSelection.parameters,docs:{...WithSelection.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const handleSelect = event => {\n      const item = event.detail.item;\n      console.log(`Selected item: ${item.value}`);\n    };\n    return html`\n      <sl-menu style="max-width: 200px;" @sl-select=${handleSelect}>\n        <sl-menu-item value="cut">Cut</sl-menu-item>\n        <sl-menu-item value="copy">Copy</sl-menu-item>\n        <sl-menu-item value="paste">Paste</sl-menu-item>\n      </sl-menu>\n    `;\n  }\n}',...WithSelection.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=navigation-Menu-stories.4ddf2df4.iframe.bundle.js.map