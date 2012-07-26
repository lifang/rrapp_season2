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
    message="我刚刚对自己考研成绩进行了预测，竟然有英语 #{@score[0]}，政治 #{@score[1]}"
    if @is_yuwen == 1
      @total_score = @score[0] + @score[1] + 117
    else
      message +=",数学 #{@score[2]}"
      @total_score = @score[0] + @score[1] + @score[2]
    end
    if @total_score>=195 && @total_score <=220
      message +=",还不赖，不过还得继续努力哦"
    elsif @total_score>=221 && @total_score <250
      message +=",有戏！有戏！！"
    elsif @total_score>=250 && @total_score <270
      message +=",希望那是相当的大，O(∩_∩)O哈哈~，继续加油！！"
    elsif @total_score>=270 && @total_score <285
      message +=",十拿九稳咯，不过不能掉以轻心哦"
    end
    if params[:share].to_i==1
      renren_send_message(session[:user_info]["access_token"],message)
    end
  end

end
