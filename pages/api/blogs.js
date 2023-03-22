import * as fs from 'fs'

//if you want to add new file in data then you have to provide same name as it's slug
/**
 * It reads all the files in the blogdata directory, parses them as JSON, and sends them to the client
 * @param req - The request object. This is an object that represents the HTTP request and has
 * properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */

export default async function handler(req, res) {
    let allBlogs = []

    const blogDir = await fs.promises.readdir('blogdata', 'utf-8')
    for (let index = 0; index < blogDir.length; index++) {
        const element = await fs.promises.readFile('blogdata/' + blogDir[index], 'utf-8')
        allBlogs.push(JSON.parse(element))
    }
    res.send(allBlogs)
}

