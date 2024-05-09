import '../../css/Main/Post.css';

function Post(props){
    return(
        <div id='Post'>
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.kor}</span>
            <span>{props.eng}</span>
            <span>{props.mat}</span>
        </div>
    )
}

export default Post;