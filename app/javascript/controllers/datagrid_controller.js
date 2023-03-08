import { Controller } from "@hotwired/stimulus";
import Handsontable from "handsontable";

// Connects to data-controller="datagrid"
export default class extends Controller {
  static targets = ["container", "autosave"];
  connect() {
    this.csv = JSON.parse(this.data.get("data"));
    console.log(this.csv);

    this.hot = new Handsontable(this.containerTarget, {
      data: this.csv,
      rowHeaders: true,
      colHeaders: true,
      height: "auto",
      licenseKey: "non-commercial-and-evaluation", // for non-commercial use only
      afterChange: function (change, source) {
        if (source === "loadData") {
          return; //don't save this change
        }

        if (!autosave.checked) {
          return;
        }

        fetch(`http://localhost:3000/examples/${id}/save_csv`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // rails csrf token
            "X-CSRF-Token": document
              .querySelector('meta[name="csrf-token"]')
              .getAttribute("content"),
          },
          // This is the one row that is changed.
          // So you need to update that specific row in your active storage file.
          // Unless multiple were changed at once maybe?
          body: JSON.stringify({ data: change }),
        }).then((response) => {
          exampleConsole.innerText = `Autosaved (${change.length} cell${
            change.length > 1 ? "s" : ""
          })`;
          console.log(
            "The POST request is only used here for the demo purposes"
          );
        });
      },
    });
  }

  download() {
    const exportPlugin = this.hot.getPlugin("exportFile");
    exportPlugin.downloadFile("csv", {
      bom: false,
      columnDelimiter: ",",
      columnHeaders: false,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: "csv",
      filename: "Handsontable-CSV-file_[YYYY]-[MM]-[DD]",
      mimeType: "text/csv",
      rowDelimiter: "\r\n",
      rowHeaders: true,
    });
  }
}
