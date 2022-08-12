import * as readline from 'node:readline';

const askQuestion = (rl: readline.Interface, question: string) => {
    return new Promise<string>((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

export { askQuestion };