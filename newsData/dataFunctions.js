const fs = require('fs')

const myStories =[]

function getData(filterArr){

    const news = fs.readFileSync("../news.json")

    const parsed = JSON.parse(news)
    console.log(parsed.length, "length")
    const keyNews = parsed.filter((story)=>{

        filterArr.map((filter)=>{
            if(story.title.includes(filter)){
                myStories.push(story)
            }
        })
       
       
    })

    
    console.log(myStories)
    console.log(myStories.length)
        return myStories
}

getData(["Chin","US", "UN","war","recession", "congress","FBI","CIA","weapons"])