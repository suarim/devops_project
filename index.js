const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    const people = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Jim', age: 35 },
        { name: 'Jill', age: 40 }
    ];
    res.json(people);
});

if (require.main === module) {
    app.listen(7000, () => {
        console.log('Server is running on port 7000');
    });
}


module.exports = app;
