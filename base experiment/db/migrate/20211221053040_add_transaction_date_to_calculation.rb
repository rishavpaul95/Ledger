class AddTransactionDateToCalculation < ActiveRecord::Migration[6.1]
  def change
    add_column :calculations, :transaction_date, :datetime
  end
end
