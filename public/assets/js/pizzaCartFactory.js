function PizzaCart(){

   var theSmallTotal = 0;
   var theMediumTotal = 0;
   var theLargeTotal = 0;
   
   
    function buySmallPizza(){
       theSmallTotal = 2.00
    }
   
    function buyMediumPizza(){
       theMediumTotal = 5.00
    }
   
    function buyLargePizza(){
       theLargeTotal = 80.00
    }
   
   function addSmallPizza(){
      theSmallTotal += 2.00
   }
   function addMediumPizza(){
      theMediumTotal += 5.00
   }
   function addLargePizza(){
      theLargeTotal += 50.00
   }
   
   
   function minusSmallPizza(){
      theSmallTotal -= 2.00
   }
   function minusMediumPizza(){
      theMediumTotal -= 5.00
   }
   function minusLargePizza(){
      theLargeTotal -= 50.00
   }
   
   
   
    function smallPizzaTotal(){
       return theSmallTotal
    }
    function mediumPizzaTotal(){
      return theMediumTotal
   }
   function largePizzaTotal(){
      return theLargeTotal
   }
   function grandTotalPizza(){
      return theSmallTotal + theLargeTotal + theMediumTotal
   }
   
   function checkout(){
      row1.classList.toggle("hidden")
   }
   
   
   
   function action (actionType){
   if ( actionType >= grandTotalOne.innerHTML ){
      row2.classList.remove("hidden");
         row3.classList.add("hidden");
   
         setTimeout(function(){
   
            row2.classList.add("hidden");
    
            smallTotalOne.innerHTML="0.00";
            mediumTotalOne.innerHTML="0.00"
            largeTotalOne.innerHTML="0.00"
            grandTotalOne.innerHTML="0.00"
            
               },5000)
   } 
      else if(inputAmount <= grandTotalOne.innerHTML){
      row3.classList.remove("hidden");
      row2.classList.add("hidden");
   
      setTimeout(function(){
          row3.classList.add("hidden");
             },5000)
   } 
   
   }
   
    return {
        buySmallPizza,
        buyMediumPizza,
        buyLargePizza,
        smallPizzaTotal,
        mediumPizzaTotal,
        largePizzaTotal,
        addSmallPizza,
        addMediumPizza,
        addLargePizza,
        minusSmallPizza,
        minusMediumPizza,
        minusLargePizza,
        grandTotalPizza,
        checkout,
        action,
    }
    }