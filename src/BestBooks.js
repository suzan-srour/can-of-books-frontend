import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  componentDidMount = () => {
    axios
    .get(`http://localhost:3000/books`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }


  render() {
return(
    <div>
    <h1>Books</h1>
    {this.state.books.map(item =>{
      return(
        <div>
          <h3>Titel : {item.title} </h3>
          <p> Description: {item.description}</p>
          <p> Status : {item.status}</p>
        </div>
      )
    })}
    </div>
    }}
    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  


export default BestBooks;
