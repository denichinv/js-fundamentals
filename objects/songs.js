function songs(array) {

    class Song { 
        constructor(typeList, name, time){

            this.typeList = typeList
            this.name = name
            this.time = time 
        }
    }

    const numberOfSongs = array.shift()
    const lastElement = array.pop()
    
    for (let index = 0; index < numberOfSongs; index++) {
        const curRow = array.shift().split("_")
        const [type, name ,time] = curRow 
        if(lastElement === 'all'){
               const result = new Song(type, name, time)
               console.log(result.name);
        }
        else if (type === lastElement){

            const result = new Song(type, name, time)
            console.log(result.name);
        }
    }
}
songs([2,
    'like_Replay_3:15',
   
    'ban_Photoshop_3:48',
    
    'all']
    
    )