from django.urls import path
from .views import lista_postagens_diario, cria_postagem_diario, cria_viagem

urlpatterns = [
    path('viagens/criar/', cria_viagem, name='cria_viagem'),
    path('diario/', lista_postagens_diario, name='lista_postagens_diario'),
    path('diario/criar/', cria_postagem_diario, name='cria_postagem_diario')
]

