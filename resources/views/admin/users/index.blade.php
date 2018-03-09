@extends('admin.users.main')

@section('breadcrumb')
	<li class="active">Usuarios</li>
@stop

@section('module')
	<div class="box box-primary" id="users-main">
		<div class="box-body">
			{!! Form::open(['id' => 'form-uninventario-search-user-component', 'class' => 'form-horizontal', 'data-toggle' => 'validator', 'role' => 'form']) !!}
				<div class="form-group">
                    <label for="name" class="col-md-1 control-label">Nombre</label>
                    <div class="col-md-5">
                        {!! Form::text('name', session('search_name'), ['id' => 'name', 'class' => 'form-control input-md', 'placeholder' => 'Nombre usuario']) !!}
                    </div>
					<label for="email" class="col-md-1 control-label">Email</label>
					<div class="col-md-5">
						{!! Form::email('email', session('search_email'), ['id' => 'email', 'class' => 'form-control input-md' , 'placeholder' => 'Email usuario']) !!}
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-offset-3 col-md-2 col-xs-4">
						<button type="button" class="btn btn-default btn-block btn-md btn-clear">Limpiar</button>
					</div>
					<div class="col-md-2 col-xs-4">
						<button type="button" class="btn btn-primary btn-block btn-md btn-search">Buscar</button>
					</div>
					<div class="col-md-2 col-xs-4">
						<a href="{{ route('users.create') }}" class="btn btn-default btn-block btn-md">
							<i class="fa fa-user-plus"></i> Nuevo
						</a>
					</div>
				</div>
			{!! Form::close() !!}

			<div class="table-responsive">
				<table id="users-search-table" class="table table-bordered table-striped" cellspacing="0" width="100%">
			        <thead>
			            <tr>
			                <th>Código</th>
			                <th>Nombre</th>
			                <th>Email</th>
			                <th>Usuario</th>
			            </tr>
			        </thead>
			    </table>
			</div>
		</div>
	</div>
@stop
