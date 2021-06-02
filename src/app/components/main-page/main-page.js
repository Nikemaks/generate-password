import {Component} from './../shared/component/component';
import {mainPageTemplate} from './main-page-template';
import './main-page-styles.css';

export class MainPageComponent extends Component {
    constructor(model, passwordGenerator) {
        super(mainPageTemplate, model);
        this.bodyEl = document.querySelector('body');
        this.model = model;
        this.passwordGenerator = passwordGenerator;
        this.listeners();
    }

    listeners() {
        this.bodyEl.addEventListener('click', this.delegationClickEvent.bind(this));
        this.bodyEl.addEventListener('input', this.delegationInputEvent.bind(this));
    }

    generatePassword() {
        const password = this.passwordGenerator.generatePassword(this.model);
        const elem = document.querySelector('.password-block__input.password-generator');

        elem.value = password;
    }

    delegationClickEvent(event) {
        if (event.target.classList.contains('generate-password-btn')) {
            this.generatePassword();
        }
        if (event.target.type === 'checkbox') {
            this.changeModel(event);
        }
    }

    delegationInputEvent(event) {
        if (event.target.classList.contains('password-length')) {
            this.model.set('lengthPassword', +event.target.value);
        }
    }

    changeModel(event) {
        const field = event.target.classList[0];
        const value = event.target.checked;
        this.model.set(field, value);
    }
}
