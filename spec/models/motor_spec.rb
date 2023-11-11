require 'rails_helper'

RSpec.describe Motor, type: :model do
  before :each do
    @user = create(:user)
    @store_location = StoreLocation.create(city_name: 'Lisbon')
  end
  it 'is valid with valid attributes' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).to be_valid
  end
  it 'is not valid without a user_id' do
    motor = Motor.new(location_id: @store_location.id, unit_price: 10, purchase_fee: 10, finance_fee: 10,
                      total_price: 10, brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end
  it 'is not valid without a location_id' do
    motor = Motor.new(user_id: @user.id, unit_price: 10, purchase_fee: 10, finance_fee: 10, total_price: 10,
                      brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a unit_price' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, purchase_fee: 10, finance_fee: 10,
                      total_price: 10, brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid with a negative unit_price' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: -10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid with a negative purchase_fee' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: -10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a purchase_fee' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: -10, finance_fee: 10,
                      total_price: 10, brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid with a negative finance_fee' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: -10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without finance_fee' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      total_price: 10, brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid with a negative total_price' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10,
                      total_price: -10, brand_name: 'Suzuki',
                      model_no: 1234, manufacturer: 'mitsubishi', manufacture_date: '2022-10-20', description: 'motor',
                      photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without total_price' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, brand_name: 'Suzuki', model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a brand_name' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, model_no: 1234, manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a model_no' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', manufacturer: 'mitsubishi',
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a manufacturer' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a manufacture_date' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi', description: 'motor', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a description' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi', manufacture_date: '2022-10-20', photo: 'https://motor.jpeg')
    expect(motor).not_to be_valid
  end

  it 'is not valid without a photo' do
    motor = Motor.new(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                      finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                      manufacturer: 'mitsubishi', manufacture_date: '2022-10-20', description: 'motor')
    expect(motor).not_to be_valid
  end
end
