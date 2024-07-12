export interface QuestaoCompleta {
  codigo: number;
  tipo: TipoQuestao;
  disciplina: Disciplina;
  ano: number;
  enunciado: string;
  alternativas: Alternativa[];
  assuntos: Assunto[];
}

export interface Alternativa {
  codigo: number;
  descricao: string;
  is_correta: boolean | null
}

export interface Assunto {
  codigo: number;
  disciplina: Disciplina
  descricao: string;
}

export class RespostaRequest {
  id_questao!: number;
  id_usuario!: number;
  id_alternativa!: number;
}

export interface RespostaResponse{
  id_questao: number;
  id_alternativa: Alternativa[];
  resultado: boolean
}

export interface TipoQuestao {
  codigo: string;
  descricao: string;
}

export interface Disciplina {
  codigo: string;
  descricao: string;
}

export interface QuestaoIdResponse{
  id_questao: number;
}

