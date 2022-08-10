import { Book } from "./Book";
import * as readline from 'readline';
import * as fs from 'fs';

class AddBookPage {
    public render(rl: readline.Interface, books: Book[]) {
        let newBook: Book = {Id: 0, ISBN: "1341414124", Title: "The Giver", Author: "Lois Lowry"};
        books.push(newBook);
        fs.writeFileSync("books.json", JSON.stringify(books));
    }
};
export {
    AddBookPage
};