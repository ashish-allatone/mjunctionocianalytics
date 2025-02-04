const express = require("express");
const axios = require("axios");
const qs = require("qs");
const cors = require("cors");

const app = express();
const port = 8100;

app.use(cors());

app.use((req, res, next) => {
  //allow access from every, elminate CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Credentials", true);
  //set the allowed HTTP methods to be requested
  res.setHeader("Access-Control-Allow-Methods", "POST");
  //headers clients can use in their requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  //allow request to continue and be handled by routes
  next();
});

app.get("/token", async (req, res) => {
  try {
    const url =
      "https://idcs-348223c2dbb040db95194c3e33375985.identity.oraclecloud.com/oauth2/v1/token"; // https://cloud.oracle.com/identity/domains/ocid1.domain.oc1..aaaaaaaazmpnugqbwnka6sibeze4ouwxqn7pnqihqop3ixwtg6t3hi7ndh4a?tenant=assetscare&domain=Default&region=ap-mumbai-1

    const authHeader =
      "Basic bnN0eDJ2ZzI1ZzVod2pxcHl3aWtwYTZpMndqeHVuNXFfQVBQSUQ6NDA0MDUzNDUtY2FjYy00YjRmLTk1OWMtYjY0N2MwYzM4NmFk";
    const username = "oacuser";
    const password = "@Ram84lari85#";
    const scope =
      "https://nstx2vg25g5hwjqpywikpa6i2wjxun5q.analytics.ocp.oraclecloud.comurn:opc:resource:consumer::all";

    const data = qs.stringify({
      grant_type: "password",
      username: username,
      password: password,
      scope: scope,
    });

    const config = {
      method: "post",
      url: url,
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: data,
    };

    const response = await axios(config);
    res.json({ token: response.data.access_token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://140.245.27.67/:${port}`);
});
