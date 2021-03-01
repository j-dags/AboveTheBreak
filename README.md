### SETUP

npm install

### TO SCRAPE FROM STATS.NBA

node src/scrape.js</br>
Scraped data is saved into src/dataset.json

### TEST LOCALLY

npm run start-server (or npm run server + npm run start). </br>
Currently the app pulls stats from stats.nba.com and transforms the data before passing it to react. </br>
Problem is, stats.nba.com blocks requests from the browser and from hosting providers.
