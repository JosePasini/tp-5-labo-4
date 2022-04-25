import { instrumentos } from '../data/instrumentos';


export const getInstrumentoByCostoEnvio = ( costoEnvio ) => {
    return instrumentos.filter(instrumento => instrumento.costoEnvio === costoEnvio)
}