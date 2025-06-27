const axios = require("axios");

async function games(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const num = number.slice(1);
        const response = await axios.post(
  'https://robi.mife-aoc.com/api/robi/aoc/ask/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUUjY3NjIzMTk2MDYiLCJleHAiOjE3NTA5OTI0NTl9.Ct3TrMo6GCcVgwYkO9K4rrJW70sO932Hz3sz6kdrU1w',
  new URLSearchParams({
    'msisdn': num
  }),
  {
    headers: {
      'authority': 'robi.mife-aoc.com',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'cookie': 'PLAY_SESSION=bff20cdcc76fbef4c219cf262c9b2314a0cd0b91-csrfToken=0748b69181c6dab4428792e550535f497c66b4aa-1750991561266-d9aa462543cab3ee61397407; _ga=GA1.1.2139022169.1750991565; _ga_VRYJ6N9CE9=GS2.1.s1750991564$o1$g1$t1750991587$j37$l0$h0',
      'origin': 'https://robi.mife-aoc.com',
      'referer': 'https://robi.mife-aoc.com/robi/aoc/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUUjY3NjIzMTk2MDYiLCJleHAiOjE3NTA5OTI0NTl9.Ct3TrMo6GCcVgwYkO9K4rrJW70sO932Hz3sz6kdrU1w',
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
        
        console.log(`[${i + 1}/10] games Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] games Failed:`, error.message);
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

module.exports = { games };
