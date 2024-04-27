import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/login/login-page";
import MenuPage from "../pages/dashboard/menu-page";


Given('Yo ingreso a la aplicacion Inteligenio {string}', (environment) => {
  LoginPage.navigateInteligenio(environment)
})

When('Yo digito mi usuario {string} y contraseña {string}', (username,password) => {
  LoginPage.writeCredentials(username,password)
})

Then('Yo le doy click en el boton de inicio de sesion', () => {
  LoginPage.clickButtonLogin()
})
Then('Yo ingreso a la pagina principal', () => {
  MenuPage.validateTitleHomePage()
})

