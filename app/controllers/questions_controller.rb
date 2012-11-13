# encoding: utf-8
class QuestionsController < ApplicationController
  
  def login
    @client_id = Constant::APP_ID
    render :layout=>false
  end

  
  def result
    @sum = params[:sum].to_i
    if @sum >= 4 and @sum <= 7
      @score= rand(9)+40
      @message ="我要继续加油努力，希望还是很大嘛~O(∩_∩)O~"
    elsif @sum >= 8 and @sum <= 10
      @score=rand(9)+50
      @message="希望就在前方，我去图书馆K书啦~O(∩_∩)O~"
    elsif @sum >= 11 and @sum <= 14
      @score=rand(9)+60
      @message="还不错嘛~O(∩_∩)O~哈哈~，得瑟3秒钟，然后看书！！"
    elsif @sum >= 15 and @sum <= 17
      @score=rand(9)+70
      @message="太棒了~O(∩_∩)O我是报北大呢，还是报清华呢！！"
    elsif @sum >= 18 and @sum <= 20
      @score=rand(9)+80
      @message="我干脆去办考研英语辅导班吧。嘿嘿！"
    end    
  end

  def share
    puts "-----------------------------"
    puts params[:is_share]
    if params[:is_share].to_i==1
      renren_send_message(params[:asse_t], params[:content])
    end
    render :inline => ""
  end

end
