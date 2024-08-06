import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  @IsNotEmpty({
    message: (value) => `Поле ${value} обязательно для заполнения`,
  })
  name: string;
  @IsUrl(
    {},
    {
      message: (value) => `Поле ${value} должно быть ссылкой`,
    },
  )
  url?: string;
  @IsBoolean()
  isAvailable?: boolean;
}
