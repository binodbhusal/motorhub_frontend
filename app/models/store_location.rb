class StoreLocation < ApplicationRecord
  has_many :motors, foreign_key: :location_id, dependent: :destroy

  validates :city_name, presence: true
end
