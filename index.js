const express = require("express");
const { boomber } = require("./utils")

const app = express();
const port = 3000;

app.get("/msgboomber", async (req, res) => {
  const number = req.query.number;
  const limit = req.query.limit || 500;
    if (!number) {
      return res.json({ status: "error", response: "number must be required", author: "HA SA N"});
    }
   try {
    boomber(number, limit); 
     res.json({ status: "success", response: "Message Boomber successfully started", author: "HA SA N" });
   } catch (e) {
     res.json({ status: "error", response: e.message, author: "HA SA N" });
   }
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
