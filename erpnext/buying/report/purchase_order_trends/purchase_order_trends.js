// Copyright (c) 2015, Daniel Lopez and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Purchase Order Trends"] = $.extend({}, VantageSuite.purchase_trends_filters);

frappe.query_reports["Purchase Order Trends"]["filters"].push({
	fieldname: "include_closed_orders",
	label: __("Include Closed Orders"),
	fieldtype: "Check",
	default: 0,
});

