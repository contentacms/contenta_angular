import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';
import { User } from './user.model';

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

    @BelongsTo()
    owner: User;

}
