let config = require('./config');
let express = require('express');
let Twitter = require('twitter');

let app = express();
let client = new Twitter(config);

let params = {count: 1};

app.get('/api/status/last', (req, res) => {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            return res.json({
                msg: 'an error has occured.',
                error: true
            });
        }

        if(tweets.length >= 1) {
            return res.json({
                data: {
                    text: tweets[0].text,
                    name: tweets[0].user.name,
                    username: tweets[0].user.screen_name
                }
            });
        }


        return res.json({
            msg: 'you have no tweets on your timeline'
        });
    });
});



app.listen(9111, () => {
    console.log('Server started on port 9111');
});