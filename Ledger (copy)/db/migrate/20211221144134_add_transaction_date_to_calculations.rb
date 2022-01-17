class AddTransactionDateToCalculations < ActiveRecord::Migration[6.1]
  def change
    add_column :calculations, :stage, :date
  end
end
