//Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let fruits:string[] =["Banana","Mango","Grapes","Orange","Apple","strawberries","pineapple","Kiwi"] 
if(fruits .includes("Banana")){
 console.log("i like to eat banana")

}
if(fruits .includes("Mango")){
    console.log("i love Mango")
    
   }
   if(fruits .includes("Apple")){
    console.log("i like to eat Apple")
    
   }
   if(fruits .includes("Grapes")){
    console.log("i like Grapes")
    
   }
   if(fruits .includes("kiwi")){
    console.log("i like Kiwi")
    
   }
  console.log(`\n`)
   // Make a array of your three favorite fruits and call it favorite_fruits.
   let favorite_fruits:string[] = ["Mango","Apple","Grapes"]
     console.log("favorite_fruit: " + favorite_fruits[0])
     console.log("favorite_fruit: " + favorite_fruits[1])
     console.log("favorite_fruit: " + favorite_fruits[2])
  