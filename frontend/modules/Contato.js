export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        const divNome = el.querySelector('.nome');
        divNome.innerText = '';
        const divBotton = el.querySelector('.div-botton');
        divBotton.innerText = '';
        let error = false;

        if (!nomeInput.value) {
            divNome.innerText = 'Campo nome é obrigatório';
            divNome.style["padding-top"] = "4px";
            divNome.style.color = 'red';
            error = true;
        }

        if (!emailInput.value && !telefoneInput.value) {
            divBotton.innerText = 'Pelo menos um dos dois campos (e-mail ou telefone) deve ser preenchido.';
            divBotton.style["margin"] = "20px 0 30px 0";
            divBotton.style.color = 'red';
        }

        if (!error) el.submit();
    }
}
