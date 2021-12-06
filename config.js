import process from "node:process";

import dotenv from "dotenv";

dotenv.config();

export const { DB_USER, DB_PASSWORD, CLUSTER_NAME, SUBDOMAIN, DB_NAME } =
  process.env;
