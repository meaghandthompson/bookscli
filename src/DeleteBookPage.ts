import { Book } from "./Book";
import * as readline from 'readline';
import * as fs from 'fs';
import { askQuestion } from "./question";

class DeleteBookPage {
    public async render(rl: readline.Interface, books: Book[]) {
        const idEntered = await askQuestion(rl, "What is the ID of the book to delete?");
        const id: number = parseInt(idEntered);
        const bookExists = this.doesBookExist(id, books);
       
        if (!bookExists) {
            console.log(`No book found with ID ${id}`);
            return;
        }

        let filteredBooks = books.filter(b => { return b.Id !== id });
        fs.writeFileSync("books.json", JSON.stringify(filteredBooks));
    }

    /**
     * Checks if a specific book exists in a list of books.
     * 
     * @param id The id of the book to search for.
     * @param books The list of books to check.
     * @returns True if the book is found; false otherwise.
     */
    private doesBookExist(id: number, books: Book[]) {
        // Iterate through the books and see if we find the one we're looking for
        for (let i = 0; i < books.length; i++) {
            if (books[i].Id === id) {
                // Found it, so return true
                return true;
            }
        }
        // Didn't find it, so return false
        return false;
    }

};
export {
    DeleteBookPage
};