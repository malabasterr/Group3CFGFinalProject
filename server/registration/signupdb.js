const mysql = require('mysql');

// Setup MySQL connection
const db = mysql.createConnection({
    host: 'inyim.c4qxxatckr37.us-east-1.rds.amazonaws.com',
    user: 'inyimadmin',
    password: 'inyim76hg$hg',
    database: 'inyim'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.post('/register', (req, res) => {
    const { firstname, lastname, username, password } = req.body;

    if(!firstname || !lastname || !username || !password) {
        return res.status(400).json({ success: false, message: 'Please provide all fields.' });
    }

    // SQL to insert the new user
    const sql = 'INSERT INTO Users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [firstname, lastname, username, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Database error.' });
        }
        res.status(201).json({ success: true, message: 'User registered successfully.' });
    });
});
