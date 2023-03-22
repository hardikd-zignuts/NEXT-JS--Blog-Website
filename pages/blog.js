import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blogs")
      .then((res) => setBlogs(res.data));
  }, []);
  return (
    <>
      <h1 className="text-center">All Blogs</h1>
      <hr />
      <div className="text-center  w-75 mx-auto ">
        {blogs.map((item) => {
          return (
            <div key={item.slug} className="border border-3 m-2 p-2">
              <h3>{item.title}</h3>
              <p>{item.content.slice(0, 100)}.....</p>
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

export default Blog;
