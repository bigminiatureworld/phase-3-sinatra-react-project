class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :menu_item
      t.string :name
      t.string :address
      t.string :email
      t.string :phone
      
    end
  end
end
