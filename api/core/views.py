from django.shortcuts import render, redirect
from .models import Viagem, PostagemBlog, Viagem
from .forms import ViagemForm, PostagemBlogForm

def cria_viagem(request):
    """
    Visualização para criar uma nova viagem.
    """
    if request.method == 'POST':
        form = ViagemForm(request.POST)
        if form.is_valid():
            viagem = form.save()
            return redirect('lista_viagens')  # Redireciona para a lista de viagens após a criação
    else:
        form = ViagemForm()
    return render(request, 'viagens/cria_viagem.html', {'form': form})

def cria_postagem_blog(request):
    """
    Visualização para criar uma nova postagem de blog.
    """
    if request.method == 'POST':
        form = PostagemBlogForm(request.POST)
        if form.is_valid():
            postagem = form.save(commit=False)
            postagem.autor = request.user  # Define o autor da postagem como o usuário atualmente logado
            postagem.save()
            return redirect('lista_postagens_blog')  # Redireciona para a lista de postagens do blog após a criação
    else:
        form = PostagemBlogForm()
    return render(request, 'blog/cria_postagem.html', {'form': form})

def lista_postagens_blog(request):
    """
    Visualização para listar todas as postagens de blog.
    """
    postagens = PostagemBlog.objects.all().order_by('-data_publicacao')
    return render(request, 'blog/lista_postagens.html', {'postagens': postagens})