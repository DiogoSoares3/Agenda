import validator from 'validator';

export default class Login {
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
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        const divEmail = el.querySelector('.email');
        const divPassword = el.querySelector('.password');
        divEmail.innerText = '';
        divPassword.innerText = '';
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            divEmail.innerText = 'Coloque um e-mail válido';
            divEmail.style["padding-top"] = "4px"
            divEmail.style.color = 'red';
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            divPassword.innerText = 'Sua senha deve ter entre 3 e 50 caracteres';
            divPassword.style["padding-top"] = "4px"
            divPassword.style.color = 'red';
            error = true;
        }

        if (!error) el.submit();
    }
}
