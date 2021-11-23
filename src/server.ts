// Import de pacotes
import express from "express";

// Import de arquivos
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
