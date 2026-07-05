import * as XLSX from "xlsx";

export const exportProductsToExcel = (products) => {
  const worksheet = XLSX.utils.json_to_sheet(products);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  XLSX.writeFile(workbook, "Products_Report.xlsx");
};

export const exportSuppliersToExcel = (suppliers) => {
  const worksheet = XLSX.utils.json_to_sheet(suppliers);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Suppliers");
  XLSX.writeFile(workbook, "Suppliers_Report.xlsx");
};

export const exportInventoryToExcel = (inventory) => {
  const worksheet = XLSX.utils.json_to_sheet(inventory);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
  XLSX.writeFile(workbook, "Inventory_Report.xlsx");
};