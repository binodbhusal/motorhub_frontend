# spec/requests/user_registration_spec.rb

require 'swagger_helper'

RSpec.describe 'User Registration', type: :request do
  before(:each) do
    create_list(:user, 1) # Create some users before running the test
  end

  path '/users' do
    post 'Registers a user' do
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string },
          password_confirmation: { type: :string }
        },
        required: %w[name email password password_confirmation]
      }

      response '200', 'user registered' do
        let(:user_attributes) do
          attributes_for(:user) # Use FactoryBot to generate user attributes
        end

        let(:user) { { user: user_attributes } } # Add this line

        run_test! do
          post '/users', params: { user: user_attributes }, as: :json
          created_user = User.find_by(email: user_attributes[:email])
          expect(created_user).not_to be_nil
        end
      end

      response '422', 'invalid user registration' do
        let(:invalid_user_attributes) do
          attributes_for(:user, email: 'invalid-email', password: 'short', password_confirmation: 'mismatch',
                                name: 'Invalid User')
        end

        let(:user) { { user: invalid_user_attributes } } # Add this line

        run_test! do
          post '/users', params: { user: invalid_user_attributes }, as: :json
          expect(response).to have_http_status(:unprocessable_entity)

          # Verify that the user is not created in the database
          user = User.find_by(email: invalid_user_attributes[:email])
          expect(user).to be_nil
        end
      end
    end
  end
end
