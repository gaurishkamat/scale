// import { Element,Component, h, Prop ,Host} from '@stencil/core';
// import * as d3 from "d3"; 
// import { select } from 'd3-selection';
// // console.log(d3);
// @Component({
//   tag: 'scale-line',
//   shadow: true,
// })
// export class ChartLine {
//   /** Chart Data */
//   @Prop() data: string = "[]";
//   @Prop() width: number = 300;
//   @Prop() height: number = 300;
//   @Prop() cid: string = "linechart";
//   public chartData: any; 
//   @Element() element: HTMLElement;
//   constructor(){
//     this.chartData = this.formatDate(JSON.parse(this.data))
//   }
//   componentDidLoad() {
//     const margin = { top: 10, right: 30, bottom: 30, left: 60 }
//     let svg = d3.select(this.element.shadowRoot.querySelectorAll(".chart")[0])
//     .attr(
//       "viewBox",
//       `-30 20 ${this.width + margin.left + margin.right} ${
//         this.height + margin.top + margin.bottom
//       }`
//     );
//     this.buildChart(svg); 
//    }
//   formatDate(array){
//     return array.map(d=>{
//       return{date: new Date(d.date),value:d.value}
//     })
//   }
//   buildChart(svg) {
//     let data = this.chartData
//    // data = this.formatDate(data)
//     console.log(data);
//     /// Logic1///
//     // const parseDate = d3.timeParse("%m/%d/%Y %H:%M");
//     var x = d3
//     .scaleTime()
//     .domain(
//       d3.extent(data, function (d) {
//         return  d.date;
//       })
//     )
//     .range([0, this.width]);
//     svg.append("g")
//     .attr("transform", "translate(0," + this.height + ")")
//     .call(d3.axisBottom(x).ticks(6))
//     ;
//     const y = d3
//     .scaleLinear()
//     .domain([
//       0,
//       d3.max(data, function (d) {
//         return d.value;
//       }),
//     ])
//     .range([this.height, 0]);
//       svg.append("g").call(d3.axisLeft(y));
//       svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "steelblue")
//       .attr("stroke-width", 1.5)
//       .attr("d",d3.line()
//           .x(function (d) {
//             return x(d.date);
//           })
//           .y(function (d) {
//             return y(d.value);
//           })
//       );
//   }
//   readData = data => {
//     try {
//       return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
//     } catch (error) {
//       return Array.isArray(data) ? data : [];
//     }
//   }
//     render() {
//       return  (<Host><svg width={this.width} height={this.height} id = "lchart" class="chart"/></Host>)
//     }
//   }