class KisKep{
    #lista;
    constructor(szuloElem, lista) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.#htmlOsszerak();
        this.szuloElem.on('click', '.kisk-img', (event) => {
            const kepIndex = $(event.target).data('id');
            this.#esemenyTrigger('kiskKattint', kepIndex);
        });
    }

    #htmlOsszerak() {
        let txt = '<div class="kisk-container">';
        this.#lista.forEach(kep => {
            txt += `<img src="${kep.eleres}" style="max-width: 150px; height: auto;" class="img-thumbnail kisk-img" alt="${kep.cim}">`;
        });
        txt += '</div>';
        this.szuloElem.html(txt);
    }
    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev);
        window.dispatchEvent(esemeny);
    }
}

export default KisKep;
