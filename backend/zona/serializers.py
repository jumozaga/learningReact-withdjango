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
    name = serializers.CharField(max_length=100)
    population = serializers.IntegerField()
    photo = serializers.ImageField()
    
    def validate_name(self, value):
        if Estado.objects.filter(name=value).exists():
            raise serializers.ValidationError("Estado já existe")
        elif len(value) < 3:
            raise serializers.ValidationError("Nome do estado muito curto")
        return value
    
    def validate_population(self, value):
        if value < 1000:
            raise serializers.ValidationError("População muito pequena")
        return value


   