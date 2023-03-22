import Link from "next/link";
import React, { useState } from "react";
import * as fs from 'fs'

const Blog = (props) => {
  const [blogs] = useState(props.allBlogs);

  return (
    <>
      <h1 className="text-center">All Blogs</h1>
      <hr />
      <div className="text-center  w-75 mx-auto ">
        {blogs.map((item) => {
          return (
            <div
              key={item.slug}
              className="border border-3 m-2 p-2 bg-secondary"
            >
              <h3>{item.title}</h3>
              <p>{item.content.slice(0, 100)}.....</p>
              <small><i>-by {item.author}</i></small> <br />
              <Link href={`blogspot/${item.slug}`}>
                <button className="btn btn-primary">Read more</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const data = await fs.promises.readdir('blogdata')
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const element = await fs.promises.readFile('blogdata/' + data[index], 'utf-8')
    allBlogs.push(JSON.parse(element))
  }
  return {
    props: { allBlogs },
  }
}
// export async function getServerSideProps(context) {
//   const data = await axios.get("http://localhost:3000/api/blogs")
//   const allBlogs = data.data
//   return {
//     props: { allBlogs },
//   }
// }
export default Blog;
