import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should login and list applications', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');

        // zjištění stavu políčka email
        const emailField = $('#email');
         console.log('Email field s displayed: ' + emailField.isDisplayed());
         console.log('Email field s enabled: ' + emailField.isEnabled());

         // zjištění stavu pole heslo
        const passwordField = $('#password');
        console.log('Password field is enabled:' + passwordField.isDisplayed());
        console.log('Password field is displayed:' + passwordField.isEnabled());

        //Najdi tlačítko pro přihlášení a jeho vypiš text pomocí getText

        const prihlasitButton = $('.btn-primary');
        console.log('Login button text:' + prihlasitButton.getText());

        // Najdi odkaz “Zapomněli jste své heslo?” a vypiš hodnotu jeho atributu href (getAttribute())
        const forgottenPassword = $('form').$('a').getAttribute('href');
        console.log('Zapomněli jste své heslo má odkaz: ' + forgottenPassword);

        //V testu se přihlaš do aplikace, použij setValue a click
        emailField.setValue('da-app.admin@czechitas.cz');
        passwordField.setValue('Czechitas123');
        prihlasitButton.click();
        
        //Najdi element který obsahuje celé jméno přihlášeného uživatele a vypiš ho do konzole (tady by se ti mohlo hodit řetězení elementů)
        const currentUser = $('.navbar-right').$('strong').getText();
        console.log('Přihlášený uživatel: ' + currentUser);

         // přechod na stránku s kurzy
         $('=Přihlášky').click();
         
         // Pomocí řetězení selektorů a $$ a getText najdi  všechny řádky tabulky s příhláškami. Dej si ale pozor, abys nehledal/a hlavičku ani zápatí tabulky.
         const radkyTabulky = $('.dataTable').$('.tbody').$$('.tr');
         console.log('There are ' + rows.length + ' rows in the table');
         rows.forEach(row => {
             console.log(row.getText());
         })

        browser.pause(5000);
        
    });
    
});