Rails.application.routes.draw do
 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
end
