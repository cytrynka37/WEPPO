const stdin = process.openStdin();

process.stdout.write("Podaj swoje imię: ");

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Witaj ${name}`);
    process.stdin.pause();
});