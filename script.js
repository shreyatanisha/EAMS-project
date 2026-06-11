// Dummy actions for quick actions buttons
function action(name) {
    alert("Action: " + name);
  }
  
  // Initialize Chart.js example
  window.onload = function () {
    const ctx = document.getElementById("performanceChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4"],
        datasets: [
          {
            label: "Your Rating",
            data: [3.8, 4.1, 4.0, 4.2],
            borderColor: "#2980b9",
            backgroundColor: "rgba(41,128,185,0.2)",
            fill: true,
          },
          {
            label: "Department Avg",
            data: [4.0, 4.0, 4.1, 4.1],
            borderColor: "#27ae60",
            backgroundColor: "rgba(39,174,96,0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            suggestedMin: 3.0,
            suggestedMax: 5.0,
          },
        },
      },
    }
  );
  };