class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _options = {})
    if resource.persisted?
      render json: {
        status: {
          code: 200, message: 'Signed up successfully', data: resource
        }
      }
    else
      Rails.logger.error("User not created successfully. Errors: #{resource.errors.full_messages}")

      render json: {

        status: {
          message: 'User not created successfully',
          errors: resource.errors.full_messages
        }
      }, status: :unprocessable_entity
    end
  end

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
