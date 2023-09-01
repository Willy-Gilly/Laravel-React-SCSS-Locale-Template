<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="laReact.png" />
        <title>Laravel</title>

        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/ts/app.tsx'])
    </head>
    <body class="antialiased">
        <div id="app">

        </div>
    </body>
</html>
