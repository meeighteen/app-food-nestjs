import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api App Food is Ready. Use /graphql';
  }
}
