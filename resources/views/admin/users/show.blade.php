@extends('admin.users.main')

@section('breadcrumb')
    <li><a href="{{ route('users.index') }}">Usuarios</a></li>
    <li class="active">{{ $user->id }}</li>
@stop

@section('module')
	<div class="box box-primary">
		<div class="box-body">
			{{-- Render form user --}}
		</div>
	</div>
@stop
