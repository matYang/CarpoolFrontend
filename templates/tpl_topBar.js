<script type="text/template" id="tpl_topBar-loggedIn">
	<div id = 'centerTopBar'>
	   <div id = 'logo'></div>
	   <ul id = 'subTitles'>
	      <li class = 'subTitle button navigate_main'>找事儿</li>
	      <li class = 'subTitle button navigate_usersearch'>找人</li>
	      <li class = 'subTitle button navigate_personal'>个人主页</li>
	      <li class = 'subTitle button navigate_feedBack'>发布消息</li>
	   </ul>
	   <div id = 'personalNavContainer'>
	      <ul>
	         <li id = 'notifications'></li>
	         <li id = 'letters'></li>
	         <li id = 'favorites'></li>
	      </ul>
	      <div id = 'profilePicture'>
	         <img id='profilePictureImg' src='<%= imgPath %>' />
	      </div>
	   </div>
	   <div id = 'dropdowns'>
	      <div id='notificationDropdown' class='dropdownBase'>
	         <div class='dropdownTitle'>
	            <div class='dropdownTitleText'>消息提示</div>
	            <div class='dropdownTitleCheckAll'>查看全部</div>
	         </div>
	         <div id='notificationDropdownContentContainer' class='dropdownContentContainer'>
	            <div class='dropdownContent'>
	               <div class='dropdown-img'>
	                  <img src='res/personal/default-avatar.jpg'/>
	               </div>
	               <div class='dropdown-text dropdown-notification-text'>
	                  <div class='dropdown-text-row1'><span class='dropdown-text-name'>17大二逼lol</span><span>关注了你的主页</span></div>
	                  <div class='dropdown-text-row2'><span>2013-10-12 10:32</span></div>
	               </div>
	            </div>
	            <!--this is where the notification dropdowns go-->  
	         </div>
	      </div>
	      <div id='letterDropdown' class='dropdownBase'>
	         <div class='dropdownTitle'>
	            <div class='dropdownTitleText'>我的传信</div>
	            <div class='dropdownTitleCheckAll'>查看全部</div>
	         </div>
	         <div id='letterDropdownContentContainer' class='dropdownContentContainer'>
	            <div class='dropdownContent letter-dropdown-read-0'>
	               <div class='dropdown-img'>
	                  <img src='res/personal/default-avatar.jpg'/>
	               </div>
	               <div class='dropdown-text dropdown-letter-text'>
	                  <div class='dropdown-text-row1'>
	                     <div class = 'dropdown-letter-from-txt'>
	                        <span class='dropdown-text-name'>马修羊</span>
	                        <span>对你说：</span>
	                     </div>
	                     <div class='dropdown-letter-content-text'>无聊发条信玩玩，你说是让他自己wrap呢还是弄一个...</div>
	                  </div>
	                  <div class='dropdown-text-row2'><span>2013-10-12 10:32</span></div>
	               </div>
	            </div>
	         </div>
	      </div>
	      <div id='favoriteDropdown' class='dropdownBase'>
	         <div class='dropdownTitle'>
	            <div class='dropdownTitleText'>我的收藏</div>
	            <div class='dropdownTitleCheckAll'>查看全部</div>
	         </div>
	         <div id='favoriteDropdownContentContainer' class='dropdownContentContainer'>
	            <div class='dropdownContent'>
	               <div class='dropdown-img'>
	                  <img src='res/personal/default-avatar.jpg'/>
	               </div>
	               <div class='dropdown-text dropdown-favorite-text'>
	                  <div class='dropdown-favorite-text-wrapper'>
	                     <div class='dropdown-text-row1'>
	                        <span class='dropdown-text-name'>17大二逼lol</span>
	                        <span class='dropdown-text-gender'><img src='res/dropdown/gender-2.png' /></span>
	                     </div>
	                     <div class='dropdown-text-row2'>
	                        <span>Waterloo, Ontario</span>
	                     </div>
	                  </div>
	                  <div class='dropdown-text-avgScore'>
	                     <span>6</span>
	                  </div>
	               </div>
	            </div>
	            <div class='dropdownContent'>
	               <div class='dropdown-img'>
	                  <img src='res/personal/default-avatar.jpg'/>
	               </div>
	               <div class='dropdown-text dropdown-favorite-text'>
	                  <div class='dropdown-favorite-text-wrapper'>
	                     <div class='dropdown-text-row1'>
	                        <span class='dropdown-text-name'>Matthew小超人</span>
	                        <span class='dropdown-text-gender'><img src='res/dropdown/gender-0.png' /></span>
	                     </div>
	                     <div class='dropdown-text-row2'>
	                        <span>MC3022, Waterloo, Ontario</span>
	                     </div>
	                  </div>
	                  <div class='dropdown-text-avgScore'>
	                     <span>10</span>
	                  </div>
	               </div>
	            </div>
	            <div class='dropdownContent'>
	               <div class='dropdown-img'>
	                  <img src='res/personal/default-avatar.jpg'/>
	               </div>
	               <div class='dropdown-text dropdown-favorite-text'>
	                  <div class='dropdown-favorite-text-wrapper'>
	                     <div class='dropdown-text-row1'>
	                        <span class='dropdown-text-name'>Lancy</span>
	                        <span class='dropdown-text-gender'><img src='res/dropdown/gender-1.png' /></span>
	                     </div>
	                     <div class='dropdown-text-row2'>
	                        <span>Waterloo, Ontario</span>
	                     </div>
	                  </div>
	                  <div class='dropdown-text-avgScore'>
	                     <span>?</span>
	                  </div>
	               </div>
	            </div>
	         </div>
	      </div>
	      <div id='profileDropdown'>
	         <div id='logout' class='dropdownContent'>退出</div>
	      </div>
	   </div>
	</div>
</script>


<script type="text/template" id="tpl_topBar-notLoggedIn">
	<div id = 'centerTopBar'>
		<div id = 'logo'></div>
		<form id='login'>
			<input id='login_username' class = 'no-input-value' type = 'text' />
			<input id='login_password' class = 'no-input-value' type = 'password' />
			<div id='login_button' class='button'>登陆</div>
			<div id='signup_button' class='button'>注册</div>
		</form>
	</div>
</script>