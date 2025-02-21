"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[602],{"./stories/foundations/Icons.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommonIcons:()=>CommonIcons,UsageExample:()=>UsageExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/pro-light-svg-icons/index.mjs");_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.Yv.add(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.muz,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.X46,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.dB,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.z$e,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.y_8,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.qcK,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.yy,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e68,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.Jyw,_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__.mEO);const __WEBPACK_DEFAULT_EXPORT__={title:"Foundations/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Font Awesome Pro Light icons used throughout the application."}}}},IconDisplay=({name,icon})=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
  <div style="
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--sl-color-neutral-200);
    border-radius: 4px;
  ">
    <div style="
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <i class="fa-light ${icon}" style="font-size: 1.5rem;"></i>
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    ">
      <div style="font-weight: 600;">${name}</div>
      <div style="color: var(--sl-color-neutral-500); font-family: monospace; font-size: 0.875rem;">
        ${icon}
      </div>
    </div>
  </div>
`,CommonIcons={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${IconDisplay({name:"House",icon:"fa-house"})}
      ${IconDisplay({name:"User",icon:"fa-user"})}
      ${IconDisplay({name:"Settings",icon:"fa-cog"})}
      ${IconDisplay({name:"Bell",icon:"fa-bell"})}
      ${IconDisplay({name:"Email",icon:"fa-envelope"})}
      ${IconDisplay({name:"Heart",icon:"fa-heart"})}
      ${IconDisplay({name:"Star",icon:"fa-star"})}
      ${IconDisplay({name:"Check",icon:"fa-check"})}
      ${IconDisplay({name:"Close",icon:"fa-xmark"})}
      ${IconDisplay({name:"Info",icon:"fa-circle-info"})}
    </div>
  `},UsageExample={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <i class="fa-light fa-house"></i>
          Home
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
        <p>
          <i class="fa-light fa-circle-info"></i>
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <i class="fa-light fa-star" style="font-size: 1rem;"></i>
          <i class="fa-light fa-star" style="font-size: 1.5rem;"></i>
          <i class="fa-light fa-star" style="font-size: 2rem;"></i>
          <i class="fa-light fa-star" style="font-size: 2.5rem;"></i>
        </div>
      </div>
    </div>
  `},__namedExportsOrder=["CommonIcons","UsageExample"];CommonIcons.parameters={...CommonIcons.parameters,docs:{...CommonIcons.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <div style=\"\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n      gap: 1rem;\n    \">\n      ${IconDisplay({\n    name: 'House',\n    icon: 'fa-house'\n  })}\n      ${IconDisplay({\n    name: 'User',\n    icon: 'fa-user'\n  })}\n      ${IconDisplay({\n    name: 'Settings',\n    icon: 'fa-cog'\n  })}\n      ${IconDisplay({\n    name: 'Bell',\n    icon: 'fa-bell'\n  })}\n      ${IconDisplay({\n    name: 'Email',\n    icon: 'fa-envelope'\n  })}\n      ${IconDisplay({\n    name: 'Heart',\n    icon: 'fa-heart'\n  })}\n      ${IconDisplay({\n    name: 'Star',\n    icon: 'fa-star'\n  })}\n      ${IconDisplay({\n    name: 'Check',\n    icon: 'fa-check'\n  })}\n      ${IconDisplay({\n    name: 'Close',\n    icon: 'fa-xmark'\n  })}\n      ${IconDisplay({\n    name: 'Info',\n    icon: 'fa-circle-info'\n  })}\n    </div>\n  `\n}",...CommonIcons.parameters?.docs?.source}}},UsageExample.parameters={...UsageExample.parameters,docs:{...UsageExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 2rem;">\n      <div>\n        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>\n        <sl-button>\n          <i class="fa-light fa-house"></i>\n          Home\n        </sl-button>\n      </div>\n\n      <div>\n        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>\n        <p>\n          <i class="fa-light fa-circle-info"></i>\n          This is an informational message\n        </p>\n      </div>\n\n      <div>\n        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>\n        <div style="display: flex; align-items: center; gap: 2rem;">\n          <i class="fa-light fa-star" style="font-size: 1rem;"></i>\n          <i class="fa-light fa-star" style="font-size: 1.5rem;"></i>\n          <i class="fa-light fa-star" style="font-size: 2rem;"></i>\n          <i class="fa-light fa-star" style="font-size: 2.5rem;"></i>\n        </div>\n      </div>\n    </div>\n  `\n}',...UsageExample.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=foundations-Icons-stories.5f83ec35.iframe.bundle.js.map