import { Book } from "./Book";

class BookListPage {
    public render(bookList: Book[]) {
        bookList.forEach(book => {
            console.log(`${book.Id} ${book.ISBN} ${book.Title} ${book.Author}`);
        })
    }
};

export {
    BookListPage
};   