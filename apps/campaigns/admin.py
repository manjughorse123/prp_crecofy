from django.contrib import admin
from .models import Campaign
from import_export.admin import ImportExportModelAdmin

# Register your models here.
admin.site.register(Campaign,ImportExportModelAdmin)