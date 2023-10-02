import Model from "../Model/Model.js";
import NagyKep from "../View/NagyKepView.js";
import KisKep from "../View/KisKepView.js";
class Controller {
    constructor() {
        const MODEL = new Model();
        const NAGYK = new NagyKep($(".nagyk"), MODEL.getAktKep());
        const KISK = new KisKep($(".kisk"), MODEL.getList());

        $(window).on("jobb", () => {
            MODEL.jobb();
            NAGYK.nagyKepCsere(MODEL.getAktKep().eleres);
        })
        $(window).on("bal", () => {
            MODEL.bal();
            NAGYK.nagyKepCsere(MODEL.getAktKep().eleres);
        })
        $(window).on("kiskKattint", (event) => {
            NAGYK.nagyKepCsere(MODEL.getList().eleres);
        });
    }
}
export default Controller;