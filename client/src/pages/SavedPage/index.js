import React from "react";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Container from "../../components/Container";
import API from "../../utils/API";
import Book from "../../components/Book";
import {BtnSave} from "../../components/Button";

class SavedPage extends React.Component {
    state = {
        books: [],
        message: '',
        isAuthenticated: this.props.isAuthenticated,
        user: this.props.user ? this.props.user : {}
    }

    componentDidMount() {
        if (this.state.isAuthenticated) this.openBookshelf();
    }

    openBookshelf = () => {
        console.log(this.state.user.email)
        API.getSavedBooks(this.state.user.email)
        // .then(res => res.data.filter(book => book.userEmail === this.state.user.email))
        .then(res => {
            console.log('Database connected!');
            console.log(res);
            if(res.data.length > 1){
                this.setState({
                    books:res.data,
                    message:`Hi ${this.state.user.given_name ? this.state.user.given_name : this.state.user.nickname}, you have ${res.data.length} books in your bookshelf.`
                })
            }
            else if (res.data.length === 1){
                this.setState({
                    books:res.data,
                    message:`Hi ${this.state.user.given_name ? this.state.user.given_name : this.state.user.nickname}, you have 1 book in your bookshelf.`
                })
            }
            else{
                this.setState({
                    books:[],
                    message:`Hi ${this.state.user.given_name ? this.state.user.given_name : this.state.user.nickname}, your bookshelf is empty.`
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
                    {!this.state.isAuthenticated && <h5 className="text-center text-danger font-weight-bold">YOU NEED TO LOG IN TO OPEN YOUR BOOKSHELF.</h5>}
                    {this.state.isAuthenticated && 
                        <>
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
                        </>
                    }
                </Container>
                <br /><br /><br /><br />
                <Footer />
            </div>
        )
    }
}

export default SavedPage;
