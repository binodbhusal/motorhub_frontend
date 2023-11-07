require 'swagger_helper'

RSpec.describe 'User Sessions', type: :request do
  describe 'POST /users/sign_in' do
    let(:user) { create(:user, email: 'user@example.com', password: 'password') }

    context 'with valid email and password' do
      it 'logs in a user and returns a JWT token' do
        post '/users/sign_in', params: { email: user.email, password: 'password' }, as: :json

        expect(response).to have_http_status(:ok)

        # Parse the response JSON to get the token
        response_body = JSON.parse(response.body)
        expect(response_body['status']['code']).to eq(200)
        expect(response_body['status']['message']).to eq('User signed in successfully')
        expect(response_body['data']['token']).not_to be_nil
        expect(response_body['data']['user']).not_to be_nil
      end
    end

    context 'with invalid email or password' do
      it 'returns an unauthorized status' do
        post '/users/sign_in', params: { email: 'nonexistent@example.com', password: 'wrong_password' }, as: :json

        expect(response).to have_http_status(:unauthorized)

        response_body = JSON.parse(response.body)
        expect(response_body['status']['code']).to eq(401)
        expect(response_body['status']['message']).to eq('Invalid email or password')
      end
    end
  end
end
