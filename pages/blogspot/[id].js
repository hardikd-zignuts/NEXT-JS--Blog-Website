import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [blog, setBlog] = useState([]);
    const [src, setsrc] = useState('https://source.unsplash.com/1920x1080/?computer,laptop');
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const id = router.query.id
        setsrc('https://source.unsplash.com/1920x1080/?computer,laptop')
        axios
            .get(`http://localhost:3000/api/getBlog?slug=${id}`)
            .then((res) => setBlog(res.data));
    }, [router.isReady, router]);

    return (
        <div className='text-center w-75 mx-auto'>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
            <small><i>-by {blog && blog.author}</i></small>
            <div >
                <Image
                    src={src}
                    alt='blog-image'
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}

export default Post
