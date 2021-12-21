class AddIsExpenseToCalculation < ActiveRecord::Migration[6.1]
  def change
    add_column :calculations, :is_expense, :boolean, default: true
  end
end
