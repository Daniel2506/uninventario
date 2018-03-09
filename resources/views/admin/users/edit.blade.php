@extends('admin.users.main')

@section('breadcrumb')
	<li><a href="{{ route('users.index') }}">Usuarios</a></li>
	<li class="active">Editar ({{ $user->id }})</li>
@stop

@section('module')
	<div class="box box-primary" id="user-create">
		<div class="box-body" id="render-form-user">
			{{-- Render form user --}}
		</div>
	</div>
@stop
