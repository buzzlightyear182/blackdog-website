xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  xml.title "Black Dog Consultants"
  xml.subtitle "A unique network of training, facilitation and coaching consultants at your fingertips, specialising in the Asia Pacific Market"
  xml.id "http://blackdog-consultants.com/"
  xml.link "href" => "http://blackdog-consultants.com/"
  xml.link "href" => "http://blackdog-consultants.com/feed.xml", "rel" => "self"
  xml.author { xml.name "Black Dog Consultants" }

  data.articles.learningZone.sort_by{ |id, e| e['date']}.reverse.each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => article.url
      xml.id "learningzone/" + lz.slug
      xml.published article.date.strftime('%d %b %Y')
      xml.updated article.date.strftime('%d %b %Y')
      xml.summary article.metadescription, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end

  data.articles.news.sort_by{ |id, e| e['date']}.reverse.each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => article.url
      xml.id "learningzone/" + lz.slug
      xml.published article.date.strftime('%d %b %Y')
      xml.updated article.date.strftime('%d %b %Y')
      xml.summary article.metadescription, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end