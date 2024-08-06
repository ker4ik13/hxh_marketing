import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsString, IsUrl } from 'class-validator';
import { CreateSiteDto } from './create-site.dto';

export class UpdateSiteDto extends PartialType(CreateSiteDto) {
  @IsBoolean()
  isAvailable?: boolean;

  @IsString()
  name?: string;

  @IsUrl(
    {},
    {
      message: (value) => `Поле ${value} должно быть ссылкой`,
    },
  )
  url?: string;
}
