// import Image from 'next/image';
import React, { useState } from 'react'
import * as fs from 'fs'

const Post = (props) => {
    const [blog] = useState(props.myBlog);
    const [src] = useState('https://source.unsplash.com/1920x1080/?computer,laptop')
    return (
        <div className='text-center w-75 mx-auto'>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
            <small><i> -by {blog && blog.author}</i></small>
            <div >
                {/* <Image
                    src={src}
                    alt='blog-image'
                    width={900}
                    height={500}
                /> */}
                <img src={src} alt="image-coding" />
            </div>
        </div>
    )
}

// *** Code For Static Site Generations *** 
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'How-to-learn-javascript' } },
            { params: { id: 'How-to-learn-python' } },
            { params: { id: 'How-to-learn-react' } },
            { params: { id: 'react-framework-2023' } }
        ],
        fallback: true,
    }
}
export async function getStaticProps(context) {

    const myBlog = await fs.promises.readFile(`blogdata/${context.params.id}.json`, 'utf-8')

    return {
        props: { 'myBlog': JSON.parse(myBlog) },
    }
}

// *** Code For Server Side Rendering *** 
// export async function getServerSideProps(context) {
//     const data = await axios.get(`http://localhost:3000/api/getBlog?slug=${context.query.id}`)
//     const myBlog = data.data

//     return {
//         props: { myBlog },
//     }
// }


export default Post
