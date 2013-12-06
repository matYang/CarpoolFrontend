<script type="text/template" id="tpl_main">
  <div id='searchEventTab'>
    <div id = 'searchMain'>
    <div id = 'searchbox' class = 'searchContainer'>
      <div id="inputFields">
      <div id = "locationInputs">
        <div class = "searchInputLabel">出发地</div>
        <input type="text" id = 'searchLocationInput_from' class = 'searchInput' />
        <input type="text" id = 'customizeLocationInput_from' class = 'searchInput' />
        <div class = "searchInputLabel">目的地</div>
        <input type="text" id = 'searchLocationInput_to' class = 'searchInput' />
        <input type="text" id = 'customizeLocationInput_to' class = 'searchInput' />
      </div>
      <div id = "dateInputs">
        <input type="text" id = 'searchDateInput_depart' class = 'searchInput' />
        <input type="text" id = 'searchDateInput_return' class = 'searchInput' />
      </div>
      </div>
      <div id = 'searchTypeContainer'>
        <div id="oneWay">单程</div>
        <div id="round">往返</div>
      </div>

        <div id = 'searchResultButton' class = 'searchResultButton button'>查询</div>
        
      </div>
      <div id = "leftPanel">
        <div id = 'searchResultDisplayPanel' class = 'searchResultDisplay'>
        <!-- home to the searchResultView on mainPage-->
        </div>
      </div>
      <div id = 'filterBox' class = 'searchContainer'>
            <div id = 'searchFilterTimeContainer1'>
              <div id = 'filterInputTimeLabel1' class = 'searchInputLabel'>出发时间</div>  

              <div id = 'filterInputTimeTagContainer1' class = 'searchInputTagContainer'>
                <ul id = 'timeSelections1'>
                  <li id = 'timeSelectionAll1' data-id='all' class='selected timeList button'>全部</li>
                  <li id = 'timeSelectionMorning1' data-id='morning' class='notSelected timeList button'>早上</li>
                  <li id = 'timeSelectionAfternoon1' data-id='afternoon' class='notSelected timeList button'>下午</li>
                  <li id = 'timeSelectionNight1' data-id='night' class='notSelected timeList button'>晚上</li>
                  <!-- need to add tooltip text here with js -->
                </ul>
              </div>
            </div>
            <div id = 'searchFilterTimeContainer2' display="none">
              <div id = 'filterInputTimeLabel2' class = 'searchInputLabel'>返回时间</div>  

              <div id = 'filterInputTimeTagContainer2' class = 'searchInputTagContainer'>
                <ul id = 'timeSelections2'>
                  <li id = 'timeSelectionAll2' data-id='all' class='selected timeList button'>全部</li>
                  <li id = 'timeSelectionMorning2' data-id='morning' class='notSelected timeList button'>早上</li>
                  <li id = 'timeSelectionAfternoon2' data-id='afternoon' class='notSelected timeList button'>下午</li>
                  <li id = 'timeSelectionNight2' data-id='night' class='notSelected timeList button'>晚上</li>
                  <!-- need to add tooltip text here with js -->
                </ul>
              </div>
            </div>
            <div id = 'searchFilterTypeContainer'>
              <div id = 'filterInputTypeLabel' class = 'searchInputLabel'>分类</div>
              <ul id = 'typeSelections'>
                  <li id = 'typeSelectionAll' data-id='all' class='selected timeList button'>全部</li>
                  <li id = 'typeSelectionOffer' data-id='driver' class='notSelected timeList button'>司机</li>
                  <li id = 'typeSelectionFind' data-id='passenger' class='notSelected timeList button'>乘客</li>
                  <!-- need to add tooltip text here with js -->
                </ul>
            </div>
            <div id = 'searchFilterPriceContainer'>
              <div id = 'filterInputPriceLabel' class = 'searchInputLabel'>价格</div> 
            </div>
            <div id = 'searchResultRefreshContainer'>
              <div id = 'refreshButton' class = 'searchResultButton button'>应用</div>
            </div>
      </div>
    </div>
  </div>
</script>