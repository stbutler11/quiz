async function fetchSheetsData(sheetId) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=0`;
    const response = await fetch(url);
    const text = await response.text();
    const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const data = JSON.parse(jsonStr);
    const [headerRow, ...dataRows] = data.table.rows;
    return dataRows.map(row => {
        return row.c.reduce( (rowObject, cell, index) => {
            rowObject[headerRow.c[index].v] = cell.v;
            return rowObject;
        }, {});
    });
}

let questions;
let currentIndex = -1;

export async function nextQuestion() {
    if (!questions) {
        const params = new URLSearchParams(window.location.search);
        // Example id: "1E36mdN3BrEyWW2ZpqRcOslHCFUXOvmETXSVnGokrsu4"
        questions = await fetchSheetsData(params.get("id"));
    }
    currentIndex++;
    if (currentIndex >= questions.length) { // TODO end the quiz
        currentIndex = 0;
    }
    return questions[currentIndex];
}