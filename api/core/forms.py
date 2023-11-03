from django import forms
from .models import Pessoa, Viagem, DiarioViagens

class ViagemForm(forms.ModelForm):
    """
    Formulário para criar ou editar uma viagem.
    """
    class Meta:
        model = Viagem
        fields = ['pais', 'cidade', 'data_inicio', 'data_fim', 'descricao', 'valor']
        widgets = {
            'data_inicio': forms.DateInput(attrs={'type': 'date'}),
            'data_fim': forms.DateInput(attrs={'type': 'date'}),
        }


class DiarioViagensForm(forms.ModelForm):
    """
    Formulário para criar ou editar uma postagem de blog.
    """
    class Meta:
        model = DiarioViagens
        fields = ['titulo', 'conteudo']