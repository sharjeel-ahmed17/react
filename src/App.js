import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import webImg from "./images/react-devtools-standalone.png"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
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
      <productItem />
      <Footer />


    </>
  );
}

export default App;




function productItem() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="card" style={{ width: "18rem" }} >

            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text" style={{ color: "red", background: "blue" }}>sharjeel ali bari</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



