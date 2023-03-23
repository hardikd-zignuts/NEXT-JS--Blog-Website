import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json(req.body)
        console.log(req.body)
        const folder = await fs.promises.readdir('contactdata')
        console.log(folder)
        fs.promises.writeFile(`contactdata/${folder.length + 1}.json`, JSON.stringify(req.body))
    } else {
        res.status(200).json(['GET Request'])
    }
}