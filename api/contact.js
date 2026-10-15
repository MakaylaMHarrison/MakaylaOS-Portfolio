import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
  
  export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method Not Allow" });
    }
    try {
      const { email, message } = req.body;
      
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "makaylamh.93@gmail.com",
        subject: "New MakaylaOS Contact Request",
        html: ` 
          <h2> New Contact Submission </h2>
          <p><strong> Sender: ${email} </strong></p>
          <p><strong> Message: </strong></p>
          <p>${message}</p>
          `,
      });
      
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
