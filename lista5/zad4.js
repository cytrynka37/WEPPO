const fs = require('fs');

const filePath = './example.txt';

(async function () {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log("Zawartość pliku:");
        console.log(data);
    } catch (err) {
        console.error(`Błąd podczas odczytu pliku: ${err.message}`);
    }
})();