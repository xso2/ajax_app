class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end


  def create
    post = Post.create(content: params[:content])
    redirect_to action: :index  # 追記する
  end
end