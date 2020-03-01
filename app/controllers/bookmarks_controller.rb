class BookmarksController < ApplicationController
  def create
    bookmark = Bookmark.new(bookmark_params)
    if bookmark.save
      render json: bookmark.to_json
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
        :case_attributes
      )
    end
end