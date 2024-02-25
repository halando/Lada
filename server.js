const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Adatbázisszimuláció
const users = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Ellenőrizd, hogy az e-mail cím már létezik-e
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.send('Ez az e-mail cím már foglalt.');
    }

    // Regisztráció
    users.push({ name, email, password });
    res.send('Sikeres regisztráció!');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Ellenőrizd a bejelentkezési adatokat
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.send('Hibás e-mail cím vagy jelszó.');
    }

    res.send(`Sikeres bejelentkezés! Üdvözöllek, ${user.name}!`);
});

app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen.`);
});
