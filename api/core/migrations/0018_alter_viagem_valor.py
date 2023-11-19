# Generated by Django 4.2.7 on 2023-11-04 16:54

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_alter_viagem_valor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='viagem',
            name='valor',
            field=models.DecimalField(decimal_places=2, default=10000, max_digits=10, validators=[django.core.validators.MinValueValidator(0.01)]),
            preserve_default=False,
        ),
    ]