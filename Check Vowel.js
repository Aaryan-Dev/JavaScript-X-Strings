// ou are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to printtrue, if the string contains at least one vowel, otherwise printfalse

// For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

function checkVowel(N, str) {
 
    let count=0;
for(i= 0; i<str.length; i++){
    
if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
    count++         
    }
}
    if(count>0){
        console.log("true");
    }else{
        console.log("false");
    }
}