const express = require('express');
const app = express();

// Endpoint utama sGTM
app.all('/*', (req, res) => {
  res.status(200).send('Server-Side GTM Placeholder - Ready for Container Import');
});

// Port untuk Vercel tidak dipakai, tapi kalau lokal testing:
if (process.env.NODE_ENV !== 'production') {
  app.listen(8080, () => console.log('Running sGTM dev server on http://localhost:8080'));
}

module.exports = app;
