<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- material icons  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/dashboard.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/styles.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/api.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/aside.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/table.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/material-icon.css">
    <link rel="stylesheet" href="<?php echo APP_URL; ?>Assets/css/datatable.min.css">
   <title>DashBoard</title>
</head>

<body>

    <div class="container">
        <aside class="aside aside--left">
            <div class="aside__top flex align-center flex-center">
                <div class="logo">
                    <img src="./images/logo.png" alt="">
                    <h2 class="logo__text">Autorepuestos <span class="danger">Espinoza C.A.</span></h2>
                </div>
                <div class="btn-close" id="btn-close">
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>

            <nav class="sidebar flex flex-column">
                <a class="sidebar-item flex align-center" href="#">
                    <span class="material-symbols-outlined">dashboard</span>
                    <h3 class="sidebar-item__text">Inicio</h3>
                </a>
                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Repuestos">
                    <span class="material-symbols-outlined">construction</span>
                    <h3 class="sidebar-item__text">Repuestos</h3>
                </a>
                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Categorias">
                    <span class="material-symbols-outlined">category</span>
                    <h3 class="sidebar-item__text">Categoria</h3>
                </a>
                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Marcas">
                    <span class="material-symbols-outlined">brand_family</span>
                    <h3 class="sidebar-item__text">Marcas</h3>
                </a>
                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Entradas">
                    <span class="material-symbols-outlined">inventory_2</span>
                    <h3 class="sidebar-item__text">Entrada</h3>
                </a>
                <a class="sidebar-item flex align-center" href="#">
                    <span class="material-symbols-outlined">inventory</span>
                    <h3 class="sidebar-item__text">Salida</h3>
                </a>
                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Proveedores">
                    <span class="material-symbols-outlined">group</span>
                    <h3 class="sidebar-item__text">Proveedor</h3>
                </a>
                <a class="sidebar-item flex align-center sidebar-item--active" href="<?php echo APP_URL; ?>Usuarios">
                    <span class="material-symbols-outlined">person</span>
                    <h3 class="sidebar-item__text">Usuario</h3>
                </a>
                <a class="sidebar-item flex align-center" href="#">
                    <span class="material-symbols-outlined">report_gmailerrorred</span>
                    <h3 class="sidebar-item__text">Reportes</h3>
                </a>
                <a class="sidebar-item flex align-center" href="#">
                    <span class="material-symbols-outlined">settings</span>
                    <h3 class="sidebar-item__text">Configuración</h3>
                </a>

                <a class="sidebar-item flex align-center" href="<?php echo APP_URL; ?>Usuarios/salir">
                    <span class="material-symbols-outlined">logout</span>
                    <h3 class="sidebar-item__text">Cerrar Sesión</h3>
                </a>
                </n>
        </aside>

        <main class="main" id="main">