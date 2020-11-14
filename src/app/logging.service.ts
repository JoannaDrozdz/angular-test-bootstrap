import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  logStatusChange(data: string): void {
    console.log('Data: ' + data);
  }
}
