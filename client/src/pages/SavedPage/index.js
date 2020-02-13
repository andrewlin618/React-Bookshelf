import React from "react";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Container from "../../components/Container";
import API from "../../utils/API";
import Book from "../../components/Book";
import {BtnSave} from "../../components/Button"

class SavedPage extends React.Component {
    state = {
        books:[],
        message:'Your bookshelf is empty...' 
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
                    message:'Total books: ' + res.data.length
                })
            }
            else{
                this.setState({
                    books:[],
                    message:'Your bookshelf is empty...'
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
                alert("Deleting……");
                console.log("Successfully deleted!")
                this.openBookshelf();
                }
            )
            .catch((err) => console.log(err))

        }
    }

    render(){
        return(
            <div>
                <Nav />
                {/* <Jumbotron /> */}
                <br />
                <Container header='MY BOOKSHELF' icon='bookshelf'>
                <h5 className="text-center">{this.state.message}</h5>
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
                <br /><br /><br /><br />
                <Footer />
            </div>
        )
    }
}

export default SavedPage;
