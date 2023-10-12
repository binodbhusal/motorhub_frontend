Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'


  namespace:api do
    post 'sessions/create', to: 'sessions#sign_up'
    post 'sessions/new', to: 'sessions#login'
    resources :motors, only: [:index, :show, :create, :destroy]
    resources :users, only: [:index, :show, :create, :destroy] do
      resources :reservations, only: [:index, :show, :create, :update, :destroy]
    end
    resources :stores_location, only: [:index, :show, :create, :destroy]
    end
end
