import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { INDEX_NAME } from './constants';
import { RecipesResolver } from './recipe.resolver';
import { RecipesService } from './services/recipes/recipes.service';
import { SeederService } from './services/seeder/seeder.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
      auth: {
        username: 'elastic',
        password: 'changeme'
      }
    }),
  ],
  controllers: [],
  providers: [
    { useValue: 'recipes', provide: INDEX_NAME },
    RecipesService,
    SeederService,
    RecipesResolver
  ],
  exports: [],
})
export class ApiSearchModule implements OnApplicationBootstrap {

  constructor(private seeder: SeederService) { }
  
  async onApplicationBootstrap() {
    this.seeder.seedRecipes();
  }

}
