"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[324],{"./stories/foundations/Colors.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Granite:()=>Granite,Turquoise:()=>Turquoise,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Foundations/Colors",tags:["autodocs"],parameters:{docs:{description:{component:"The color system consists of semantic colors for UI elements and a set of supporting neutral colors."}}}},ColorSwatch=({name,hex,rgb})=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
  <div style="display: flex; align-items: center; margin-bottom: 1rem;">
    <div style="
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${hex};
      margin-right: 1rem;
      border: 1px solid var(--sl-color-neutral-200);
    "></div>
    <div>
      <div style="font-weight: bold;">${name}</div>
      <div style="font-family: monospace; font-size: 0.9em; color: var(--sl-color-neutral-600);">
        ${hex}<br>
        rgb(${rgb})
      </div>
    </div>
  </div>
`,Granite={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
      ${ColorSwatch({name:"Granite 100",hex:"#F6F6F6",rgb:"246, 246, 246"})}
      ${ColorSwatch({name:"Granite 200",hex:"#EDEEEE",rgb:"237, 238, 238"})}
      ${ColorSwatch({name:"Granite 500",hex:"#D4D5D5",rgb:"212, 213, 213"})}
      ${ColorSwatch({name:"Granite 700",hex:"#727677",rgb:"114, 118, 119"})}
      ${ColorSwatch({name:"Granite 800",hex:"#54585A",rgb:"84, 88, 90"})}
      ${ColorSwatch({name:"Granite 900",hex:"#303030",rgb:"48, 48, 48"})}
    </div>
  `},Turquoise={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
      ${ColorSwatch({name:"Turquoise 100",hex:"#F2F8F9",rgb:"242, 248, 249"})}
      ${ColorSwatch({name:"Turquoise 150",hex:"#E0EEF1",rgb:"224, 238, 241"})}
      ${ColorSwatch({name:"Turquoise 200",hex:"#BFDDE2",rgb:"191, 221, 226"})}
      ${ColorSwatch({name:"Turquoise 300",hex:"#4099A8",rgb:"64, 153, 168"})}
      ${ColorSwatch({name:"Turquoise 500",hex:"#00778B",rgb:"0, 119, 139"})}
      ${ColorSwatch({name:"Turquoise 700",hex:"#0C5F6F",rgb:"12, 95, 111"})}
      ${ColorSwatch({name:"Turquoise 800",hex:"#0C5F6F",rgb:"12, 95, 111"})}
      ${ColorSwatch({name:"Turquoise 900",hex:"#003038",rgb:"0, 48, 56"})}
    </div>
  `},__namedExportsOrder=["Granite","Turquoise"];Granite.parameters={...Granite.parameters,docs:{...Granite.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;\">\n      ${ColorSwatch({\n    name: 'Granite 100',\n    hex: '#F6F6F6',\n    rgb: '246, 246, 246'\n  })}\n      ${ColorSwatch({\n    name: 'Granite 200',\n    hex: '#EDEEEE',\n    rgb: '237, 238, 238'\n  })}\n      ${ColorSwatch({\n    name: 'Granite 500',\n    hex: '#D4D5D5',\n    rgb: '212, 213, 213'\n  })}\n      ${ColorSwatch({\n    name: 'Granite 700',\n    hex: '#727677',\n    rgb: '114, 118, 119'\n  })}\n      ${ColorSwatch({\n    name: 'Granite 800',\n    hex: '#54585A',\n    rgb: '84, 88, 90'\n  })}\n      ${ColorSwatch({\n    name: 'Granite 900',\n    hex: '#303030',\n    rgb: '48, 48, 48'\n  })}\n    </div>\n  `\n}",...Granite.parameters?.docs?.source}}},Turquoise.parameters={...Turquoise.parameters,docs:{...Turquoise.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;\">\n      ${ColorSwatch({\n    name: 'Turquoise 100',\n    hex: '#F2F8F9',\n    rgb: '242, 248, 249'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 150',\n    hex: '#E0EEF1',\n    rgb: '224, 238, 241'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 200',\n    hex: '#BFDDE2',\n    rgb: '191, 221, 226'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 300',\n    hex: '#4099A8',\n    rgb: '64, 153, 168'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 500',\n    hex: '#00778B',\n    rgb: '0, 119, 139'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 700',\n    hex: '#0C5F6F',\n    rgb: '12, 95, 111'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 800',\n    hex: '#0C5F6F',\n    rgb: '12, 95, 111'\n  })}\n      ${ColorSwatch({\n    name: 'Turquoise 900',\n    hex: '#003038',\n    rgb: '0, 48, 56'\n  })}\n    </div>\n  `\n}",...Turquoise.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=foundations-Colors-stories.924968f7.iframe.bundle.js.map