//1)

// const fruits = ['apple', 'banana', 'cherry'];

// Array.prototype.foreach = function(callback) {
//     for(let i = 0; i < this.length; ++i){
//         callback(this[i], i, this);
//     }
// }

// fruits.foreach(function(value, index, arr) {
//   console.log(value, index);
// });

//2)

// const fruits = [1, 2, 3];

// Array.prototype.Map = function(callback) {
//     let [...newarr] = this;
//     let array = [];
//     for(let i = 0; i < this.length; ++i){
//         array.push(callback(newarr[i], i, newarr));
//     }
//     return array;
// }

// let result = fruits.Map(function(currentValue, index, array) {
//     console.log(currentValue > 1);
    
// })

//3)

// const fruits = [1, 2, 3];

// Array.prototype.Filter = function(callback) {
//     let [...newarr] = this;
//     let array = [];
//     for(let i = 0; i < this.length; ++i){
//         if(callback(newarr[i], i, newarr) === true){
//             array.push(newarr[i]);
//         }
//     }
//     return array;
// }

// const res = [1, 2, 3, 4].Filter(function(currentValue) {
//     return currentValue > 6;
// });

// console.log(res);


//4)

// const fruits = [1, 2, 3];

// Array.prototype.Some = function(callback) {
//     let flag = 0;
//     for(let i = 0; i < this.length; ++i){
//         if(callback(this[i], i, this) === true){
//             flag = 1;
//             break;
//         }
//     }
//     if(flag === 1){
//         return true;
//     }
//     return false;
    
// }

// const res = [1, 2, 8, 3, 4].Some(function(currentValue) {
//     return currentValue >= 8;
// });

// console.log(res);

//5)

// Array.prototype.Every = function(callback) {
//     let flag = 0;
//     for(let i = 0; i < this.length; ++i){
//         if(callback(this[i], i, this) === false){
//             flag = 1;
//         }
//     }
//         if(flag === 1){
//             return false;
//         }
//         return true;
// }

// const res = [1, 2, 8, 3, 4].Every(function(currentValue) {
//     return currentValue >= 1;
// });

// console.log(res);

//6)


// Array.prototype.IndexOf = function (searchElement, fromIndex){
//     let flag = 0;
//     let index = 0;
//     if(fromIndex < 0){
//         for(let i = this.length + fromIndex ? this.length + fromIndex : 0; i < this.length; ++i){
//             if(this[i] === searchElement){
//                 flag = 1;
//                 index = i;
//                 break;
//             }
//         }}else {
//         for(let i = fromIndex ? fromIndex : 0; i < this.length; ++i){
//             if(this[i] === searchElement){
//                 flag = 1;
//                 index = i;
//                 break;
//             }
//         }
//     }

//     if(flag === 1){
//         return index;
//     }
//     return - 1;
// }

// console.log( [10, 20, 30, 40].IndexOf(40, -1));
// console.log( [10, 20, 30, 40].indexOf(40, -1));









