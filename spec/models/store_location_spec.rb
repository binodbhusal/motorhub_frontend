require 'rails_helper'

RSpec.describe StoreLocation, type: :model do
  it 'is valid with valid attributes' do
    store_location = StoreLocation.new(city_name: 'Goma')
    expect(store_location).to be_valid
  end

  it 'is not valid without a city name' do
    store_location = StoreLocation.new
    expect(store_location).not_to be_valid
  end
end
