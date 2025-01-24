import { config } from "@/config/config";

const hostName = "hostname.com";

const hostsProduction = ["hostname.com"];

export const currentEnvironment = hostsProduction.includes(hostName)
  ? "production"
  : "development";

export const isProduction = currentEnvironment === "production";
export const currentConfig = config["production"];
