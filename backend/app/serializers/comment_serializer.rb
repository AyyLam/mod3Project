class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  # belongs_to :meal

  def meal_name
    object.meal.name
  end 
end
