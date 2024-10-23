import PropTypes from 'prop-types';

const Blog = ({blog,handleBookmark,handleRead}) => {
    console.log(blog)
    const {id,title,cover,author,author_img,post_date,reading_time,hashtag}=blog;
    return (
        <div className='pr-5  mb-8'>
            <img className='w-[845px] h-[450px] ' src={cover} alt={`Cover picture of the Title: ${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex gap-4 items-center'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div>
                    <p>{author}</p>
                    <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                <p>{reading_time} Mins to Read </p>
                <button onClick={()=>handleBookmark(blog)}><img className='h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/6924/6924811.png" alt="" /></button>
                </div>
                
            </div>
           <h2 className='text-5xl font-bold'> <br />Title:{title} </h2> 
           <p> <br />{hashtag}</p>
           <button onClick={()=>handleRead(id,reading_time)} className='text-blue-600'><br />Mark As Read</button> 
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired

        
    
}
export default Blog;