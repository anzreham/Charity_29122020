# Generated by Django 3.1.4 on 2020-12-23 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('charityApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='charitylocation',
            name='charity_id',
        ),
        migrations.AddField(
            model_name='charitylocation',
            name='charity',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='charityApp.charity'),
            preserve_default=False,
        ),
    ]
