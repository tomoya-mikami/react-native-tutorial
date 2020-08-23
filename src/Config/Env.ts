import Constants from "expo-constants";
import Local from "./Local/Box";
import Production from "./Production/Box";

export interface EnvBox {
  API_KEY: string;
  API_URL: string;
  ENVIRONMENT: string;
}

export default (): EnvBox => {
  const env = Constants.manifest.releaseChannel;
  if (env !== undefined) {
    switch (env) {
      case "prod":
        return Production();
      default:
        return Local();
    }
  }

  return Local();
};
