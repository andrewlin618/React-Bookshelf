import React from "react";
import Nav from "../../components/Nav"
// import Jumbotron from "../../components/Jumbotron"

import Container from "../../components/Container";
import API from "../../utils/API";
import Book from "../../components/Book";
import {BtnSave} from "../../components/Button"


class SavedPage extends React.Component {
    state = {
        books:[],
        message:'Your book shelf is empty...'
    }

    componentDidMount() {
        this.openBookshelf();
    }

    openBookshelf = () => {
        API.getSavedBooks()
        .then(res => {
            console.log(res.data);
            console.log(this.state.books);
            if(res.data.length > 0){
                this.setState({
                    books:res.data,
                    message:''
                })
            }
            else{
                this.setState({
                    book:[],
                    message:'Your book shelf is empty...'
                })
            }

            console.log(this.state.books);
        }
        )
        .catch((err) => console.log(err))
    }

    deleteBook = (id) => {
        if(true){
            API.deleteBook(id)
            .then(() => {
                console.log("Successfully deleted!")
                this.openBookshelf();
                }
            )
            .catch(() => alert('Book already exists!'))

        }
    }

    render(){
        return(
            <div>
                <Nav />
                {/* <Jumbotron /> */}
                <br />
                <Container header='MY BOOKSHELF'>
                <h2 className="text-center">{this.state.message}</h2>
                {this.state.books.map(book => 
                        <Book 
                        key={book._id} 
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
                            <BtnSave onClick={() => this.deleteBook(book._id)} isSaved = {true}></BtnSave>
                        )}
                        />
                    )}
                </Container>

            </div>
        )
    }
}

export default SavedPage;
