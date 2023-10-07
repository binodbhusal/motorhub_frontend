class Api::MotorsController < ApplicationController
  before_action :set_motor, only: %i[show update destroy]

  # GET /motors
  def index
    @motors = Motor.includes(:reservations, :store_location)
    @motors = @motors.where(brand_name: params[:brand_name]) if params[:brand_name].present?
    @motors = @motors.paginate(page: params[:page], per_page: params[:per_page] || 10)
    render json: @motors
  end

  # GET /motors/1
  def show
    @motor = Motor.find_by(id: params[:id])
    render json: @motor
  end

  # GET /motors/new
  def new
    @motor = Motor.new
  end

  # POST /motors
  def create
    # Get the city_name from the motor parameters
    city_name = params[:city_name]

    # Find an existing StoreLocation by city_name
    store_location = StoreLocation.find_by(city_name:)

    if store_location.nil?
      # If it doesn't exist, create a new StoreLocation
      store_location = StoreLocation.create(city_name:)
    end

    # Create a new motor and associate it with the store_location
    @motor = Motor.new(motor_params)
    @motor.user_id = 1
    @motor.store_location = store_location

    if @motor.save
      render json: @motor, status: :created
    else
      # Failed to create, log the errors
      Rails.logger.error(@motor.errors.full_messages.join(', '))
      render json: { errors: @motor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /motors/1
  def update
    if @motor.update(motor_params)
      render json: @motor
    else
      render json: @motor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /motors/1
  def destroy
    @motor.destroy
  end

  private

  def set_motor
    if params[:id] == 'index'
      index
    else
      @motor = Motor.find_by(id: params[:id])

    end
  end

  def motor_params
    params.require(:motor).permit(:brand_name, :model_no, :manufacturer, :manufacture_date, :description, :photo,
                                  :unit_price, :purchase_fee, :finance_fee, :total_price, :city_name)
  end
end
