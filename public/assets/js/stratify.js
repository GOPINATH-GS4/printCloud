function barChartMultipleSeries(element, type, width, height, data) {

    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: element,
            type: type,
            events: {
                click: function(e) {
                    var elem = e;
                    console.log(elem);
                },
                load: function() {},
                afterPrint: function() {},
                redraw: function() {}
            }

        },
        title: {
            text: data.chart_title
        },
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            title: {
                text: data.yLabel
            },
            plotOptions: {
                series: {
                    animation: {
                        complete: function() {
                            this.hideLoading();
                        }
                    }
                }
            }
        },
        series: data.series
    });

}

function makeChartData(title, histData) {
    var chart = {};
    chart.chart_title = title;
    chart.categories = ['age', 'bmi', 'blood glucose', 'a1c'];
    chart.yLabel = 'Count';
    chart.series = [];
    for (var i = 0; i < histData.length; i++) {
        var o = {};
        o.name = chart.categories[i];
        o.data = [];
        o.data.push(Math.round(histData[i] * 10) / 10);
        chart.series.push(o);
    }
    console.log(JSON.stringify(chart));
    return chart;
}
$(function() {
    $(document).ready(function() {
        var elem = document.getElementById('chart');
        HTTPRequest.get('/datasource/data/' + sessionId, function(status, headers, content) {

            console.log(content);
            var x = JSON.parse(content);
            var data = x.cluster.cluster;
            var n = data.centroids;
            var row;

            for (i = 0; i < n.length; i++) {

                if (i % 4 == 0) {
                    row = document.createElement('div');
                    row.className = 'row break-down-3';

                    elem.appendChild(row);
                }
                var c = document.createElement('div');
                c.className = 'col-sm-3';
                c.id = 'div-cluster-' + i;
                var d = document.createElement('div');
                d.id = 'cluster-' + i;
                c.appendChild(d);
                var btn = document.createElement('a');
                btn.className = 'choose break-down-2';
                btn.text = 'Cluster-' + i;
                btn.href = '/cluster/' + sessionId + '/' + i;
                btn.name = 'BTN-' + i;
                btn.innerHTML = 'Cluster-' + i;
                c.appendChild(btn);
                row.appendChild(c);
                var chart = makeChartData('cluster ' + i, n[i]);
                barChartMultipleSeries('cluster-' + i, 'column', 0, 0, chart);

            }
        });
    });
});