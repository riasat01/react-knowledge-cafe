import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, post_date, hashtags } = blog;
    return (
        <div>
            <img className='w-full h-96' src={cover} alt={`cover image of bolg title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='mr-6 w-12 h-12 rounded-3xl' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> <a href="">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;