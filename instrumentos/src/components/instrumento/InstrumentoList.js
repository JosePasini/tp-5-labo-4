import { InstrumentoCard } from './InstrumentoCard'
import { getInstrumentoByCostoEnvio } from '../../selectors/getInstrumentoByCostoEnvio'

export const InstrumentoList = ({ costoEnvio }) => {
    const instrumentos = getInstrumentoByCostoEnvio( costoEnvio )
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { 
                instrumentos.map(  instrumento => (
                    <InstrumentoCard
                        key={instrumento.id} 
                        { ...instrumento}
                    />
                ))
            }
        </div>
    )
}