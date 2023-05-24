'use client'

export default async function getAuthentication(key) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

    const res = await fetch('https://api-football-v1.p.rapidapi.com/leagues', options);
    return res.json()
}