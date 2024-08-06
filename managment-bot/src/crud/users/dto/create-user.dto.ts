import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsBoolean()
  isBot: boolean;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsString()
  username?: string;

  @IsString()
  languageCode?: string;

  @IsBoolean()
  isAdmin?: boolean;
}
