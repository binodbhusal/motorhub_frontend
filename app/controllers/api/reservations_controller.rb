class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[show update destroy]

  # GET /api/reservations
  def index
    @reservations = current_user.reservations.order(created_at: :desc)
    render json: @reservations
  end

  # GET /api/reservations/1
  def show
    render json: @reservation
  end

  # POST /api/reservations
  def create
    @reservation = current_user.reservations.new(reservation_params)

    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/reservations/1
  def destroy
    @reservation.destroy
  end

  private

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def reservation_params
    params.require(:reservation).permit(:motor_id, :reserve_date, :city_name)
  end
end
