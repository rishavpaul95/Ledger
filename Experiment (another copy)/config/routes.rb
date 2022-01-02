Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :calculations 
  root to: "calculations#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
