import { InstrumentoCard } from './InstrumentoCard'

import { getInstrumentos } from '../../selectors/getInstrumentos'

export const InstrumentosList = () => {

    const instrumentos = getInstrumentos()

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