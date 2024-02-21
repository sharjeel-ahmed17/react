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
function App() {
  let template = "";
  let [count, setCount] = useState(1)
  let [pshow, setPshow] = useState(true)

  if (pshow) {
    template = <>


      <Cards />
    </>

  } else {
    template = ""
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
  return (

    <>

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
        {blogs.map((v, i) => {
          return (
            <div className="row">

              <ProductItem pitems={v} key={i} />
            </div>
          )

        })}
        <Footer />

      </div>
    </>
  );
}

export default App;




function ProductItem({ pitems }) {
  // console.log(pitems.title)
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
