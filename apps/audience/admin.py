from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from .models import Audience

admin.site.register(Audience,ImportExportModelAdmin)