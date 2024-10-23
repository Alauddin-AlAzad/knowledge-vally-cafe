

const Bookmark = ({bookmark}) => {
 const {title}=bookmark;

    return (
        <div className="bg-white mx-8 text-center my-4 p-4 rounded-2xl">
            <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
    );
};

export default Bookmark;