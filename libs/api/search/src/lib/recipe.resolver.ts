import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecipesArgs } from './dtos/recipes.args';
import { Recipe } from './models/recipe.model';
import { RecipesService } from './services/recipes/recipes.service';

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => [Recipe])
  recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.search(recipesArgs);
  }
}