import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';
import { User } from './user.model';
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
    owner: User;

    @BelongsTo()
    imageFile: File;

    @BelongsTo()
    thumbnail: File;

}
