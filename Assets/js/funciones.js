let tblUsuarios, tblProveedores, tblCategorias, tblMarcas, tblReepuestos;
document.addEventListener("DOMContentLoaded", function () {
  tblUsuarios = $("#tblUsuarios").DataTable({
    language: {
      info: "Mostrando la página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtrado de _MAX_ registros totales)",
      lengthMenu: "Mostrar _MENU_ Registros por página",
      zeroRecords: "Nada encontrado - Disculpe",
      search: "Buscar",
    },
    order: [
      [3, "asc"],
      [2, "asc"],
    ],
    ajax: {
      url: APP_URL + "Usuarios/listar",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "usuario",
      },
      {
        data: "nombre",
      },
      {
        data: "estado",
      },
      {
        data: "acciones",
      },
    ],
  });
  // Tabla Proveedores
  tblProveedores = $("#tblProveedores").DataTable({
    language: {
      info: "Mostrando la página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtrado de _MAX_ registros totales)",
      lengthMenu: "Mostrar _MENU_ Registros por página",
      zeroRecords: "Nada encontrado - Disculpe",
      search: "Buscar",
    },
    order: [
      [5, "asc"],
      [2, "asc"],
    ],
    ajax: {
      url: APP_URL + "Proveedores/listar",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "rif",
      },
      {
        data: "nombre",
      },
      {
        data: "telefono",
      },
      {
        data: "direccion",
      },
      {
        data: "estado",
      },
      {
        data: "acciones",
      },
    ],
  });
  // Tabla Categorias
  tblCategorias = $("#tblCategorias").DataTable({
    language: {
      info: "Mostrando la página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtrado de _MAX_ registros totales)",
      lengthMenu: "Mostrar _MENU_ Registros por página",
      zeroRecords: "Nada encontrado - Disculpe",
      search: "Buscar",
    },
    order: [
      [2, "asc"],
      [1, "asc"],
    ],
    ajax: {
      url: APP_URL + "Categorias/listar",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "nombre",
      },
      {
        data: "estado",
      },
      {
        data: "acciones",
      },
    ],
  });
  // Tabla Marcas
  tblMarcas = $("#tblMarcas").DataTable({
    language: {
      info: "Mostrando la página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtrado de _MAX_ registros totales)",
      lengthMenu: "Mostrar _MENU_ Registros por página",
      zeroRecords: "Nada encontrado - Disculpe",
      search: "Buscar",
    },
    order: [
      [2, "asc"],
      [1, "asc"],
    ],
    ajax: {
      url: APP_URL + "Marcas/listar",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "nombre",
      },
      {
        data: "estado",
      },
      {
        data: "acciones",
      },
    ],
  });
  // Tabla Repuestos
  tblRepuestos = $("#tblRepuestos").DataTable({
    language: {
      info: "Mostrando la página _PAGE_ de _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtrado de _MAX_ registros totales)",
      lengthMenu: "Mostrar _MENU_ Registros por página",
      zeroRecords: "Nada encontrado - Disculpe",
      search: "Buscar",
    },
    order: [
      [5, "asc"],
      [2, "asc"],
    ],
    ajax: {
      url: APP_URL + "Repuestos/listar",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "codigo",
      },
      {
        data: "nombre",
      },
      {
        data: "precio_venta",
      },
      {
        data: "cantidad",
      },
      {
        data: "estado",
      },
      {
        data: "acciones",
      },
    ],
  });
  // Historial de compras
  $("#t_historial_c").DataTable({
    order: [
      [2, "asc"],
      [1, "asc"],
    ],
    ajax: {
      url: APP_URL + "Compras/listar_historial",
      dataSrc: "",
    },
    columns: [
      {
        data: "id",
      },
      {
        data: "total",
      },
      {
        data: "fecha",
      },
      {
        data: "acciones",
      },
    ],
  });
});

// Usuarios
// Mostrar la ventana de Usuario
function frmUsuario() {
  document.getElementById("title").innerHTML = "Registrar Usuario";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("claves").classList.remove("d-none");
  document.getElementById("frmUsuario").reset();
  $("#nuevo_usuario").modal("show");
  document.getElementById("id").value = "";
}
// Registar Usuario
function registrarUser(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario");
  const nombre = document.getElementById("nombre");
  if (usuario.value == "" || nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    const url = APP_URL + "Usuarios/registrar";
    const frm = document.getElementById("frmUsuario");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario registrado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          frm.reset();
          $("#nuevo_usuario").modal("hide");
          tblUsuarios.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario modificado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          $("#nuevo_usuario").modal("hide");
          tblUsuarios.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    };
  }
}
// Editar Usuario
function btnEditarUser(id) {
  document.getElementById("title").innerHTML = "Actualizar Usuario";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = APP_URL + "Usuarios/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("usuario").value = res.usuario;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("claves").classList.add("d-none");
      $("#nuevo_usuario").modal("show");
    }
  };
}
// Eliminar Usuario
function btnEliminarUser(id) {
  Swal.fire({
    title: "Está seguro de eliminar?",
    text: "El Usuario no se eliminará de forma permanente, solo cambiará su estado a inactivo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Usuarios/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Usuario eliminado con éxito.",
              icon: "success",
            });
            tblUsuarios.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Ingresar Usuario
function btnIngresarUser(id) {
  Swal.fire({
    title: "Está seguro de reingresar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Usuarios/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Usuario reingresado con éxito.",
              icon: "success",
            });
            tblUsuarios.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Fin Usuario

// Proveedores
// Mostrar la ventana de Proveedor
function frmProveedor() {
  document.getElementById("title").innerHTML = "Registrar Proveedor";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmProveedor").reset();
  $("#nuevo_proveedor").modal("show");
  document.getElementById("id").value = "";
}
// Registar Proveedor
function registrarProve(e) {
  e.preventDefault();
  const rif = document.getElementById("rif");
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("telefono");
  const direccion = document.getElementById("direccion");
  if (
    rif.value == "" ||
    nombre.value == "" ||
    telefono == "" ||
    direccion.value == ""
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    const url = APP_URL + "Proveedores/registrar";
    const frm = document.getElementById("frmProveedor");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Proveedor registrado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          frm.reset();
          $("#nuevo_proveedor").modal("hide");
          tblProveedores.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Proveedor modificado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          $("#nuevo_proveedor").modal("hide");
          tblProveedores.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    };
  }
}
// Editar Proveedor
function btnEditarProve(id) {
  document.getElementById("title").innerHTML = "Actualizar Proveedor";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = APP_URL + "Proveedores/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("rif").value = res.rif;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("telefono").value = res.telefono;
      document.getElementById("direccion").value = res.direccion;
      $("#nuevo_proveedor").modal("show");
    }
  };
}
// Eliminar Proveedor
function btnEliminarProve(id) {
  Swal.fire({
    title: "Está seguro de eliminar?",
    text: "El Proveedor no se eliminará de forma permanente, solo cambiará su estado a inactivo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Proveedores/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Proveedor eliminado con éxito.",
              icon: "success",
            });
            tblProveedores.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Ingresar Proveedor
function btnIngresarProve(id) {
  Swal.fire({
    title: "Está seguro de reingresar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Proveedores/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Proveedor reingresado con éxito.",
              icon: "success",
            });
            tblProveedores.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Fin Proveedor

// Categoria
// Mostrar la ventana de Categoria
function frmCategoria() {
  document.getElementById("title").innerHTML = "Registrar Categoria";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmCategoria").reset();
  $("#nuevo_categoria").modal("show");
  document.getElementById("id").value = "";
}
// Registar Categoria
function registrarCat(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  if (nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "El campos Nombre es obligatorios",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    const url = APP_URL + "Categorias/registrar";
    const frm = document.getElementById("frmCategoria");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Categoria registrada con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          frm.reset();
          $("#nuevo_categoria").modal("hide");
          tblCategorias.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Categoria modificada con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          $("#nuevo_categoria").modal("hide");
          tblCategorias.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    };
  }
}
// Editar Categoria
function btnEditarCat(id) {
  document.getElementById("title").innerHTML = "Actualizar Categoria";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = APP_URL + "Categorias/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("nombre").value = res.nombre;
      $("#nuevo_categoria").modal("show");
    }
  };
}
// Eliminar Categoria
function btnEliminarCat(id) {
  Swal.fire({
    title: "Está seguro de eliminar?",
    text: "La Categoria no se eliminará de forma permanente, solo cambiará su estado a inactivo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Categorias/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Categoria eliminada con éxito.",
              icon: "success",
            });
            tblCategorias.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Ingresar Categoria
function btnIngresarCat(id) {
  Swal.fire({
    title: "Está seguro de reingresar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Categorias/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Categoria reingresada con éxito.",
              icon: "success",
            });
            tblCategorias.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Fin Categoria

// Marcas
// Mostrar la ventana de Marcas
function frmMarca() {
  document.getElementById("title").innerHTML = "Registrar Marca";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmMarca").reset();
  $("#nuevo_marca").modal("show");
  document.getElementById("id").value = "";
}
// Registar Marca
function registrarMar(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  if (nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "El campo Nombre es obligatorios",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    const url = APP_URL + "Marcas/registrar";
    const frm = document.getElementById("frmMarca");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Marca registrado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          frm.reset();
          $("#nuevo_marca").modal("hide");
          tblMarcas.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Marca modificado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          $("#nuevo_marca").modal("hide");
          tblMarcas.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    };
  }
}
// Editar Marca
function btnEditarMar(id) {
  document.getElementById("title").innerHTML = "Actualizar Marca";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = APP_URL + "Marcas/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("nombre").value = res.nombre;
      $("#nuevo_marca").modal("show");
    }
  };
}
// Eliminar Proveedor
function btnEliminarMar(id) {
  Swal.fire({
    title: "Está seguro de eliminar?",
    text: "La Marca no se eliminará de forma permanente, solo cambiará su estado a inactivo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Marcas/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Marca eliminado con éxito.",
              icon: "success",
            });
            tblMarcas.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Ingresar Proveedord
function btnIngresarMar(id) {
  Swal.fire({
    title: "Está seguro de reingresar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Marcas/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Marcas reingresado con éxito.",
              icon: "success",
            });
            tblMarcas.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Fin Proveedor

// Repuestos
// Mostrar la ventana de Repuestos
function frmRepuesto() {
  document.getElementById("title").innerHTML = "Registrar Repuesto";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmRepuesto").reset();
  document.getElementById("id").value = "";
  $("#nuevo_repuesto").modal("show");
}
// Registar Repuesto
function registrarRep(e) {
  e.preventDefault();
  const codigo = document.getElementById("codigo");
  const nombre = document.getElementById("nombre");
  const precio_venta = document.getElementById("precio_venta");
  const id_marca = document.getElementById("marca");
  const id_cat = document.getElementById("categoria");
  if (
    codigo.value == "" ||
    nombre.value == "" ||
    precio_venta == ""
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    const url = APP_URL + "Repuestos/registrar";
    const frm = document.getElementById("frmRepuestos");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Repuesto registrado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          frm.reset();
          $("#nuevo_repuesto").modal("hide");
          tblProductos.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Repuesto modificado con éxito",
            showConfirmButton: false,
            timer: 3000,
          });
          $("#nuevo_repuesto").modal("hide");
          tblProductos.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    };
  }
}
// Editar Repuesto
function btnEditarRep(id) {
  document.getElementById("title").innerHTML = "Actualizar Producto";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = APP_URL + "Productos/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("codigo").value = res.codigo;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("precio_venta").value = res.precio_venta;
      document.getElementById("marca").value = res.id_marca;
      document.getElementById("categoria").value = res.id_categoria;
      $("#nuevo_producto").modal("show");
    }
  };
}
// Eliminar Repuesto
function btnEliminarRep(id) {
  Swal.fire({
    title: "Está seguro de eliminar?",
    text: "El Repuesto no se eliminará de forma permanente, solo cambiará su estado a inactivo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Repuestos/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Repuestos eliminado con éxito.",
              icon: "success",
            });
            tblRepuestos.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Ingresar Repuesto
function btnIngresarRep(id) {
  Swal.fire({
    title: "Está seguro de reingresar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Repuestos/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Repuesto reingresado con éxito.",
              icon: "success",
            });
            tblRepuestos.ajax.reload();
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
// Fin Repuestos

// Entrada
// Buscar Repuestos por código
function buscarCodigo(e) {
  e.preventDefault();
  if (e.which == 13) {
    const cod = document.getElementById("codigo").value;
    const url = APP_URL + "Entradas/buscarCodigo/" + cod;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res) {
          document.getElementById("nombre").value = res.nombre;
          document.getElementById("id").value = res.id;
          document.getElementById("cantidad").focus();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            text: "El Repuesto no existe.",
            showConfirmButton: false,
            timer: 2000,
          });
          document.getElementById("codigo").value = "";
          document.getElementById("codigo").focus();
        }
      }
    };
  }
}

// Calcular el precio de la entrada
function calcularPrecio(e) {
  e.preventDefault();
  const cant = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;
  document.getElementById("sub_total").value = precio * cant;
  if (e.which == 13) {
    if (cant > 0) {
      const url = APP_URL + "Compras/ingresar";
      const frm = document.getElementById("frmCompra");
      const http = new XMLHttpRequest();
      http.open("POST", url, true);
      http.send(new FormData(frm));
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Producto Ingresado",
              showConfirmButton: false,
              timer: 3000,
            });
            frm.reset();
            cargarDetalle();
          } else if (res == "modificado") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Producto Actualizado",
              showConfirmButton: false,
              timer: 3000,
            });
            frm.reset();
            cargarDetalle();
          }
        }
      };
    }
  }
}

cargarDetalle();
function cargarDetalle() {
  const url = APP_URL + "Entradas/listar";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert (this.responseText);
      const res = JSON.parse(this.responseText);
      let html = "";
      res.detalle.forEach((row) => {
        html += `<tr>
        <td>${row["id"]}</td>
        <td>${row["nombre"]}</td>
        <td>${row["cantidad"]}</td>
        <td>${row["precio"]}</td>
        <td>${row["sub_total"]}</td>
        <td>
        <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row["id"]})">Eliminar</button>
        </td>
        </tr>`;
      });
      document.getElementById("tblDetalle").innerHTML = html;
      document.getElementById("total").value = res.total_pagar.total;
    }
  };
}

function deleteDetalle(id) {
  const url = APP_URL + "Entradas/delete/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      if (res == "ok") {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error al eliminar el Producto",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto Eliminado",
          showConfirmButton: false,
          timer: 3000,
        });
        cargarDetalle();
      }
    }
  };
}

function generarCompra() {
  Swal.fire({
    title: "Está seguro de realizar la compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = APP_URL + "Compras/registrarCompra";
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res.msg == "ok") {
            Swal.fire({
              title: "Mensaje!",
              text: "Compra generada",
              icon: "success",
            });
            const ruta = APP_URL + "Compras/generarPdf/" + res.id_compra;
            window.open(ruta);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            Swal.fire({
              title: "Mensaje!",
              text: res,
              icon: "error",
            });
          }
        }
      };
    }
  });
}
