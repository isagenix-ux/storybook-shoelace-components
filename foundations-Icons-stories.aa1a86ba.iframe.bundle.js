"use strict";(self.webpackChunkshoelace_storybook=self.webpackChunkshoelace_storybook||[]).push([[602],{"./stories/foundations/Icons.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommonIcons:()=>CommonIcons,UsageExample:()=>UsageExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Icons_stories});var lit=__webpack_require__("./node_modules/lit/index.js");const user_namespaceObject=__webpack_require__.p+"static/media/user.c64a34bb.svg",bell_namespaceObject=__webpack_require__.p+"static/media/bell.923d25a7.svg",envelope_namespaceObject=__webpack_require__.p+"static/media/envelope.17958b11.svg",heart_namespaceObject=__webpack_require__.p+"static/media/heart.208d5472.svg",star_namespaceObject=__webpack_require__.p+"static/media/star.b39504f0.svg",xmark_namespaceObject=__webpack_require__.p+"static/media/xmark.b7664f1f.svg",circle_info_namespaceObject=__webpack_require__.p+"static/media/circle-info.3e8b248f.svg",Icons_stories={title:"Foundations/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Font Awesome Pro Light icons used throughout the application."}}}},IconDisplay=({name,icon})=>lit.qy`
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
      <img src=${icon} alt=${name} style="width: 1.5rem; height: 1.5rem;" />
    </div>
    <div style="
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    ">
      <div style="font-weight: 600;">${name}</div>
      <div style="color: var(--sl-color-neutral-500); font-family: 'Nunito Sans', sans-serif; font-size: 0.875rem;">
        ${icon.split("/").pop().replace(".svg","")}
      </div>
    </div>
  </div>
`,CommonIcons={render:()=>lit.qy`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    ">
      ${IconDisplay({name:"User",icon:user_namespaceObject})}
      ${IconDisplay({name:"Bell",icon:bell_namespaceObject})}
      ${IconDisplay({name:"Email",icon:envelope_namespaceObject})}
      ${IconDisplay({name:"Heart",icon:heart_namespaceObject})}
      ${IconDisplay({name:"Star",icon:star_namespaceObject})}
      ${IconDisplay({name:"Close",icon:xmark_namespaceObject})}
      ${IconDisplay({name:"Info",icon:circle_info_namespaceObject})}
    </div>
  `},UsageExample={render:()=>lit.qy`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>
        <sl-button>
          <img src=${user_namespaceObject} alt="User" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          Profile
        </sl-button>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>
        <p>
          <img src=${circle_info_namespaceObject} alt="Info" style="width: 1em; height: 1em; margin-right: 0.5em;" />
          This is an informational message
        </p>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div style="display: flex; align-items: center; gap: 2rem;">
          <img src=${star_namespaceObject} alt="Star" style="width: 1rem; height: 1rem;" />
          <img src=${star_namespaceObject} alt="Star" style="width: 1.5rem; height: 1.5rem;" />
          <img src=${star_namespaceObject} alt="Star" style="width: 2rem; height: 2rem;" />
          <img src=${star_namespaceObject} alt="Star" style="width: 2.5rem; height: 2.5rem;" />
        </div>
      </div>
    </div>
  `},__namedExportsOrder=["CommonIcons","UsageExample"];CommonIcons.parameters={...CommonIcons.parameters,docs:{...CommonIcons.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <div style=\"\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n      gap: 1rem;\n    \">\n      ${IconDisplay({\n    name: 'User',\n    icon: userIcon\n  })}\n      ${IconDisplay({\n    name: 'Bell',\n    icon: bellIcon\n  })}\n      ${IconDisplay({\n    name: 'Email',\n    icon: envelopeIcon\n  })}\n      ${IconDisplay({\n    name: 'Heart',\n    icon: heartIcon\n  })}\n      ${IconDisplay({\n    name: 'Star',\n    icon: starIcon\n  })}\n      ${IconDisplay({\n    name: 'Close',\n    icon: xmarkIcon\n  })}\n      ${IconDisplay({\n    name: 'Info',\n    icon: infoIcon\n  })}\n    </div>\n  `\n}",...CommonIcons.parameters?.docs?.source}}},UsageExample.parameters={...UsageExample.parameters,docs:{...UsageExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display: flex; flex-direction: column; gap: 2rem;">\n      <div>\n        <h3 style="margin-bottom: 1rem;">Button with Icon</h3>\n        <sl-button>\n          <img src=${userIcon} alt="User" style="width: 1em; height: 1em; margin-right: 0.5em;" />\n          Profile\n        </sl-button>\n      </div>\n\n      <div>\n        <h3 style="margin-bottom: 1rem;">Text with Icon</h3>\n        <p>\n          <img src=${infoIcon} alt="Info" style="width: 1em; height: 1em; margin-right: 0.5em;" />\n          This is an informational message\n        </p>\n      </div>\n\n      <div>\n        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>\n        <div style="display: flex; align-items: center; gap: 2rem;">\n          <img src=${starIcon} alt="Star" style="width: 1rem; height: 1rem;" />\n          <img src=${starIcon} alt="Star" style="width: 1.5rem; height: 1.5rem;" />\n          <img src=${starIcon} alt="Star" style="width: 2rem; height: 2rem;" />\n          <img src=${starIcon} alt="Star" style="width: 2.5rem; height: 2.5rem;" />\n        </div>\n      </div>\n    </div>\n  `\n}',...UsageExample.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=foundations-Icons-stories.aa1a86ba.iframe.bundle.js.map