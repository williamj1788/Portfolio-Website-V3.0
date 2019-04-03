const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}...`)});