# encoding: utf-8
class QuestionsController < ApplicationController
  
  def login
    @client_id = Constant::APP_ID
    render :layout=>false
  end

  
  def result
    @sum = params[:sum].to_i
    if @sum == 4||@sum==5
      @score= rand(9)+40
      @message ="我刚刚对自己考研英语分数进行了预测，只有#{@score}分呀，我要继续加油努力，希望还是很大嘛~O(∩_∩)O~"
    elsif @sum==6 ||@sum==7
      @score=rand(9)+50
      @message="我刚刚对自己考研英语分数进行了预测，只有#{@score}分呀，希望就在前方，我去图书馆K书啦~O(∩_∩)O~"
    elsif @sum==8 || @sum==9
      @score=rand(9)+60
      @message="我刚刚对自己考研英语分数进行了预测，竟然是#{@score}分，还不错嘛~O(∩_∩)O~哈哈~，得瑟3秒钟，然后看书！！"
    elsif @sum==10
      @score=rand(9)+70
      @message="我刚刚对自己考研英语分数进行了预测，竟然是#{@score}分，太棒了~O(∩_∩)O我是报北大呢，还是报清华呢！！"
    elsif @sum==11|| @sum==12
      @score=rand(9)+80
      @message="我刚刚对自己考研英语分数进行了预测，竟然有#{@score}分，我干脆去办考研英语辅导班吧。嘿嘿！"
    end
    if params[:share].to_i==1
      renren_send_message(session[:user_info]["access_token"],message)
    end
  end

end
