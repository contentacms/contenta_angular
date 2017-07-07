// state
export type Recipe = {
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
