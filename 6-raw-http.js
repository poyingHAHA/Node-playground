const https = require('http') // See Node document

const url = "http://api.weatherstack.com/current?access_key=a997d7fc33f7845d73c792db32313280&query=Taiwan";

const request = https.request(url, (response) => {
    // Since we are using the core node nodule here, we're going to have to set up things that you might not
    // think to be necessary. For example, in this callback , we don't hac access to the complete response body.
    // Instead, we go ahead and grab the individual chunks that come through because HTTP data could be streamed in multiple parts.
    // It means we have to listen for these individual chunks to come in and we also have to listen for when all
    // chunks have arrived and the request is done. Right here, we can start this process by using response.on is a function and it allows us to register a handler.
    // There are a few different events we can register callback functions for. one of them is 'data'.

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(data)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('An error: ', error)
})

request.end()