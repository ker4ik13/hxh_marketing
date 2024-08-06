import { DatabaseService } from '@/crud/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Site } from '@prisma/client';

@Injectable()
export class SiteService {
  constructor(private readonly database: DatabaseService) {}
  async create(createSiteDto: Prisma.SiteCreateInput): Promise<Site> {
    return await this.database.site.create({ data: createSiteDto });
  }

  async findAll(): Promise<Site[]> {
    return await this.database.site.findMany({ orderBy: { id: 'desc' } });
  }

  async findById(id: number): Promise<Site | null> {
    return await this.database.site.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateSiteDto: Prisma.SiteUpdateInput,
  ): Promise<Site> {
    return await this.database.site.update({
      where: { id },
      data: updateSiteDto,
    });
  }

  async removeById(id: number): Promise<Site> {
    const isSiteExist = await this.database.site.findUnique({
      where: { id },
    });

    if (!isSiteExist || !isSiteExist.id) {
      return null;
    }

    const site = await this.database.site.delete({ where: { id } });
    return site;
  }
}
