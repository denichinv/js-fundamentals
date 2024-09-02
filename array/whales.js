const input = "Whale's can talk";
const vowels = ['A', 'E', 'I', 'O', 'U'];

let resultArray = [];

for (let i of input.toUpperCase()) {  
    for (const j of vowels) {
        if (i === j) {
            if (i === "U" || i === "E") { 
                let double = i + i;
                resultArray.push(double);
            } else {
                resultArray.push(i);
            }
        }
    }
}

console.log(resultArray.join(''));

