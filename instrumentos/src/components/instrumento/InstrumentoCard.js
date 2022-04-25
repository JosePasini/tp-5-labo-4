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
                        <h5 className="card-text"> Envío gratis a todo el país</h5>
                        <h5 className="card-text"> {cantidadVendida} vendidos</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}