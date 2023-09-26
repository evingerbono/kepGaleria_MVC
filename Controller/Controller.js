import Model from "../Model/Model.js";
import NagyKep from "../View/NagyKepView.js";
class Controller{
    constructor(){
        const MODEL = new Model();
        const NAGYK = new NagyKep($(".nagyk"),MODEL.getAktKep());
    }
}
export default Controller;