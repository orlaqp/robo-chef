import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { INDEX_NAME } from './constants';
import { ElasticSearchService } from './services/elastic-search/elastic-search.service';
import { SeederService } from './services/seeder/seeder.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'changeme'
      }
    })
  ],
  controllers: [],
  providers: [
    ElasticSearchService,
    SeederService,
    { useValue: 'recipes', provide: INDEX_NAME }
  ],
  exports: [],
})
export class ApiSearchModule implements OnApplicationBootstrap {

  constructor(private seeder: SeederService) { }
  
  async onApplicationBootstrap() {
    this.seeder.seedRecipes();
  }

}
