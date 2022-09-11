export interface RecipeDTO {
  Name: string;
  url: string;
  Description?: string;
  Author: string;
  Ingredients: string[];
  Method: string[];
}