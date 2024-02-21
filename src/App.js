import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import webImg from "./images/react-devtools-standalone.png"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { blogs } from './data/blogs';
function App() {

  const addData = () => {
    alert("hello world");
  }
  const addDataInTable = (a, b) => {
    console.log(a + b)

  }
  return (

    <>

      <button onClick={addData} className='bg-danger text-success p-4' > save</button>
      <button onClick={() => addDataInTable(10, 20)} className='bg-danger text-success p-4' >add data</button>
      <Header title="hello world" description="welcome to sharjeel ahmed company" />
      {blogs.map((v, i) => {
        return (

          <ProductItem pitems={v} key={i} />
        )

      })}
      <Footer />


    </>
  );
}

export default App;




function ProductItem({pitems}) {
  console.log(pitems.title)
  return (
    <div>
     
    </div>
  )
}



