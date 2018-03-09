<!DOCTYPE html>
    <!--
    This is a starter template page. Use this page to start your new project from
    scratch. This page gets rid of all links and provides the needed markup only.
    -->
    <html>
    <head>
        <meta charset="UTF-8">
        <title>{{ config('uninventario.app.name') }} :: Register</title>
        <link rel="icon" type="image/png" href="{{ asset(config('uninventario.app.image.logo')) }}" />

        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

        {{-- Secure tags Uninventario --}}
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        {{-- Vendor css --}}
        <link href="{{ elixir("css/vendor.min.css") }}" rel="stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
    </head>

	<body class="hold-transition login-page">
		<div class="login-box">
			<div class="login-logo">
				<img src="{{ asset(config('uninventario.app.image.logo')) }}" alt="{{ config('uninventario.app.sitename') }}"/><br>
        		<b>{{ config('uninventario.app.name') }}</b>
			</div>

			@if (count($errors) > 0)
			<div class="callout callout-warning">
				@foreach ($errors->all() as $error)
					<p>{{ $error }}</p>
				@endforeach
			</div>
			@endif

			<div class="register-box-body">
				<p class="login-box-msg">Registrar un nuevo usuario</p>
				{!! Form::open(['route' => 'auth/register', 'id' => 'form-login-account', 'data-toggle' => 'validator']) !!}
                    <div class="form-group has-feedback">
                        <input type="text" name="name" class="form-control" placeholder="Nombres" maxlength="100" required>
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" name="last_name" class="form-control" placeholder="Apellidos" maxlength="100" required>
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="email" name="email" class="form-control" placeholder="Email" maxlength="100" required>
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" name="username" class="form-control" placeholder="Usuario" maxlength="60" required>
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" name="password" class="form-control" placeholder="Contraseña" maxlength="60" required>
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" name="password_confirmation" placeholder="Repita contraseña" maxlength="60" required>
                        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-offset-7 col-xs-5">
                          <button type="submit" class="btn btn-primary btn-block btn-flat">{{ trans('app.register') }}</button>
                        </div>
                    </div>
				{!! Form::close() !!}
                <a href="{{route('auth/login')}}" class="text-center">Ya tengo cuenta</a>
			</div>
		</div>

	    {{-- Vendor KOI App --}}
	    <script src="{{ elixir("js/vendor.min.js") }}" type="text/javascript"></script>
	    {{-- KOI App --}}
	    <script src="{{ elixir("js/app.min.js") }}" type="text/javascript"></script>
	</body>
</html>
