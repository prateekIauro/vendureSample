import http from 'http';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestFetcher {
  /** Fetch a random test image url from random.image */
  fetchTestImage(): Promise<string> {
    return new Promise((resolve) => {
      http.get('http://aws.random.cat/meow', (resp) => {
        let data = '';
        resp.on('data', chunk => data += chunk);
        resp.on('end', () => resolve(JSON.parse(data).file));
      });
    });
  }
}
