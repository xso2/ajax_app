class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end


  def create
    Post.create(content: params[:content])
    
  end
end
