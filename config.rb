sprockets.import_asset 'modernizr'
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

activate :autoprefixer
activate :livereload

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
end

activate :dotenv

# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.host   = 'marsman.marsbased.com'
#   deploy.path   = '/home/deploy/apps/marsman
#   deploy.user  = 'deploy'
#   deploy.flags = '-avzp --chmod=+r'
# end

activate :contentful do |f|
  f.space         = { news: 'fvvfy7j5vz8j' }
  f.access_token  = ENV['CONTENTFUL_API_KEY']
  f.content_types = { post: "2wKn6yEnZewu2SCCkus4as", category: "5KMiN6YPvi42icqAUQMCQe" }
end