import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'recipes'
})
export class Recipe extends JsonApiModel {

  @Attribute()
  id: string;

  @Attribute()
  createdAt: Date;

  @Attribute()
  title: string;

  @Attribute()
  updatedAt: Date;

  @Attribute()
  difficulty: string;

  @Attribute()
  instructions: string;

  @Attribute()
  path: string;

  @Attribute()
  numberOfServices: number;

  @Attribute()
  ingredients: Array<string>;

  @Attribute()
  isPromoted: boolean;

  @Attribute()
  isPublished: boolean;

  @Attribute()
  preparationTime: number;

  @Attribute()
  totalTime: number;

}
