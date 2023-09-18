import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const navigate = useNavigate()
    const {postId} = useParams()
    const post = useLoaderData()

console.log(postId)
    const {id, title, body} = post

    const handleGoback = () => {
       navigate(-1)
    }


    return (
        <div>
            <h2>Details of post: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PostDetails;