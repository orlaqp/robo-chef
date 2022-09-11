import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { RecipesArgs } from '../../dtos/recipes.args';
import { Recipe } from '../../models/recipe.model';

@Injectable()
export class RecipesService {
    
    constructor(private readonly elasticsearchService: ElasticsearchService) { }

    search(opts: RecipesArgs): Promise<Recipe[]> {
        return null;
    }


}
