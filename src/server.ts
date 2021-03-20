import app from "./app";
import config from "./config";

app.listen(config.app.port, () => {
  // tslint:disable-next-line
  console.log(`Server listening on port ${config.app.port}`);
});
