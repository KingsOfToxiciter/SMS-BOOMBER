const { bikroy } = require("./sites/bikroy");
const { shikho } = require("./sites/shikho");
const { sheba } = require("./sites/sheba");
const { trucklagbe } = require("./sites/trucklagbe");
const { kotha } = require("./sites/kotha");
const { sundarban } = require("./sites/sundarban");
const { ghoori } = require("./sites/ghoori");
const { deepto } = require("./sites/deepto");
const { chokrojan } = require("./sites/chokrojan");
const { cineplex } = require("./sites/cineplex");
const { apex } = require("./sites/apex");

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
    chokrojan(number, limit);
    cineplex(number, limit);
    apex(number, limit);
  } catch (e) {
    console.error(e.message)
  }
}
module.exports = { boomber };
