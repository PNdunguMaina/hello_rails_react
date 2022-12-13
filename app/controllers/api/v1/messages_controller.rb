
class Api::V1::MessagesController < ApplicationController
  def random
    @greeting_1 = Message.order('RANDOM()').second!
    render json: @greeting_1
  end
end
