###
# Blog settings
###

# Time.zone = "UTC"
Time.zone = "Hong Kong"
require 'builder'

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"

  blog.sources = "blog/{category}/{title}.html"
  blog.permalink = "{category}/{title}.html"

  # Matcher for blog source files
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.new_article_template = "article.html"

  blog.custom_collections = {
    category: {
      link: '/{category}.html',
      template: '/category.html'
    }
  }

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

activate :directory_indexes

helpers do
  def articles_by_category(category)
    sitemap.resources.select do |resource|
      resource.data.category == category
    end.sort_by { |resource| resource.data.date }
  end

  # def latest_articles_by_category(category)
  #   category_articles = sitemap.resources.select {|resource| resource.data.category == category}
  #   sorted_category_articles = category_articles.sort_by {|a| a.date }
  #   latest_category_articles = sorted_category_articles.first(3).reverse
  # end
end

set :url_root, 'https://www.blackdog-consultants.com'
activate :search_engine_sitemap

page "/feed.xml", layout: false
page "/sitemap.xml", layout: false

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
  # activate :meta_tags
end

# after_build do |builder|
#   src = File.join(config[:source],"_redirects")
#   dst = File.join(config[:build_dir],"_redirects")
#   builder.source_paths << File.dirname(__FILE__)
#   builder.copy_file(src,dst)
#   puts "Done building"
# end
