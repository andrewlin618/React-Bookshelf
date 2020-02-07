import React from "react";
import axios from "axios";
// import API from "../../utils/API";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import Book from "../../components/Book";
import {BtnSubmit,BtnSave} from "../../components/Button"
import './style.css';

const MAXRESULTS = 10;
// import bookNotPictured from "../../images/bookNotPictured.jpg"

// const test = {
//     authors: ["Suzanne Collins"],
//     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
//     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
//     title: "The Hunger Games"
// }

class SearchPage extends React.Component {
    state = {
        value: '',
        toResults:false,
        results:[],
        isCollapsed:false,
        message:''
    };

    handleChange = event => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            toResults: true
        })     
        // const title = this.state.value.trim();
        console.log(this.state.value);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value + '&maxResults=' + MAXRESULTS)
        .then(res => {
            console.log("res.data.items"+res.data.items);
            if(!res.data.items){
                this.setState({
                    results: [],
                    message: "No Books Found..."
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
            console.log('validBooks'+validBooks);
        })
        .catch(() =>
            this.setState({
                results: [],
                message: "API Call Failed..."
            })
        );
    }

    handleBookSave = (id) => {
        alert("Book Shelf Under Construction...")
        // const book = this.state.results.find(book => book.id === id);
        // const bookData = {
        //     googleId:book.id,
        //     title:book.volumeInfo.title,
        //     authors:book.volumeInfo.authors,
        //     categories:book.volumeInfo.categories,
        //     publisher:book.volumeInfo.publisher,
        //     publishedDate:book.volumeInfo.publishedDate,
        //     image:book.volumeInfo.imageLinks.thumbnail,
        //     description:book.volumeInfo.description, 
        //     link:book.volumeInfo.previewLink
        // };

        // console.log(book)
        // console.log(bookData)
        // API.saveBook(bookData)
        // .then(() => console.log("succeeded!"))

    };

    render() {
        if (!this.state.toResults) {
            return(
                <div>
                    <Nav />
                    <Jumbotron />
                    <Container>
                        <h4 style={{fontWeight:'bold'}}>BOOK SEARCH</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control title" placeholder="key words in the title" aria-label="Book's Keyword" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                            <div className="input-group-append">
                                <BtnSubmit className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >SEARCH</BtnSubmit>
                            </div>
                        </div>
                    </Container>
                    <br />
                </div>
            )
            
        }

        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <h4 style={{fontWeight:'bold'}}>BOOK SEARCH</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control title" placeholder="key words in the title" aria-label="Book's Keyword" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                        <div className="input-group-append">
                            <BtnSubmit className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >SEARCH</BtnSubmit>
                        </div>
                    </div>
                </Container>
                <br />
                    <Container>
                    <h4 style={{fontWeight:'bold'}}>SEARCH RESULTS</h4>
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
                            <BtnSave onClick={() => this.handleBookSave(book.id)} isSaved = {false}></BtnSave>
                        )}
                        />
                    )}
                    <h2 className="text-center">{this.state.message}</h2>
                    </Container>
            </div>
        )
    }
};

export default SearchPage;
