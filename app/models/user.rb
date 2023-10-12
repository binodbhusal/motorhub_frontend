class User < ApplicationRecord
  has_many :motors, foreign_key: :user_id, dependent: :destroy
  has_many :reservations, foreign_key: :user_id, dependent: :destroy

  validates :name, presence: true
  validates :role, presence: true
end
