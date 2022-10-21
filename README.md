# Laravel Template

[![N|Solid](https://laravel.com/img/logomark.min.svg)](https://laravel.com/) [![N|Solid](https://laravel.com/img/logotype.min.svg)](https://laravel.com/)

I did that because i'm doing those things each time I start a new project, so basically, wasting my time doing repetitives things, and when a task is repetitive, let's make something doing it for us.

- Nothing is made to not change over time
- If something is bad or you can't use it, it's not my problem

## Features

- Preset for Typescript
- Preset for SCSS files
- Preset for React/Vitejs
- Preset for Class Component in React
- Preset for language handler in React

## Installing this shit to work on

```sh
    composer install
```
It is the base of every Laravel Project

```sh
    npm install
```
We will need those packages as well since we aren't using default blade except for the welcome view
## How to start it ?
Open two terminals, one with : 
```sh
php artisan serve
```
And the other one with : 
```sh
npm run dev
```
*Note, use this one in production* :
```sh
npm run build
```

Now you must be wondering, *"Okay, but how do I start working ?"*

Simple : inside `resources/ts/components`, you have the `MainComponent.tsx`.
- Now you can customize the LangOptions
- The MainComponent as well
- Create your own components, and add em a props with lang file if you want to use locale string.

Edit the languages in `resources/lang/{locale}.json` and then create interfaces to make it usable in `Lang.ts`

## Tech

- Laravel
- Reactjs
- SCSS
- TypeScript
- Blade

## License

MIT
