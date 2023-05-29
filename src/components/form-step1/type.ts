export interface IResponse {
    status: number;
    statusText: string;
    data: {
        message: string;
        status: number;
    }
}

export interface IErrorInterface {
    message: string;
    name: string;
    stack: string;
    response: IResponse
}

export interface ICourses{
    id:string;
    nome:string;
}