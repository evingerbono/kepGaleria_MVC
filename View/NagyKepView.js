
class NagyKepView {
    #kep;
    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#htmlOsszerak();
        this.balGomb = $(".bal");
        this.balGomb.on("click", () => {
            this.#esemenyTrigger("bal");
            console.log("Bal");
        });
        this.jobbGomb = $(".jobb");
        this.jobbGomb.on("click", () => {
            this.#esemenyTrigger("jobb");
            console.log("Jobb");
        });
        this.nagyKepHely=$("#nagyKepHely");
    }

    #htmlOsszerak() {
        let txt = "";
        txt += `<div class="card">
        <div class="card-header text-center">Főkép</div>
        <div class="card-body text-center">
        <button type="button" class="btn btn-danger bal">Bal</button>
        <img id="nagyKepHely" src="${this.#kep}" class="img-thumbnail" alt="Virag">
        <button type="button" class="btn btn-danger jobb">Jobb</button>
        </div>
        <div class="card-footer text-center">Leírás</div>
        </div>`;
        this.szuloElem.html(txt);
    }

    nagyKepCsere(kep){
        this.nagyKepHely.attr("src",kep);
    }

    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev);
        window.dispatchEvent(esemeny);
    }
}
export default NagyKepView;