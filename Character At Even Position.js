// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr

// You have to print all the characters in the string, which are present at even indexes

// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the output will be

// n
// u
// u

// The characters stored at odd positions aren - index 0,u - index 2,l - index 4, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

function charAtEvenPos(N,str) {
    for(i=0; i<str.length; i++){
    
    if(i%2==0){
        console.log(str[i]);
    }
}
}