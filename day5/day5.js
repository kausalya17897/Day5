
//odd number in a array
var a=[1,2,3,4,5,6,7,8,9,10];
 (function()
{
for(let i=0;i<a.length;i++)
{
         if(a[i]%2!==0)
{
             console.log(a[i]);
         }
     }
 })();

//2)convert all strings totitle cap insting array
var arr=["akashai","bhuva","caterine"];
(function(){
    for(let j=0;j<arr.length;j++){
        let str=arr[j];
        console.log(str.slice(0,1).toLocaleUpperCase()+str.substr(1));
    }
})();

//3)sum of array:
var arr1=[1,3,4,5];let sum=0;
(function(){
    for(let i=0;i<arr1.length;i++){
        sum=sum+arr1[i];
    }console.log(sum);
})();

//return all prime numbers in aarray:
var arr2=[2,4,5,7,8,9];
(function(){
    let prime=[];
    for(let i=0;i<=arr2.length;i++){
let y=arr2[i];
let count=0;
        for(let j=1;j<y;j++)
        {
            if(y%j=="0"){
                count++;
                
            }
        }
        if(count>1){
           
        }else{
            prime.push(y);
        }
    }console.log(prime)
})();

//Return all the palindromes in an array:

let arr3=["aba","Malayalam","yello"];
(function(){
    var palindrome=[];
    for(let i=0;i<arr3.length;i++){
        var word=arr3[i].toLocaleLowerCase();
        var rev="";
for(let j=word.length-1;j>=0;j--){
    rev=rev+word[j];
}
if(word==rev){
palindrome.push(word)
}

    }
    console.log(palindrome)
})();

//Return median of two sorted arrays of same size
var a1=[1,2,5,7,9,12];
var n=a1.length;
(function(){
var a2=[3,4,6,8,15,17];
var a3=a1.concat(a2)
console.log(a3.sort((a,b)=>a-b))
console.log("median",(a3[n]+a3[n-1])/2);
})();




//remove duplicate
var fruits=["apple","lemon","banana","apple","lemon"];
(function(){
    var unique=[...new Set(fruits)];
    console.log(unique)

})();
//Rotate an array by k time
var arr=[1,2,3,4,5]
var arr1=[];
var k=2;
( function(){
for(var i=0;i<arr.length;i++){
  let y=(i+arr.length-k)%arr.length;
  let x=arr[i];
  arr1[y]=x;
}
console.log(arr1);
})();




