import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js'
import showRatingHelper from './helpers/rating-helper.js';
import mongoose from 'mongoose';

const app = express();

try {
    const uri = 'mongodb://localhost:27017/magic-movies-feb2025';
    await mongoose.connect(uri);

    console.log('DB Connected Successfully');
} catch (error) {
    console.log('Cannot connect to DB');
    console.error(error.message);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));