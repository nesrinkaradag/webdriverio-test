describe('Ctcatest.biz Search Test', () => {

    function wrongPassword(){
    it('should have the error message of Invalid Login or Password', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
      setTimeout(function() {}, 10);
       $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']').click();
      
       $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']').click();
    
       $('[name=\'login[username]\']').setValue("test@test.com")
      
       $('[name=\'login[password]\']').setValue("ThisIs@T3st")
     
       $('[name=\'send\']').click();
      
     genericElement = $('[class=\'error-msg\']')
     expect(genericElement).toBeDisplayed()
  
    })

  }  

  function emptyCredentials(){
    it('should have error message', (done) => {

      browser.url('http://www.ctqatest.biz/ecom')
      
       $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']').click();
  
      $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']').click();
       
      $('[name=\'login[username]\']').setValue("")
      $('[name=\'login[password]\']').setValue("")
     
      $('[name=\'send\']').click();
       
      genericElement = $('[class=\'required\']')
      expect(genericElement).toHaveClassContaining('required')
      

    })
  }  

    function rightPassword(){
    it('should have My Account title', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
      
       $('[href=\'http://www.ctqatest.biz/ecom/customer/account/\']').click();
     // search_box_element.click();
      $('[href=\'http://www.ctqatest.biz/ecom/customer/account/login/\']').click(); 
     // search_box_element.click();
     
      $('[name=\'login[username]\']').setValue("nesrinkaradag3@gmail.com")
    
      $('[name=\'login[password]\']').setValue("1234567890nes")
   
      $('[name=\'send\']').click();
    
      $('[title=\'My Account\']')
     expect(browser).toHaveTitle("My Account");

    })
  }  



  function validateProduct(){
    it('should have validate the product', (done) => {

       $('[title=\'My Account\']')
      expect(browser).toHaveTitle("My Account")
//

     $('[name=\'q\']') .setValue("shirt")
     // search_box_element.setValue("shirt")

      $('[class=\'button search-button\']').click();
      //search_box_element.click();
    
     genericElement=$('[id=\'product-collection-image-403\']')
      expect(genericElement).toBeDisplayed();
      genericElement.click();
      
      genericElement = $('[name=\'super_attribute[92]\']')
      genericElement.click();
      genericElement.selectByVisibleText("Blue")
      
      $('[name=\'super_attribute[180]\']').click();
      //search_box_element.click();
      genericElement = $('[id=\'attribute180\']')
      genericElement.click();
      genericElement.selectByVisibleText("XS");
       $('[name=\'qty\']')
      // search_box_element.setValue("2")
      browser.releaseActions()
      
       $('[class=\'add-to-cart-buttons\']').click();
     // search_box_element.click();
      genericElement = $('[title=\'Shopping Cart\']')
      expect(browser).toHaveTitle("Slim fit Dobby Oxford Shirt");
      

    })
  }

    function filterPrice(){
    
     it('should filter the price', (done) => {
      browser.url('http://www.ctqatest.biz/ecom')
     
      genericElement = $('//nav/ol/li[5]')
      
      expect(genericElement).toHaveTextContaining('SALE')
      genericElement.click();
      //
      search_box_element = $('//nav/ol/li[5]')
      expect(search_box_element).toBeDisplayed()
      expect(search_box_element).toHaveTextContaining('SALE')
      search_box_element.click();
     
      search_box_element=$('[href=\'http://www.ctqatest.biz/ecom/sale.html?price=100-200\']')
      search_box_element.click();
      search_box_element=$('.value=$100.00 - $199.99')
      expect(search_box_element).toHaveTextContaining('$100.00 - $199.99')
      search_box_element=$('#product-price-403=$140.00')
    

      })

      function validateSalesItem(){
        it('should validate Sales', (done) => {
          genericElement = $('//nav/ol/li[5]')
          expect(genericElement).toBeDisplayed()
          expect(genericElement).toHaveTextContaining('SALE')
          genericElement.click();
          
          $('[href=\'http://www.ctqatest.biz/ecom/sale.html?price=100-200\']').click();
      
          let cellData = $$('//ul/li/div/div/p[@class=\'special-price\']//span/following-sibling::span[contains(@id,\'product-price\')]')
          let i=0;  
          let prices=[];
          cellData.forEach(element=> {
              prices[i]= element.getText();
              i++;
          });
          prices.forEach(elem=> {
              let number= parseFloat(elem.substring(1,elem.length))
              expect((Boolean(number>=100))&&(Boolean(number<200))).toBe(true);
          })
        })
      }  

  }  



     //wrongPassword();

    // emptyCredentials();

   // rightPassword();

    // validateProduct();

     filterPrice();
    
     //validateSalesItem();



})