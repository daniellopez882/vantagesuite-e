# Copyright (c) 2013, Daniel Lopez and contributors
# For license information, please see license.txt


from VantageSuite.selling.report.sales_analytics.sales_analytics import Analytics


def execute(filters=None):
	return Analytics(filters).run()

