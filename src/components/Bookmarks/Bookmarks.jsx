import Bookmark from "../BookmaRK/Bookmark";


const Bookmarks = ({bookmark,reading}) => {
    
    return (
        <div className="md:w-1/3  bg-gray-100">
            <div>
                <p className="bg-purple-200 border-2 border-purple-600 text-center text-3xl p-4 rounded-2xl mb-6 text-purple-700">Total Spend Time: {reading}</p>
            </div>
            <div >
                <p className="text-3xl font-semibold mx-8">Bookmarked Blogs:{bookmark.length}</p>
            </div>
            {
                bookmark.map((bookmark,idx,reading)=><Bookmark key={idx}  bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;