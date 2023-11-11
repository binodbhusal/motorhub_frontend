# spec/factories/cities.rb
FactoryBot.define do
  factory :store_location do
    city_name { Faker::Address.city }
  end
end
