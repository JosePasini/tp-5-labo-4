import { InstrumentoList } from '../instrumento/InstrumentoList'

export const EnvioGratisScreen = () => {
    return (
        <div>
            <h1>Envío Gratis</h1>
            <InstrumentoList costoEnvio='G' />
        </div>
    )
}