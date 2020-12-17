import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(@Inject(PLATFORM_ID) public platformId) { }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
