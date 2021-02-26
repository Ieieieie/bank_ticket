Rails.application.routes.draw do
  root "ticket#index"
  resources :ticket
  patch 'transfer/:id', to: 'ticket#transfer'
  get 'paid', to: 'ticket#paid'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
end