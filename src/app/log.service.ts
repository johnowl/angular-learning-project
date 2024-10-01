import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logLevel: LogLevel = environment.logLevel as LogLevel;

  constructor() {}

  debug(message: string) {
    if (this.logLevel in ['info', 'warn', 'error', 'none']) {
      return;
    }
    console.debug('[debug]', message);
  }

  info(message: string) {
    if (this.logLevel in ['warn', 'error', 'none']) {
      return;
    }

    console.info('[info]', message);
  }

  warn(message: string) {
    if (this.logLevel in ['error', 'none']) {
      return;
    }

    console.warn('[warn]', message);
  }

  error(message: string) {
    if (this.logLevel === 'none') {
      return;
    }

    console.error('[error]', message);
  }
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'none';
