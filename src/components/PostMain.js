import '../css/PostMain.css';
import Pagination from './Main/Pagination';
import PostList from './Main/PostList';

function PostMain(props){
    return(
        <div id='post-main'>
            <PostList postList={props.postList}/>
            <Pagination/>
        </div>
    )
}

export default PostMain;