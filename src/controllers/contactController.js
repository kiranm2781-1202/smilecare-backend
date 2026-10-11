exports.sendContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    // TODO: send email via nodemailer
    res.json({ success: true, message: 'Message received. We will contact you soon.' });
  } catch (err) { next(err); }
};
