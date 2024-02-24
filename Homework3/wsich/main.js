let abFilter = 25
const width = window.innerWidth;
const height = window.innerHeight;

let scatterLeft = 0, scatterTop = 0;
let scatterMargin = {top: 10, right: 30, bottom: 30, left: 60},
    scatterWidth = 400 - scatterMargin.left - scatterMargin.right,
    scatterHeight = 350 - scatterMargin.top - scatterMargin.bottom;

let distrLeft = 400, distrTop = 0;
let distrMargin = {top: 10, right: 30, bottom: 30, left: 60},
    distrWidth = 400 - distrMargin.left - distrMargin.right,
    distrHeight = 350 - distrMargin.top - distrMargin.bottom;

let teamLeft = 0, teamTop = 400;
let teamMargin = {top: 10, right: 30, bottom: 30, left: 60},
    teamWidth = width - teamMargin.left - teamMargin.right,
    teamHeight = height-450 - teamMargin.top - teamMargin.bottom;


d3.csv("ds_salaries.csv").then(rawData =>{
    console.log("rawData", rawData);
    
    rawData.forEach(function(d){
        d.salary_in_usd = Number(d.salary_in_usd);
    });
    

    rawData = rawData.map(d=>{
                          return {
                              "job_title":d.job_title,
                              "salary_in_usd": d.salary_in_usd,
                              "experience_level":d.experience_level
                          };
    });
    console.log(rawData);

    // Goes through rawData to find all of the data engineers' data on 
    // experience level quantified and salary.
    // SE - Senior; MI - Mid Level; EN - Entry Level; EX - Experienced (Assuming 
    // between Entry and Mid level).
    const dataEngineerSalVsExp = [];

    // Jobs of Data Engineer, Data Scientist, Data Analyst, and ML Engineer.
    // const jobs = [];
    const jobs = {
        "DE": [],
        "DS": [],
        "DA": [],
        "ML": []
    };
    const jobSalary = [];
    rawData.forEach(function(d) {
        if (d.job_title === "Data Engineer") {
            if (d.experience_level === "SE") {
                const s = {
                    "job_title": d.job_title,
                    "experience_level_map": 3,
                    "salary_in_usd": d.salary_in_usd
                };
                const p = {
                    "experienceLevel": 3, 
                    "salary": d.salary_in_usd
                    
                }

                dataEngineerSalVsExp.push(s);
                jobs.DE.push(p);
                jobSalary.push(p)
            }
            
            else if (d.experience_level === "MI") {
                const s = {
                    "job_title": d.job_title,
                    "experience_level_map": 2,
                    "salary_in_usd": d.salary_in_usd
                };
                const p = {
                    "experienceLevel": 2, 
                    "salary": d.salary_in_usd
                    
                }

                dataEngineerSalVsExp.push(s);
                jobs.DE.push(p);
                jobSalary.push(p)
            }
            else if (d.experience_level === "EX") {
                const s = {
                    "job_title": d.job_title,
                    "experience_level_map": 1.5,
                    "salary_in_usd": d.salary_in_usd
                };
                const p = {
                    "experienceLevel": 1.5, 
                    "salary": d.salary_in_usd
                    
                }
                dataEngineerSalVsExp.push(s);
                jobs.DE.push(p);
                jobSalary.push(p)
            }
            else if (d.experience_level === "EN") {
                const s = {
                    "job_title": d.job_title,
                    "experience_level_map": 1,
                    "salary_in_usd": d.salary_in_usd
                };
                const p = {
                    "experienceLevel": 1, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                dataEngineerSalVsExp.push(s);
                jobs.DE.push(p);
            } 
        }

        else if (d.job_title === "Data Scientist") {
            if (d.experience_level === "SE") {
                const p = {
                    "experienceLevel": 3, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DS.push(p);
            }
            else if (d.experience_level === "MI") {
                const p = {
                    "experienceLevel": 2, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DS.push(p);
            }
            else if (d.experience_level === "EX") {
                const p = {
                    "experienceLevel": 1.5, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DS.push(p);
            }
            else if (d.experience_level === "EN") {
                const p = {
                    "experienceLevel": 1, 
                    "salary": d.salary_in_usd
                    
                }
                jobs.DS.push(p);
                jobSalary.push(p)
            }
        }

        else if (d.job_title === "Data Analyst") {
            if (d.experience_level === "SE") {
                const p = {
                    "experienceLevel": 3, 
                    "salary": d.salary_in_usd
                    
                }
                jobs.DA.push(p);
                jobSalary.push(p)
            }
            else if (d.experience_level === "MI") {
                const p = {
                    "experienceLevel": 2, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DA.push(p);
            }
            else if (d.experience_level === "EX") {
                const p = {
                    "experienceLevel": 1.5, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DA.push(p);
            }
            else if (d.experience_level === "EN") {
                const p = {
                    "experienceLevel": 1, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.DA.push(p);
            }
        }

        else if (d.job_title === "Machine Learning Engineer") {
            if (d.experience_level === "SE") {
                const p = {
                    "experienceLevel": 3, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.ML.push(p);
            }
            else if (d.experience_level === "MI") {
                const p = {
                    "experienceLevel": 2, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.ML.push(p);
            }
            else if (d.experience_level === "EX") {
                const p = {
                    "experienceLevel": 1.5, 
                    "salary": d.salary_in_usd
                    
                }
                jobSalary.push(p)
                jobs.ML.push(p);
            }
            else if (d.experience_level === "EN") {
                const p = {
                    "experienceLevel": 1, 
                    "salary": d.salary_in_usd
                    
                }
                jobs.ML.push(p);
                jobSalary.push(p)
            } 
        } 
    });
    console.log("dataEngineerSalVsExp", dataEngineerSalVsExp);
    console.log("jobs", jobs);

//plot 1
const svg = d3.select("svg")

    
const g1 = svg.append("g")
            .attr("width", scatterWidth + scatterMargin.left + scatterMargin.right)
            .attr("height", scatterHeight + scatterMargin.top + scatterMargin.bottom)
            .attr("transform", `translate(${scatterMargin.left}, ${scatterMargin.top})`)
                   
// Title
g1.selectAll("text").raise();

g1.append("text")
.attr("x", scatterWidth / 2 + 20)
.attr("y", scatterHeight - 295)
.attr("font-size", "20px")
.attr("text-anchor", "middle")
.text("Data Engineer's Salary Vs Experience Level")

// X label
g1.append("text")
.attr("x", scatterWidth / 2 + 20)
.attr("y", scatterHeight + 68)
.attr("font-size", "18px")
.attr("text-anchor", "middle")
.text("Experience Level")


// Y label
g1.append("text")
.attr("x", -(scatterHeight / 2))
.attr("y", -40)
.attr("font-size", "18px")
.attr("text-anchor", "middle")
.attr("transform", "rotate(-90)")
.text("Salary (USD)")

// X ticks
const x1 = d3.scaleLinear()
.domain([0.5, d3.max(dataEngineerSalVsExp, d => d.experience_level_map)])
.range([0, scatterWidth])

const xAxisCall = d3.axisBottom(x1)
                    .ticks(3)
g1.append("g")
.attr("transform", `translate(15, ${scatterHeight + 30})`)
.call(xAxisCall)
.selectAll("text")
    .attr("y", "10")
    .attr("text-anchor", "end")
    .attr("transform", `translate(3, 0)`)

// Y ticks
const y1 = d3.scaleLinear()
.domain([0, d3.max(dataEngineerSalVsExp, d => d.salary_in_usd)])
.range([scatterHeight, 0])

const yAxisCall = d3.axisLeft(y1)
                    .ticks(10)
g1.append("g").call(yAxisCall)
.attr("transform", `translate(15, 30)`)

// Draws the data.
// const rects = g1.selectAll("circle").data(dataEngineerSalVsExp)
var circleG = g1.append('g');
var circles = circleG.selectAll('circle')
    .data(dataEngineerSalVsExp).enter()
    .append('circle')
     .attr("cx", function(d){
         return x1(d.experience_level_map);
     })
     .attr("cy", function(d){
         return y1(d.salary_in_usd);
     })
     .attr("r", 3)
     .attr("fill", "#69b3a2")
     .attr("transform", `translate(15, 30)`)


  // Create the brush behavior.

     var brush = d3.brush()
     .extent([[0, 0], [scatterWidth+30, scatterHeight + 25]])
     .on("start", function() {
        console.log("Brush started");
     })
     .on("brush", brushed)
     .on("end", function() {
        console.log("Brush ended");
     })
     ;
     
     circleG.call(brush);


     function brushed() {        
        var extent = d3.event.selection;
        // Count the selected jobs
        let selectedDataCount = 0;
        // console.log(extent);
        // console.log("circles: ", circles);
        circles.attr("fill", function(d) {
            // Calculate the position of each data point relative to the SVG element
            var xPos = x1(d.experience_level_map) + 15; // Add the translation offset
            var yPos = y1(d.salary_in_usd) + 30; // Add the translation offset

            // Check if the data point's position falls within the brush selection box
            var isSelected = xPos >= extent[0][0] && 
                            xPos <= extent[1][0] && 
                            yPos >= extent[0][1] && 
                            yPos <= extent[1][1];

            // Increment the count for the corresponding job title if the data point is selected
            if (isSelected) {
                selectedDataCount++;
            }      
            // console.log("Selected Data Counts", selectedDataCount)

            // Define fill color based on isSelected
            var fillColor = isSelected ? "steelblue" : "#69b3a2";

            // Return fill color based on isSelected
            return fillColor;            
        });
      }

//space
    const g2 = svg.append("g")
                .attr("width", distrWidth + distrMargin.left + distrMargin.right)
                .attr("height", distrHeight + distrMargin.top + distrMargin.bottom)
                .attr("transform", `translate(${distrLeft}, ${distrTop})`)

//plot 2
    
    q = rawData.reduce((s, { job_title }) => (s[job_title] = (s[job_title] || 0) + 1, s), {});
    r = Object.keys(q).map((key) => ({ job_title: key, count: q[key] }));
    console.log("r", r);

           
    const g3 = svg.append("g")
                .attr("width", teamWidth + teamMargin.left + teamMargin.right)
                .attr("height", teamHeight + teamMargin.top + teamMargin.bottom)
                .attr("transform", `translate(${teamMargin.left}, ${teamTop})`)

    // Title
    g1.append("text")
    .attr("x", scatterWidth / 2 + 700)
    .attr("y", scatterHeight + 90)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Number of Workers to Job Type")

    // X label
    g3.append("text")
    .attr("x", teamWidth / 2)
    .attr("y", teamHeight + 80)
    .attr("font-size", "18px")
    .attr("text-anchor", "middle")
    .text("Job Title")
    

    // Y label
    g3.append("text")
    .attr("x", -(teamHeight / 2))
    .attr("y", -40)
    .attr("font-size", "18px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("# of Workers in the Job")

    // X ticks
    const x2 = d3.scaleBand()
    .domain(r.map(d => d.job_title))
    .range([0, teamWidth])
    .paddingInner(0.3)
    .paddingOuter(0.2)

    const xAxisCall2 = d3.axisBottom(x2)
    g3.append("g")
    .attr("transform", `translate(10, ${teamHeight - 75})`)
    .call(xAxisCall2)
    .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-40)")

    // Y ticks
    const y2 = d3.scaleLinear()
    .domain([0, d3.max(r, d => d.count)])
    .range([teamHeight - 75, 0])

    const yAxisCall2 = d3.axisLeft(y2)
                        .ticks(12)
    g3.append("g").call(yAxisCall2)
    // Translates the Y ticks by 10 on x-axis to match the rest of the translate of the X ticks 
    .attr("transform", `translate(10, 0)`)

    var xScaleOri = x2.copy();
    var yScaleOri = y2.copy();

    const rects2 = g3.selectAll("rect").data(r)

    rects2.enter().append("rect")
    .attr("y", d => y2(d.count))
    .attr("x", (d) => x2(d.job_title))
    // Translates the bars by 10 on x-axis to match the rest of the translate of the X ticks 
    .attr("transform", `translate(10, 0)`)
    .attr("width", x2.bandwidth)
    .attr("height", d => (teamHeight - 75) - y2(d.count))
    .attr("fill", "grey")
    
    // function zoom(g3) {
    //     const extent = [[teamMargin.left, teamMargin.top], [teamWidth - teamMargin.right, teamHeight - teamMargin.top]];
        
    //     g3.call(d3.zoom()
    //     .scaleExtent([1, 8])
    //     .translateExtent(extent)
    //     .extent(extent)
    //     .on("zoom", zoomed));

    //     function zoomed(event) {
    //         x2.range([teamMargin.left, teamWidth - teamMargin.right].map(d => event.transform.applyX(d)));
    //         g3.selectAll("rect").attr("x", d => x2(d.job_title)).attr("width", x2.bandwidth());
    //         g3.call(xAxisCall2);
        
    //     }
    // }

// Plot 3
const width1 = 800;
const height1 = 600;
let teamMarginP = {top: 10, right: 30, bottom: 30, left: 60},
    teamWidthP = width1 - teamMarginP.left - 100 - teamMarginP.right,
    teamHeightP = height1 - 200 - teamMarginP.top - teamMarginP.bottom;


const g5 = svg.append("g")
    .attr("width", teamWidthP + teamMarginP.left + teamMarginP.right)
    .attr("height", teamHeightP + teamMarginP.top + teamMarginP.bottom)
    .attr("transform", "translate(" + teamMarginP.left + "," + teamMarginP.top + ")");

// Define scales
let xScale = d3.scaleLinear()
    .domain([1, 3]) // Assuming experience levels from 1 to 3
    .range([0, teamWidthP])

    console.log("jobSal", jobSalary)
let yScale = d3.scaleLinear()
    .domain([0, d3.max(jobSalary, d => d.salary)])
    .range([teamHeightP, 0]);

var xScaleOri = xScale.copy();
var yScaleOri = yScale.copy();

// Draw axes 

// X-axis
var xAxis = d3.axisBottom(xScale).ticks(6);
var yAxis = d3.axisLeft(yScale);

var axisG = g5.append('g');
const axisXG = axisG.append("g")
            .attr("transform", "translate(1100," + 410 + ")")
            .call(xAxis);

//Y-axis
const axisYG = axisG.append("g")
            .attr("transform", "translate(1100," + 50 + ")")              
            .call(yAxis);

// X-axis label
g5.append("text")
    .attr("x", 1410)
    .attr("y", 460)
    .style("text-anchor", "middle")
    .text("Experience Level");

// Y-axis lavel
g5.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 1020)
    .attr("x", -teamHeightP + 135)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Salary (USD)");

// X-axis title
g5.append("text")
    .attr("x", 1410)
    .attr("y", 20)
    .style("text-anchor", "middle")
    .text("Different Data Job Types Salary vs Experience Level Parallel Plot");

    

// Draw lines

Object.entries(jobs).forEach(([jobType, data, i]) => {
    var lines = d3.line()
        .x(d => xScale(d.experienceLevel))
        .y(d => yScale(d.salary));

    var dataLine = g5.append("path")
    // g5.append("path")
        .classed("data-line", true)        
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", () => {
            // Assign different colors to different job types
            if (jobType === "DE") return "steelblue";
            else if (jobType === "DS") return "#F72C25";
            else if (jobType === "DA") return "#2A2C24";
            else if (jobType === "ML") return "#F7C548";
        })
        .attr("d", lines)
        .attr("transform", `translate(1100, 50)`);


        // Legend
        g5.append("circle")
            .attr("cx", 800)
            .attr("cy", 40)
            .attr("r", 6)
            .style("fill", "steelblue")      

        g5.append("circle")
            .attr("cx",800)
            .attr("cy",70)
            .attr("r", 6)
            .style("fill", "#F72C25")        
        
        g5.append("circle")
            .attr("cx",800)
            .attr("cy",100)
            .attr("r", 6)
            .style("fill", "#2A2C24")    
            
        g5.append("circle")
            .attr("cx",800)
            .attr("cy",130)
            .attr("r", 6)
            .style("fill", "#F7C548")        

        g5.append("text")
            .attr("x", 820)
            .attr("y", 40)
            .text("Data Engineer")
            .style("font-size", "16px")
            .attr("alignment-baseline","middle")      
            
        g5.append("text")
            .attr("x", 820)
            .attr("y", 70)
            .text("Data Scientist")
            .style("font-size", "16px")
            .attr("alignment-baseline","middle")        

        g5.append("text")
            .attr("x", 820)
            .attr("y", 100)
            .text("Data Analyst")
            .style("font-size", "16px")
            .attr("alignment-baseline","middle") 
            
        g5.append("text")
            .attr("x", 820)
            .attr("y", 130)
            .text("Machine Learning Engineer")
            .style("font-size", "16px")
            .attr("alignment-baseline","middle")        

        // Pan & Zoom
        // Define a zoom function
        const zoom = d3.zoom()
            .scaleExtent([1, 8]) // Set the scale extent
            .on("zoom", zoomed); // Specify the zoom event handler

        // Call the zoom function on the SVG element
        g5.call(zoom)
            .call(zoom.transform, d3.zoomIdentity.translate(1100, 50));

        // Define the zoomed function
        function zoomed() {

            // Get the current zoom transform
            var t = d3.event.transform;

            // Apply the zoom transformation to all data line elements
            g5.selectAll(".data-line")
                .attr("transform", t);

            axisXG.call(xAxis.scale(t.rescaleX(xScaleOri))); 
            axisYG.call(yAxis.scale(t.rescaleX(yScaleOri))); 

        }      
    }); 

}).catch(function(error){
    console.log(error);
}); 

