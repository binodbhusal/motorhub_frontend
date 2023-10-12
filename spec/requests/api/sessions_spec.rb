require 'swagger_helper'

RSpec.describe 'API Sessions', type: :request do
  describe 'POST api/sessions/sign_up' do
    it 'returns a 201 Created response when signing up' do
      post '/api/sessions/create', params: { name: 'newuser', role: 'user' }.to_json,
                                   headers: { 'Content-Type' => 'application/json' }
      expect(response).to have_http_status(201)
    end
  end
end
