class CreateStoreLocation < ActiveRecord::Migration[7.0]
  def change
    create_table :store_locations do |t|
      t.string :city_name

      t.timestamps
    end
    add_index :store_locations, :id
    add_index :store_locations, :city_name
  end
end
