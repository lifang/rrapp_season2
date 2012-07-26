# encoding: utf-8
class QuestionsController < ApplicationController
  include LoginsHelper

  
  def login
    @client_id = Constant::APP_ID
    render :layout=>false
  end

  
  def result
    @score = [rand(25) + 45, rand(30) + 50, rand(35) + 100]
    @is_yuwen = params[:is_yuwen].to_i
    if @is_yuwen == 1
      @total_score = @score[0] + @score[1] + 117
    else
      @total_score = @score[0] + @score[1] + @score[2]
    end
    if params[:share].to_i==1
      message="我刚预测了考研成绩，原来如此简单，轻松飘过"
       renren_send_message(session[:user_info]["access_token"],message)
    end
  end

end
