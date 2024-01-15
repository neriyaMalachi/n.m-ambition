// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "./config/nodemailer";

const CONYACT_MESSAGE_FIELDS = {
  name: ":שם",
  email: ":אימייל",
  message: ":הודעה",
}

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) =>
    str += `${CONYACT_MESSAGE_FIELDS[key]}: \n ${val}}\n \n `, "")


  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      str += `<h1 className="form-heading" align="right" >${CONYACT_MESSAGE_FIELDS[key]}</h1><p className="form-answer align="right" " >${val}</p>`
    , "")
  return {
    text: stringData,
    html: `
      <html lang="en">
        <head>
          <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>N.M Ambition</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
  
              <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h1 style="color: #333; text-align: center;">N.M AMBITION</h1>
               
                <div>${htmlData}</div>
              </div>
  
            </body>
          </html>` ,
  }
}

const handler = async (req, res) => {
  if (req.method === "POST") {

    const data = req.body;

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "חובה למלא את כל השדות !" })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.name,
      })

      return res.status(200).json({ success: true })


    } catch (error) {
      console.log(error);
      console.log("error neriya");
      return res.status(400).json({ message: error.message })
    }

  }
  return res.status(400).json({ message: " error" })

}
export default handler
