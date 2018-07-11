class Api::V1::MealsController < ApplicationController
  before_action :find_meal, only: [:show, :edit, :update]

  #GET /meals
  #GET /meals.json
  def index
    @meals = Meal.all
    render json: @meals
  end

  #GET /meals/1
  #GET /meals/1.json
  def show
    render json: @meal
  end

  # GET/meals/new
  def new
    @meal = Meal.new
  end


  # POST /meals
  # POST /meals.json
  def create
    @meal = Meal.new(meal_params)

    respond_to do |format|
      if @meal.save
        format.html { redirect_to @meal, notice: 'Meal was successfully created.' }
        format.json { render :show, status: :created, location: @meal }
      else
        format.html { render :new }
        format.json { render json: @meal.errors, status: :unprocessable_entity }
      end
    end
  end


  # GET /meals/1/edit
  def edit
  end

  def update
    @meal.update(meal_params)
    if @meal.save
      render json: @meal, status: :accepeted
    else
      render json:{ errors: @meal.errors.full_messages }, status: :unprocessible_entity
    end
  end



  private

  def meal_params
    params.require(:meal).permit(:name, :rank)
  end

  def find_meal
    @meal = Meal.find(params[:id])
  end
end
