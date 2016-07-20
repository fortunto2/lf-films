Package.describe({
  name: "lifefilm:lf-films",
  version: '0.0.2',
  summary: 'video template for meteorjs telescope (nova react version)',
  git: 'https://github.com/fortunto2/lf-films.git',
  documentation: 'README.md'
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.3");

  api.use([
    'fourseven:scss@3.4.1',
    'nova:core@0.26.3-nova',
    'nova:base-components@0.26.3-nova',
    'nova:posts@0.26.3-nova',
    'nova:users@0.26.3-nova',
    'nova:comments@0.26.4-nova',
    // third-party packages
    'lifefilm:videojs@5.10.7',
    // 'lifefilm:react-flexbox-grid@0.9.5',
    'lifefilm:react-flexbox-grid@0.9.5',

    // 'materialize:materialize',
    // 'std:accounts-material@1.1.0'
    ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

});
