import './css/styles.css'
import {MainPageComponent} from './app/components/main-page/main-page';
import {ModelOptionPassword} from '@/app/components/shared/model/model-options-password';
import {DefaultOptionsPassword} from '@/app/components/shared/model/default-options-password';
import {PasswordGenerator} from '@/app/components/shared/utils/passwordGenarator';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.querySelector('#app-root');
    const model = new ModelOptionPassword(DefaultOptionsPassword);
    const passwordGenerator = new PasswordGenerator(model);
    const mainPage = new MainPageComponent(model, passwordGenerator);

    appContainer.insertAdjacentHTML('afterbegin', mainPage.render());
});
