class Api::StoresLocationController < ApplicationController
  # GET /api/stores_location
  def index
    @locations = Location.all
    render json: @locations
  end

  # GET /api/stores_location/:id
  def show
    @location = Location.find_by(id: params[:id])
    if @location
      render json: @location
    else
      render json: { error: 'Location not found' }, status: :not_found
    end
  end

  # POST /api/stores_location
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PUT /api/stores_location/:id
  def update
    @location = Location.find_by(id: params[:id])
    if @location
      if @location.update(location_params)
        render json: @location
      else
        render json: @location.errors, status: :unprocessable_entity
      end
    else
      render json: { error: 'Location not found' }, status: :not_found
    end
  end

  # DELETE /api/stores_location/:id
  def destroy
    @location = Location.find_by(id: params[:id])
    if @location
      @location.destroy
      head :no_content
    else
      render json: { error: 'Location not found' }, status: :not_found
    end
  end

  private

  def location_params
    params.require(:location).permit(:city_name)
  end
end
