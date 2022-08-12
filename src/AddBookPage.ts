import { Book } from "./Book";
import * as readline from 'readline';
import * as fs from 'fs';
import { askQuestion } from "./question";

class AddBookPage {
    public async render(rl: readline.Interface, books: Book[]) {

        const isbn = await askQuestion(rl, "What is the ISBN?");
        const title = await askQuestion(rl, "What is the title?");
        const author = await askQuestion(rl, "Who is the author?");
        const id = this.getNextId(books);
        

        let newBook: Book = {Id: id, ISBN: isbn, Title: title, Author: author};
        books.push(newBook);
        fs.writeFileSync("books.json", JSON.stringify(books));
    }

    private getNextId(books: Book[]) {
        // TODO: determine new ID
        let highestId = 0;
        books.forEach(b => {
            if (b.Id > highestId) {
                highestId = b.Id;
            }
        });
        return highestId + 1;
    }
};
export {
    AddBookPage
};