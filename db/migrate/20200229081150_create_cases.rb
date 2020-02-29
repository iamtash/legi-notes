class CreateCases < ActiveRecord::Migration[5.2]
  def change
    create_table :cases do |t|
      t.string :number
      t.string :title
      t.string :client
      t.integer :user_id

      t.timestamps
    end
  end
end
