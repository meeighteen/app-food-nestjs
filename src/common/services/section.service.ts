import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from 'src/models/section/entities/section.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: MongoRepository<Section>,
  ) {}

  async findAllSectionsByOwnerId(id: string): Promise<Section[]> {
    try {
      return await this.sectionRepository.find();
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener Secciones por duenio.');
    }
  }
}
