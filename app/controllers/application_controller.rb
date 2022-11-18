class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  #You can start your server with:
  #bundle exec rake server

#Post a new order to order history attempt 3
post '/admin/orders' do
  Order.create(
    name: params[:name],
    address: params[:address],
    email: params[:email],
    phone: params[:phone],
    menu_item: params[:menu],
  )
end 

# #Post a new order to order history attempt 2
# post '/admin/orders' do
#   order = Order.create(params)
#   order.to_json
# end

# #Post a new order to order history attempt 1
# post '/admin/orders' do
#   puts params
#   puts "test"
#   logger.info("fasd")
#   Order.create(
#     name: params["name"],
#     address: params["address"],
#     email: params["email"],
#     phone: params["phone"],
#     menu_item: params["menu"],
#   )
# end



#gets all orders
get '/admin/orders' do
  puts "asdfasf"
  order = Order.all
  order.to_json
end

#get all reviews
get '/admin/reviews' do
  review = Review.all
  review.to_json
end

# #get reviews by meal
# get '/admin/reviews/:id' do
#   review = Review.find(params[:id])
#   review.to_json(include: menu_item)
# end

#filter by breakfast/lunch/dinner
get '/admin/meals/:type' do
  review = Meal.sort_by_meal(params[:type])
  review.to_json
end


end
