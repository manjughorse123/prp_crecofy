from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from apps.receipts.models import (Article, OrderLine, Product,
                             ProductCategory, Store, Payment,)

from apps.receipts.models.order import Purchase


admin.site.register(Article,ImportExportModelAdmin)
admin.site.register(OrderLine,ImportExportModelAdmin)
admin.site.register(Product,ImportExportModelAdmin)
admin.site.register(ProductCategory,ImportExportModelAdmin)
admin.site.register(Store,ImportExportModelAdmin)
admin.site.register(Payment,ImportExportModelAdmin)

