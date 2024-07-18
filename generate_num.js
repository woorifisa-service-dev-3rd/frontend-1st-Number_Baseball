



function getRandomUniqueNumbers() {
    const numbers = [];
    while (numbers.length < 4) {
        const randomNum = Math.floor(Math.random() * 10);
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}
export const value1 = getRandomUniqueNumbers();