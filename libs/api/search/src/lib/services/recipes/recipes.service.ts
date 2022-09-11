import { Inject, Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { INDEX_NAME } from '../../constants';
import { RecipesArgs } from '../../dtos/recipes.args';
import { Recipe } from '../../models/recipe.model';

@Injectable()
export class RecipesService {
    constructor(
        @Inject(INDEX_NAME) private indexName: string,
        private readonly es: ElasticsearchService
    ) { }

    async search(opts: RecipesArgs): Promise<Recipe[]> {
        const res = await this.es.search<Recipe>({
            index: this.indexName,
            query: {
                query_string: {
                    query: opts.text
                }
            } 
        });

        return res.hits.hits.map(h => h._source);
    }
}
