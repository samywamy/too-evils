Rails.application.routes.draw do

  root to: 'home#index'

  resources :questions

  resources :users do
    resources :questions
  end

  get '/vote/:question_id/:voted_answer', to: 'votes#register_vote'


  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
