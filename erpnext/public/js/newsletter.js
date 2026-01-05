// Copyright (c) 2019, Daniel Lopez and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Newsletter", {
	refresh() {
		VantageSuite.toggle_naming_series();
	},
});

