<?php include "Views/Components/header.php"; ?>
<h1 class="title flex align-center">Proveedores</h1>

<!-- -------------------- END OF TOTALS ------------>
<div class="recent-orders mb-5">
    <h2 class="subtitle">Inicios | Proveedores</h2>
    <button class="add ml-2 mt-2 mb-4 add" type="button" onclick="frmProveedor();"><span class="material-symbols-outlined">add</span></button>
    <div class="recent-orders text-center table-1">
        <table class="text-center table-container ml-4" id="tblProveedores">
            <thead class="table__head">
                <tr class="table__row text-center">
                    <td>#</td>
                    <td>Rif</td>
                    <td>Nombre</td>
                    <td>teléfono</td>
                    <td>Dirección</td>
                    <td>Estado</td>
                    <td></td>
                </tr>
            </thead>
            <tbody class="table__body">
            </tbody>
        </table>
    </div>
</div>
<div id="nuevo_proveedor" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header ba-primary">
                <h5 class="modal-title title-modal" id="title">Nuevo Proveedor</h5>
            </div>
            <div class="modal-body">
                <form method="post" id="frmProveedor">
                    <div class="form-group">
                        <label for="rif" class="title-modal">Rif</label>
                        <input type="hidden" id="id" name="id">
                        <input id="rif" class="form-control" type="text" name="rif" placeholder="Rif">
                    </div>
                    <div class="form-group">
                        <label for="nombre" class="title-modal">Nombre</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre">
                    </div>
                    <div class="form-group">
                        <label for="telefono" class="title-modal">Teléfono</label>
                        <input id="telefono" class="form-control" type="text" name="telefono" placeholder="Teléfono">
                    </div>
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <textarea id="direccion" class="form-control" name="direccion" placeholder="Dirección" rows="3"></textarea>
                    </div>
                    <br>
                    <button class="add" type="button" onclick="registrarProve(event);" id="btnAccion">Registrar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Components/footer.php"; ?>