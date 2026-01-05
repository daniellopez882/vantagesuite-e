// Copyright (c) 2015, Daniel Lopez and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Sales Order Trends"] = $.extend({}, vantagesuite-e.sales_trends_filters);

frappe.query_reports["Sales Order Trends"]["filters"].push({
	fieldname: "include_closed_orders",
	label: __("Include Closed Orders"),
	fieldtype: "Check",
	default: 0,
});

