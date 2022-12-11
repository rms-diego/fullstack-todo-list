import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class LoginDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
