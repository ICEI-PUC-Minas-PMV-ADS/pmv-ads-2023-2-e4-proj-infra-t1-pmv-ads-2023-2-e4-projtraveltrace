from django.urls import path
from .views import lista_postagens_blog, cria_postagem_blog, cria_viagem

urlpatterns = [
    path('viagens/criar/', cria_viagem, name='cria_viagem'),
    path('blog/', lista_postagens_blog, name='lista_postagens_blog'),
    path('blog/criar/', cria_postagem_blog, name='cria_postagem_blog')
]

