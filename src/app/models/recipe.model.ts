// state
export interface Recipe {
  data: {
    id: string,
    type: string,
    attributes: {
      title: string,
      difficulty: string,
      instructions: string
    }
  }
};
