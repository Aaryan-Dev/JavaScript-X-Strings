// You are given a string, whose size is stored in a variable with the nameN

// You have to print all the characters in the string in reverse order, on a new line

// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the required output will be

// l
// u
// p
// u
// r
// n

function printCharReverse(N,str) {
    
    for(i=str.length-1; i>=0; i--){
        console.log(str[i]);
    }
}
