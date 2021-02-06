const APIKEY = process.env.APIKEY;

export default async function handler(req, res) {
  const from = req.body.from;
  const name = req.body.name;
  const message = req.body.message;
  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APIKEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: from,
            },
          ],
          subject: "New Contact Form Entry from: " + name,
        },
      ],
      from: {
        email: "business@jasonpraful.co.uk",
      },
      bcc: {
        email: "jason.praful@gmail.com",
      },
      reply_to: {
        email: "jason.praful@gmail.com",
      },
      content: [
        {
          type: "text/html",
          value: `
              <h1> New Contact Form Entry </h1>
              <div><h2>Name: </h2>${name}</div>
              <div><h2>From: </h2>${from}</div>
              <div><h2>Message: </h2>${message}</div>
              `,
        },
      ],
    }),
  })
    .then((response) => {
      if (response.status == 202) {
        return res.status(200).end();
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).end();
    });
}
