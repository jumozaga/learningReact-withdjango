# Generated by Django 4.1.2 on 2022-10-12 01:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('zona', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('population', models.CharField(max_length=100)),
                ('photo', models.URLField(max_length=255)),
                ('regiao', models.ForeignKey(blank='False', null='False', on_delete=django.db.models.deletion.CASCADE, related_name='estados', to='zona.regiao')),
            ],
        ),
    ]