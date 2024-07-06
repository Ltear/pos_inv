<div class="main__aside">
    <div class="main__top flex flex-end align-center">
        <button class="menu" id="menu-btn">
            <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="theme-toggler flex flex-between align-center">
            <span class="material-symbols-outlined active">light_mode</span>
            <span class="material-symbols-outlined">dark_mode</span>
        </div>
        <div class="main__profile">
            <div class="profile__info">
                <p class="profile__name"><b>Salvador</b></p>
                <small class="text-muted">Admin</small>
            </div>
            <div class="profile__photo">
                <img src="<?php echo APP_URL; ?>Assets/img/perfil.jpg" alt="">
            </div>
        </div>
    </div>
</div>

</main>

</div>

<script src="<?php echo APP_URL; ?>Assets/js/jquery-3.7.1.min.js" crossorigin="anonymous"></script>
<script src="<?php echo APP_URL; ?>Assets/js/index.js"></script>
<script src="<?php echo APP_URL; ?>Assets/js/dataTables.min.js"></script>
<script>
    const APP_URL = "<?php echo APP_URL; ?>";
</script>
<script src="<?php echo APP_URL; ?>Assets/js/sweetalert2.all.min.js"></script>
<script src="<?php echo APP_URL; ?>Assets/js/funciones.js"></script>
<script src="<?php echo APP_URL; ?>Assets/js/api.js"></script>
<script>
    let table = new DataTable('#myTable');
</script>
</body>

</html>