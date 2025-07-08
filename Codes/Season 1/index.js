//console.log("hi")
// console.log(x);
// var x = 5;
// y();
// function y()
// {
//     console.log("namste dev");
// }
// var x = function()
// {
//     console.log("hi");
//     return ;
// }
// console.log(x());
// var a=5;
// console.log(window.a);
// const a =9;
// console.log(a);
// var x = function()
// {
//     console.log("Arpon");
// }
// x();
// setTimeout(function()
// {console.log("Hi")},1000);
// for(var i=0;i<5;i++)
// {
//         function x(i)
// {
//     setTimeout(function(){console.log(i)},i*1000);
// }
// x(i);    }
// function z ()
// {
//     console.log("i am call back ");
// }
// function y (hi)
// {
//     hi();
// }
// y(z);
// const num =[1,2,3];
// var sq = function(i)
// {
//  return i*i;
// }
// var cube = function(i)
// {
//     return i*i*i;
// }
// function calculate(operation)
// {
//     for(var i =0;i<num.length;i++)
//        console.log(operation(num[i]));
// }
// calculate(sq);
// calculate(cube);
// const arr = [5, 1, 3, 2, 6];
// // Task 1: Double the array element: [10, 2, 6, 4, 12]
// function double(x) {
// return x * 2;
// }
// const doubleArr = arr.map(double); // Internally map will run double function for each
// //element of array and create a new array and returns it.
// console.log(doubleArr); // [10, 2, 6, 4, 12]
const a=[1,2,3,4];
// var cube = function(i)
//  {
//      return i*i*i;
// }
// function isOdd(x) {
//     return x % 2;
//     }
// const ans = a.filter(isOdd);
// console.log(ans);
const sum=a.reduce((acc,curr)=>
{
    acc=acc+curr;
    return acc;
},0)
console.log(sum);