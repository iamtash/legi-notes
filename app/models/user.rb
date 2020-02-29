class User < ApplicationRecord
    has_many :cases
    has_many :bookmarks, through: :cases
end
