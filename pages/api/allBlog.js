import * as fs from 'fs'
export default function handler(req, res) {

    fs.readdir(`blogdata`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ 'error': err })
        }
        res.status(200).json({ folder: data })
    })
}

