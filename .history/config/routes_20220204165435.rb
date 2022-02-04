Rails.application.routes.draw do
  root 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
end
