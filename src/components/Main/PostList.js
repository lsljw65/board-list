import '../../css/Main/PostList.css';
import Post from './Post';

function PostList(props){

    const result=props.postList.map(
        (data)=>(<Post id={data.id} 
            name={data.name}
            kor={data.kor}
            eng={data.eng}
            mat={data.mat}/>)
    )

    return(
        <div id='Post-list'>
            {result}
        </div>
    )
}

export default PostList;