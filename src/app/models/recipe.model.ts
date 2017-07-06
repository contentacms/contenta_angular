import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Category } from './category.model';
import { Image } from './image.model';
import { Tag } from './tag.model';
import { User } from './user.model';

@JsonApiModelConfig({
    type: 'recipes'
})
export class Recipe extends JsonApiModel {

    @Attribute()
    internalId: number;

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
    category: Category;

    @BelongsTo()
    image: Image;

    @HasMany()
    tags: Tag[];

    @BelongsTo()
    owner: User;

}
