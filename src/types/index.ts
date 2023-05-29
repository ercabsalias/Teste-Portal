
interface ISchoolData {
    id: string;
    nome: string;
    logo: string;
    nif: string;
    fotoUrl: string;
    historial: IHistoral;
    areaDeFormacao: IAreaDeFormacao[];
    Localizacao: ILocalizacao;
    Categoria: ICategoria;
    Inscricao: [];
    actividade: IActividade[];
    Organigrama: IOrganigrama;
}

type ICategoria = {
    id: string;
    nome: string;
}

export type IAreaDeFormacao = {
    Categoria: {
        nome: string;
    };
    id: string;
    nome: string;
    fotoUrl: string;
    descricao: string;
    PerfilDeSaida: IPerfilDeSaida[];
    Curso: ICurso[]
}

export type IPerfilDeSaida = {
    id: string;
    nome: string;
    fotoUrl: string;
    descricao: string;
    AreaDeFormacao: IAreaDeFormacao
}

export type ICurso = {
    id: string
    nome: string;
    fotoUrl: string;
    descricao: string;
    Disciplina: IDisciplina[]
    AreaDeFormacao: IAreaDeFormacao
}

export type IDisciplina = {
    id: string;
    nome: string;
    fotoUrl: string;
    descricao: string;
    Curso: ICurso
}


type IHistoral = {
    id: string;
    fundador: string;
    descricao: string;
    data: string;
    fotoUrl: string;
    fotoUrl2: string;
    fotoUrl3: string;
    fotoUrl4: string;
}

type ILocalizacao = {
    id: string;
    Provincia: {
        id: string;
        nome: string;
    };
    endereco1: string;
    endereco2: string;
}

export type IActividade = {
    descricao: string;
    id: string;
    nome: string;
    data: string;
    fotoUrl: string;
    organizador: string;
}

type IOrganigrama = {
    id: string;
    escolaId: string;
    Departamento: IDepartamento[];
}

type IDepartamento = {
    id: string;
    nome: string;
    Funcionario: IFuncionario[]
}

type IFuncionario = {
    id: string;
    nome: string;
    fotoUrl: string;
}





export type { ISchoolData }