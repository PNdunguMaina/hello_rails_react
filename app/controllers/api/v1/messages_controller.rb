class Api::V1::MessagesController < ApplicationController
  def random
    @greeting1 = Message.order('RANDOM()').second!
    render json: @greeting1
  end
end
