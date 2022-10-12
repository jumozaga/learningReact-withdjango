from rest_framework import serializers
from zona.models import Estado, Regiao


class RegiaoSerializer(serializers.ModelSerializer):
   class Meta:
       model = Regiao
       fields ='__all__'

class EstadoSerializer(serializers.Serializer):
    class Meta:
        model = Estado
        fields = '__all__'

class CadastrarEstadoSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, null=False, blank=False)
    population = serializers.CharField(max_length=100, null=False, blank=False)
    photo = serializers.URLField(max_length=255, blank=False, null=False)
    regiao = serializers.CharField(max_length=100, null=False, blank=False)



   