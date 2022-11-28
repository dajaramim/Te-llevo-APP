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
   it('# 2 Verificar que el input se le puede hacer click',() =>{
     element(by.css(".item-content .item ")).click();
     browser.driver.sleep(3000);
     

  })
  it('3# No se puede acceder sin usar credenciales y aparece toast',async () => {
    await element(by.css("ion-button")).click();
    browser.driver.sleep(10000);
});


});


