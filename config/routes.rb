Rails.application.routes.draw do
  post 'users' => 'users#create'
  get 'cases' => 'cases#index'
  post 'bookmarks' => 'bookmarks#create'
end
