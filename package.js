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
    'jrudio:videojs@5.4.4',
    'nova:users@0.26.3-nova'
    ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

});
