<ul class="sidebar-menu">
    <li class="header">Menú de navegación</li>
    <li class="{{ in_array(Request::segment(1), ['dashboard']) ? 'active' : '' ? 'active' : '' }}">
        <a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> <span>Dashboard </span></a>
    </li>
</ul>
