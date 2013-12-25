<script type="text/template" id="tpl_front">
        <div class="frontPage">
            <div class="frontPage-searchBanner">
                <div class="frontPage-searchBanner_inner">
                    
                    <!--搜索框-->
                    <div class="frontPage-searchBanner-searchBox">
                        <div class="form">
                            <div id="from" class="from"><label></label><input class="text" type="text" value="出发地"/><span></span></div>
                            <div id="to" class="to"><label></label><input class="text" type="text" value="目的地"/><span></span></div>
                            <div class="clearfix">
                                <div class="date"><label></label><input class="text" type="text" value="出发日期"/><span></span></div>
                                <div class="btn_search"><input type="button" value="立即搜索"/></div>
                            </div>
                        </div>
                    </div>
                    
                    <!--介绍文字-->
                    <div class="frontPage-searchBanner-introText">
                        <h2>简单生活，我们拼车吧！</h2>
                        <p>方便，省钱，还可以交到志同“道”合的朋友</p>
                        <p>您还可以 <a href="#">点击这里</a> 了解我们网站</p>
                    </div>
                    
                </div>
            </div>
            
            <div class="frontPage-middle clearfix">
                
                <!--最新拼车信息 start-->
                <div class="frontPage-recentMessage">
                  <h2>最新拼车信息</h2>
                  <div id='frontPage-resultPanel' class='frontPage-resultPanel'></div>
                </div>
                <!--最新拼车信息 end-->
                
                <!--目的地 start-->
                <div class="frontPage-destinations">
                    <h2>目的地</h2>
                    <div class="slider_container"> <a class="left_arr">&nbsp;</a> <a class="right_arr">&nbsp;</a>
                        <div class="slider cycle-slideshow" 
                        data-cycle-timeout=5000
              data-cycle-caption="#frontPage-caption"
              data-cycle-caption-template="<h3>{{cycleTitle}}</h3>"
              data-cycle-prev=".left_arr"
              data-cycle-next=".right_arr">
                          <img src="style/images/toronto_min.png" data-cycle-title="Toronto">
                          <img src="style/images/yorkdale_min.png" data-cycle-title="Yorkdale">
                          <img src="style/images/pearson_min.png" data-cycle-title="Pearson">
                        </div>
                    </div>
                    <div id="frontPage-caption" class="caption"></div>
                </div>
                <!--热门目的地 end-->
            </div>
            
            <!--经验之谈 start-->
            <div class="frontPage-lower">
                <div class="frontPage-experience">
                    <h2>经验之谈</h2>
                    <dl>
                        <dt><span class="qu1"></span><span class="txt">刚开始会有很多担心，行车安全问题，一块拼车的人怎么样，时间上能不能对刀仪快去...呵呵，各种不放心，现在好了，我认识了很多人，每次拼车像是一块出去旅行似的，大家有说有笑的，郭师傅的那个车都有我的专属座位了！！</span><span class="qu2"></span></dt>
                        <dd id="frontPage-userButtons" class="clearfix"> 
                            <div class="user active clearfix"> <img class="userImg" src="style/images/user.png" width="70" height="70"/>
                                <div class="userInfo">
                                    <p>RockyZhu</p>
                                    <p>大四大学生</p>
                                </div>
                            </div>
                            <div class="user f-gray clearfix"> <img class="userImg" src="style/images/user1.png" width="70" height="70"/>
                                <div class="userInfo">
                                    <p>ROBINpp</p>
                                    <p>西安----郑州</p>
                                </div>
                            </div>
                            <div class="user f-gray clearfix"> <img class="userImg" src="style/images/user2.png" width="70" height="70"/>
                                <div class="userInfo">
                                    <p>朱丹</p>
                                    <p>北京----天津</p>
                                </div>
                            </div>
                            <div class="user f-gray clearfix"> <img class="userImg" src="style/images/user3.png" width="70" height="70"/>
                                <div class="userInfo">
                                    <p>hanxiaoyan</p>
                                    <p>杭州----苏州</p>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <!--经验之谈 end-->
            
        </div>
</script>