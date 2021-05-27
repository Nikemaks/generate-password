import './css/styles.css'
import {MainPageComponent} from './app/components/main-page/main-page';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.querySelector('#app-root');

    const mainPage = new MainPageComponent();

    appContainer.insertAdjacentHTML('afterbegin', mainPage.render());
});
