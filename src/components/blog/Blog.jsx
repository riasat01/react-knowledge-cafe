import PropTypes from 'prop-types';
import {BsBookmarks} from 'react-icons/bs'

const Blog = ({ blog, handleBookmark, handleReadTime }) => {
    // console.log(handleBookmark);
    const { title, cover, author, author_img, reading_time, post_date, hashtags } = blog;
    return (
        <div className='space-y-6 mb-20'>
            <img className='w-full h-96' src={cover} alt={`cover image of bolg title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='mr-6 w-12 h-12 rounded-3xl' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <span>{reading_time} min read</span>
                    <BsBookmarks onClick={() => handleBookmark(blog)} className='ml-2 text-lg'></BsBookmarks>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> <a href="">{hashtag}</a></span>)
                }
            </p>
            <button onClick={() => handleReadTime(reading_time)} className="text-purple underline">Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadTime: PropTypes.func
}

export default Blog;