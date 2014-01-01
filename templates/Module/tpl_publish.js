<script type="text/template" id="tpl_Publish_base">
	<div id = 'publish_progress'></div>
	<div id = 'publish_requirement'></div>
	<div id = 'publish_map'></div>
</script>


<script type="text/template" id="tpl_Publish_singleSlotAsk">
	<div id='publish_time_<%= id %>' class='publish_time_box'>
	  <div id='publish_time_header_<%= id %>' class='publish_time_header'>行程<%= id %></div>
	  <div class='publish_time_info'>
	    <div class='publish_time'>
	      <div class='publish_label'>出发时间</div>
	      <input type='text' name='publish_departDate_<%= id %>' class='input_date'/>
	      <select name='depart_time_<%= id %>'>
	        <option value="0">随意</option>
	        <option value="1">上午7-12点</option>
	        <option value="2">下午1-5点</option>
	        <option value="3">晚上6-次日凌晨</option>
	        <option value="4">凌晨1点</option>
	        <option value="5">凌晨2点</option>
	        <option value="6">凌晨3点</option>
	        <option value="7">凌晨4点</option>
	        <option value="8">早上5点</option>
	        <option value="9">早上6点</option>
	        <option value="10">早上7点</option>
	        <option value="11">早上8点</option>
	        <option value="12">早上9点</option>
	        <option value="13">早上10点</option>
	        <option value="14">早上11点</option>
	        <option value="15">中午12点</option>
	        <option value="16">下午1点</option>
	        <option value="17">下午2点</option>
	        <option value="18">下午3点</option>
	        <option value="19">下午4点</option>
	        <option value="20">傍晚5点</option>
	        <option value="21">傍晚6点</option>
	        <option value="22">晚上7点</option>
	        <option value="23">晚上8点</option>
	        <option value="24">晚上9点</option>
	        <option value="25">晚上10点</option>
	        <option value="26">晚上11点</option>
	        <option value="27">晚上12点</option>
	      </select>
	    </div>
	    <div class='publish_time'>
	      <div class='publish_label'>返回时间</div>
	      <input type='text' name='publish_returnDate_<%= id %>' class='input_date'/>
	      <select name='return_time_<%= id %>'>
	        <option value="0">随意</option>
	        <option value="1">上午7-12点</option>
	        <option value="2">下午1-5点</option>
	        <option value="3">晚上6-次日凌晨</option>
	        <option value="4">凌晨1点</option>
	        <option value="5">凌晨2点</option>
	        <option value="6">凌晨3点</option>
	        <option value="7">凌晨4点</option>
	        <option value="8">早上5点</option>
	        <option value="9">早上6点</option>
	        <option value="10">早上7点</option>
	        <option value="11">早上8点</option>
	        <option value="12">早上9点</option>
	        <option value="13">早上10点</option>
	        <option value="14">早上11点</option>
	        <option value="15">中午12点</option>
	        <option value="16">下午1点</option>
	        <option value="17">下午2点</option>
	        <option value="18">下午3点</option>
	        <option value="19">下午4点</option>
	        <option value="20">傍晚5点</option>
	        <option value="21">傍晚6点</option>
	        <option value="22">晚上7点</option>
	        <option value="23">晚上8点</option>
	        <option value="24">晚上9点</option>
	        <option value="25">晚上10点</option>
	        <option value="26">晚上11点</option>
	        <option value="27">晚上12点</option>
	      </select>
	      <input type='checkbox' name='publish_round_<%= id %>' class='input_checkbox' value='round' checked='true'/>
	    </div>
	    <div id='publish_delete_<%= id %>' class='publish_delete button'>
	      删除
	    </div>
	  </div>
	</div>	
</script>


<script type="text/template" id="tpl_Publish_step1">
	<form id='publish_info'>
		<div id='publish_type'>
			<div class = 'publish_label'>我要</div>
			<div class = 'selectBox selectBox_selected' id = 'publish_1' >
				<div id='publish_help_img'></div>
				<div id='publish_help_text' class='button'>
					开车
				</div>
			</div>
		<div class = 'selectBox' id = 'publish_0' >
			<div id='publish_ask_img'></div>
			<div id='publish_ask_text'  class='button'>
				找车
			</div>
		</div>
		<!-- I suggest that we highlight the border instead of using radio button -->
		</div>

		<div id='publish_origin'>
			<div class='publish_label'>出发地</div>
			<input type='text' id='publish_originInput'/>
		</div>
		<div id='publish_dest'>
			<div class='publish_label'>目的地</div>
			<input type='text' id='publish_destInput'/>
			<div id='publish_tip'>yoke</div>
		</div>	      
		<div id='publish_nextStep' class='button'>下一步</div>
	</form>
</script>


<script type="text/template" id="tpl_Publish_step2">
	<form id='publish_info'>
		<div id='publish_time_container'>
	  		<div id='publish_time_slots'>
	  		</div>
	  		<div id='publish_time_add' class='button'>+ 添加一组点名</div>
		</div>
	</form>
	<div id = 'publish_back' class='button'>
	  返回修改
	</div>
	<div id = 'publish_nextStep' class='button'>
	  下一步
	</div>	
</script>


<script type="text/template" id="tpl_Publish_step3">
	<div class = 'publish_header'>其他信息</div>
	<div id = 'publish_description'>
	<textarea id='publish_description_input'></textarea>
	</div>

	<div id = 'publish_seat_container'>
	<div class = 'publish_label' style = "margin-top:5px;">座位</div>
	<input id = 'seats' value = '1' type = 'text' pattern="[0-9]*"/>
	</div>
	<div id = 'publish_pricelist_container'>
	<div id = 'conditionalPriceSwitch' class='button'>按人数收费</div>
	<div class = 'publish_header'>价格表</div>
	<div id = 'publish_singlePrice'>
	  <input id = 'seats_single' type = 'text' class='seat_price' pattern="[0-9]*" />/1人
	 </div>
	<div id = 'publish_priceList'>
	  <div class = 'publish_priceEntry'>
	      人数1  每人<input id = 'seats_1' type = 'text' class='seat_price' pattern='[0-9]*' />元
	  </div>
	  <div id = 'priceList_add'></div>
	  <div id = 'priceList_minus'></div>
	</div>

	</div>
	<div id = 'publish_back' class='button'>
	  返回修改
	</div>
	<div id = 'publish_finish' class='button'>
	  发布
	</div>	
</script>