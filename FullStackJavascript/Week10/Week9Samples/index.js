const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});

app.set('view engine', 'ejs');

const storesRouter = require('./routes/stores')
app.use('/stores', storesRouter);

app.use((req, res) => {
    res.status(404).render('404');
});