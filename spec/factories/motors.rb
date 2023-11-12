FactoryBot.define do
  factory :motor do
    association :user, factory: :user
    association :store_location, factory: :store_location
    brand_name { 'Suzuki' }
    model_no { 1234 }
    manufacturer { 'Mitsubishi' }
    manufacture_date { '2022-10-20' }
    description { 'Motor' }
    photo { 'https://motor.jpeg' }
    unit_price { 10.0 }
    purchase_fee { 10.0 }
    finance_fee { 10.0 }
    total_price { 10.0 }
  end
end
