const axios = require('axios')

const cheerio = require('cheerio')

const fs = require('fs')

const newsReports =[]

const newsOfInterest = []



const urls = [{
    url:"https://www.foxnews.com",
    mainContainer: "article",
    subContainer: ".info header h3 a",
    host: "Fox News"
},
{
    url:"https://newsmax.com",
    mainContainer: "article",
    subContainer: "div",
    host: "Newsmax"
}
]


async function getNews(i){
   const response = await axios.get(urls[i].url)
   const $ = cheerio.load(response.data)  
    const data = $(urls[i].mainContainer)

    data.each(function(){
        title = $(this).find(urls[i].subContainer).text()

        newsReports.push({title})
    })

}