# Generated by Django 3.1 on 2023-11-02 16:14

from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_remove_diarioviagens_imagem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pessoa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('pais', django_countries.fields.CountryField(max_length=2)),
                ('cidade', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('senha', models.CharField(max_length=128)),
                ('cpf', models.CharField(max_length=14, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='diarioviagens',
            name='autor',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.pessoa'),
            preserve_default=False,
        ),
    ]