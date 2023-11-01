from django.contrib import admin
from .models import Viagem, PostagemBlog

class Viagens(admin.ModelAdmin):
    list_display = ('id', 'pais', 'cidade', 'data_inicio', 'data_fim', 'descricao', 'valor')
    list_display_links = ('id')

admin.site.register(Viagem, Viagens)

class PostagensBlog(admin.ModelAdmin):
    list_display = ('id', 'autor', 'conteudo', 'data_publicacao', 'imagem')
    list_display_links = ('id')

admin.site.register(PostagemBlog, PostagensBlog)


