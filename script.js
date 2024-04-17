// script.js
import { apiKey } from './config.js';

async function getMatchData() {
  return await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`)
    .then(data => data.json())
    .then(data => {
      const matchList = data.data;

      if (!matchList) return [];

      const relevantData = matchList
        .filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc")
        .map(match => `${match.name}, ${match.status}`);

      document.getElementById("match").innerHTML = relevantData.map(match =>
        `<li> ${match} </li>`).join('');

      return relevantData;
    });
}

getMatchData();
