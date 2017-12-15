import { Injectable } from '@angular/core';

@Injectable()
export class MakeService {
  constructor(
  ) {
  }

  getServiceColor() {
    return 'Green Color from effect/service';
  }
}