import '../../css/Main/Post.css';

function Post(props){
    return(
        <div id='Post'>
            <span>{props.id}</span>
            <span>{props.name}</span>
        </div>
    )
}

export default Post;