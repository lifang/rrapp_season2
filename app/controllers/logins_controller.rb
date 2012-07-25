#encoding: utf-8
class LoginsController < ApplicationController
  include LoginsHelper

  def get_info
    session[:user_info]=renren_get_user(params[:access_token])
    render :inline=>"response"
  end

  def get_callback
    render :inline=>"<script type='text/javascript'>var p = window.location.href.split('#');window.location.href = '/logins/get_info?'+p.length>1 ? p[1] : '';</script>"
  end
end