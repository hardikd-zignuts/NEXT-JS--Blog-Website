import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [blog, setBlog] = useState([]);
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { id } = router.query
        axios
            .get(`http://localhost:3000/api/getBlog?slug=${id}`)
            .then((res) => setBlog(res.data));
    }, [router.isReady,router]);

    return (
        <div className='text-center w-75 mx-auto'>
            <h1>{blog.title}</h1>
            <hr />
            <p>{blog.content}</p>
        </div>
    )
}

export default Post
