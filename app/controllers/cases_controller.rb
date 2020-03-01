class CasesController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    render json: user.cases.to_json(include: {
      bookmarks: { only: [:url, :bill_number]}
    })
  end

  def create
  end

  def update
  end

  def destroy
  end
end
