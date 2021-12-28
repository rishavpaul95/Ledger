class AddStatusTypeToCalculations < ActiveRecord::Migration[6.1]
  def change
    add_column :calculations, :status_type, :string
  end
end
