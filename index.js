const express = require("express");
const { boomber } = require("./utils")

const app = express();
const port = 3000; 

app.get("/sms-boomber", async (req, res) => {
  const number = req.query.number;
  const limit = parseInt(req.query.limit) || 500;

  if (!number) {
    return res.status(400).json({
      status: "error",
      response: "📵 number must be provided",
      author: "HA SA N"
    });
  }
  
  const isValid = /^[0-9]{11}$/.test(number);

  if (!isValid) {
    return res.status(400).json({
      status: "error",
      response: "📵 Invalid number! Must be 11 digits and numeric (e.g. 01XXXXXXXXX)",
      author: "HA SA N"
    });
  }

  try {
    boomber(number, limit);

    return res.status(200).json({
      status: "success",
      response: "📨 SMS Bomber started successfully",
      author: "HA SA N"
    });
  } catch (error) {
    console.error("❌ Bomber Error:", error);

    return res.status(500).json({
      status: "error",
      response: error.message || "Internal Server Error",
      author: "HA SA N"
    });
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
