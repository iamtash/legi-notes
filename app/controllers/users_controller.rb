class UsersController < ApplicationController
  def create
    authenticator = Authenticator.new(ENV['GOOGLE_CLIENT_ID'])
    if authenticator.valid_credentials?(token)
      user = User.find_or_initialize_by(email: authenticator.get_payload['email'])
      if user.save 
        render json: { id: user.id, email: user.email }
      else 
        render json: { status: 500 }
      end
    else
      render json: { status: 403 }
    end
    
  end
  

  private
    def token
      params.require(:idtoken)
    end
end