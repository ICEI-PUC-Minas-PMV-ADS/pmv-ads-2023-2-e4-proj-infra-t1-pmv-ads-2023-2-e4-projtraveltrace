from django.contrib import admin
from .models import Viagem, DiarioViagens, CustomUser

admin.site.register(CustomUser)

class ViagensAdmin(admin.ModelAdmin):
    list_display = ('id', 'pais', 'cidade', 'data_inicio', 'data_fim', 'descricao', 'valor')
    list_display_links = ('id',)

admin.site.register(Viagem, ViagensAdmin)

class PostsViagensAdmin(admin.ModelAdmin):
    list_display = ('id', 'autor', 'conteudo', 'data_publicacao')
    list_display_links = ('id',)  

admin.site.register(DiarioViagens, PostsViagensAdmin)

