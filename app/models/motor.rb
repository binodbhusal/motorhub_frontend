class Motor < ApplicationRecord
  belongs_to :user, foreign_key: 'user_id'
  belongs_to :store_location, foreign_key: 'location_id'
  has_many :reservations, foreign_key: :motor_id, dependent: :destroy

  validates :unit_price, :purchase_fee, :finance_fee, :total_price, numericality: { greater_than_or_equal_to: 0 }
  validates_presence_of :brand_name, :model_no, :manufacturer, :manufacture_date, :description, :photo

  def calculate_prices
    calculated_purchase_fee = unit_price * 0.01
    calculated_finance_fee = unit_price * 0.03
    calculated_total_price = unit_price + calculated_purchase_fee + calculated_finance_fee
    unless purchase_fee == calculated_purchase_fee &&
           finance_fee == calculated_finance_fee &&
           total_price == calculated_total_price
      errors.add(:base, 'Prices are not correctly calculated')
    end
  end
end
