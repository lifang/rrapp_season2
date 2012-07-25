# encoding: utf-8
class QuestionsController < ApplicationController
  include LoginsHelper

  
  def index
    @client_id="196777"
  end

  
  def result
    if params[:share].to_i==1
      message="我刚预测了考研成绩，原来如此简单，轻松飘过"
       renren_send_message(session[:user_info]["access_token"],message)
    end
  end

end
