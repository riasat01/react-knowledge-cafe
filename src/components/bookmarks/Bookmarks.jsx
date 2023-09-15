import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readTime}) => {
    // console.log(bookmarks);
    return (
        <>
        <h2 className='text-3xl font-semibold p-4 text-purple ml-6 mt-20 bg-purple-200 border-2 border-purple-500 rounded-lg'>Read Time: {readTime}</h2>
        <div className='bg-gray-200 rounded-lg ml-6 mt-6 p-6'>
            <h2 className='text-3xl font-semibold pb-4'>Bookmarks</h2>
            {
                bookmarks.map((bookmark, i) => <h3 className='bg-white rounded-lg p-4 mb-4 font-medium' key={i}>{bookmark.title}</h3>)
            }
            
        </div>
        </>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}

export default Bookmarks;