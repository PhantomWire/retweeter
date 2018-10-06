const twit = require('twit');
const config = require('./config');

const Twitter = new twit(config.Authorization);

const searchTerms = config.Query.searchTerms || '#PhantomWire';

console.log(`Starting twitter retweet script`);

if(!(config.Authorization.access_token || config.Authorization.access_token_secret ||
      config.Authorization.consumer_key || config.Authorization.consumer_secret) ) {
  console.log(`To run this script please populate Authorization details in config.json`);
  process.exit(1);
}

const retweet = async () => {
  const tweetsFound = await findTweets().catch(err => {
    console.error(`Error finding Tweets: ${err}`);
    return 1;
  });

  if(tweetsFound.length === 0) {
    console.log(`No new tweets were found for ${searchTerms}`);
    return 2;
  }

  tweetsFound.forEach(tweet => {
    sendRetweet(tweet.id_str)
      .then(() => console.log(`Successfully retweeted ${tweet}`))
      .catch(err => console.error(`Error retweeting ${tweet}. Error Msg: ${JSON.stringify(err)}`))
  });

  return 0;
};

const findTweets = async () => {
  const params = {
    q: searchTerms,
    result_type: 'recent',
    lang: 'en'
  };
  return Twitter.get('search/tweets', params).then(response => response.data.statuses);
};

const sendRetweet = async (id) => {
  Twitter.post('statuses/retweet/:id', { id: id })
    .then(response => console.log(response));
};


retweet();

// retweet in every 25 minutes
//setInterval(retweet, config.query.howOften * 60 * 10000);