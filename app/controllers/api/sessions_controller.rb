class Api::SessionsController < ApplicationController
  def sign_up
    request_body = JSON.parse(request.body.read)
    user_name = request_body['name']
    user_role = request_body['role']
    @existing_user = User.where(name: user_name)
    if @existing_user.exists?
      render json: { error: 'User already exists!' }, status: :unprocessable_entity
      return
    end
    @user = User.new(name: user_name, role: user_role)

    return unless @user.save

    render json: { message: 'user created successfully', user: @user }, status: :created
  end

  def login
    request_body = JSON.parse(request.body.read)
    user_name = request_body['name']
    @user = User.where(name: user_name)
    if @user.exists?
      render json: { message: 'User logged in successfully!', user: @user }, status: :ok
    else
      render json: { error: 'invalid user name!' }, status: :unprocessable_entity
    end
  end
end
