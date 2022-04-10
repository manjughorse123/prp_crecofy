from django.contrib import admin
from . import models
# Register your models here.
from import_export.admin import ImportExportModelAdmin
admin.site.register(models.Member,ImportExportModelAdmin)
