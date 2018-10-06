# PhantomWire

What is Phantomwire Network you ask?
Our aim is to connect small streamers, all across Twitch and to help each other to grow and develop as streamers. From helping them set up a stream and chat-bots, to promoting and networking and to helping them with overlays and logo’s.

We are here to grow along with all the other small streamers, by advising everyone through the up’s and downs of streaming and to reach their goals. We are here for the people that might feel like they don’t have anyone to support them. Phantomwire Network could be your place to find those connections.

Join the community on [Discord](https://discord.gg/X29zP2N)


## Retweeter

Is a nodejs application that will search for a predefined list of tweets and retweet them from the Phantom Wire twitter account

### Developer Guide

Clone the repo
```bash
git clone git@github.com:PhantomWire/retweeter.git
```
Install required dependencies
```bash
npm install
```

The config.js file requires population of the twitter auth credentials of whichever account you want to run as (and retweet from)

Additionally there are options to change how often the program looks for new tweets (in mins - by default it's set to 25 minutes)
Run the application
```bash
npm start
```

