<script type="text/template" id="tpl_transactionDetail">
	<div id="transactionDetail_container">
		<div id = "transaction_trip_info">
			<div id = 'transaction_departureInfo'>
				<div id = 'transaction_departureLocation'><%= departure_location %></div>
				<div id = 'transaction_departureLocation2'></div>
				<div id = 'transaction_departureTime'>出发时间： <%= departure_time %>&nbsp;&nbsp;<% departure_timeSlot %></div>
				<div id = 'transaction_departureSeats'>剩余座位： <%= departure_seatsNumber%></div>
			</div>
			<div id = 'transaction_returnInfo'>
				<div id = 'transaction_returnLocation'><%= arrival_location %></div>
				<div id = 'transaction_returnLocation2'></div>
				<% if ( transactionId === -1 && arrival_seatsNumber &&  arrival_seatsNumber > 0 ) { %>
				<div id = 'transaction_returnTime'>出发时间： <%= arrival_time %>&nbsp;&nbsp;<% arrival_timeSlot %></div>
				<div id = 'transaction_returnSeats'>剩余座位： <%= arrival_seatsNumber %></div>
				<% } %>
			</div>

			<div id="transaction_priceList">
			 	 <% var len = departure_priceList.length < arrival_seatsNumber ? departure_priceList.length : arrival_seatsNumber; 
			 	 len = len < departure_seatsNumber ? departure_seatsNumber : len;
			 	 len = len < 8 ? len : 8;
			 	  %>
				 <% for ( var priceCount = 0; priceCount < len ; priceCount++ ){ %>
				 	<% if (departure_priceList[priceCount]> 0 ){ %>
				 		<div class="transaction_priceEntry"><%- priceCount+1 %>人: <%- departure_priceList[priceCount] %>元</div>
				 	<% } %>	
				 <% } %>
			</div>
			<div id="transaction_note">
				<%= providerNote %>
			</div>

		</div>
		<div id = 'transaction_userInfo'>
			司机 <img src='<%= provider.imgPath %>' />
			乘客 <img src='<%= customer.imgPath %>' />
		</div>
		<div id="triptypeselection">
			<div id="transaction_state" class="transactionState<%= state %>"><%= stateText %></div>
			<% if (type !== 2 && departure_seatsNumber > 0)  { %>
				<div id = 'transaction_go' class='button'>去<%= arrival_location.split(",")[0] %></div>
			<% } %> 
			<% if (type !== 1 && arrival_seatsNumber > 0 ) { %>
				<div id = 'transaction_back' class='button'>回<%= departure_location.split(",")[0] %></div>
			<% } %>
			<div id="transaction_input">
			人数: <input type="number" id="transaction_number" min="1" max="<%= departure_seatsNumber < arrival_seatsNumber ? departure_seatsNumber : arrival_seatsNumber %>"/>
			</div>
			<div id="transaction_totalPrice"></div>
		</div>
		<div id="transaction_map"></div>
		<div id="transaction_user"></div>

		<textarea id="transaction_userNote">还有什么想说的?</textarea>
		<div id="transaction_control">
		    <div id = "closeButton" class="button">关闭</div>
			<div id = "reportButton" class="button">举报</div>
			<div id = "evaluateButton" class="button">评分</div>
			<div id = "startButton" class="button">订位</div>
	    </div>
	</div>
	<% if ( state === 3 ) { %>
	<div id = "evaluation_container" display="none">
		<div class = 'label'>评分</div>
		<select id="score_selection">
		  <option value="5">5分</option>
		  <option value="4">4分</option>
		  <option value="3">3分</option>
		  <option value="2">2分</option>
		  <option value="1">1分</option>
		</select>
		<div id="confirm_score" class='button'>确认</div>
	</div>
	<%}%>
</script>