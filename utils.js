const { bikroy } = require("./bikroy");
const { shikho } = require("./shikho");
const { sheba } = require("./sheba");
const { trucklagbe } = require("./trucklagbe");
const { kotha } = require("./kotha");
const { sundarban } = require("./sundarban");
const { ghoori } = require("./ghoori");
const { deepto } = require("./deepto");

async function boomber(number, limit) {
  try {
    bikroy(number, limit);
    shikho(number, limit);
    sheba(number, limit);
    trucklagbe(number, limit);
    kotha(number, limit);
    sundarban(number, limit);
    ghoori(number, limit);
    deepto(number, limit);
  } catch (e) {
    console.error(e.message)
  }
}
module.exports = { boomber };
