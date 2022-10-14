const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'ini percobaan deploy ke platform VERCEL'
    });
});

app.use((req, res, next) => {
    return res.status(404).json({
        status: false,
        message: 'apa anda tersesat?'
    }); 
});

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        status: false,
        message: err.message
    });
});

app.listen(PORT, () => console.log('listening on port', PORT));