export function createTable(data) {
    const div = document.createElement("div");

    const firstTable = document.createElement("div");
    firstTable.classList.add("first-table");

    const secondTable = document.createElement("div");
    secondTable.classList.add("second-table");

    function generateTable(tableData) {
        const table = document.createElement("table");

        tableData.forEach(({ label, value }) => {
            const tr = document.createElement("tr");

            const tdLabel = document.createElement("td");
            tdLabel.textContent = label;

            const tdValue = document.createElement("td");

            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    const a = document.createElement("a");
                    a.href = "#";
                    a.textContent = item;
                    tdValue.appendChild(a);

                    if (index < value.length - 1) {
                        tdValue.appendChild(document.createTextNode(", "));
                    }
                });
            } else {
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = value;
                tdValue.appendChild(a);
            }

            tr.appendChild(tdLabel);
            tr.appendChild(tdValue);
            table.appendChild(tr);
        });

        return table;
    }

    // Разбиваем полученные данные на две части
    const firstTableData = data.slice(0, Math.ceil(data.length / 2));
    const secondTableData = data.slice(Math.ceil(data.length / 2));

    firstTable.appendChild(generateTable(firstTableData));
    secondTable.appendChild(generateTable(secondTableData));

    div.appendChild(firstTable);
    div.appendChild(secondTable);

    return div;
};
