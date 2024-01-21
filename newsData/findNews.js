const axios = require('axios')

const cheerio = require('cheerio')

const fs = require('fs')

const newsReports =[]

const newsOfInterest = []



const urls = [{
    url:"https://www.foxnews.com",
    mainContainer: "article",
    subContainer: ".info header h3 a",
    host: "Fox News",
    sourceUrl: ".info header h3 a href"
},
{
    url:"https://www.newsmax.com/newsfront/",
    mainContainer: "ul .article_link",
    subContainer: "li a",
    host: "Newsmax",
    sourceUrl: "li a href"
}
]


async function getNews(){
    for(let i = 0; i <urls.length; i++){
        console.log(i)
        const response = await axios.get(urls[i].url)
        const $ = cheerio.load(response.data)  
         const data = $(urls[i].mainContainer)
     
         data.each(function(){
             title = $(this).find(urls[i].subContainer).text()
             host = urls[i].host
           
            
             newsReports.push({title, host})
         })
       
    }

    const stringified = JSON.stringify(newsReports)

    fs.writeFileSync("news.json" , stringified)

}

function sendBot(){
    getNews()
}

module.exports = sendBot