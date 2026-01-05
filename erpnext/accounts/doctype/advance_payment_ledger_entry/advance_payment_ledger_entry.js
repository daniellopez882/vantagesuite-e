// Copyright (c) 2024, Daniel Lopez and contributors
// For license information, please see license.txt

frappe.ui.form.on("Advance Payment Ledger Entry", {
	refresh(frm) {
		frm.set_currency_labels(["amount"], frm.doc.currency);
		frm.set_currency_labels(["base_amount"], VantageSuite.get_currency(frm.doc.company));
	},
});

