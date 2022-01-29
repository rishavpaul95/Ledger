class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    before_action :configure_permitted_parameters, if: :devise_controller?

     around_action :user_time_zone, if: :current_user
   

    protected

          def user_time_zone(&block)
               Time.use_zone(current_user.time_zone, &block)
          end

         def configure_permitted_parameters
              devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password, :time_zone)}

              devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password , :time_zone) }
         end
                        
end
