import * as readline from 'readline';
import { BookListPage } from './BookListPage';
import * as fs from 'fs';
import { Book } from './Book';
import { AddBookPage } from './AddBookPage';

console.log("Book Manager");
console.log("============");
console.log("[A] Add a book");
console.log("[E] Edit a book");
console.log("[D] Delete a book");
console.log("[L] List books");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const addBookPage = new AddBookPage();
const bookListPage = new BookListPage();
const books: Book[] = JSON.parse(fs.readFileSync("books.json", "utf8"));

rl.question("Please make a selection.", answer => {
    switch (answer) {
        case 'A':
            addBookPage.render(rl, books);
            break;
        case 'E':
            console.log("Edit");
            break;
        case 'D':
            console.log("Delete");
            break;
        case 'L':
            bookListPage.render(books);
            break;
        default:
            console.log("Unrecognized");
    }
    rl.close();    
});