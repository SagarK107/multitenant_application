import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    container: true
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
