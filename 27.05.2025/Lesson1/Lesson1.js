function strlength (str)
{
    let count = 0;
    while(str[count] != undefined){
        ++count;
    }
    return count;
}

console.log(strlength("Hello, World!")); // Output: 13

function strUpper (str)
{
    let newstr = "";
    let count = 0;
 while(str[count] != undefined){
    if(str.charCodeAt(count) >= 97 && str.charCodeAt(count) <= 122){
        newstr += String.fromCharCode(str.charCodeAt(count) - 32);
    }else {
        newstr += str[count];
    }
    ++count;
 }   
    return newstr;
}

console.log(strUpper("hello, world!")); // Output: "HELLO, WORLD!"

function num_sum (num1, num2)
{
    return num1 + num2;
}

console.log(num_sum(5, 10)); // Output: 15

function string_reverse (str)
{
    let newstr = "";
    for(let i = strlength(str) - 1; i >= 0; --i){
        newstr += str[i];
    }
    return newstr;
}
console.log(string_reverse("hello")); // Output: "olleh"

function marge_array (arr1, arr2)
{
    let count = 0;
    let newarr = [];
    for(let i = 0; i < arr1.length; ++i){
        newarr[count] = arr1[i];
        ++count;
    }
    for(let i = 0; i < arr2.length; ++i){
        newarr[count] = arr2[i];
        ++count;
    }
    return newarr;
}

console.log(marge_array([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]

function contains (str)
{
    let letter = 0;
    let count = 0;
    let keyword = "Java";
    while(str[letter] != undefined){
        if(str[letter] == keyword[count]){
            ++count;
        }else if(count != keyword.length && str[letter] != keyword[count]){
            count = 0;
        }
        ++letter;
    }
   if(count == keyword.length){
       return true;
   }else {
        return false;
    }
}

console.log(contains("Learning JavaScript")); // Output: true

function find_index (arr, num)
{
    let index = 0;

    for(let i = 0; i < arr.length; ++i){
        if(arr[i] == num){
            index = i;
            break;
        }
    }
    if(index){
        return index;
    }else {
        return "There is no such number in the array";
    }
}

console.log(find_index([3, 6, 9, 12], 9)); // Output: 2


function sum (arr)
{
   let sum = 0;

   for(let i = 0; i < arr.length; ++i){
       sum += arr[i];
   }
    return sum;
}

console.log(sum([50, 75, 100])); // Output: 225


function contains (str)
{
    let letter = 0;
    let count = 0;
    let keyword = "Java";
    while(str[letter] != undefined){
        if(str[letter] == keyword[count]){
            ++count;
        }else if(count != keyword.length && str[letter] != keyword[count]){
            count = 0;
        }
        ++letter;
    }
   if(count == keyword.length){
       return true;
   }else {
        return false;
    }
}

console.log(contains("Learning JavaScript")); // Output: true


function sum (arr)
{
   let sum = 0;

   for(let i = 0; i < arr.length; ++i){
       sum += arr[i];
   }
    return sum;
}

console.log(sum([50, 75, 100])); // Output: 225


function seven_or_odd (num)
{
    if(num % 2 == 0)
    {
        return "Even";
    }else
    {
        return "Odd";
    }
}
console.log(seven_or_odd(7)); // Output: "Odd"