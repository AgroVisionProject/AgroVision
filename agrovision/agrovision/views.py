"""
File: views.py
Description: Manges views for the app
Author: Matthew Bayles
Date: 4-12-2023
"""
from gettext import NullTranslations
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.conf.urls.static import static
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.http import JsonResponse
import base64
import re
import json
from django.http import FileResponse
import traceback
import uuid
from django.core.files import File
from django.conf import settings
import os
import numpy as np
import json
import json as js
import sys
import time
import sys
import shutil
import math
from datetime import datetime
from agrovision.utils.nc_analyzer import NCAnalyzer as nca

@csrf_protect
def index(request):
    context = {}
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)


def get_data(request):
    request_json = js.loads(request.body)
    print(request_json)
    net = nca()
    net.get_nc_data(request_json["variable"])
    yearly_stat = net.run_stat("average")
    return JsonResponse({"response": yearly_stat})
