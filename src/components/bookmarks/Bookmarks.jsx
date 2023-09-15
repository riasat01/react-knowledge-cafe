import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div>
            <h2>Bookmarks</h2>
            {
                bookmarks.map((bookmark, i) => <h3 key={i}>{bookmark.title}</h3>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}

export default Bookmarks;