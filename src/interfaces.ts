interface IAccording {
        id: string,
        code?: number,
        info: string, 
        title?: string,
        name: string,
        example?: string
}

interface IAccordings {
        accordings?: IAccording[] | [] | undefined,
        title?: string,
        className?: string
}

interface IItem {
        id: string,
        code?: number,
        info:string,
        name: string,
        example?: string
      }
      
export type {IAccording, IAccordings, IItem}