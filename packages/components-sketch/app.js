const express = require('express');
const handlebars = require('express-handlebars');

const PORT = 5005
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:component', (req, res) => {
    try {
        res.render(req.params.component, {}, (error) => {
            if (error) {
                return res.render('error', {error: error.message} )
            }
            return res.render(req.params.component)
        })
    } catch (error) {
        res.render('error', {error: error.message} );
    }
});

app.listen(PORT, () => {
    console.log(`The web server has started on http://localhost:${PORT}`);
});