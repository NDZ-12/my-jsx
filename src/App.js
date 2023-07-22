
import './App.css';

import React from 'react'
// import MyButton from './MyButton';
import Emoji from './Emoji';
import ListRender from './ListRender';


const Body = () => {
  return (
    <div id="mainBody" className='Test1' style={{color:'red'}}>
      <h1>Main Body section </h1>


    </div>
  )
}


 const Title = () => {
  return (
    <h1>React Developement page </h1>
  )
}


const App = () => {

  const myheading =<h1>Hello Niranjan </h1>;
  return (
    <div id="conatainer">
{myheading}
<Title />
<Body />
{/* <MyButton/> */}
<ListRender/>
<Emoji />
    </div>
  )
}


export default App;
