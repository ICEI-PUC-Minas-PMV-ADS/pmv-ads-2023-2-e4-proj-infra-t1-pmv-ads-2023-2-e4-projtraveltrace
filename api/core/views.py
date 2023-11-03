from rest_framework import viewsets
from django.shortcuts import render, redirect
from .models import CustomUser, Viagem, DiarioViagens
from .serializer import CustomUserSerializer, ViagemSerializer, DiarioViagensSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from rest_framework.decorators import authentication_classes, permission_classes

@authentication_classes([])
@permission_classes([])
class CustomUserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        user = CustomUser.objects.get(username=serializer.validated_data['username'])
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

class ViagemViewSet(viewsets.ModelViewSet):
    """Exibindo todas as viagens"""
    queryset = Viagem.objects.all()
    serializer_class = ViagemSerializer

class DiarioViewSet(viewsets.ModelViewSet):
    """Exibindo todos os posts do Diário de viagens"""
    queryset = DiarioViagens.objects.all()
    serializer_class = DiarioViagensSerializer