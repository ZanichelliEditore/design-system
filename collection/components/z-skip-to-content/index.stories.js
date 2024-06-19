import { html } from "lit";
import { ThemeVariant } from "../../beans";
import "./index";
const StoryMeta = {
    title: "ZSkipToContent",
    component: "z-skip-to-content",
    argTypes: {
        variant: {
            options: Object.values(ThemeVariant),
            control: {
                type: "inline-radio",
            },
        },
    },
};
export default StoryMeta;
export const Default = {
    args: {
        variant: ThemeVariant.LIGHT,
        links: [
            {
                ariaLabel: "prova",
                label: "vai al link1",
                href: "#link1",
            },
            {
                label: "vai al link2",
                href: "#link2",
            },
            {
                label: "vai al link3",
                href: "#link3",
            },
        ],
    },
    render: (args) => html `<z-skip-to-content
      variant=${args.variant}
      links=${JSON.stringify(args.links)}
    ></z-skip-to-content>`,
};
//# sourceMappingURL=index.stories.js.map
