import { EnvBox } from "../Env";

export default (): EnvBox => {
  return {
    API_KEY: "",
    API_URL: "https://vision.googleapis.com/v1/images:annotate?key=",
    ENVIRONMENT: "localhost",
  };
};
