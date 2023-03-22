import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

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

export async function getServerSideProps(context) {
  const data = await axios.get("http://localhost:3000/api/blogs")
  const allBlogs = data.data

  return {
    props: {allBlogs},
  }
}
export default Blog;
