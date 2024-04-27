Feature: Login Inteligenio

  @CP001 @Automation @Regression
  Scenario: Open Page
    Given Yo ingreso a la aplicacion Inteligenio "qa"

  @CP002 @Automation @Regression
  Scenario: Open Page test 1
    Given Yo ingreso a la aplicacion Inteligenio "prueba"

  @CP003 @Automation @Regression
  Scenario: login successful
    Given Yo ingreso a la aplicacion Inteligenio "qa"
    When Yo digito mi usuario "prueba1" y contraseña "kkkkk"
    And Yo le doy click en el boton de inicio de sesion
    Then Yo ingreso a la pagina principal"

 Scenario: Login Test
    When Yo digito mi usuario "github" y contraseña "allureprueb"