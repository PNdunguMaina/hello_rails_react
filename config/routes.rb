Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
  get '/greetings', to: 'root#index'
  # api route
  namespace :api do
    namespace :v1 do
      get '/greetings/random', to: 'messages#random'
    end
  end
end
