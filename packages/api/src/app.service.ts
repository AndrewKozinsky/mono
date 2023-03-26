import { Injectable } from '@nestjs/common'
import data from '@mono/data'

@Injectable()
export class AppService {
  getHello() {
    return data.article
  }
}
