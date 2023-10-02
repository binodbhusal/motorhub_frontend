class CreateMotor < ActiveRecord::Migration[7.0]
  def change
    create_table :motors do |t|
      t.integer :user_id
      t.integer :location_id
      t.string :brand_name
      t.integer :model_no
      t.string :manufacturer
      t.date :manufacture_date
      t.text :description
      t.string :photo
      t.float :unit_price
      t.float :purchase_fee
      t.float :finance_fee
      t.float :total_price

      t.timestamps
    end
    add_index :motors, :brand_name
    add_index :motors, :id
    add_foreign_key :motors, :users, column: :user_id
    add_foreign_key :motors, :store_locations, column: :location_id
  end
end
