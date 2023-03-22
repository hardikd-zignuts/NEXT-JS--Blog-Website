import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = (props) => {
    const [blog, setBlog] = useState(props.myBlog);

    return (
        <div className='text-center w-75 mx-auto'>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
            <small><i>-by {blog && blog.author}</i></small>
            <div >
                <Image
                    src={'https://source.unsplash.com/1920x1080/?computer,laptop'}
                    alt='blog-image'
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = await axios.get(`http://localhost:3000/api/getBlog?slug=${context.query.id}`)
    const myBlog = data.data

    return {
        props: { myBlog },
    }
}


export default Post
