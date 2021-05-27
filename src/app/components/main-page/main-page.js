import {Component} from './../shared/component/component';
import {mainPageTemplate} from './main-page-template';
import './main-page-styles.css';

export class MainPageComponent extends Component {
    constructor() {
        super(mainPageTemplate, {});
        this.bodyEl = document.querySelector('body');
        this.listeners();
    }

    listeners() {
        this.bodyEl.addEventListener('click', this.delegationEvent.bind(this));
    }

    generatePassword() {
        console.log('click')
    }

    delegationEvent(event) {
        if (event.target.classList.contains('generate-password-btn')) {
            this.generatePassword();
        }
    }
}
