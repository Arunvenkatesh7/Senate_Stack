const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send', async (req, res) => {
  const { name, email, phone, address, service, message } = req.body;

  // Set up nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

   // Email options
   let mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: 'New Message from Contact Form',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="color: #4CAF50;">New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending message');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
