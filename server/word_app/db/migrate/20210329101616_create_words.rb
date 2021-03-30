class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :alphabet
      t.string :words
      t.timestamps
    end
  end
end
