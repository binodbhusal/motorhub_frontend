class CreateReservation < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :motor_id
      t.date :reserve_date
      t.string :city_name

      t.timestamps
    end
    add_foreign_key :reservations, :users, column: :user_id
    add_foreign_key :reservations, :motors, column: :motor_id
    add_index :reservations, :city_name
    add_index :reservations, :motor_id
  end
end
