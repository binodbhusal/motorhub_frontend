# spec/factories/users.rb (for RSpec)
# test/factories/users.rb (for Minitest)

FactoryBot.define do
  factory :user do
    name { 'John' }
    role { 'user' }
  end
end
