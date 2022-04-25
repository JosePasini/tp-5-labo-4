import { instrumentos } from '../data/instrumentos'

export const getInstrumentos = ( ) => {
    return instrumentos.filter( instrumento => instrumento );
}