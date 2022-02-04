Rails.application.routes.draw do
  ろお 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
end
