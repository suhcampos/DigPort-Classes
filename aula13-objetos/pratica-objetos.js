// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.
let cat = { name:"frajola", age: 3, color: "preto e branco"}
console.log(cat.name);
console.log(cat.age);
console.log(cat.color);
console.log(cat.name, cat.age, cat.color);
console.log(cat);
console.log("O gato se chama", cat.name, ", sua idade é", cat.age, "anos e a cor de seu pelo é", cat.color);

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.
cat.toy = "ball";
cat.age = 5;
console.log(cat);

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".
let dog = { name: "Geromel", breed: "vira-lata",
    bark: function() {console.log("Woof!");}
}
dog.bark()
console.log(dog);
console.log(dog.name);
console.log(dog.breed);
console.log(dog.name, dog.breed);

// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.
let market = [ {nome: "banana", price: 2}, {nome: "abacaxi", price: 5}, {nome: "melancia", price: 7}];
console.log(market[0]);
console.log(market[1]);
console.log(market[2]);

for (let i = 0; i< market.length; i++) {
    console.log("Product: " + market[i].nome + ", Price: $" + market[i].price);
}


// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.
let movie = {title: "Aladdin", director: "Guy Ritchie", 
    review: {rate: 5, comment: "amazing!"} };
    console.log("Rate:", movie.review.rate);
    console.log("Comment:", movie.review.comment);

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

//let scores = {
  //Alice: 5,
 // Bob: 7,
  //Charlie: 4,
//};

//let total = 0;

let scores = {
  Alice: 5,
  Bob: 7,
  Charlie: 4,
};

let total = 0;

for (let player in scores) {total += scores[player];}

console.log("Total points:", total);