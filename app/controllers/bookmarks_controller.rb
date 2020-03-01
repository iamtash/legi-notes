class BookmarksController < ApplicationController
  def create
    bookmark = Bookmark.new(bookmark_params)
    if bookmark.save
      render json: bookmark.to_json(include: :case)
    else
      render json: { status: 500 }
    end
  end

  def destroy
  end

  private
    def bookmark_params
      params.require(:bookmark).permit(
        :bill_number,
        :url,
        :case_id,
        case_attributes: [
          :number,
          :title,
          :client,
          :user_id
        ]
      )
    end
end