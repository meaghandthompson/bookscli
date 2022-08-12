import * as readline from 'node:readline';
import { BookListPage } from './BookListPage';
import * as fs from 'fs';
import { Book } from './Book';
import { AddBookPage } from './AddBookPage';
import { askQuestion } from './question';

function printMenu() {
    console.log("");
    console.log("Book Manager");
    console.log("============");
    console.log("[A] Add a book");
    console.log("[E] Edit a book");
    console.log("[D] Delete a book");
    console.log("[L] List books");
    console.log("[Q] Quit");
    console.log("");
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shouldQuit = false;
const addBookPage = new AddBookPage();
const bookListPage = new BookListPage();
const books: Book[] = JSON.parse(fs.readFileSync("books.json", "utf8"));

async function handleMenuSelection(answer: string) {
    switch (answer) {
        case 'A':
            await addBookPage.render(rl, books);
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
        case 'Q':
            shouldQuit = true;
            break;
        default:
            console.log("Unrecognized");
    }
};



const main = async () => {
    while (shouldQuit === false) {
        printMenu();
        const menuSelection = await askQuestion(rl, "Please make a selection: ");
        await handleMenuSelection(menuSelection);
    }
    rl.close()
}

main();