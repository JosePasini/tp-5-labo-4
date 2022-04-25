import { instrumentos } from '../data/instrumentos'

export const getInstrumentoById = ( id ) => {
    return instrumentos.filter( instrumento => instrumento.id === id);
}