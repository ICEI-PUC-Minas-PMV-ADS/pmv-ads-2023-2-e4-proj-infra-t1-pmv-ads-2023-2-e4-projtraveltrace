from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField

class Viagem(models.Model):
    """
    Modelo para representar uma viagem.

    Campos:
    - pais: O país da viagem.
    - cidade: A cidade da viagem.
    - data_inicio: A data de início da viagem.
    - data_fim: A data de término da viagem.
    - descricao: Uma roteiro do que deseja fazer na viagem.
    - valor: O valor estimado da viagem.
    """
     
    pais = CountryField()
    cidade = models.CharField(max_length=50)
    data_inicio = models.DateField()
    data_fim = models.DateField()
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=10, decimal_places=2, default=1000.00)

class PostagemBlog(models.Model):
    """
    Modelo para representar uma postagem de blog.

    Campos:
    - autor: O autor da postagem (relacionado ao modelo User).
    - titulo: O título da postagem.
    - conteudo: O conteúdo da postagem.
    - data_publicacao: A data de publicação da postagem.
    - imagem: Uma imagem associada à postagem (opcional).
    """

    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    data_publicacao = models.DateTimeField(auto_now_add=True)
    imagem = models.ImageField(upload_to='blog_images/', null=True)


    def __str__(self):
        return self.titulo

