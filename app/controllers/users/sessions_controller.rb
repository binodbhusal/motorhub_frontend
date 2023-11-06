class Users::SessionsController < Devise::SessionsController
  respond_to :json
  before_action :authenticate_user!, except: [:create]

  def create
    user = User.find_by(email: params[:email])

    if user && user.valid_password?(params[:password])
      # User's email and password are valid
      # Generate a JWT token and return it in the response
      token = generate_jwt_token(user)
      
      render json: {
        status: {
          code: 200,
          message: 'User signed in successfully',
        },
        data: {
          token: token,
          user: user

        }
      }, status: :ok
    else
      # Invalid email or password
      render json: {
        status: {
          code: 401,
          message: 'Invalid email or password'
        }
      }, status: :unauthorized
    end
  end

  # ... other actions (e.g., respond_to_on_destroy) ...

  private

  def generate_jwt_token(user)
    # Your JWT token generation logic here
    # Typically, you would use a gem like 'jwt' to generate tokens
    # Example:
    payload = { sub: user.id, email: user.email }
    secret_key = Rails.application.credentials.fetch(:secret_key_base)
    token = JWT.encode(payload, secret_key, 'HS256')
    return token
  end
end
