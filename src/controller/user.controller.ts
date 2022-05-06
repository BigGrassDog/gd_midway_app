import { Controller, Post } from '@midwayjs/decorator';
@Controller('/api/user')
export class UserController {
  @Post('/user')
  async userData() {
    return 'this is user controller';
  }
}
