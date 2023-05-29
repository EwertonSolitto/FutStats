export default async function getAuthentication(key) {
  const url = 'https://api-football-v1.p.rapidapi.com/leagues'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

    const res = await fetch(url, options);
    return res.json()
}