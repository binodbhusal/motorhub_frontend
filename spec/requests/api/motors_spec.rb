require 'swagger_helper'

RSpec.describe 'API Motors', type: :request do
  path '/api/users' do
    post 'Creates a user' do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          role: { type: :string }
        },
        required: %w[name role]
      }

      response '201', 'user created' do
        let(:user) { { name: 'test', role: 'admin' } }
        run_test! do
          expect(response.status).to eq(201)
          user_id = JSON.parse(response.body)['id']
          puts "User Created: #{response.body}"

          motor_attributes = {
            user_id:,
            location_id: 1,
            unit_price: 10.0,
            purchase_fee: 10.0,
            finance_fee: 10.0,
            total_price: 10.0,
            brand_name: 'Suzuki',
            model_no: 1234,
            manufacturer: 'Mitsubishi',
            manufacture_date: '2022-10-20',
            description: 'Motor',
            photo: 'https://motor.jpeg'
          }

          post '/api/motors', params: { motor: motor_attributes }.to_json,
                              headers: { 'CONTENT_TYPE' => 'application/json' }

          expect(response.status).to eq(201)
          puts "Motor Created: #{response.body}"
        end
      end
    end
  end
end

RSpec.describe 'API Motors', type: :request do
  path '/api/motors' do
    get 'Lists all motors' do
      tags 'Motors'
      produces 'application/json'

      response '200', 'list of motors' do
        schema type: :array, items: { '$ref' => '#/components/schemas/Motor' }

        run_test! do
          motors = JSON.parse(response.body)
          expect(response.status).to eq(200)
          expect(motors).to be_an(Array)
          puts "List of Motors: #{motors}"
        end
      end
    end
  end
end

RSpec.describe 'API Motors', type: :request do
  path '/api/motors' do
    post 'Creates a motor' do
      tags 'Motors'
      consumes 'application/json'
      parameter name: :motor, in: :body, schema: {
        type: :object,
        properties: {
          user_id: { type: :integer },
          location_id: { type: :integer },
          unit_price: { type: :number },
          purchase_fee: { type: :number },
          finance_fee: { type: :number },
          total_price: { type: :number },
          brand_name: { type: :string },
          model_no: { type: :integer },
          manufacturer: { type: :string },
          manufacture_date: { type: :string, format: :date },
          description: { type: :string },
          photo: { type: :string }
        },
        required: %w[user_id location_id unit_price purchase_fee finance_fee total_price brand_name model_no
                     manufacturer manufacture_date description photo]
      }

      response '201', 'motor created' do
        let(:motor) do
          {
            user_id: 1,
            location_id: 1,
            unit_price: 10.0,
            purchase_fee: 10.0,
            finance_fee: 10.0,
            total_price: 10.0,
            brand_name: 'Suzuki',
            model_no: 1234,
            manufacturer: 'Mitsubishi',
            manufacture_date: '2022-10-20',
            description: 'Motor',
            photo: 'https://motor.jpeg'
          }
        end
        run_test! do
          expect(response.status).to eq(201)
          puts "Motor Created: #{response.body}"
        end
      end
    end
  end
end
