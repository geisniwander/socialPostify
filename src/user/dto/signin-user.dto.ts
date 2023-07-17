import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class SigninDto {
  @IsEmail()
  email: string;
  password: string;
}
