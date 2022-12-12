import "jspdf-autotable";
import jsPDF from "jspdf";

const printUSers = (json) => {
  const pdf = new jsPDF("landscape", "pt", "a4");
  const columns = [
    "Id",
    "name",
    "email",
    "phone",
    "isAdm",
    "createdAt",
    "updatedAt",
    "emails",
    "phones",
  ];
  let rows = [];
  let phonesRows = [];

  for (let i = 0; i < json.length; i++) {
    let emailsRows = "";
    let phonesRows = "";
    let temp = [
      json[i].id,
      json[i].name,
      json[i].email,
      json[i].phone,
      json[i].isAdm,
      json[i].createdAt,
      json[i].updatedAt,
      json[i].userEmails,
      json[i].userPhones,
    ];
    json[i].userEmails.forEach((element) => {
      emailsRows += `${element.email};`;
      console.log(element.email);
    });
    json[i].userPhones.forEach((element) => {
      phonesRows += `${element.phone};`;
    });
    rows.push(temp);
  }
  pdf.text(235, 40, "Tabela de usuários");
  pdf.autoTable(columns, rows, {
    startY: 65,
    theme: "grid",
    styles: {
      font: "times",
      halign: "center",
      cellPadding: 3.5,
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      textColor: [0, 0, 0],
    },
    headStyles: {
      textColor: [0, 0, 0],
      fontStyle: "normal",
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fillColor: [166, 204, 247],
    },
    alternateRowStyles: {
      fillColor: [212, 212, 212],
      textColor: [0, 0, 0],
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    rowStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    tableLineColor: [0, 0, 0],
  });

  pdf.save("pdf");
};

export default printUSers;
