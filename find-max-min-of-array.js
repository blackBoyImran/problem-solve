

let arr1 = [10,22, 303,103, 12, 304, 302, 44, 20,399]
let arr2 = [45,534,342,2545,34,64,24,56,4,34,34,3454,3]
let friendsList = ["Tania", "Imran", "Shamia", "Raja", "Tania", "Tania", "Tania", ]
// find max value of number array



 let arr1Max = arr1[0];
 let arr2Max = arr1[0];
 let arr1Min = arr1[0];
 let arr2Min = arr2[0];


 ///////      arr1 max value check 
 for(let i = 0; i<arr1.length; i++){
     let element = arr1[i];
     if(element > arr1Max){
         arr1Max = element;
     }
 }

 for(let i = 0; i<arr1.length; i++){
    let element = arr1[i];
    if(element < arr1Min){
        arr1Min = element;
    }
}



///////     another way 
let arr1MaxValue = arr1.reduce(function(a,b){
    return a >= b ? a : b;
})
let arr1MinValue = arr1.reduce(function(a,b){
    return a <= b ? a : b;
})






 ///////      arr1 max value check 
 for(let i = 0; i<arr2.length; i++){
    let element = arr2[i];
    if(element > arr1Max){
        arr2Max = element;
    }
}

for(let i = 0; i<arr2.length; i++){
    let element = arr2[i];
    if(element < arr1Min){
        arr2Min = element;
    }
}

///////     another way 
let arr2MaxValue = arr2.reduce(function(a,b){
    return a >= b ? a : b;
})
let arr2MinValue = arr2.reduce(function(a,b){
    return a <= b ? a : b;
})





console.log("\narray1 \nArray 1 max value : "+arr1Max);
console.log("Array 1 min value : "+arr1Min);
console.log("Array 1 max value another way : "+arr1MaxValue);
console.log("Array 1 min value another way : "+arr1MinValue);
console.log("\narray 2")

console.log("Array 2 max value : "+arr2Max);
console.log("Array 2 min value : "+arr2Min);
console.log("Array 2 max value another way : "+arr2MaxValue);
console.log("Array 2 min value another way : "+arr2MinValue);



let FriendsNameShorted = friendsList.reduce(function(a,b){
    return a.length <= b.length ? a : b;
})
let FriendsNameLeargest = friendsList.reduce(function(a,b){
    return a.length >= b.length ? a : b;
})
console.log("\nFriend list array \nSmall name of the friend List : "+FriendsNameShorted);
console.log("Big name of the friend List : "+FriendsNameLeargest);









