import Model from "../Model/Model.js";
import NagyKep from "../View/NagyKepView.js";
class Controller{
    constructor(){
        const MODEL = new Model();
        const NAGYK = new NagyKep($(".nagyk"),MODEL.getAktKep());

        $(window).on("jobb", () => {
            MODEL.jobb();
            NAGYK.nagyKepCsere(MODEL.getAktKep());
        })
        $(window).on("bal", () => {
            MODEL.bal();
            NAGYK.nagyKepCsere(MODEL.getAktKep());
        })
    }
}
export default Controller;