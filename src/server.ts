import app from "./app";
import log from "./utils/logger";

const PORT = 3001;

app.listen(PORT, () =>
  log.info(`API Executando na port http://localhost:${PORT}`)
);
