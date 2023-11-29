export namespace IEntity{ 
  export type name = string;
    export interface Movies {
        id: string
        title: string
        genre: Genre
        numberInStock: number
        dailyRentalRate: number
      }
      export interface Genre {
        name: string
        id: string
      }
}