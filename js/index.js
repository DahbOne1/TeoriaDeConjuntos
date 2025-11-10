function parseSet(str) {
    return new Set(
      str.split(",").map(s => s.trim()).filter(s => s !== "")
    );
  }

  function operate(type) {
    const setA = parseSet(document.getElementById("setA").value);
    const setB = parseSet(document.getElementById("setB").value);

    let resultSet = new Set();
    let operationName = "";

    switch (type) {
      case "union":
        resultSet = new Set([...setA, ...setB]);
        operationName = "Unión (A ∪ B)";
        break;
      case "intersection":
        resultSet = new Set([...setA].filter(x => setB.has(x)));
        operationName = "Intersección (A ∩ B)";
        break;
      case "differenceAB":
        resultSet = new Set([...setA].filter(x => !setB.has(x)));
        operationName = "Diferencia (A - B)";
        break;
      case "differenceBA":
        resultSet = new Set([...setB].filter(x => !setA.has(x)));
        operationName = "Diferencia (B - A)";
        break;
      case "symmetric":
        resultSet = new Set([...setA, ...setB].filter(x => !(setA.has(x) && setB.has(x))));
        operationName = "Diferencia Simétrica (A Δ B)";
        break;
      case "cartesian":
        resultSet = new Set([...setA].flatMap(a => [...setB].map(b => `(${a},${b})`)));
        operationName = "Producto Cartesiano (A × B)";
        break;
    }

    const resultArray = [...resultSet];
    document.getElementById("result").textContent = `{ ${resultArray.join(", ")} }`;
    document.getElementById("operation").textContent = `Operación: ${operationName}`;
    document.getElementById("cardinality").textContent = `Cardinalidad: ${resultSet.size}`;

    drawVenn(setA, setB, type);
  }

  function drawVenn(A, B, type) {
    const canvas = document.getElementById("vennCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const circleA = { x: 110, y: 100, r: 60 };
    const circleB = { x: 190, y: 100, r: 60 };

    ctx.globalAlpha = 0.4;
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(circleA.x, circleA.y, circleA.r, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.arc(circleB.x, circleB.y, circleB.r, 0, 2 * Math.PI);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#111827";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("A", circleA.x - 30, circleA.y);
    ctx.fillText("B", circleB.x + 30, circleB.y);

    if (type === "intersection") {
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(150, 100, 30, 0, 2 * Math.PI);
      ctx.fill();
    }
  }