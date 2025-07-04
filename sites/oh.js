const axios = require("axios");

async function oh(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.get('https://openportal.net/api/pin3/', {
  params: {
    'msisdn': `88${number}`,
    'ip': '114.130.72.218',
    'pi': 'contentv2_test',
    'lang': 'en',
    'click_id': 'wodfvrhuvm93jr1bj1nlsc9o',
    'carrier': '',
    'country': 'BD',
    'prev_subs': ''
  },
  headers: {
    'authority': 'openportal.net',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': '_sm=ODgwMTg0MzE1MjkyOQ==',
    'referer': 'https://openportal.net/epic_festival/content_v2/bd/?devicemodel=ORBIT%20Y21&carrier=&region=Chittagong&brand=Walton&browser=Chromium%20Mobile&u=trackydomain.com&isp=Mango%20Teleservices%20Iig%20of%20Bangladesh&ts=29900ce7-726c-4c9f-b0c3-21ff2f859648&country=BD&click_id=wodfvrhuvm93jr1bj1nlsc9o&partner=7362733&skip=yes&lang=en',
    'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
  }
});
        
        console.log(`[${i + 1}/10] oh Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] oh Failed:`, error.message);
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

module.exports = { oh };
