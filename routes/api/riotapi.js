const fetch = require('node-fetch');

const API_KEY = 'RIOTAPIKEY';


//Basic outline, needs editing





async function getPlayerData(region, name) {
  const response = await fetch(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Summoner not found');
  }
  const PlayerData = await response.json();
  return PlayerData;
}

module.exports = {
  getPlayerData
};
