class CreateCalculations < ActiveRecord::Migration[6.1]
  def change
    create_table :calculations do |t|
      t.string :value
      t.text :description

      t.timestamps
    end
  end
end
