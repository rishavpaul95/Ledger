class AddUserIdToCalculations < ActiveRecord::Migration[6.1]
  def change
    add_column :calculations, :user_id, :intiger
    add_index :calculations, :user_id
  end
end
