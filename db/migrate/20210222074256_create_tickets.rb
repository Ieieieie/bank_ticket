class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :bank_name, null: false
      t.string :branch_name, null: false
      t.string :deposit_type, null: false
      t.string :account_number , null: false
      t.string :account_name, null: false
      t.integer :amount, null: false
      t.datetime :deadline, null: false
      t.boolean :pay_judgment, default: false
      t.timestamps
    end
  end
end
