Package.describe({
  name: "lf-films"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',
    'nova:core',
    'nova:base-components',
    'nova:posts',
    'jrudio:videojs',
    'nova:users'
    ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

});
