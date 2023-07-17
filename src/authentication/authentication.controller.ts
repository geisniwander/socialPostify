import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthSigninDto } from './dto/auth-signin.dto';

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthSigninDto) {
    return this.authenticationService.signin(body);
  }
}
