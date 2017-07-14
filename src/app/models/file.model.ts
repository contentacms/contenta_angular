import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'files'
})
export class File extends JsonApiModel {

  @Attribute()
  internalId: number;

  @Attribute()
  filename: string;

  @Attribute()
  uri: string;

  @Attribute()
  url: string;

  @Attribute()
  isPublished: boolean;

  @Attribute()
  mimtype: string;

  @Attribute()
  size: number;

  @Attribute()
  updatedAt: Date;

  @Attribute()
  createdAt: Date;

}
