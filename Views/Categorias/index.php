<?php include "Views/Components/header.php"; ?>
<h1 class="title flex align-center">Categorias</h1>

<!-- -------------------- END OF TOTALS ------------>
<div class="recent-orders mb-5">
    <h2 class="subtitle">Inicios | Categorias</h2>
    <button class="add ml-2 mt-2 mb-4 add" type="button" onclick="frmCategoria();"><span class="material-symbols-outlined">add</span></button>
    <div class="recent-orders text-center table-3">
        <table class="text-center table-container" id="tblCategorias">
            <thead class="table__head">
                <tr class="table__row text-center">
                    <td>#</td>
                    <td>Nombre</td>
                    <td>Estado</td>
                    <td></td>
                </tr>
            </thead>
            <tbody class="table__body">
            </tbody>
        </table>
    </div>
</div>
<div id="nuevo_categoria" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header ba-primary">
                <h5 class="modal-title title-modal" id="title">Nueva Categoria</h5>
            </div>
            <div class="modal-body">
                <form method="post" id="frmCategoria">
                    <div class="form-group">
                        <label for="nombre" class="title-modal">Nombre</label>
                        <input type="hidden" id="id" name="id">
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre">
                    </div>
                    <br>
                    <button class="add" type="button" onclick="registrarCat(event);" id="btnAccion">Registrar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Components/footer.php"; ?>