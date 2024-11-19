const fs = require('fs');

// Funkcja asynchroniczna z callbackiem
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd odczytu pliku:', err);
    } else {
        console.log('Zawartość pliku:', data);
    }
});
    