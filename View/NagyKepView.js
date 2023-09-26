
class NagyKepView {
    #kep;
    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#htmlOsszerak();
    }

    #htmlOsszerak() {
        let txt = "";
        txt += `<div class="card">
        <div class="card-header">Főkép</div>
        <div class="card-body"><img src="${this.#kep}" class="img-thumbnail" alt="Virag"></div>
        <div class="card-footer">Leírás</div>
      </div>`;
      this.szuloElem.html(txt);
    }
}
export default NagyKepView;