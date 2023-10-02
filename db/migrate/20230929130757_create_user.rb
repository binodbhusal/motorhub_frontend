class CreateUser < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role

      t.timestamps
    end
    add_index :users, :id
    add_index :users, :name
    add_index :users, :role
  end
end
