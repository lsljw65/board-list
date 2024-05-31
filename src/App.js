// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostMain from './components/PostMain';
import PostWrite from './components/PostWrite';
import PostView from './components/PostView';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // componentDidMount
  const[postList,setPostList]=useState([])
  useEffect(()=>{
    getBoardData()
  },[]);

  const getBoardData=async()=>{
    const result=await axios.get('/board')
    console.log(result)
    console.log(result.data)
    setPostList(result.data)
  }

  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostMain postList={postList}/>}/>
          <Route path="/write" element={<PostWrite/>}/>
          <Route path="/view" element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
