# spec/factories/reservations.rb

FactoryBot.define do
  factory :reservation do
    association :user, factory: :user
    association :motor, factory: :motor
    reserve_date { '2022-10-20' }
    city_name { 'Lisbon' }
    # Assuming you have a :motor factory
    # Add any other attributes as needed
  end
end
