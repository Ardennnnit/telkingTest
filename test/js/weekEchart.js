var weekPie = echarts.init(document.querySelector("#chart2"))
var weekBar = echarts.init(document.querySelector("#chart3"))
var weekPieOption = {
    title: {
        text: "饼状图数据显示",
        left:"center",
    },
    tooltip: {
        trigger: "item",
    },

    series: [{
        name: "商品数",
        type: "pie",
        data: [],
        emphasis: {
            itemStyle:{
                shadowBlur: 10,
                shadowOffsetX:0,
                shadowColor:"rgba(0,0,0,0.5)",
            }
        }
    }]
}

var weekBarOption = {
    title: {
        text: "柱状图数据显示",
        left: "center",
    },
    tooltip: {
        trigger: "axis",
        axisPointer:{
            type: "shadow",
        }
    },
    grid:{
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: "category",
        data: []
    },
    yAxis:{
        type:"value",
        name:"商品数",
    },
    series: [{
        data:[],
        type: "bar",
        name: "商品数",
        barWidth: "40%",
        
    }]
}

getData({ type:"week" }).then((res) => {
    let sales = res.data.data.series
    let week = res.data.data.xAxis

    this.weekPieOption.series[0].data = week.map((week,index) => ({
        name: week,
        value: sales[index],
    }))

    this.weekBarOption.xAxis.data = week
    this.weekBarOption.series[0].data = sales

    weekPie.setOption(weekPieOption)
    weekBar.setOption(weekBarOption)
})