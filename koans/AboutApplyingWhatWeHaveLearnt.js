var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) { //Cancels out the nuts
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) { 
               if (products[i].ingredients[j] === "mushrooms") { //cancels out the mushrooms
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

    //var productsICanEat = [];
     
  //Maybe write a function that filters out mushroom first
/* solve using filter() & all() / any() */
    //have to heck if it contains mushrooms 


   
    /*var productsICanEat = _(products).filter(function (item){
      return !item.containsNuts  && item.ingredients.indexOf('mushrooms') === -1; //indexOf lets us go into the array to see if it's there
    })*/

    //another way
    
    var productsICanEat = _(products).filter(function (item){
      return (!item.containsNuts && !_(item.ingredients).any(function(contains) {return contains === "mushrooms"})) //goes in the array
    })



      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = (_.range(1000)).reduce(function (sum, x){ 
               if (x % 3 === 0 || x % 5 === 0){
                  return sum + x;
               } else{
                  return sum;
               }
            }) 


                /*.chain()   //This should give us an array from [0-999]
                .map(function(x) {return x % 3 === 0 || x % 5 === 0})
                .reduce(function (sum, x) { return sum + x })
                .value();*/
    /*var filteredArray = _(sum).filter(function (x) {return x % 3 === 0 || x % 5 === 0});
    var result = _(filteredArray).reduce(function(sum, x) {return sum + x});
    try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };


    _(products).chain()
    .map(function(produce){
    return produce.ingredients}) //to access the ingredients in the produce 
    .flatten()
    .reduce(function(ingredientlist, ingredient){
      if (!ingredientCount[ingredient]){
        return ingredientCount[ingredient] = 1;
      } else{
        return ingredientCount[ingredient] += 1;
      }
    })
    .value();
    //Should count the number of times that mushroom is called 
    /* chain() together map(), flatten() and reduce() */
  
    

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
