var monthLine = echarts.init(document.querySelector("#chart1"))

var monthLineOption = {
    titles: {
        text: "曲线图数据显示",
        left: "center",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
    xAxis: {
        type: "category",
        boundaryGap:false,
        data:[],
    },
    yAxis: {
        type: "value",
        axisLabel:{
            formatter: "{value} 人",
        },
    },
    series: [{
        type: "line",
        smooth: true,
        data: [],
        areaStyle: {
            color:"#F3F6FD",
        },
        lineStyle: {
            color: "#4587F0",
        },
        label:{
            show:true,
            position: "top",
            color:"#4587F0"
        }
    }]
}

getData({ type: "month"}).then((res) => {
    let xAxisData = res.data.data.xAxis
	let seriesData = res.data.data.series

	this.monthLineOption.xAxis.data = xAxisData.filter((item, index) => index % 2 === 0)
	this.monthLineOption.series[0].data = seriesData.filter(
		(item, index) => index % 2 === 0
	)
    
	monthLine.setOption(monthLineOption)
})