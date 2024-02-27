import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import webImg from "./images/react-devtools-standalone.png"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { blogs } from './data/blogs';
import { useState } from 'react';
import btnColor from "./Button.module.css"

function App() {
  let template = "";
  let [count, setCount] = useState(1)
  let [pshow, setPshow] = useState(true);
  let [status, setSatatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);

  let [menustatus, setMenustatus] = useState(false);
  let [modalsatus, setModelStatus] = useState(false);

  if (pshow) {
    template = <>


      <p>welcome to noman ali bari </p>
      <button className='btn bg-danger text-white mb-3' onClick={() => setPshow(!pshow)}>hide</button>
    </>

  } else {
    template = <button className='btn bg-danger text-white mb-3' onClick={() => setPshow(!pshow)}>show</button>
  }
  let n = 10;

  const addData = () => {
    // n = n + 1;
    setCount(count + 1);
    // console.log(n)
  }
  const addDataInTable = (a, b) => {
    console.log(a + b)

  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  return (

    <>

      {/* modal box */}
      <div>
        <button className='en' onClick={() => setModelStatus(!modalsatus)}>enquire now</button>
        <div className={`modal-overlay ${modalsatus ? 'modalShow' : ''}`}></div>
        <div className={`modal-box ${modalsatus ? 'showModal' : ''}`}>
          <h3>enquiry</h3>
        </div>
      </div>
      {/* responsive menu bar */}
      <button className='micon' onClick={() => setMenustatus(!menustatus)}>{
        (menustatus) ? <span>&times;</span> : <span>&#9776;</span>
      }</button>
      <div className={`menu ${menustatus ? 'active' : ''}`}>
        <ul>
          <li>home</li>
          <li>aboout</li>
          <li>gallary</li>
          <li>contact us</li>
        </ul>
      </div>

      {/* show and hide password */}
      <div className='container mx-auto'>
        <input type={(pstatus) ? "text" : "password"} />
        <button onClick={() => setPstatus(!pstatus)}>{(pstatus) ? "hide" : "show"}</button>

      </div>
      {/* ternary oprator use in react js */}

      <div>
        <button onClick={() => setSatatus(!status)}>{(status) ? "hide" : "show"}</button>
        {(status) ?
          <p>wlcome to new world</p>
          :
          ""

        }
      </div>
      <div>
        <p className={btnColor.error}>sharjeel module</p>
        <p className={btnColor.red}>hello world</p>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h2>sharjeel</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>sharjeel</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>sharjeel</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>sharjeel</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi </p>
          </div>
        </div>

      </div>
      <img src={webImg} alt="" style={{ width: "200px", height: "300px" }} />
      <div>

        {template}
        {count}
      </div>
      <div>
        <button onClick={addData} className='bg-danger text-success p-4' > save</button>
        <button onClick={() => addDataInTable(10, 20)} className='bg-danger text-success p-4' >add data</button>
        <Header title="hello world" description="welcome to sharjeel ahmed company" >
          <h1>welcome to ws cube tech</h1>
        </Header>
        {/* {blogs.map((v, i) => {
          return (
            <div className="row">

              <ProductItem pitems={v} key={i} />
            </div>
          )

        })} */}
        <Footer>

        </Footer>

      </div>
    </>
  );
}

export default App;




function ProductItem({ pitems }) {
  return (

    <div className='mb-4 col-md-4 col-sm-6'>
      <div className="card" >

        <div className="card-body">
          <h5 className="card-title">{pitems.title}</h5>
          <p className="card-text">{pitems.body}</p>
          <a href="#" className="btn btn-primary">buy now</a>
        </div>
      </div>
    </div>

  )
}


function Cards() {
  return (
    <div>
      welcome to ws cube tech
    </div>
  )
}
