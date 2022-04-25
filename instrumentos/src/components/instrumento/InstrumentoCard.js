import { Link } from 'react-router-dom'

export const InstrumentoCard = ({
    id,
    instrumento,
    marca,
    modelo,
    imagen,
    precio,
    costoEnvio,
    cantidadVendida,
    descripcion,
}) => {

    const imagePath = `/assets/nro${id}.jpg`;
    const redColor = { color: 'red' };
    const greenColor = { color: 'green' };

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters"> 
                    <div className="col-4">
                        <img src={ imagePath } className="card-img" alt={ instrumento } />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{instrumento}</h5>
                        <h3 className="card-text"> $ {precio}</h3>

                        { 
                            ( costoEnvio === 'G') ?
                            <h5 className="card-text" style={ greenColor }> Envío gratis a todo el país</h5>
                            : 
                            <h5 className="card-text" style={ redColor }> Costo de envío interior de Argentina: ${costoEnvio}</h5>
                        }

                        <h5 className="card-text"> {cantidadVendida} vendidos</h5>

                        <Link to={`/instrumento/${id}`}>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}