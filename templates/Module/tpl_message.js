<script type="text/template" id="tpl_DetailMessage">
	<div id = 'view_panel_left'>
	  <div id = 'view_event_info_left'>
	    <div id = 'view_event_info_tbar'>
	      <div id = 'departureInfo'>
	        <div id = 'departureLocation'><%= departure_location %></div>
	        <div id = 'departureLocation2'></div>
	        <div id = 'departureTime'>出发时间： <%= departure_time %></div>
	        <div id = 'departureSeats'>剩余座位： <%= departure_seatsNumber - departure_seatsBooked %></div>
	      </div>
	      <div id = 'directionArrow'></div>
	      <div id = 'returnInfo'>
	        <div id = 'returnLocation'><%= arrival_location %></div>
	        <div id = 'returnLocation2'></div>
	        <div id = 'returnTime'>返回时间： <%= arrival_time %></div>
	        <div id = 'returnSeats'>剩余座位： <%= arrival_seatsNumber - arrival_seatsBooked %></div>
	      </div>
	      <div id = 'note'><%= note %></div>
	    </div>
	    <div id='view_map'></div>
	    <div id='view_event_info_bbar'>
	      <div id='view_publishTime'>发布于 <%= creationTime %></div>
	      <div id='view_social'>
	        <div class='weibo_icon_small'></div>
	        <div class='renren_icon_small'></div>
	        <div class='qq_icon_small'></div>
	        <div class='douban_icon_small'></div>
	      </div>
	    </div>
	  </div>
	</div>
	<div id = 'view_panel_right'>
	      <% if (owner.userId !== this.userId && type === Constants.messageType.help ) { %>
	  <div id = 'view_event_info_right'>
	    <div id = 'view_event_info_right_container'>
	        <div id = 'view_book_option'>
	          <div>座位<input type = 'number' id = 'chooseSeatNumber' min="1"/></div>
	          <div id = 'directionSelection'>
	            <div id = "go" class="button">去</div><div id = "back" class="button">回</div>
	          </div>
	        </div>
	        <div id = 'view_book' class='button'>
	          预 定
	        </div>
	        <div id = 'price_total'></div>
	        <div id = 'pricelist' >    
	        </div>
	      <% } else if (owner.userId === this.userId) { %>
	        <% if (type === Constants.messageType.help) { %> 
	          <div id = 'view_event_info_right' style='height:220px'>
	            <div id = 'view_event_info_right_container'>
	              <div id = 'view_edit' class='button'>修&nbsp;&nbsp;&nbsp;&nbsp;改</div>
	              <div id = 'view_automatchButton' class='button'>匹&nbsp;&nbsp;配</div>

	        <div id = 'pricelist' >    
	        </div>
	        <%} else {%>
	          <div id = 'view_event_info_right' style='height:85px'>
	            <div id = 'view_event_info_right_container'>
	              <div id = 'view_edit' class='button'>修&nbsp;&nbsp;&nbsp;&nbsp;改</div>
	              <div id = 'view_automatchButton' class='button'>匹&nbsp;&nbsp;配</div>
	        <% } %>
	          <div id = 'view_automatch' >
	            
	          </div>
	      <% } else {%>
	        <div id = 'view_event_info_right' style='height:85px'>
	          <div id = 'view_event_info_right_container'>
	            <div id = 'view_contact' class='button'>联&nbsp;&nbsp;系&nbsp;&nbsp;他</div>
	      <% } %>


	    </div>
	  </div>

	  <div id = 'view_userInfo'>
	    <a href = "#<%= owner.userId +'/personal/'+ owner.userId %>"><img id='view_profilePicture' src=<%= owner.imgPath %>/></a>
	    <div id = 'view_profile_right'>
	      <div id='view_account'>
	        <div id = 'view_account_name'><%= owner.name %></div>
	      </div>
	      <div id='view_profileOverview'>
	        <div id='view_accountScore' class = 'view_profileOverviewBlock'>
	          <div id='view_accountScoreLabel'>平均分</div>
	          <div id='view_accountScoreHolder'>
	            <div id='view_accountScoreValue' class = "dashboard_text"><%= owner.averageScore %>
	            <span class='view_unit1'>%</span>
	            </div>
	          </div>
	        </div>
	        <div class='verticalSpacer'></div>
	        <div id='view_tradeCount' class = 'view_profileOverviewBlock'>
	          <div id='view_accountTradeCountLabel'>交易次数</div>
	          <div id='view_accountTradeCountValue' class = "dashboard_text"><%= owner.totalTranscations %></div>
	        </div>
	      </div>
	    </div>  
	  </div>
	  <div id = 'view_transactions'>
	    <div id = 'view_transactions_header'>
	      <div id = 'view_transactions_button'></div>
	      <div id = 'view_transactions_title'>这条信息已经被<span id = 'reservation_count'></span>人预定了</div>
	    </div>
	    <div id = 'view_transactions_content' style="display: none;">
	    </div>
	  </div>
	</div>
</script>


<script type="text/template" id="tpl_SimpleMessage">
    <div id = 'searchResultBox_<%= messageId %>' class="message_simple">
    	<% if (isRoundTrip === false)  { %>
            <dl class="clearfix back-and-forth">
        <% } else { %>
            <dl class='clearfix one-way'></div>
        <% } %>
            <dt><img src="<%= owner.imgPath %>" width="70" height="70"/><p><%= owner.name %></p></dt>
            <dd>
                <div class="from">
                    <h3>出发地：<%= departure_location %></h3>
                    <p><%= departure_time %>  <%= departure_timeSlot %></p>
                    <p>剩余座位：<%= departure_seatsNumber %>个</p>
                </div>
                <div class="arrow"></div>
                <div class="to">
                    <h3>目的地：<%= arrival_location %></h3>
                    <p>返程时间：<%= arrival_time %>   <%= departure_timeSlot %></p>
                    <p>剩余座位：<%= arrival_seatsNumber %>个</p>
                </div>
                <div class="price"> <%= currentPrice %>元/人 </div>
            </dd>
        </dl>
    </div>
</script>