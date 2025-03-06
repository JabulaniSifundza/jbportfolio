
"use strict";

const token = process.env.WHATSAPP_TOKEN;
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json());
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));
app.post("/webhook", (req, res) => {
  let body = req.body;
  console.log(JSON.stringify(req.body, null, 2));
  if (req.body.object) {
    if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0]
    ) {
      let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from;
      console.log(from);
      let btn_msg = req.body.entry[0].changes[0].value.messages[0].interactive.button_reply.id;
      console.log(btn_msg);
        axios({
            method: "POST",
            url: `https://graph.facebook.com/v17.0/134908786370593/messages`,
            data: {
            messaging_product: "whatsapp",
            to: from,
            type: "interactive",
            interactive: {
            type: "button",
            body: {
                text: "What can we do for you today?"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "start_get_help",
                            title: "Get Help"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "start_data_bundles",
                            title: "Data Bundles"
                        }
                    }
                ]
            }
        }
        },
        headers: { 
          "Content-Type": "application/json" ,
          "Authorization": "Bearer EAATUi9MntfEBOZChcSO3AVpYlqXKd5LiwWNYZCZC7UahGUzY6KZBawk3Rgrt7egBQmQIqHj2KjUWF6YbjsRjpHH1wAsjUAtOBiOuN2ZBcjcJJLro1lVDNjjwGIR6EkbJz8NAi4e8AYXA5q2Dz1sEpEZAyDfHs11ZA2Hwf60qyEX4VEQmCge6fhL6htLPZAq9ZCMnYPkdHZBwgjF9ZCbZBCPzSZB0ZD",
          "Accept-Encoding": "gzip, deflate, br"
        },
      }).catch((error) => {
        console.error('Error occurred:', error);
      })
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
