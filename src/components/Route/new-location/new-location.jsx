const NewLocation = () => {

    return (
        <div>
            <h1>Formulario</h1>
            <form className="col">
                <div className="col-md-3">
                    <input type="text" placeholder="name" className="form-control" name="name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="lat" className="form-control" name="lat"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="long" className="form-control" name="long"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="weatherData" className="form-control" name="weatherData"></input>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="submit" className="btn btn-danger">Cancelar</button>
            </form>
        </div>
    )
}

export default NewLocation;

