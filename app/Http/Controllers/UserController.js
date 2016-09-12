'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');


class UserController {
  * create(request, response) {
    yield response.sendView('register');
  }

  * store(request, response) {
    const { username, email, password } = request.all();

    try {
      yield User.create({ username, email, password: yield Hash.make(password) });

      yield request.with({ success: 'Registration complete! Now you can login!' })
        .flash();

      response.redirect('/login');
    } catch (e) {
      yield request.withAll()
        .andWith({ error: 'Registration failed.' })
        .flash();
      response.redirect('back');
    }
  }
}

module.exports = UserController;
