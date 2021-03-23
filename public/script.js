// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};


// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}




const chatbox = jQuery.noConflict();

chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );

  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
  });

  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});



$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 50) {
          $("#scroll").css('background-color', 'white');
      } else {
          $("#scroll").css('background-color', 'rgb(0 0 0 / 5%)');
      }
  });
});
