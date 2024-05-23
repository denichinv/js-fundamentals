function solve(word, symbol, match){
    let result = "" ;
    for (let index = 0; index < word.length; index++) {
        
        if (word[index] === "_") {
           result += symbol
            
        }
        else{
            result+=word[index];
        }
       
    }
    if (result=== match) {
        console.log("Matched");
    }
    else{

        console.log("Not Matched");
    }
     
}

solve("Str_ng", "O", "String")


{ let x = 8}

console.log(x);