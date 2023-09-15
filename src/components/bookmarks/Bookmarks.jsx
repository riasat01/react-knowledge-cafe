import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className='bg-gray-200 rounded-lg ml-6 mt-20 p-6'>
            <h2 className='text-3xl font-semibold pb-4'>Bookmarks</h2>
            {
                bookmarks.map((bookmark, i) => <h3 className='bg-white rounded-lg p-4 mb-4 font-medium' key={i}>{bookmark.title}</h3>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}

export default Bookmarks;