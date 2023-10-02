class Api::MotorsController < ApplicationController
  before_action :set_motor, only: %i[show update destroy]

  # GET /motors
  def random
    @motors = Motor.all
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
    @location = Location.find_or_create_by(name: params[:location_name])

    @motor = @location.motors.new(motor_params)
    @motor.user = current_user

    if @motor.save
      render json: @motor, status: :created
    else
      render json: @motor.errors, status: :unprocessable_entity
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
    if params[:id] == 'random'
      random
    else
      @motor = Motor.find_by(id: params[:id])

    end
  end

  def motor_params
    params.require(:motor).permit(:brand_name, :model_no, :manufacturer, :manufacturer_date, :description, :photo,
                                  :unit_price, :purchase_fee, :finance_fee, :total_price)
  end
end
