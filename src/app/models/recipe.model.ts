import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';
import { Image } from './image.model';

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

  @BelongsTo()
  image: Image;

}
