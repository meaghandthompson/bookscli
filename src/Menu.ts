import * as readline from 'node:readline';
import { Action } from "./Action";
import { askQuestion } from './question';

class Menu {
    render() {
        console.log("");
        console.log("Book Manager");
        console.log("============");
        console.log("[A] Add a book");
        console.log("[E] Edit a book");
        console.log("[D] Delete a book");
        console.log("[L] List books");
        console.log("[Q] Quit");
        console.log("");
    };

    async getSelection(rl: readline.Interface): Promise<Action> {
        const menuSelection = await askQuestion(rl, "Please make a selection: ");

        switch (menuSelection) {
            case 'A':
                return Action.AddBook;
            case 'E': 
                return Action.EditBook;
            case 'D':
                return Action.DeleteBook;
            case 'L':
                return Action.ListBooks;
            case 'Q':
                return Action.Quit;
            default:
                return Action.Unknown;
        }
    }
}

export {
    Menu
};