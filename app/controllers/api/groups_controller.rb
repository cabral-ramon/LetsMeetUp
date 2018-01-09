class Api::GroupsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

  def create
    @group = Group.new(group_params)

    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.new(group_params)

    if @group.save
      render "/api/groups/"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
    @groups = Group.includes(:members).all.shuffle[0...9]
    render :index
  end

  def show
    @group = Group.includes(:members).find(params[:id])
    render :show
  end

  def destroy
    @group = Group.find(params[:id])
  end

  private
  def group_params
    params.require(:group).permit(:name, :location, :description, :image)
  end
end
