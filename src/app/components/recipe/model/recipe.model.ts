export interface Recipe {
    id: string,
    type: string,
    createdAt: string,
    difficulty: string,
    ingredients: string[],
    instructions: string,
    internalId: number,
    isPromoted: boolean,
    isPublished: boolean,
    numberOfServices: number,
    preparationTime: number,
    title: string,
    totalTime: number,
    updatedAt: string,
    image: any,
    category: number,
    owner: string,
    tags?: Term[],
}

export interface Category {
    id: string,
    description: string,
    name: string,
    path: string,
    updatedAt: string,
}

export interface Term {
    id: number,
    name: string,
}
