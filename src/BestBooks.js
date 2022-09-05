import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'
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
      .get("http://localhost:3000/books")
      .then(result => {
        console.log(result.data);
        this.setState({
          books: result.data
        })
      }

      )
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>


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