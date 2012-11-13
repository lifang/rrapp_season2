# encoding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter  :set_p3p
  include Constant
  include LoginsHelper
  
  def set_p3p
    response.headers['P3P'] = 'CP="CAO PSA OUR"'
  end

end
