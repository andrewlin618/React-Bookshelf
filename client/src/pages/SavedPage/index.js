import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import API from "../../utils/API";
import Book from "../../components/Book";
import {BtnSave} from "../../components/Button"


class SavedPage extends React.Component {
    state = {
        books:[]
    }

    handleDelete(){
    }

    componentDidMount() {
        this.openBookshelf();
    }

    openBookshelf = () => {
        API.getSavedBooks()
        .then(res => {
            console.log(res.data);
            console.log(this.state.books);
            this.setState({
                books:res.data,
            })
            console.log(this.state.books);
        }
        )
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                <h4 style={{fontWeight:'bold'}}>SAVED BOOKS</h4>
                {this.state.books.map(book => 
                        <Book 
                        key={book.googleId} 
                        googleId={book.googleId} 
                        title={book.title} 
                        authors={book.authors}
                        categories={book.categories} 
                        publisher={book.publisher}
                        publishedDate={book.publishedDate} 
                        image={book.image} 
                        description={book.description}  
                        link={book.link} 
                        target="_blank"
                        Buttonaaa={()=>(
                            <BtnSave onClick={() => this.handleBookSave(book.id)} isSaved = {false}></BtnSave>
                        )}
                        />
                    )}
                </Container>

            </div>
        )
    }
}

export default SavedPage;
