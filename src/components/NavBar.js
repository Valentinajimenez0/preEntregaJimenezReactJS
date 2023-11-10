import CartWidget from "./CartWidget/CartWidget"

function NavBar() {
    return (
        <div>
            <h1>KALIMERA</h1>
            <h4>TIENDA DE CUADROS F.F.</h4>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">INICIO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PRODUCTOS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SOBRE MI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACTO</a>
                            </li>
                            <div className="contenedorCarrito">
                                 <CartWidget/>
                           </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        // <div>
        //     <h1>tienda cuadros</h1>
        //     <div>
        //         <button>cuadro1</button>
        //         <button>cuadro2</button>
        //         <button>cuadro3</button>
        //     </div>
        //     <div>
        //     <CartWidget/>
        //     </div>

        // </div>
    )
}

export default NavBar