<?php include "Views/Components/header.php"; ?>
<h1 class="title flex align-center">Repuestos</h1>

<!-- -------------------- END OF TOTALS ------------>
<div class="recent-orders mb-5">
    <h2 class="subtitle">Inicios | Repuestos</h2>
    <button class="add ml-2 mt-2 mb-4 add" type="button" onclick="frmRepuesto();"><span class="material-symbols-outlined">add</span></button>
    <div class="recent-orders text-center table-2">
        <table class="text-center table-container ml-4" id="tblRepuestos">
            <thead class="table__head">
                <tr class="table__row">
                    <td>#</td>
                    <td>Código</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Stock</td>
                    <td>Estado</td>
                    <td></td>
                </tr>
            </thead>
            <tbody class="table__body">
            </tbody>
        </table>
    </div>
</div>
<div id="nuevo_repuesto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header ba-primary">
                <h5 class="modal-title title-modal" id="title">Nuevo Repuesto</h5>
            </div>
            <div class="modal-body">
                <form method="post" id="frmRepuesto">
                    <div class="form-group">
                        <label for="codigo" class="title-modal">Código</label>
                        <input type="hidden" id="id" name="id">
                        <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Codigo de barra">
                    </div>
                    <div class="form-group">
                        <label for="nombre" class="title-modal">Nombre</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre del producto">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio_compra">Precio Compra</label>
                                <input id="precio_compra" class="form-control" type="text" name="precio_compra" placeholder="Precio Compra">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio_venta">Precio Venta</label>
                                <input id="precio_venta" class="form-control" type="text" name="precio_venta" placeholder="Precio Venta">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="marca">Marca</label>
                                <select id="marca" name="marca" class="form-control">
                                    <?php foreach ($data['marcas'] as $row) { ?>
                                        <option value="<?php echo $row['id']; ?>"><?php echo $row['nombre']; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="categoria">Categoria</label>
                                <select id="categoria" name="categoria" class="form-control">
                                    <?php foreach ($data['categorias'] as $row) { ?>
                                        <option value="<?php echo $row['id']; ?>"><?php echo $row['nombre']; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br>
                    <button class="add" type="button" onclick="registrarRep(event);" id="btnAccion">Registrar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Components/footer.php"; ?>