import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const { id } = useRouter().query

    return (
        <div className='text-center w-75 mx-auto'>
            <h1>{id}</h1>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, facilis iure a quis excepturi optio totam magni eveniet, beatae commodi eos neque, eum expedita veniam exercitationem earum doloribus adipisci dicta? Natus eum cum in voluptates eligendi sint? Possimus, minus similique?</p>
        </div>
    )
}

export default Post
