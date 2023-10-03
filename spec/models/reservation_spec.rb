require 'rails_helper'

RSpec.describe Reservation, type: :model do
  before :each do
    @user = User.create(name: 'Salomon', role: 'admin')
    @store_location = StoreLocation.create(city_name: 'Goma')
    @motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                       finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                       manufacturer: 'mitsubishi', manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
  end
  it 'is not valid without a city name' do
    reservation = Reservation.new(user_id: @user.id, motor_id: @motor.id)
    expect(reservation).not_to be_valid
  end
  it 'is not valid without a user_id' do
    reservation = Reservation.new(city_name: 'Goma', motor_id: @motor.id)
    expect(reservation).not_to be_valid
  end
  it 'is valid without a motor_id' do
    reservation = Reservation.new(city_name: 'Goma', user_id: @user.id)
    expect(reservation).not_to be_valid
  end
end
