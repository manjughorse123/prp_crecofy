from django.contrib import admin
from . import models
from import_export.admin import ImportExportModelAdmin
# Register your models here.
admin.site.register(models.Organization,ImportExportModelAdmin)
