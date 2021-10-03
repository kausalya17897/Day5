//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var num=5;
function addFive(num){
    return num+5;
}
var result=addFive(5);
console.log(result);

//Write a function called “getOpposite”.
//Given a number, return its opposite
var num=5;
function getOpposite()){
return num*-1
}
var result=getOpposite(num);
console.log(result);

//Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
   return min*60;
}
var secs = toSeconds(min)
console.log(secs);

//Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
    return +mystr
}
var myint = toInteger(mystr)
console.log(myint);

//Create a function that takes an array and returns the first element.
var arr = [1,2,3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr)
console.log(data);

//Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return arr*60*60;
}
var data = hourToSeconds(arr)
console.log(data);

//Create a function that takes height and width and finds the perimeter of a rectangle
function findPerimeter(num1,num2) {
    return 2(num1+num2)
}
var peri = findPerimeter(6,7);
console.log(peri);

//Given two numbers, return true if the sum of both numbers is less than 100.
function lessThan100(num1,num2) {
let y=num1+num2;
if(y<100){
    return true;
}else{
    return false;
}
}
var res = lessThan100(22,15)
console.log(res);

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3);
console.log(res);

//Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*4+pigs*4;
}
var legs = CountAnimals(2,3,5);
console.log(legs);

//Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2) {
    return num1*num2*60;
}
var fps = frames(1,2);
console.log(fps);

//Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
    if(num1%5=="0"){
return true;
    }else{
        return false;
    }
}
var divisible = divisibleByFive(5)
console.log(divisible);

//Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

function isEven(num){
    if(num%2=="0"){
        return true;
    }else{
        return false;
    }
   }
   var even = isEven(5);
   console.log(even);

   //Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2){
    if(num1%2=="0"&&num2%2=="0"){
        return true
    }else{
        return false
    }
   }
   console.log(areBothOdd());

   //Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space


function getFullName(firstName, lastName){
    return firstName+lastName;
   }
   getFullName("GUVI", "GEEK");

   //Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word1){
    return word1.length;
   }
   getLengthOfWord("GUVI");

   //Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2){
    if(word1.length==word2.length){
        return true;
    }
   }
   isSameLength('GUVI',"GEEK");

   //Create a function to calculate the distance between two points defined by their x, y coordinates
   
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((x2-x1),2);
}
console.log(getDistance(100, 100, 400, 300));

//Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
    if(array.length=="0"){
        return undefined;
    }else{
    return array[n]
   }}
   console.log(getNthElement([1,3,5],1))

   //Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(array){
    if(array.length=="0"){
        return -1;
    }else{
    return array[n]
   }}
   console.log(getLastElement([1, 2, 3, 4]));

   //Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

va
var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
 return obj.mykey
}
console.log(getProperty(obj,"mykey"));

//Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
 mykey: "value"
};
function addProperty(obj, key){
 obj.mykey=true
 return obj
}
console.log(addProperty(obj, "mykey"));

//Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
Input:
removeProperty(obj, “name”);
Output:
undefined

function removeProperty(obj, key){
 delete obj.name
}
console.log(removeProperty(obj,"name"));


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
 let positive=0;
 let negative=0;
 for(let i=0;i<arr.length;i++){
     if(arr[i]>0){
         positive=positive+arr[i];
     }else{
         negative=negative+arr[i];
     }
 }
 return positive+" "+negative
}
console.log(ar2);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
function getPositives(ar)
{
    let arr=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]>0){
            arr.push(arr[i])
        }
    }return arr
 
}

console.log(ar2);

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
    let res="";
    for(var i=0;i<n,i++){
        res=res+ Math.pow(2,i)
    }
  
  return res.replace(/,\s*$/,"");
}
console.log(powersOfTwo(2));

//Find the maximum number in an array of numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function findMax(ar)
{
    let maximum=0;
    for(var i=0;i<ar.length;i++)
{
    if(maximum>ar[i]){
          
    }else{
     maximum=ar[i]
    }
   
} return maximum
// your code here
}
var max = findMax(ar);
console.log("Max: ", max);

//Print the first 100 prime numbers
printPrimes(100);


// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    if(n!=1&&n!=0){
        for(let i=2;i<=n/2;i++)
        {
        
if(n%i=="0")
{
    return false;
}else{
    return true;;
     }
        }
}return false
 }
 

 //Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var n = 0;
    var i = startAt;
    
    while(n < nPrimes)
    {
    if (isPrime(i))
    {
    console.log(n, " → ", i);
    n++;
    }
    
    i++;
    }
 
}
// Returns true if a number is prime
function isPrime(n)
{
    if(n!=1&&n!=0){
        for(let i=2;i<=n/2;i++)
        {
        
if(n%i=="0")
{
    return false;
}else{
    return true;;
     }
        }
}return false
 
}

//reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let sum="";
   for(let i=s.length-1;i>=0;i--){
       sum=sum+s[i];
   } return sum;
}

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}

//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    let sum=0;
    s=s.split(",").map(x).map((a)=>sum=sum+a)

}

