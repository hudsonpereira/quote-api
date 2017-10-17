const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(cors());

const QUOTE_ARRAY = [
    ['There is nothing permanent except change.', 'Heraclitus'],
    ['Learning never exhausts the mind.', 'Leonardo da Vinci'],
    ['All that we see or seem is but a dream within a dream.', 'Edgar Allan Poe'],
    ['There is only one happiness in this life, to love and be loved.', 'George Sand'],
    ['Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.', 'Wayne Dyer'],
    ['Creativity comes from trust. Trust your instincts. And never hope more than you work.', 'Rita Mae Brown']
];

app.get('/quote', function(req, res) {
    const index = Math.floor(Math.random() * QUOTE_ARRAY.length);
    const quote = QUOTE_ARRAY[index];

    res.json({
        quote: quote[0],
        author: quote[1]
    });
});

app.listen(app.get('port'), function() {
    console.log('listening at ' + app.get('port'));
})
