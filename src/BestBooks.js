import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";
import axios from 'axios';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("http://localhost:3001/books")
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


  addBook = (event) =>{
    event.preventDefault();

    const obj = {
      title : event.target.title.value,
      description: event.target.description.value,
      status :this.state.status,
     
    };
    console.log(obj);
    axios
    .post(`http://localhost:3001/addbook`, obj)
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
      .delete(`https://localhost:3001/deleteBook${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };












  render() 
  {

    return (
      <>
        <h2>My Essential Lifelong Learning  &amp; Formation Shelf</h2>
           
        <form onSubmit={this.props.addBook}>
          <input type="text" name="title" placeholder='title' />
          <input type="text" name="describtion" placeholder='describtion' />
          <input type="text" name="status" placeholder='status' />

          <button type='submit'>Add a book!</button>

        </form>


        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map(item => {
              return (

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg "
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3> title {item.title}</h3>
                    <p>description: {item.description}</p>
                    <Button variant="light" 
                          onClick={() => this.deleteBook(item._id)}
                        >
                          Delete This Book!
                        </Button>
                  </Carousel.Caption>
                </Carousel.Item>

              )
            }
            )}


          </Carousel>
        ) : (
          <h3>the book collection is empty.</h3>
        )}



      </>
    )
  }
}

export default BestBooks;