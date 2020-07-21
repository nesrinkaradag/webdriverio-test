describe('Ctcatest.biz Search Test', () => {

    function wrongPassword(){
    it('should have the error message of Invalid Login or Password', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
   
      $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']').click(); 
     
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']') 
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[name=\'login[username]\']')
      search_box_element.setValue("test@test.com")
      search_box_element = $('[name=\'login[password]\']')
      search_box_element.setValue("ThisIs@T3st")
      search_box_element = $('[name=\'send\']')
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[class=\'error-msg\']')
      expect(search_box_element).toBeDisplayed()
      expect(search_box_element).toHaveTextContaining('Invalid login or password')
    })
  }  

  function emptyCredentials(){
    it('should have error message Required Fields', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
      setTimeout(function() {}, 10);
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']') 
      search_box_element.click();
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']') 
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[name=\'login[username]\']')
      search_box_element.setValue("")
      search_box_element = $('[name=\'login[password]\']')
      search_box_element.setValue("")
      search_box_element = $('[name=\'send\']')
      search_box_element.click();
      setTimeout(function() {}, 10);      
      search_box_element = $('[class=\'required\']')
      expect($(search_box_element)).toHaveTextContaining('* Required Fields');
    })
  }  

  function rightPassword(){
    it('should have My Account title', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
      setTimeout(function() {}, 10);
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']') 
      search_box_element.click();
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']') 
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[name=\'login[username]\']')
      search_box_element.setValue("gulhan.karali@gmail.com")
      search_box_element = $('[name=\'login[password]\']')
      search_box_element.setValue("Succulent4787!")
      search_box_element = $('[name=\'send\']')
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[title=\'My Account\']')
      expect(browser).toHaveTitle("My Account");
    })
  }  

  function validateProduct(){
    it('should validate the product', (done) => {
      browser.maximizeWindow()
      search_box_element = $('[title=\'My Account\']')
      expect(browser).toHaveTitle("My Account");
      setTimeout(function() {}, 10);
      search_box_element = $('[name=\'q\']') 
      search_box_element.setValue("shirt")
      search_box_element = $('[class=\'button search-button\']')
      search_box_element.click();
      search_box_element= $('[id=\'product-collection-image-403\']')
      expect(search_box_element).toBeDisplayed()
      search_box_element.click();
      search_box_element = $('[id=\'attribute92\']')
      search_box_element.click();
      search_box_element.selectByVisibleText("Blue")
      setTimeout(function() {}, 10);
      search_box_element = $('[id=\'attribute180\']')
      search_box_element.click();
      search_box_element.selectByVisibleText("XS")
      search_box_element = $('[name=\'qty\']')
      search_box_element.setValue("2")
      browser.releaseActions()
      setTimeout(function() {}, 30);
      search_box_element = $('[class=\'add-to-cart-buttons\']')
      search_box_element.click();
      genericElement = $('[title=\'Shopping Cart\']')
      expect(browser).toHaveTitle("Shopping Cart");
    })
  }  

  function validateSalesItem(){
    it('should validate Sales', (done) => {
      genericElement = $('//nav/ol/li[5]')
      expect(search_box_element).toBeDisplayed()
      expect(search_box_element).toHaveTextContaining('SALE')
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/sale.html?price=100-200\']') 
      search_box_element.click();

      let cellData = $$('//ul/li/div/div/p[@class=\'special-price\']//span/following-sibling::span[contains(@id,\'product-price\')]')
      
      let i=0;  
      let prices=[];

      cellData.forEach(element=> {
          prices[i]= element.getText();
          i++;
      });

      prices.forEach(element=> {

          let number= parseFloat(element.substring(1,element.length))
          expect((Boolean(number>=100))&&(Boolean(number<200))).toBe(true);

      })
    })
  }  
  wrongPassword();

  emptyCredentials();

  rightPassword();

  validateProduct();

  validateSalesItem();



})