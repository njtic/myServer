const express = require('express');
const app = express();

app.use(express.json()); // Для обработки JSON данных

app.post('/submit-form', (req, res) => {
  console.log('Данные, полученные от клиента:', req.body);
  res.status(200).send('Данные успешно отправлены.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
