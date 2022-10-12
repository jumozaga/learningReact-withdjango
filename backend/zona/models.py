from unittest.util import _MAX_LENGTH
from django.db import models

class Regiao(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    value = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, blank=False, null=False)

    #def __str__(self):
     #   return self.nome
class Estado(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    population = models.CharField(max_length=100, null=False, blank=False)
    photo = models.URLField(max_length=255, blank=False, null=False)
    regiao = models.ForeignKey(
        to=Regiao,
        on_delete=models.CASCADE,
        related_name='estados',
        null="False",
        blank="False"
    )

    #def __str__(self):
     #   return self.nome