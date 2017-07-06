import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {

    @Attribute()
    internalId: number;

    @Attribute()
    access: number;

    @Attribute()
    description: string;

    @Attribute()
    mail: string;

    @Attribute()
    name: string;

    @Attribute()
    timezone: string;

    @Attribute()
    updatedAt: Date;

    @Attribute()
    createdAt: Date;

    @Attribute()
    lastLogin: Date;

    @Attribute()
    isActive: boolean;

}
