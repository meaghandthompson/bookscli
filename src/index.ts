import * as readline from 'node:readline';
import { BookListPage } from './BookListPage';
import * as fs from 'fs';
import { Book } from './Book';
import { AddBookPage } from './AddBookPage';
import { Menu } from './Menu';
import { Action } from './Action';
import { EditBookPage } from './EditBookPage';
import { DeleteBookPage } from './DeleteBookPage';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let isRunning = true;
const addBookPage = new AddBookPage();
const editBookPage = new EditBookPage();
const deleteBookPage = new DeleteBookPage();
const bookListPage = new BookListPage();
const books: Book[] = JSON.parse(fs.readFileSync("books.json", "utf8"));
const menu: Menu = new Menu();

async function handleAction(action: Action) {
    switch (action) {
        case Action.AddBook:
            await addBookPage.render(rl, books);
            break;
        case Action.EditBook:
            await editBookPage.render(rl, books);
            break;
        case Action.DeleteBook:
            await deleteBookPage.render(rl, books);
            break;
        case Action.ListBooks:
            bookListPage.render(books);
            break;
        case Action.Quit:
            isRunning = false;
            break;
        default:
            console.log("Unrecognized");
    }
};

const main = async () => {
    while (isRunning) {
        menu.render();
        const action = await menu.getSelection(rl);
        await handleAction(action);
    }
    rl.close()
}

main();