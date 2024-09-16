require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const endpoint = 'https://api.giphy.com/v1/gifs/random?api_key=' + process.env.API_KEY + '&tag=&rating=pg-13'


async function getImage(query) {
    try {
        const response = await fetch(`${endpoint}${query}`);
        const data = await response.json;
        const url = data.data.images.original.url;
        console.log(url)
    } catch (error) {
        console.error('Error fetching the gif:' , error)
    }
}

getImage('dogs');