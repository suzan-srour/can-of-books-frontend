import React from 'react'; 
import Form  from './Form';
import Updated from './Updated';
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show : false,
      showFlag: false,
      status: "", 
      currentBooks : {},
    }
  }


  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("https://server-book-suzan.herokuapp.com/books")
      .then(result => {
        console.log(result.data);
        this.setState({
          books: result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
  } 


  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  addBook = (event) =>{
    event.preventDefault();

    const obj = {
      title : event.target.title.value,
      description: event.target.description.value,
      status :event.target.status.value,
     
    };
    console.log(obj);
    axios
    .post(`https://server-book-suzan.herokuapp.com/books`, obj)
    .then(result =>{
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deleteBook = (id) => {
    axios
      .delete(`https://server-book-suzan.herokuapp.com//books/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };


  handleShowUpdate = (item) => {
    this.setState({
      showFlag: true,
      currentBooks : item,
    });
  };

  handleCloseUpdate = () => {
    this.setState({
      showFlag: false,
    });
  };

  updateBook = (event) =>{
    event.preventDefault();
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status : event.target.status.value
    }
    console.log(obj)
    const id = this.state.currentBooks._id;
    axios
    .put(`https://server-book-suzan.herokuapp.com/books/${id}`, obj)
    .then(result=>{
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    this.handleCloseUpdate();
  }




  render() 
  {

    return (
      <>
      
        <div>
        <div id="form">
          <>
          <h1>My Essential Lifelong Learning & Formation Shelf</h1>
          
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={this.handleShow}

            >
              Add Book 
            </Button>
          
            <Form
              show={this.state.show}
              handleClose={this.handleClose}
              addBook={this.addBook}

            />
          </>
        </div>
        <div id="CarouselDiv">
        {this.state.books.length > 0 ? (
          <><Carousel>
                {this.state.books.map(item => {
                  return (

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg "
                        alt="First slide" />
                      <Carousel.Caption>
                        <h3>  {item.title}</h3>
                        <p>{item.description}</p>
                        <Button variant="light"
                          onClick={() => this.deleteBook(item._id)}
                        >
                          Delete This Book!
                        </Button>
                        <Button
                          variant="outline-light"
                          onClick={() => this.handleShowUpdate(item)}
                        >
                          Update This Book!
                        </Button>

                      </Carousel.Caption>
                    </Carousel.Item>

                  );
                })}
              </Carousel><Updated
                  show={this.state.showFlag}
                  handleCloseUpdate={this.handleCloseUpdate}
                  handleShowUpdate={this.handleShowUpdate}
                  updateBook={this.updateBook}
                  currentBooks={this.state.currentBooks} /></>
        ) : (
          <h3>the book collection is empty.</h3>
        )}



      </div>
      </div>
      </>
    );
  }
}

export default withAuth0(BestBooks);