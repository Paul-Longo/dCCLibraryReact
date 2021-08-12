import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import CreateBook from './CreateBook/CreateBook';
import Footer from './Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "Moby Dick", author: "Herman Melville"},
            {title: "The Canterbury Tales", author: "Geoffrey Chaucer"},
            {title: "Jesus Calling", author: "Sarah Young"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0) {
           tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    bookCreator = (newBook) => {
        console.log('From the bookCreator on App component', newBook);
        this.books.push(newBook);
        this.setState=({
            bookNumber: this.books.length - 1
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
                <CreateBook createNewBook={this.bookCreator} />
                <Footer />
            </div>
        )
    }
}

export default App;