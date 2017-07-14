import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';
import { File } from './file.model';

@JsonApiModelConfig({
  type: 'images'
})
export class Image extends JsonApiModel {

  @Attribute()
  internalId: number;

  @Attribute()
  name: string;

  @Attribute()
  isPublished: boolean;

  @Attribute()
  updatedAt: Date;

  @BelongsTo()
  imageFile: File;

  @BelongsTo()
  thumbnail: File;

}