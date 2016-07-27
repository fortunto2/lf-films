Package.describe({
  name: "lifefilm:lf-films",
  version: '0.0.3',
  summary: 'video template for meteorjs telescope (nova react version)',
  git: 'https://github.com/fortunto2/lf-films.git',
  documentation: 'README.md'
});

Npm.depends({
  //  'formsy-material-ui': '0.4.3',
  // flexboxgrid: '6.3.0',
});


Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.3");

  api.use('mongo', ['client', 'server']);

  api.use([
    'fourseven:scss@3.8.0_1',
    'nova:core@0.26.5-nova',
    'nova:base-components@0.26.5-nova',
    'nova:posts@0.26.5-nova',
    'nova:users@0.26.5-nova',
    'nova:comments@0.26.5-nova',
    // third-party packages
    'lifefilm:videojs@5.10.7',
    'lifefilm:react-flexbox-grid@0.9.5',
    'ostrio:files@1.6.7',
    // 'lifefilm:lf-styles@0.26.4-nova',
    // 'materialize:materialize',
    // 'std:accounts-material@1.1.0'
    ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);


  api.addFiles([
    'lib/stylesheets/normalize.min.css',
    // 'lib/stylesheets/_breakpoints.scss',
    // 'lib/stylesheets/_colors.scss',
    // 'lib/stylesheets/_variables.scss',
    // 'lib/stylesheets/_global.scss',
    // 'lib/stylesheets/_accounts.scss',
    // 'lib/stylesheets/_categories.scss',
    // 'lib/stylesheets/_cheatsheet.scss',
    // 'lib/stylesheets/_comments.scss',
    // 'lib/stylesheets/_header.scss',
    // 'lib/stylesheets/_forms.scss',
    // 'lib/stylesheets/_other.scss',
    // 'lib/stylesheets/_posts.scss',
    // 'lib/stylesheets/_newsletter.scss',
    // 'lib/stylesheets/_users.scss',
    'lib/stylesheets/main.scss',

  ], ['client']);

});
