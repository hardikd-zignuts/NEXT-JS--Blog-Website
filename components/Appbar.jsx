import Link from 'next/link';
import React from 'react'

const Appbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Appbar
