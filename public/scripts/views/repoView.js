'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

    let source = $('#repo-template').html();
    let render = Handlebars.compile(source);

  repoView.index = function() {
    ui();
    console.log(repos.all);

      repos.with('name').map(render);
  };

  module.repoView = repoView;
})(window);
