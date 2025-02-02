# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_17_26_222537) do

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.integer "reviews_id"
    t.index ["reviews_id"], name: "index_customers_on_reviews_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.string "description"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "menu_item_id"
    t.string "name"
    t.string "address"
    t.string "email"
    t.string "phone"
    t.index ["menu_item_id"], name: "index_orders_on_menu_item_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "menu_item_id"
    t.integer "score"
    t.string "testimonial"
    t.index ["menu_item_id"], name: "index_reviews_on_menu_item_id"
  end

end
