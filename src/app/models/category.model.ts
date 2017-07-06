import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'categories'
})
export class Category extends JsonApiModel {

    @Attribute()
    internalId: number;

    @Attribute()
    description: string;

    @Attribute()
    name: string;

    @Attribute()
    path: string;

    @Attribute()
    updatedAt: Date;

    @Attribute()
    weight: number;

}
