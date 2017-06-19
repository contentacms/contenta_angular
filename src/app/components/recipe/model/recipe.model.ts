export interface JSONRelationship {
    data: { id: string, type: string },
    links: { related: string, self: string },
}

export interface RecipeAttributes {
    createdAt: string,
    difficulty: string,
    ingredients: string[],
    instructions: string,
    internalId: number,
    isPromoted: boolean,
    isPublished: boolean,
    numberOfServices: number,
    path: string,
    preparationTime: number,
    title: string,
    totalTime: number,
    updatedAt: string,
}

export interface Recipe {
    attributes: RecipeAttributes,
    id: string,
    links: { self: string },
    relationships: {
        category: JSONRelationship,
        contentType: JSONRelationship,
        image: JSONRelationship,
        owner: JSONRelationship,
        tags: JSONRelationship,
    },
    type: string,
}

export interface RecipeJSONResponse {
    data: Recipe[],
    links: { self: string }
}
