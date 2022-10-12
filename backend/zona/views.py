from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import(
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
    )

from zona.models import Estado, Regiao
from zona.serializers import (
    RegiaoSerializer,
    CadastrarEstadoSerializer,
    EstadoSerializer,
    )


class RegiaoApiView(APIView):
    def get(self, request, format=None):
        regioes = Regiao.objects.all()
        serializer = RegiaoSerializer(regioes, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    
class CadastrarEstadoApiView(APIView):
    def post(self, request, id, format=None):
        regiao = get_object_or_404(Regiao, id=id)
        serializer = CadastrarEstadoSerializer(data=request.data)
        if serializer.is_valid():
            estado = Estado(
                name=serializer.validated_data.get('name'),
                regiao=regiao,
                population=serializer.validated_data.get('population'),
                photo=serializer.validated_data.get('photo')        
            )
            estado.save()
            estado_serializer = EstadoSerializer(estado, many=False)
            return Response(
                estado_serializer.data,
                status=HTTP_201_CREATED
                )
        return Response(
            { "message": "Erro ao cadastrar estado",
              "errors": serializer.errors 
            },
            status=HTTP_400_BAD_REQUEST
            )

    
    