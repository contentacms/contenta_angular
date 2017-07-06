import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'tags'
})
export class Tag extends JsonApiModel {

    @Attribute()
    internalId: number;

    @Attribute()
    name: string;

    @Attribute()
    description: string;

    @Attribute()
    path: string;

    @Attribute()
    updatedAt: Date;

    @Attribute()
    weight: number;

}
