# Generated by Django 3.1 on 2023-11-03 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_remove_pessoa_cpf'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pessoa',
            name='pais',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='viagem',
            name='pais',
            field=models.CharField(max_length=50),
        ),
    ]