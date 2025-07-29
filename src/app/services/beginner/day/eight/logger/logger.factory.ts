import { LoggerService } from "./logger.service";

export function loggerServiceFactory(IS_DEV: boolean) {
  if(!IS_DEV)
    return;
  return new LoggerService();
}