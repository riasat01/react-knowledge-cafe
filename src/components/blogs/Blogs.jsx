import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div>
            <h2 className="text-3xl my-6">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark : PropTypes.func
}

export default Blogs;