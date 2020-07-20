describe('Ctcatest.biz Search Test', () => {

    function wrongPassword(){
    it('should have the error message of Invalid Login or Password', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
      setTimeout(function() {}, 10);
      search_box_element = $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']') 
      search_box_element.click();
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
     // search_box_element = $('[class=\'error-msg\']')
      //expect(search_box_element).toBeDisplayed()
      search_box_element = $('[class=\'error-msg\']')
      expect(search_box_element).toBeDisplayed()
      expect($(search_box_element)).toHaveTextContaining('Invalid login or password');
  
    })
  }  

  function emptyCredentials(){
    it('should have error message', (done) => {

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
      expect(search_box_element).toHaveClassContaining('required')
      

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
      search_box_element.setValue("nesrinkaradag3@gmail.com")
      search_box_element = $('[name=\'login[password]\']')
   
      search_box_element.setValue("1234567890nes")
      
      search_box_element = $('[name=\'send\']')
      search_box_element.click();
      setTimeout(function() {}, 10);
      search_box_element = $('[title=\'My Account\']')
      expect(browser).toHaveTitle("My Account");

    })
  }  
  



  function validateProduct(){
    it('should have validate the product', (done) => {

      search_box_element = $('[title=\'My Account\']')
      expect(browser).toHaveTitle("My Account");
      setTimeout(function() {}, 10);


      search_box_element = $('[name=\'q\']') 
      search_box_element.setValue("shirt")
      setTimeout(function() {}, 10);
      

      search_box_element = $('[class=\'button search-button\']')
      search_box_element.click();
      


      

    })
  }  



   //wrongPassword();

   //emptyCredentials();

   rightPassword();

   validateProduct();



})