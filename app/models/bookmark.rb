class Bookmark < ApplicationRecord
    belongs_to :case

    def case_attributes=(case_attributes)
        self.case = Case.create(case_attributes)
    end
end
