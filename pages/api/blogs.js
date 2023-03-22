import * as fs from 'fs'



export default async function handler(req, res) {
    let allBlogs = []

    const blogDir = await fs.promises.readdir('blogdata', 'utf-8')
    for (let index = 0; index < blogDir.length; index++) {
        const element = await fs.promises.readFile('blogdata/' + blogDir[index], 'utf-8')
        allBlogs.push(JSON.parse(element))
    }
    res.send(allBlogs)
}

