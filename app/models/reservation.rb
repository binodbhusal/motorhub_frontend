class Reservation < ApplicationRecord
  belongs_to :motor, foreign_key: 'motor_id'
  belongs_to :user, foreign_key: 'user_id'

  validates :city_name, presence: true
end
