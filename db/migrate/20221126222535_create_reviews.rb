class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :menu_item
      t.column "score", :integer
      t.string :testimonial

  end
  end
end
