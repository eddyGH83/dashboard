from django.db import models

# Create your models here.

# Modelo categoria
class Categoria(models.Model):
    nombre = models.CharField(max_length=50, unique=True)


# Enumeracion de unidades
class ProductUnits(models.TextChoices):
    UNIT = 'u', 'Unidades'
    KILOGRAM = 'kg', 'Kilogramos'
    LITER = 'lt', 'Litros'
    METER = 'mt', 'Metros'

# Modelo Producto
class Producto(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE) # Relacion uno a muchos, on_delete hace un borrado en cascada
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=105, decimal_places=2)
    unidades = models.CharField(
        max_length=50,
        choices=ProductUnits.choices,
        default=ProductUnits.UNIT,
    )
    disponibilidad = models.BooleanField(default=True, blank=True) #  Campo booleano
    create = models.DateTimeField(auto_now_add=True) # Fecha de creacion
    update = models.DateTimeField(auto_now=True) # Fecha de actualizacion
