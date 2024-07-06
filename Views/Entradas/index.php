<?php include "Views/Components/header.php"; ?>
<h1 class="title flex align-center">Compras</h1>

<!-- -------------------- END OF TOTALS ------------>
<div class="recent-orders mb-5">
    <h2 class="subtitle">Inicio | Entradas</h2>
    <div class="ml-2 mt-2 mb-4"></div>
    <div class="recent-orders text-center table-3">
        <div class="card-body">
            <form id="frmCompra">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="codigo"><i class="fas fa-barcode"></i> Código</label>
                            <input type="hidden" id="id" name="id">
                            <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Ingresar Código" onkeyup="buscarCodigo(event)">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group">
                            <label for="nombre">Descripción</label>
                            <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripción del producto" disabled>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="cantidad">Cantidad</label>
                            <input id="cantidad" class="form-control" type="number" name="cantidad" >
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="precio">Precio</label>
                            <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio Compras" onkeyup="calcularPrecio(event)">
                        </div>
                    </div>
                    <div class="col-md-2 mt-4">
                        <div class="form-group">
                            <label for="sub_total">Sub Total</label>
                            <input id="sub_total" class="form-control" type="text" name="sub_total" placeholder="Sub Total" disabled>
                        </div>
                    </div>

                </div>
            </form>
        </div>
        <table class="table table-light table-bordered table-hover mt-4">
            <thead class="table table-dark">
                <tr>
                    <th>Id</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Sub total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tblDetalle">
            </tbody>
        </table>
        <div class="row">
            <div class="col-md-4 ml-auto">
                <div class="form-group">
                    <label for="total" class="font-weight-bold">Total</label>
                    <input id="total" class="form-control" type="text" name="total" placeholder="Total" disabled>
                    <button class="btn btn-primary mt-2 btn-block" type="button" onclick="generarCompra()">Generar Compra</button>
                    <a class="btn btn-success mt-2 btn-block" href="<?php echo APP_URL; ?>Compras/historial">Historial de Compras</a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Components/footer.php"; ?>