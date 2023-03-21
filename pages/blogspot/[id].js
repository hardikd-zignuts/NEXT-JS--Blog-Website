import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const {id} = useRouter().query
    
    return (
        <div>
            Title : {id}
        </div>
    )
}

export default Post
