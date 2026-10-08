import { Resend } from "resend";

const resend = new
Resend(process.env.RESEND_API_KEY);
  
  export default async function handler(req, res) {
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "makaylamh.93@gmail.com",
        subject: "MakaylaOS Test Email",
        html: "<p>First email sent successfully from MakaylaOS🚀 </p>",
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
