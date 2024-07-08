function convert(jsonObj) {

    const person = JSON.parse(jsonObj)
    
for (const key of Object.keys(person)) {

    console.log(`${key}: ${person[key]}`);
    
}
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')