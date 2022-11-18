class Order < ActiveRecord::Base
    belongs_to :customer
    belongs_to :menu_item


    def order_history
        {
            name: self.customer.name,
            address: self.customer.address,
            phone: self.customer.phone,
            score: self.review.score,
            testimonial: self.review.testimonial,
            meal: self.order.all
        }
    end
end