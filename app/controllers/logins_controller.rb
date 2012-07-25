#encoding: utf-8
class LoginsController < ApplicationController
  include LoginsHelper

  def get_info
    session[:user_info]=renren_get_user(params[:access_token])
    render :inline=>"response"
  end

  def get_callback
   render :inline=>"<script type='text/javascript'>var p = window.location.href.split('#');var pr = p.length>1 ? p[1] : '';window.location.href = '/logins/get_info?'+pr;</script>"
  end
end