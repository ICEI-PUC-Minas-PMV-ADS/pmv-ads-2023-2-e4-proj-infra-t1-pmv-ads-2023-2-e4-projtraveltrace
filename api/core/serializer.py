from rest_framework import serializers
from core.models import Viagem, DiarioViagens, CustomUser
from django.contrib.auth.models import User

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password')

    extra_kwargs = {
        'password': {'write_only': True}
    }

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ViagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viagem
        fields = ['pais', 'cidade', 'data_inicio', 'data_fim', 'descricao', 'valor']

class DiarioViagensSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiarioViagens
        fields = ['autor', 'titulo', 'conteudo', 'data_publicacao']