function sortArray(arr) {

    let sortedArray = arr.sort((a,b) => a.length - b.length || a.localeCompare(b) )
    console.log(sortedArray.join('\n'));
    
}
sortArray([ 'test', 'Deny', 'omen', 'Default' ])