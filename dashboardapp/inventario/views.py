from django.shortcuts import render

# Importamos http
from django.http import HttpResponse 

# Hola mundo
def hola_mundo(request):
    return HttpResponse('Hola mundo')


# Create your views here.
