export default async function apiFootball(key, endpoint, cache = 'no-store') {
  const url = `https://api-football-v1.p.rapidapi.com/v3/${endpoint}`
  const options = {
    method: 'GET',
    cache: cache,
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

    const res = await fetch(url, options);
    return res.json()
}