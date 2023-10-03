class KisKepek{
    #lista={};
    constructor(szuloElem, lista) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.#htmlOsszerak();
    }

    #htmlOsszerak() {
        let txt = '<div class="kisk-container">';
        this.#lista.forEach(kep => {
            txt += `<img src="${kep.eleres}" style="max-width: 150px; height: auto;" class="img-thumbnail kisk-img" alt="${kep.cim}">`;
        });
        txt += '</div>';
        this.szuloElem.html(txt);
    }
}

export default KisKepek;
