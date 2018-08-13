Rails.application.routes.draw do

  root to: 'home#index'

  get '/questions/vote', to: 'votes#upvote_questions'

  resources :questions

  devise_for :users

  resources :users do
    resources :questions
  end

  get '/vote/:question_id/:voted_answer', to: 'votes#register_vote'
  get '/vote/:question_id', to: 'votes#register_vote'
  
end
