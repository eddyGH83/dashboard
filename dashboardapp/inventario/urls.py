from django.urls import path

# importamos las vistas
from . import views # el . indica que se importa de la misma carpeta

urlpatterns = [
    path('hola/', views.hola_mundo, name='hola_mundo'), # La url base
]
