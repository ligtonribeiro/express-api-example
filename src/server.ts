import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`API Executando na port ${PORT}`));
