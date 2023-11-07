# registration_spec.rb

require 'swagger_helper'


RSpec.describe 'User Registration', type: :request do
  it 'registers a user' do
      user_attributes = {
      email: 'user@example.com',
      password: 'password',
      password_confirmation: 'password',
      name: 'John'
    }

    post '/users', params: { user: user_attributes }, as: :json

    expect(response).to have_http_status(:ok)

    # Verify that the user is created in the database
    user = User.find_by(email: user_attributes[:email])
    expect(user).not_to be_nil

  end
  it 'handles invalid user registration' do
    invalid_user_attributes = {
      email: 'invalid-email',
      password: 'short',
      password_confirmation: 'mismatch',
      name: 'Invalid User'
    }

    post '/users', params: { user: invalid_user_attributes }, as: :json

    expect(response).to have_http_status(:unprocessable_entity)

    # Verify that the user is not created in the database
    user = User.find_by(email: invalid_user_attributes[:email])
    expect(user).to be_nil

  end
end
