### SETUP

npm install

### TO SCRAPE FROM STATS.NBA

npm run scrape
Scraped data is saved into src/dataset.json

### TEST LOCALLY

npm run start-server (or npm run server + npm run start). Currently the app pulls stats from stats.nba.com and transforms the data before passing it to react. Problem is, stats.nba.com blocks requests from the browser and from hosting providers.
