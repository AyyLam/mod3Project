class Api::V1::CommentsController < ApplicationController
  before_action :find_comment, only: [:show, :edit, :update, :destroy]

  #GET /comments
  #GET /comments.json
  def index
    @comments = Comment.all
    render json: @comments
  end

  #GET /comments/1
  #GET /comments/1.json
  def show
    # comment = Comment.find_comment
    render json: @comment
  end

  # GET/comments/new
  def new
    @comment = Comment.new
  end


  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end


  # GET /comments/1/edit
  def edit
  end

  def update
    @comment.update(comment_params)
    if @comment.save
      render json: @comment, status: :accepeted
    else
      render json:{ errors: @comment.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    @comment.destroy
      respond_to do |format|
      format.html { redirect_to lists_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end



  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end
end
