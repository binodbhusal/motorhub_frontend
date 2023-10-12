require 'swagger_helper'

describe 'Store Locations API' do
  path '/api/stores_location' do
    post 'Creates a store location' do
      tags 'Store Locations'
      consumes 'application/json'
      parameter name: :store_location, in: :body, schema: {
        type: :object,
        properties: {
          city_name: { type: :string }
        },
        required: ['city_name']
      }
      response '201', 'store location created' do
        let(:store_location) { { city_name: 'Lisbon' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:store_location) { { city_name: nil } } # Invalid request to trigger a 422 response
        run_test!
      end
    end

    get 'Lists store locations' do
      tags 'Store Locations'
      produces 'application/json'

      response '200', 'list of store locations' do
        run_test!
      end
    end
  end
end
