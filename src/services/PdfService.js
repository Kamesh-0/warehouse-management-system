import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportProductsToPDF = (products) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Warehouse Management System", 14, 20);

    doc.setFontSize(12);
    doc.text("Product Report", 14, 30);

    autoTable(doc, {
        startY: 40,
        head: [[
            "ID",
            "Product Name",
            "Category",
            "Quantity",
            "Price"
        ]],
        body: products.map(product => [
            product.id,
            product.productName,
            product.category,
            product.quantity,
            product.price
        ])
    });

    doc.save("Products_Report.pdf");
};

export const exportSuppliersToPDF = (suppliers) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Warehouse Management System", 14, 20);

    doc.setFontSize(12);
    doc.text("Supplier Report", 14, 30);

    autoTable(doc, {
        startY: 40,
        head: [[
            "ID",
            "Supplier",
            "Company",
            "Email",
            "Phone"
        ]],
        body: suppliers.map(supplier => [
            supplier.id,
            supplier.supplierName,
            supplier.companyName,
            supplier.email,
            supplier.phone
        ])
    });

    doc.save("Suppliers_Report.pdf");
};

export const exportInventoryToPDF = (inventory) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Warehouse Management System", 14, 20);

    doc.setFontSize(12);
    doc.text("Inventory Report", 14, 30);

    autoTable(doc, {
        startY: 40,
        head: [[
            "ID",
            "Product",
            "Transaction",
            "Quantity",
            "Date"
        ]],
        body: inventory.map(item => [
            item.id,
            item.productName,
            item.transactionType,
            item.quantity,
            item.date
        ])
    });

    doc.save("Inventory_Report.pdf");
};