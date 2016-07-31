'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');
// const Post = use('App/Model/Post');


Route.on('/').render('welcome');

Route.get('/register').render('register');
Route.get('/register', 'UserController.create');
Route.post('/register', 'UserController.store');

Route.get('/login', 'SessionController.create');
Route.post('/login', 'SessionController.store');
Route.any('/logout', 'SessionController.destroy');

// Route.get('/posts').render('post.index');

Route.group('logged-in', () => {
  Route.resource('/posts', 'PostController');
}).middleware('auth');


// Route.get('/login').render('login');
