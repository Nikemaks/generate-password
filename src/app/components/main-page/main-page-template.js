export const mainPageTemplate = (model) => `
    <section class="main-page">
         <div class="container">
            <div class="password-block">
                <input type="text" class="password-block__input password-generator">
                <div class="password-block__options">
                    <ul>
                        <li>
                            <span>Password length:</span>
                            <input 
                                maxlength="30" 
                                minlength="3" 
                                value="3" 
                                class="password-length" 
                                value="${model.lengthPassword}"
                                type="number">
                        </li>
                        <li><span>Includes uppercase letters</span> 
                        <input type="checkbox" class="includesUppercaseLetters"></li>
                        <li><span>Includes lowercase letters</span> 
                        <input type="checkbox" class="includesLowercaseLetters"></li>
                        <li><span>Includes numbers</span> <input type="checkbox" class="includesNumbers"></li>
                        <li><span>Includes symbols</span> <input type="checkbox" class="includesSymbols"></li>
                    </ul>
                </div>
                <button class="btn generate-password-btn">Generate Password</button>
            </div>
        </div>
    </section>
`;
