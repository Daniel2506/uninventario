<ul class="sidebar-menu" data-widget="tree">
    <li class="header">Menú de navegación</li>
    <li class="{{ in_array(Request::segment(1), ['dashboard']) ? 'active' : '' ? 'active' : '' }}">
        <a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> <span>Dashboard </span></a>
    </li>
    {{-- Administracion --}}
    <li class="treeview {{ in_array(Request::segment(1), ['users']) ? 'active' : '' }}">
        <a href="{{ route('dashboard') }}">
            <i class="fa fa-cog"></i> <span>Administración</span><i class="fa fa-angle-left pull-right"></i>
        </a>

        <ul class="treeview-menu">
            {{-- Modulos administracion --}}
            <li class=" treeview {{ in_array(Request::segment(1), ['users']) ? 'active' : '' }}">
                <a href="#">
                    <i class="fa fa-wpforms"></i> Módulos <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li class="{{ Request::segment(1) == 'users' ? 'active' : '' }}">
                        <a href="{{ route('users.index') }}"><i class="fa fa-users"></i> Usuarios</a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
