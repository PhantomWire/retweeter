const twit = require('twit');
const config = require('./config');

const Twitter = new twit(config);

const retweet = () => {
  const params = {
    q: '#nodejs, #phantomWire',
    result_type: 'recent', // Recent means it'll retweet everything since the last time this program ran.
    lang: 'en'
  };

  Twitter.get('search/tweets', params, (err, data) => {
    if (!err) {
      const retweetId = data.statuses[0].id_str;
      Twitter.post('statuses/retweet/:id', {
        id: retweetId
      }, function(err, response) {
        if (response) {
          console.log('Retweeted!!!');
        }
        if (err) {
          console.error('Something went wrong while RETWEETING... Duplication maybe...');
        }
      });
    }
    else {
      console.error('Something went wrong while SEARCHING...');
    }
  });
};

// retweet in every 25 minutes
setInterval(retweet, 1500000);