import { useContext } from "react"
import { BooksContext } from "../context/Bookscontext"
import { useParams } from "react-router-dom";

export default function BookDetails() {
    const books = useContext(BooksContext);
    const { bookId } = useParams();
    const book = books.find(book => book.id === parseInt(bookId));
    if (books.length === 0) {
        return <div>loading...</div>
    }
    if (!book) {
        return <div>book not found</div>
    }

    return (<>
        <div> <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>


        </div>

    </>)
}