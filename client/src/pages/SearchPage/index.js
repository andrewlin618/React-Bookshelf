import React from "react";
import axios from "axios";
import API from "../../utils/API";
import Nav from "../../components/Nav"
import Container from "../../components/Container";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import {BtnSubmit,BtnSave} from "../../components/Button"
import './style.css';

const MAXRESULTS = 30;
class SearchPage extends React.Component {
    state = {
        value:this.props.location.state ? this.props.location.state.value : '',
        toResults:false,
        books:[],
        results:[],
        isCollapsed:false,
        message:''
    };

    componentDidMount() {
        this.setState({
            toResults:false,
        })
        this.openBookshelf();
        if(this.props.location.state){
            this.handleSubmit();
        }
    }

    openBookshelf = () => {
        API.getSavedBooks()
        .then(res => {
            this.setState({
                books:res.data,
            })
            console.log('*** Successfully opened the bookshelf! ***');
            console.log(this.state.books);
        })
        .catch((err) => console.log(err))
    }

    handleChange = event => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = (e) => {
        this.setState({
            toResults: true
        })
        console.log('Input keyword:' + this.state.value);

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value + '&maxResults=' + MAXRESULTS)
        .then(res => {
            if(!res.data.items){
                this.setState({
                    results: [],
                    message: "No Books Found...Try something else."
                })
            }
            else{
                var validBooks = res.data.items.filter( result =>
                    result.id &&
                    result.volumeInfo.title &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.categories &&
                    result.volumeInfo.publisher &&
                    result.volumeInfo.publishedDate &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.description &&
                    result.volumeInfo.previewLink
                )        
                this.setState({
                    results: validBooks,
                    message:''
                })          
            }
            console.log('*** Search Results: ***');
            console.log(this.state.results);
        })
        .catch(() =>
            this.setState({
                results: [],
                message: 'Please enter some key words.'
            })
        );
    }

    handleBookSave = (id) => {
        //If the book is not saved, save the book:
        if(!this.checkSave(id)){
            this.saveBook(id);
        }
        //If the is saved, delete the book;
        else{
            this.deleteBook(id);
        }
    };

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleSubmit();
            console.log('enter press here! ')
        }
    }

    saveBook = (id) => {
        alert("Saving book to bookshelf……");
        const book = this.state.results.find(book => book.id === id);
        const bookData = {
            googleId:book.id,
            title:book.volumeInfo.title,
            authors:book.volumeInfo.authors,
            categories:book.volumeInfo.categories,
            publisher:book.volumeInfo.publisher,
            publishedDate:book.volumeInfo.publishedDate,
            image:book.volumeInfo.imageLinks.thumbnail,
            description:book.volumeInfo.description, 
            link:book.volumeInfo.previewLink
        };           
        API.saveBook(bookData)
        .then(() => {
            console.log("Successfully saved!");
            this.openBookshelf();
        })
        .catch(() => alert('Book already exists!'))
    }

    deleteBook = () => {
        alert('Go to your bookshelf to delete!')
        this.props.history.push('/saved');
    }

    checkSave = (id) => {
        var tem = false;
        this.state.books.forEach(book => {
            if(book.googleId === id){
                tem = true;
            }
        })
        return tem;
    }

    render() {
        return(
            <div>
                <Nav />
                <br />
                <Container header={'SEARCH'}  icon='search'>
                    {/* <h4 style={{fontWeight:'bold'}}>BOOK SEARCH</h4> */}
                    <div className="input-group my-3">
                        <input type="text" className="form-control title" placeholder="" aria-describedby="button-addon2" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                        <div className="input-group-append">
                            <BtnSubmit type="button" id="button-addon2" onClick={this.handleSubmit}>SEARCH</BtnSubmit>
                        </div>
                    </div>
                </Container>
                <br />
                    {this.state.toResults ? <Container header='SEARCH RESULTS'>
                    {this.state.results.map(book => 
                        <Book 
                        key={book.id} 
                        googleId={book.id} 
                        title={book.volumeInfo.title} 
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories} 
                        publisher={book.volumeInfo.publisher}
                        publishedDate={book.volumeInfo.publishedDate} 
                        image={book.volumeInfo.imageLinks.thumbnail} 
                        description={book.volumeInfo.description}  
                        link={book.volumeInfo.previewLink} 
                        isCollapsed={this.state.isCollapsed}
                        target="_blank"
                        Buttonaaa={()=>(
                            <BtnSave onClick={() => this.handleBookSave(book.id)} isSaved = {this.checkSave(book.id)}></BtnSave>
                        )}
                        />
                    )}
                    <h5 className="text-center">{this.state.message}</h5>
                    </Container> : <br />}
                    <br /><br /><br /><br />
                    <Footer />
            </div>
        )
    }
};

export default SearchPage;

