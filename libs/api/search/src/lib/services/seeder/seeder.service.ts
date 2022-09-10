import { Inject, Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { INDEX_NAME } from '../../constants';
import { readFileSync } from 'fs';
import path = require('path');
import { recipes } from '../../../data/recipes';

@Injectable()
export class SeederService {
    private readonly logger = new Logger(SeederService.name);

    constructor(
        @Inject(INDEX_NAME) private indexName: string,
        private readonly es: ElasticsearchService
    ) { }

    async seedRecipes() {
        const exist = await this.es.indices.exists({ index: this.indexName });
        
        if (exist) {
            this.logger.log('Index already exist no need to seed the data');
            return;
        }

        this.logger.log('Starting recipe seeding ...');

        this.es.indices.create({
            index: this.indexName,
            mappings: {
                properties: {
                    Name: { type: 'text' },
                    url: { type: 'text' },
                    Description: { type: 'text' },
                    Author: { type: 'text' },
                    // Ingredients: { type: '{dynamic_property}' },
                    // Method: { type: 'text' }[]
                }
            }
        });

        const operations = recipes.flatMap(doc => [{ index: { _index: this.indexName } }, doc]);
        const bulkResponse = await this.es.bulk({ refresh: true, operations });

        

    }

}
