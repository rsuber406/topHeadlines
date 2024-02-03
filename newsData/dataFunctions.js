const fs = require('fs')

const myStories =[]


function applyFilter(str1, arr1){
    try {
        for(let z = 0; z < arr1.length; z++){
            const lowerStr = str1.toLowerCase()
            const lowerArr = arr1[z].toLowerCase()
            if(lowerStr === lowerArr){
                
                return true
            }
            
            
        }

    } catch (err) {
        console.log(err)
    }
}

function getData(filterArr){
    let keyStories = []
    keyStories.splice(0)
    const news = fs.readFileSync("./news.json")

    const parsed = JSON.parse(news)
    
  
    for(let i = 0; i < filterArr.length; i++){
        const filter = filterArr[i]
        
        for(let x = 0; x < parsed.length; x++){
            const checked = parsed[x].title.split(" ")
           const send = applyFilter(filter, checked)
           if(send){
            myStories.push(parsed[x])
           }
        }
    }

    keyStories = myStories.filter((story)=>{
        if(story.title != ""){
            return story
        }
    })
    
    
        return keyStories
}

function clearStories(){
    
    myStories.splice(0)

}

module.exports = {getData , clearStories}