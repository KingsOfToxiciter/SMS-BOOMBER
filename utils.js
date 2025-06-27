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
const { bata } = require("./sites/bata");
const { walton } = require("./sites/walton");
const { shopno } = require("./sites/shopno");
const { rokomari } = require("./sites/rokomari");
const { games } = require("./sites/games");
const { robi } = require("./sites/robi");
const { shadin } = require("./sites/shadin");
const { deen } = require("./sites/deen");
const { aroong } = require("./sites/aroong");
const { medeasy } = require("./sites/medeasy");
const { doctime } = require("./sites/doctime");

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
    bata(number, limit);
    walton(number, limit);
    shopno(number, limit);
    rokomari(number, limit);
    games(number, limit);
    robi(number, limit);
    shadin(number, limit);
    deen(number, limit);
    aroong(number, limit);
    medeasy(number, limit);
    doctime(number, limit);
  } catch (e) {
    console.error(e.message)
  }
}
module.exports = { boomber };
