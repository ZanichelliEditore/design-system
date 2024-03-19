import { newSpecPage } from "@stencil/core/testing";
import { ZTableExpandedRow } from "./index";
describe("Suite test ZTableExpandedRow", () => {
    it("Test render ZTableExpandedRow vuoto", async () => {
        const page = await newSpecPage({
            components: [ZTableExpandedRow],
            html: `<z-table-expanded-row col-span="4"></z-table-expanded-row>`,
        });
        //Non è possibile testarlo poiché il tag <td> viene eliminato dal browser in quanto esterno al tag <table>
        expect(page.root).toBeTruthy();
    });
});
//# sourceMappingURL=index.spec.js.map
