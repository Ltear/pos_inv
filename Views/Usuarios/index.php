<?php include "Views/Components/header.php"; ?>
<h1 class="title flex align-center">Usuarios</h1>

<!-- -------------------- END OF TOTALS ------------>
<div class="recent-orders mb-5">
    <h2 class="subtitle">Inicios | Usuarios</h2>
    <button class="add ml-2 mt-2 mb-4 add" type="button" onclick="frmUsuario();"><span class="material-symbols-outlined">add</span></button>
    <div class="recent-orders text-center table-2">
        <table class="text-center table-container ml-4" id="tblUsuarios">
            <thead class="table__head">
                <tr class="table__row">
                    <td>#</td>
                    <td>Nombre</td>
                    <td>Usuario</td>
                    <td>Estado</td>
                    <td></td>
                </tr>
            </thead>
            <tbody class="table__body">
            </tbody>
        </table>
    </div>
</div>
<div id="nuevo_usuario" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header ba-primary">
                <h5 class="modal-title title-modal" id="title">Nuevo Usuario</h5>
            </div>
            <div class="modal-body">
                <form method="post" id="frmUsuario">
                    <div class="form-group">
                        <label for="usuario" class="title-modal">Usuario</label>
                        <input type="hidden" id="id" name="id">
                        <input id="usuario" class="form-control" type="text" name="usuario" placeholder="Usuario">
                    </div>
                    <div class="form-group">
                        <label for="nombre" class="title-modal">Nombre</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre">
                    </div>
                    <div class="row" id="claves">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="clave" class="title-modal">Clave</label>
                                <input id="clave" class="form-control" type="password" name="clave" placeholder="Clave">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="confirmar" class="title-modal">Confirmar Contraseña</label>
                                <input id="confirmar" class="form-control" type="password" name="confirmar" placeholder="Confirmar Contraseñá">
                            </div>
                        </div>
                    </div>
                    <br>
                    <button class="add" type="button" onclick="registrarUser(event);" id="btnAccion">Registrar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Components/footer.php"; ?>