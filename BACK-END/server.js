import express from 'express';
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors())

app.get('/', (req, res) => {
    console.log(__dirname);
  res.send('Hello from the Node.js server!');
});

app.get('/myApi', (req, res) => {
    console.log("my api");
   return res.sendFile(join(__dirname,'Files/shoezilla.json'));
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
