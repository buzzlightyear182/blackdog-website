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
  f.space         = { articles: 'nj3ym701go0u' }
  f.access_token  = ENV['CONTENTFUL_API_KEY']
  f.cda_query = { order: 'sys.createdAt' }
  f.content_types = { news: "news", category: "newsCategory", learningZone: 'learningZone' }
end

data.articles.news.each do |id, n|
  proxy "news/#{n.slug}.html", "news.html", locals: { news: n }, ignore: true
end

data.articles.learningZone.each do |id, lz|
  proxy "learningzone/#{lz.slug}.html", "learningzone.html", locals: { learningZone: lz }, ignore: true
end