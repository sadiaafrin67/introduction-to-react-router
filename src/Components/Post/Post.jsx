import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post


    const navigate = useNavigate()


    const postStyle = {
        border: '2px solid skyblue',
        padding: '5px',
        borderRadius: '15px',
    }
  

    const handleShowDetail = () => {
       navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
           <h4>Post of ID:</h4> 
           <p>{title}</p>
           <Link to={`/post/${id}`}>Post Details</Link>
           <Link to={`/post/${id}`}>
           <button>Show Details</button>
           </Link>
           <button onClick={handleShowDetail}>Click to show detail</button>
        </div>
    );
};

export default Post;