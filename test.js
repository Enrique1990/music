//add function...Function Presenation Slide 5
function add(num1, num2){
  return num1 + num2
}

//returning a value from a function...Slide 7
var sum = add(20, 35)

//Slide 10
function randomValue(){
  return Math.floor(Math.random()*10 +1);
}
console.log(randomValue());
function sumUp3(x,y,z){
  console.log(`the value of x is ${x}`);
  console.log(`the value of y is ${y}`);
  console.log(`the value of z is ${z}`);

  console.log(x + y + z);
}

sumUp3(randomValue(), randomValue(), randomValue());