from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.models import AbstractUser

from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Campos padrão do Django (username, email, etc)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set', 
        related_query_name='user',
        blank=True,
        verbose_name='groups',
        help_text='The groups this user belongs to.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        related_query_name='user',
        blank=True,
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
    )
    password = models.CharField(max_length=128)  # Adiciona um campo de senha

    def save(self, *args, **kwargs):
        if not self.pk:
            self.set_password(self.password)  # Configura a senha usando set_password
        super().save(*args, **kwargs)



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
     
    pais = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    data_inicio = models.DateField()
    data_fim = models.DateField()
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=10, decimal_places=2, default=1000.00)

class DiarioViagens(models.Model):
    """
    Modelo para representar uma postagem do Diário.

    Campos:
    - autor: A pessoa logada que vai postar.
    - titulo: O título da postagem.
    - conteudo: O conteúdo da postagem.
    - data_publicacao: A data de publicação da postagem.
    """
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    data_publicacao = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.titulo

