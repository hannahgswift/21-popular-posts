'use strict';

const Post = use('App/Model/Post');


class PostController {

  * index(request, response) {
    const posts = yield Post.with('user').fetch();
    yield response.sendView('posts', { posts: posts.toJSON() });

  }

  * create(request, response) {
    yield response.sendView('post.create');
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController;
