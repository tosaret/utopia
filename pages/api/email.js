import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("-- sendEmail --");

  if (req.method === "POST") {
    // Process a POST request

    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Ready to Send");
          resolve();
        }
      });
    });

    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;

    const mailOptions = {
      from: `<${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: "Contact Form Submission",
      html: `<p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p>`,
    };

    console.log(mailOptions);

    await new Promise((resolve, reject) => {
      // send mail
      contactEmail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
        }
      });
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        status: "success",
      })
    );
  } else {
    // Handle any other HTTP method
    res.statusCode = 404;
    res.end("Not Found");
  }
}
