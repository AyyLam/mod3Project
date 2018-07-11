class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :rank
  has_many :comments
end
