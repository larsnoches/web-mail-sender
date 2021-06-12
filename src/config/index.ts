import fs from 'fs-extra';
import path from 'path';

const httpServerPort = 8080;
const mailServerPort = 587;

type configType = {
  server?: {
    port?: number;
  };
  mail?: {
    server?: string;
    port?: number;
    secure?: boolean;
    email?: string;
    password?: string;
  };
};

const loadJsonFile = (fileName: string): configType => {
  const result = fs.readJsonSync(
    path.join(__dirname, '..', '..', fileName),
  ) as configType;
  return result;
};

function loadConfig(): configType {
  const config = loadJsonFile('config.json');
  return {
    mail: {
      port: config?.mail?.port ?? mailServerPort,
      email: config?.mail?.email ?? '',
      password: config?.mail?.password ?? '',
      secure: config?.mail?.secure ?? false,
      server: config?.mail?.server ?? '',
    },
    server: {
      port: config?.server?.port ?? httpServerPort,
    },
  };
}

export default loadConfig();
