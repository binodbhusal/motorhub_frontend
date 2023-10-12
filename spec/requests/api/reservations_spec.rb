require 'swagger_helper'

RSpec.describe 'API Reservations', type: :request do
  before :each do
    @user = User.create(name: 'John', role: 'admin')
    @store_location = StoreLocation.create(city_name: 'Lisbon')
    @motor = Motor.create(user_id: @user.id, location_id: @store_location.id, unit_price: 10, purchase_fee: 10,
                          finance_fee: 10, total_price: 10, brand_name: 'Suzuki', model_no: 1234,
                          manufacturer: 'mitsubishi', manufacture_date: '2022-10-20', description: 'motor', photo: 'https://motor.jpeg')
    @reservation_attributes = {
      motor_id: @motor.id,
      reserve_date: '2022-10-20',
      city_name: 'Lisbon'
    }
  end

  path '/api/users/{user_id}/reservations' do
    post 'Creates a reservation' do
      tags 'Reservations'
      consumes 'application/json'
      parameter name: :user_id, in: :path, type: :integer, required: true
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          motor_id: { type: :integer },
          reserve_date: { type: :string, format: 'date' },
          city_name: { type: :string }
        },
        required: %w[motor_id reserve_date city_name]
      }

      response '201', 'reservation created' do
        let(:user_id) { @user.id }
        let(:reservation) { @reservation_attributes }

        it 'debugging info' do
          puts "User ID: #{user_id}, Motor ID: #{reservation[:motor_id]}"
        end

        run_test!
      end

      response '422', 'invalid request' do
        let(:user_id) { @user.id }
        let(:reservation) { { motor_id: 999, reserve_date: '2022-10-20', city_name: 'Goma' } }
        run_test!
      end
    end

    get 'Lists reservations' do
      tags 'Reservations'
      produces 'application/json'
      parameter name: :user_id, in: :path, type: :integer, required: true

      response '200', 'list of reservations' do
        let(:user_id) { @user.id }
        run_test!
      end

      response '404', 'user not found' do
        let(:user_id) { 9999 }
        run_test!
      end
    end
  end
end
