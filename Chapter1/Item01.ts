function greet(who: string) {
    console.log('Hello', who);
}

greet('TypeScript');

interface State {
    name: string;
    capital: string;
}

const states: State[] = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
];
for (const state of states) {
    console.log(state.capital);
}

// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
// const names = ['Alice', 'Bob'];
// console.log(names[2].toUpperCase());