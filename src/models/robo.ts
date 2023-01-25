export class RoboPosicoes {
    bracoDireito?: BracoPosicoes;
    bracoEsquerdo?: BracoPosicoes;
    cabeca?: CabecaPosicoes;
}

export class PosicaoParteMovel {
    descricao?: string;
    ordem?: number;
    avancar?: Movimento;
    voltar?: Movimento;
}

export class BracoPosicoes {
    cotovelo?: PosicaoParteMovel;
    pulso?: PosicaoParteMovel;
}

export class CabecaPosicoes {
    rotacao?: PosicaoParteMovel;
    inclinacao?: PosicaoParteMovel;
}

export class Movimento {
    ordem?: number;
    descricao?: string;
    ativo?: boolean;
}