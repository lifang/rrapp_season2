#encoding: utf-8
module LoginsHelper
  require 'net/http'
  require "uri"
  require 'openssl'



  #人人主方法
  def renren_api(request)
    uri = URI.parse("http://api.renren.com")
    http = Net::HTTP.new(uri.host, uri.port)
    return  http.request(request).body
  end
  #
  #构成人人签名请求
  def renren_sig_request(query)
    str = ""
    query.sort.each{|key,value|str<<"#{key}=#{value}"}
    str<<Constant::RENREN_API_SECRET
    sig = Digest::MD5.hexdigest(str)
    query[:sig]=sig
    request = Net::HTTP::Post.new("/restserver.do")
    request.set_form_data(query)
    return request
  end
  #
  #人人获取用户信息
  def renren_get_user(access_token)
    query = {:access_token => access_token,:format => 'JSON',:method => 'xiaonei.users.getInfo',:v => '1.0',:fields=>"uid,name,university_history,headurl"}
    request = renren_sig_request(query)
    response = JSON renren_api(request)
  end
  #
  #人人发送新鲜事
  def renren_send_message(access_token,message)
    query = {:access_token => "#{access_token}",:comment=>"#{message}",:format => 'JSON',:method => 'share.share',:type=>"6",:url=>"http://test.gankao.co",:v => '1.0'}
    request = renren_sig_request(query)
    response =JSON renren_api(request)
  end
  #
  #END -------人人API----------

end
