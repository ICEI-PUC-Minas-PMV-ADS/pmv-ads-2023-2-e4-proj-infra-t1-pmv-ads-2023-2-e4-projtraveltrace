# Generated by Django 3.1 on 2023-09-30 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Planejamento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ano', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Viagem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pais', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('data_inicio', models.DateField()),
                ('data_fim', models.DateField()),
                ('descricao', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='PlanejamentoViagem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('planejamento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.planejamento')),
                ('viagem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.viagem')),
            ],
        ),
        migrations.AddField(
            model_name='planejamento',
            name='viagens',
            field=models.ManyToManyField(through='core.PlanejamentoViagem', to='core.Viagem'),
        ),
    ]