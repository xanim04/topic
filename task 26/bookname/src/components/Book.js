import AuthorName from "./AuthorName";
import BookName from "./BookName";

function Book(props) {
    return <div className="book">
        <BookName bookname={props.bookname}/>
        <AuthorName authorname={props.authorname}/>
    </div>
}

export default Book;