import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Se Inicia aplicacion TeLLevoApp', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('/');
  });

  it('# 1 Se inicia la aplicacion Te llevo App', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('TeLlevoAPP');

  });
  // it('# 2 La pagina inicial corresponde a "Login" ',() =>{
    

  // })
  it('3# No se puede acceder sin usar credenciales',async () => {
    await element(by.css("ion-button")).click();

});


});


