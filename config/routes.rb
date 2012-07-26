RrappSeason2::Application.routes.draw do

  resources :logins do
    collection do
      get :get_info,:get_callback
    end
  end
  resources :questions do
    collection do
      get :share, :result, :question
    end
  end

   root :to => 'questions#login'
  match "/question", :to=>"questions#question"
  match "/result", :to=>"questions#result"
  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
