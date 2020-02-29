class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.string :bill_number
      t.string :url
      t.integer :case_id

      t.timestamps
    end
  end
end
