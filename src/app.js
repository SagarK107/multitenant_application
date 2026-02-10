import express from 'express'

import tenantContext from './middleware/tenantContext.js';
import authMiddleware from './middleware/authMiddleware.js';

import 'dotenv/config'




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(authMiddleware)
app.use(tenantContext);


app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    container: true
  });
});


app.get("/projects", async (req, res) => {
  res.json({
    message: "Authenticated request",
    context: req.context,
  });
});



app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
