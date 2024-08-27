// //closure - function along with lexical scope are bundle together form a closure

// // type 1
// function x(){
//     var a=10
//     function y(){
//         console.log(a);

//     }
//    y();
// }
// x();
// //type 2

// function x1(){
//     var a1=10
//      return function y1(){
//         console.log(a1);

//     }
// }
// x1()();
// //type 3
// function x2(){
//     var a2=10
//      function y2(){
//         console.log(a2);

//     }
//     return y2;

// }
// z2=x2();
// z2();



// //type4

// function retirement(retirementage){
//     var a = " this left ."
//      return function(birthyear){
//         var age=2020-birthyear 
//         console.log((retirementage-age)+a)
//     }
// }
// retirement(66)(1990);//use this
// var z = retirement(66);//or this----both are same
// z(1990);
//type 6
function retirement3(retirementage3){
    var a3 = " this left.."
     return function currentAge1(birthyear3){
       // var age3=2020-birthyear3 
        console.log(birthyear3+a3+retirementage3)
    }
}
//retirement3(66)(1990);//use this
var z1 = retirement3("v");//or this----both are same
z1("o");

// //type5
// function retirement1(retirementage1){
//     var a12 = " this left:-)"
//       function currentAge1(birthyear1){
//         var age1=2020-birthyear1 
//         console.log((retirementage1-age1)+a12)
//     }
//     currentAge1(1990);
// }
// retirement1(66);


