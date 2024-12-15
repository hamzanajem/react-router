import { useContext } from "react"
import { BooksContext } from "../context/Bookscontext"
import { useLocation } from "react-router-dom";

export default function Books() {
    console.log('url', useLocation().search);
    const query = new URLSearchParams(useLocation().search);
    let search = query.get('search') || "";
    console.log('search', search)

    const books = useContext(BooksContext);
    let filtredbooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

    return <div>
        <h1>all books</h1>



        <ul>
            {filtredbooks.map((book) =>
                <li key={book.id}>{book.title}  by {book.author}  </li>
            )}
        </ul>
    </div>
}