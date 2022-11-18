#rake db:drop && rake db:create && rake db:migrate && rake db:seed

# This will delete any existing rows from the Restaurant and Customer tables
# so you can run the seed file multiple times without having duplicate entries in your database

require 'faker'

puts "Deleting Restaurant/Customer data..."
Customer.destroy_all
Review.destroy_all
Order.destroy_all
MenuItem.destroy_all

meal_array = ["Charred Charmander", "Boiled Bulbasaur Bulb", "Chikorita & Chic Pea Salad", "Squirtle Stew", "That's Just a Dead Pikachu", "Magikarp Sashimi"]
puts "Creating menu items..."
6.times do 
    MenuItem.create(
        name: meal_array.sample, 
        description: "delicious",
    )
end

puts "Creating customers..."
#run this loop 12 times
12.times do
customer = Customer.create(
    name: Faker::Name.name)
end

puts "Creating orders..."
# run this loop 12 times
12.times do
    Order.create(
        name: Faker::Name.name,
        address: Faker::Address.street_address,
        email: Faker::Internet.email,
        phone: Faker::PhoneNumber.phone_number,
        menu_item: MenuItem.all.sample
    )
end

testimonials = ["Best food in #{Faker::Games::Pokemon.location}", "My #{Faker::Games::Pokemon.name} really liked this dish.", "The Poke'chef prepared our meal special by using #{Faker::Games::Pokemon.move} on it.", "I flew all the way from #{Faker::Games::Pokemon.location} to try this.", "My #{Faker::Games::Pokemon.name} is a vegan and was giving me weird looks for the whole meal.", "I traded in my #{Faker::Games::Pokemon.name} to get a free meal!"]
puts "Creating reviews..."
#create between 1-12 reviews for each meal
5.times do
review = Review.create(
    score: rand(1..5),
    testimonial: testimonials.sample,
    menu_item: MenuItem.all.sample
)
end

puts "Seeding done!"
