<?php

class Administracion extends Controller
{
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['active'])) {
            header("localhost: " . APP_URL);
        }
        parent::__construct();
    }

    public function index()
    {
        $this->views->getView($this, "index");
    }
}